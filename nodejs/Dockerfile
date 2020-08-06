
FROM node:12.13-alpine

RUN apk update && apk add bash

ARG NODE_ENV=local
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN rm -rf node_modules && npm install --only=production

COPY . .

CMD ["node", "dist/apps/myemail/main"]