FROM node:12

# Create app directory
WORKDIR /usr/src/app/src

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# RUN pwd

RUN npm install
RUN npm install mysql
RUN npm install mongodb
RUN npm install -g nodemon


ENV NODE_PATH /usr/src/app/src/node_modules/

# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 8080

# Create app directory
WORKDIR /usr/src/app/code