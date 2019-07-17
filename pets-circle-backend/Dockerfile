FROM node:8.11.4
ENV NODE_ENV development
WORKDIR /usr/src/app
COPY ["package.json","package-lock.json*","npm-shrinkwrap.json*", "./"]
RUN npm install
COPY . .
EXPOSE 1337
CMD npm run start