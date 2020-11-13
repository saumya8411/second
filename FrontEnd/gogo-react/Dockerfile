#base image
FROM node:14.15.0-alpine

#copy all files from current directory to docker
COPY . /usr/src/app

WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
RUN npm install

EXPOSE 3000

# start app
CMD ["npm", "start"]