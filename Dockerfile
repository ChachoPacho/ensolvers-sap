FROM node:17-alpine3.12 AS development

WORKDIR /usr/src

COPY ./backend ./backend

RUN cd backend && npm install && npm run build

COPY ./frontend ./frontend
COPY ./config.js ./frontend/src/common/env.js

RUN cd frontend && npm install && npm run build

FROM node:17-alpine3.12 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY ./backend/package.json ./

RUN npm install --only=production

COPY --from=development /usr/src/backend/dist ./dist
COPY --from=development /usr/src/frontend/build ./dist/client

CMD ["node", "dist/main"]
