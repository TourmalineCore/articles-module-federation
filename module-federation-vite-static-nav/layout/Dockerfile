FROM node:24-alpine AS build
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build:same-host

FROM nginx:1.26.0-alpine3.19-slim
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /dist /usr/share/nginx/html/layout
EXPOSE 80
