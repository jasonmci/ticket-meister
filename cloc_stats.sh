#!/bin/sh
cloc . --exclude-dir=node_modules
cloc . --exclude-dir=node_modules --json > cloc.json

graphiteHost=ec2-35-90-12-71.us-west-2.compute.amazonaws.com
graphitePort=8125
repoName=ticketmeister

languages=("JavaScript" "TypeScript" "GraphQL")

for lang in ${languages[@]}
do
  echo $lang

  nFiles=`cat cloc.json | jq -r ".${lang}.nFiles"`
  blank=`cat cloc.json | jq -r ".${lang}.blank"`
  comment=`cat cloc.json | jq -r ".${lang}.comment"`
  code=`cat cloc.json | jq -r ".${lang}.code"`

  echo "${repoName}.${lang}.code:${code}|g" | nc -w 1 -u ${graphiteHost} ${graphitePort}
  echo "${repoName}.${lang}.comment:${comment}|g" | nc -w 1 -u ${graphiteHost} ${graphitePort}
  echo "${repoName}.${lang}.blank:${blank}|g" | nc -w 1 -u ${graphiteHost} ${graphitePort}
  echo "${repoName}.${lang}.files:${nFiles}|g" | nc -w 1 -u ${graphiteHost} ${graphitePort}

done