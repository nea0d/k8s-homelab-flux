#!/usr/bin/env bash
set -e

usage="$(basename "$0") [-h] [-c CRD] [-n NAMESPACE] [-r RELEASE_NAME]
Add missing helm ownership to custom ressource definition
where:
    -h  show this help text
    -c  crd name (e.g helm.cattle.io)
    -n  release namespace
    -r  release name"

# constants
options=':hc:n:r:'
while getopts $options option; do
  case "$option" in
    h) echo "$usage"; exit;;
    c) CRD=$OPTARG;;
    n) NAMESPACE=$OPTARG;;
    r) RELEASE_NAME=$OPTARG;;
    :) printf "missing argument for -%s\n" "$OPTARG" >&2; echo "$usage" >&2; exit 1;;
   \?) printf "illegal option: -%s\n" "$OPTARG" >&2; echo "$usage" >&2; exit 1;;
  esac
done

# mandatory arguments
if [ ! "$CRD" ] || [ ! "$NAMESPACE" ] || [ ! "$RELEASE_NAME" ]; then
  echo "arguments -c, -n and -r must be provided"
  echo "$usage" >&2; exit 1
fi

kubectl get crd | egrep $CRD | cut -f 1 -d ' ' > /tmp/crds
cat /tmp/crds | xargs -i kubectl annotate crd {} app.kubernetes.io/managed-by=Helm meta.helm.sh/release-name=$RELEASE_NAME meta.helm.sh/release-namespace=$NAMESPACE
cat /tmp/crds | xargs -i kubectl label crd {} app.kubernetes.io/managed-by=Helm
rm -rf /tmp/crds
flux suspend hr $RELEASE_NAME -n $NAMESPACE
flux resume hr $RELEASE_NAME -n $NAMESPACE
