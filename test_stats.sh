#!/bin/sh
graphiteHost=ec2-35-90-12-71.us-west-2.compute.amazonaws.com
graphitePort=8125
repoName=ticketmeister

numPassedTests=`cat api-results.json | jq -r ".numPassedTests"`
numFailedTests=`cat api-results.json | jq -r ".numFailedTests"`
numPendingTests=`cat api-results.json | jq -r ".numPendingTests"`

echo "${repoName}.api.PassedTests:${numPassedTests}|g" | nc -w 1 -u ${graphiteHost} ${graphitePort}
echo "${repoName}.api.FailedTests:${numFailedTests}|g" | nc -w 1 -u ${graphiteHost} ${graphitePort}
echo "${repoName}.api.PendingTests:${numPendingTests}|g" | nc -w 1 -u ${graphiteHost} ${graphitePort}

numPassedTests=`cat web-results.json | jq -r ".numPassedTests"`
numFailedTests=`cat web-results.json | jq -r ".numFailedTests"`
numPendingTests=`cat web-results.json | jq -r ".numPendingTests"`

echo "${repoName}.web.PassedTests:${numPassedTests}|g" | nc -w 1 -u ${graphiteHost} ${graphitePort}
echo "${repoName}.web.FailedTests:${numFailedTests}|g" | nc -w 1 -u ${graphiteHost} ${graphitePort}
echo "${repoName}.web.PendingTests:${numPendingTests}|g" | nc -w 1 -u ${graphiteHost} ${graphitePort}