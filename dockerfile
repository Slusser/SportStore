FROM node:8.9.1

RUN mkdir -p /usr/src/sportstore

COPY dist /usr/src/sportstore/app

COPY authMiddleware.js /usr/src/sportstore
COPY data.js /usr/src/sportstore
COPY deploy-server.js /usr/src/sportstore/server.js
COPY deploy-package.json /usr/src/sportstore/package.json

WORKDIR /usr/src/sportstore

RUN npm install

EXPOSE 3000
EXPOSE 3500

CMD ["npm", "start"]