#!/bin/bash

if [[ "$(docker images -q ensolvers-api-prod | grep -m 1 '')" == "" ]]; 
then
  docker-compose up --build --abort-on-container-exit prod 
else
  docker-compose up --abort-on-container-exit prod
fi;
