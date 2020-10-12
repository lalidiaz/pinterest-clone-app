FROM node:12.18-alpine
ENV NODE_ENV production

WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm config set unsafe-perm true
RUN npm install --production --silent
#RUN npm install -g pm2 --silent
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]