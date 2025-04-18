FROM node:20.11.1-alpine3.19 AS build

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine

RUN apk update && apk upgrade && \
    apk add --no-cache \
    libxslt \
    libxml2 \
    expat && \
    apk fix

COPY --from=build /app/dist /usr/share/nginx/html 
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]
