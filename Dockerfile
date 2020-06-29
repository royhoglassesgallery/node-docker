FROM node:12

# Create app directory
WORKDIR /usr/src/app/src

# RUN pwd

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# RUN pwd

RUN npm install
RUN npm install -g nodemon

ENV NODE_PATH /usr/src/app/src/node_modules/

# RUN pwd
# RUN apt-get install -y node-dev
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
# COPY . .

EXPOSE 8080

# Create app directory
WORKDIR /usr/src/app/code

# RUN pwd
# CMD [ "nodemon", "server.js" ]