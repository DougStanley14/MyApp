FROM node:14 as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npx ng build --configuration production

FROM nginx:alpine as final
COPY --from=build /app/dist/MyApp /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
