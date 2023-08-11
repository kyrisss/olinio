FROM node:lts

WORKDIR /web

COPY package.json ./web

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]