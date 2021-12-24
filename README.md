# Ensolvers SPA

## Requirements

- Docker: 20.10.11
- docker-compose: 1.29.2
- npm: 8.1.4
- node: 17.2.0

## Previous Steps

The application does not require any configuration modifications to be made. But if you still want to do any, consider editing `docker.compose.yml` and `config.js`

## Running

### Dockerized App

The script `run-docker.sh` prepares a Docker container with the app ready to be use. Just visit [http://localhost:3000](http://localhost:3000).
The `run-docker.sh` file needs execution permissions. So, start running `make run-docker` for the first time, and then you can run `run-docker.sh` freely.

> The dockers **DO NOT** stop when the script is exit, use `make stop`

### Build App

The script `run-build.sh` builds the app and runs it leaving it ready to be use. Just visit [http://localhost:3000](http://localhost:3000).
The `run-build.sh` file needs execution permissions. So, start running `make run-build` for the first time, and then you can run `run-build.sh` freely.

> The dockers **DO NOT** stop when the script is exit, use `make stop`

### Web App

Visit the [Heroku deployed version of the App](https://ensolvers-spa.herokuapp.com)
