FROM node:8

# Create app directory
WORKDIR /usr/src/app/src

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# RUN pwd

RUN npm install
RUN npm install -g pm2
RUN npm install -g nodemon
RUN npm install -g grunt

ENV NODE_PATH /usr/src/app/src/node_modules/

# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 8080

# Create app directory
WORKDIR /usr/src/app/code