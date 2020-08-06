#!/usr/bin/env bash

if [ ! -d ./dev-certs ]
then
  mkdir -p ./dev-certs
fi

if [[ ! -e ./dev-certs/cert.pem ]]; then
  openssl req \
    -x509 -nodes -days 365 -newkey rsa:2048 \
    -subj '/C=US/ST=Arizona/L=Phoenix/CN=*.trilogy.com/O=Trilogy' \
    -keyout ./dev-certs/key.pem -out ./dev-certs/cert.pem
fi