FROM node:23.8 AS builder
LABEL authors="Alkaiir"

RUN mkdir -p /app/
WORKDIR /app/

COPY ./package*.json /app/
RUN npm install

COPY . /app/
RUN npm run build

FROM nginx:1.27.3-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]