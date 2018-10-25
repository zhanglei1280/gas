#!/bin/bash

N=$((${1:-10}-1))
i=1
echo "0"
while [ "$i" -le "$N" ]; do
  echo $((RANDOM % $((3*$N))))
  i=$(($i + 1))
done
echo "0"
