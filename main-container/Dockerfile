FROM node:slim

COPY ./package.json .

RUN npm install

COPY ./server.js .

CMD ["node", "server.js"]