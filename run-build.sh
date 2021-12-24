#!/bin/bash

if [[ "$(docker ps -a -q -f name=ensolvers_sap_db | grep -m 1 '')" == "" ]]; 
then
  docker-compose up --build db && node dist/src/main;
else
  docker-compose up db && node dist/src/main;
fi;
