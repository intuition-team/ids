FROM node:erbium-alpine as build

WORKDIR /app

COPY . .

RUN yarn build

FROM nginx:alpine
COPY --from=build /app/brandbook/dist /usr/share/nginx/html

EXPOSE 80
