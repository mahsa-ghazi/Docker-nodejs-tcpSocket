FROM node:10

RUN mkdir /test_sample
WORKDIR /test_sample
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 2222
EXPOSE 6379

CMD [ "npm", "start" ]

