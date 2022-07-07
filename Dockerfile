FROM node:16.13.1 AS builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4000
CMD ["node", "dist/main.js"]