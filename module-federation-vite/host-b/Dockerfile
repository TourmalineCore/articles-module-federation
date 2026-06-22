FROM node:22.18-alpine3.21 AS build
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.26.0-alpine3.19-slim
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /dist /usr/share/nginx/html/host-b
EXPOSE 80
