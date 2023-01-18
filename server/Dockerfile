
# use node alpine image
FROM node:alpine

# install pnpm globally
RUN npm i -g  pnpm

# Create working  directory
WORKDIR /usr/app

# only copy package.json to working directory
COPY ./package.json ./

# install all dependencies
RUN pnpm install

# copy all files 
COPY ./ ./

# build the project 
RUN pnpm build

# Start the server 
EXPOSE 4000
CMD ["pnpm", "start"]