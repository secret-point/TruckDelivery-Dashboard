# build step
FROM node:16.15.0-alpine as build
WORKDIR /docker-dist
COPY package.json package-lock.json ./
RUN npm install
COPY ./src/ ./src/
COPY ./public/ ./public/
COPY index.html ./
COPY vite.config.js ./
RUN npm run build

# release step
FROM nginx:1.22.1-alpine as release
COPY --from=build /docker-dist/dist /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

