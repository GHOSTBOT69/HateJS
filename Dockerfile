FROM node:12.7.0-alpine

WORKDIR /app

COPY . .

RUN ["npm", "install"]

ENV BOT_TOKEN=<PUT_YOUR_TELEGRAM_TOKEN_BOT_HERE>

ENTRYPOINT ["npm", "start"]