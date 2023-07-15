FROM node:18

WORKDIR /usr/src/app

#copy the react app to the container
COPY . .

# #prepare the contiainer for building react 
RUN npm install --production

RUN npm run build

RUN ["apt-get", "update"]

CMD ["npm", "start"]