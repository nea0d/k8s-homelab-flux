#!/usr/bin/env bash

kubectl describe -n $1 helmrelease/$2
