FROM node:23-alpine
WORKDIR /usr/src/app
COPY package.json .
CMD ls
RUN npm install
COPY . .