#!/bin/bash

CONTAINER=`docker ps | grep mygear_mariadb | awk '{print $1}'`
docker exec $CONTAINER sh -c 'exec mysqldump --routines -h 127.0.0.1 -P 3306 -u admin -padministrator mygear' > dump.sql

# ssh user@host "mysqldump --single-transaction -uusername -hlocalhost -ppassword --databases wildcrafter_dev" > /home/user/sqlfile.sql
