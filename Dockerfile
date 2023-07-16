FROM node:18

WORKDIR /usr/src/app

#copy the react app to the container
COPY . .

# #prepare the contiainer for building react 

ENV NODE_TLS_REJECT_UNAUTHORIZED=0
RUN set NODE_TLS_REJECT_UNAUTHORIZED=0
RUN npm config set strict-ssl false --global
RUN npm set strict-ssl false --global

RUN npm install

ENV NODE_ENV production

RUN npm run build

RUN apt-get update && apt-get install -y

CMD ["npm", "start"]

EXPOSE 3000