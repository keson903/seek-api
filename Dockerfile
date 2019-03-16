FROM node:8.7.0-alpine

WORKDIR /app

COPY package.json /app

RUN yarn

COPY . /app

CMD ["yarn", "start"]

EXPOSE 3001