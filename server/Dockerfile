FROM node:alpine

RUN mkdir -p /user/app/testnodejs-server
WORKDIR /user/app/testnodejs-server

COPY package*.json /user/app/testnodejs-server

RUN npm install 

COPY . /user/app/testnodejs-server

EXPOSE 4000 

CMD ["npm", "start"]
