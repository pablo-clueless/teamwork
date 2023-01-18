FROM node:alpine
RUN npm install -g pnpm
WORKDIR /usr/app
COPY ./package.json ./
RUN pnpm install
COPY ./ ./
RUN pnpm build
EXPOSE 4173
CMD ["pnpm", "preview"]