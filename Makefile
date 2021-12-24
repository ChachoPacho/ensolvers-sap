stop:
	docker-compose stop db prod

run-docker:
	chmod +x run-docker.sh && ./run-docker.sh

build-end: 
	cd backend; npm run build && cd ..; \
	if [ ! -d ./dist/ ]; \
	then \
		mkdir dist; \
	fi; \
	if [ ! -f ./dist/.env ]; \
	then \
		cp .env ./dist; \
	fi; \
	mv ./backend/dist ./dist/src \
	cp backend/package.json backend/nest-cli.json ./dist;

build-front:
		cp config.js frontend/src/common/env.js; \
		cd frontend; npm run build && cd ..; \
		mv frontend/build ./dist/src/client;

build:
	make build-end && make build-front; \
	cp -r backend/package-lock.json backend/node_modules ./dist;

run-build:
	chmod +x run-build.sh && ./run-build.sh;