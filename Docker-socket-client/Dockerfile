FROM node:10

RUN mkdir /test_client
WORKDIR /test_client
COPY package*.json ./
COPY . .
RUN npm install
CMD [ "npm", "start" ]

