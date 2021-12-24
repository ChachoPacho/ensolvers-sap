# Ensolvers SAP

## Requirements

- Docker: 20.10.11
- docker-compose: 1.29.2
- npm: 8.1.4
- node: 17.2.0

## Previous Steps

The application does not require any configuration modifications to be made. But if you still want to do any, consider editing `docker.compose.yml` and `config.js`

## Running

The `run.sh` file needs execution permissions. So, start running `make start` for the first time, and then you can run `run.sh` freely.
The dockers **DO NOT** stop when the script is exit, use `make stop`
