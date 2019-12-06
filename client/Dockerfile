FROM node:alpine

RUN mkdir -p /user/app/testnodejs-client
WORKDIR /user/app/testnodejs-client

COPY package*.json /user/app/testnodejs-client

RUN npm install 

COPY . /user/app/testnodejs-client

EXPOSE 3000

CMD ["npm", "start"]

