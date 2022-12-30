#!/usr/bin/env bash

kubectl scale deploy -n $1 --replicas=$2 --all
