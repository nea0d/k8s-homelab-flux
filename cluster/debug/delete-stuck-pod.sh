#!/usr/bin/env bash

kubectl delete pod $2 --grace-period=0 --force --namespace $1
