FROM node:16.16.0-alpine3.16

WORKDIR /StartUpBus
COPY package*.json ./
RUN npm install i npm@latest -g

USER node
COPY . .

EXPOSE 4000

CMD ["node", "/StartUpBus/server.js"]