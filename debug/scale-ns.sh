#!/usr/bin/env bash
set -e

usage="$(basename "$0") [-h] [-s SCALE] [-n NAMESPACE]
Scale all deployments in a namespace
where:
    -h  show this help text
    -s  scale number
    -n  namespace"

# constants
options=':hs:n:'
while getopts $options option; do
  case "$option" in
    h) echo "$usage"; exit;;
    s) SCALE=$OPTARG;;
    n) NAMESPACE=$OPTARG;;
    :) printf "missing argument for -%s\n" "$OPTARG" >&2; echo "$usage" >&2; exit 1;;
   \?) printf "illegal option: -%s\n" "$OPTARG" >&2; echo "$usage" >&2; exit 1;;
  esac
done

# mandatory arguments
if [ ! "$SCALE" ] || [ ! "$NAMESPACE" ]; then
  echo "arguments -s and -n must be provided"
  echo "$usage" >&2; exit 1
fi

kubectl scale deploy -n $NAMESPACE --replicas=$SCALE --all
