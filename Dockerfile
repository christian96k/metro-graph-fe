FROM node:20.11.1-alpine3.19 AS build

WORKDIR /app

# Copia solo i file necessari per le dipendenze (meno roba in cache layer)
COPY package.json package-lock.json* ./

# Usa npm ci per velocità e prevedibilità (richiede package-lock.json)
RUN npm ci --prefer-offline --no-audit --progress=false

# Ora copia tutto e builda
COPY . .
RUN npm run build

# Fase finale: solo contenuto buildato
FROM nginx:alpine

# Aggiorna + installa solo ciò che serve, in un unico layer
RUN apk add --no-cache libxslt libxml2 expat

# Copia solo i file prodotti dal build
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 5173
CMD ["nginx", "-g", "daemon off;"]
