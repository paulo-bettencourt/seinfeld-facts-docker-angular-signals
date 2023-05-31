# Stage 1: Build the Angular app
FROM node:18-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install --legacy-peer-deps
RUN npm run build

# Stage 2: Create the production image
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY dist/seinfeld-facts-docker-angular-signals /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
