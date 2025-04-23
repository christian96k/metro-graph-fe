# FASE DI BUILD
FROM node:20.11.1-slim AS build

# Impostazioni per caching npm e prestazioni
ENV NPM_CONFIG_LOGLEVEL=warn \
    NPM_CONFIG_CACHE=/npmcache \
    CI=true

# Crea la dir e imposta la working dir
WORKDIR /app

# Crea cache dir separata (può essere usata con --mount o volume)
RUN mkdir -p /npmcache

# Copia solo package* per cache layer
COPY package.json package-lock.json* ./

# Installa le dipendenze senza output extra e audit
RUN npm ci --prefer-offline --no-audit --progress=false

# Copia tutto il resto del progetto e builda
COPY . .
RUN npm run build

# FASE DI RUNTIME
FROM nginx:alpine

# Aggiunge dipendenze minime (se davvero servono, altrimenti puoi rimuovere)
RUN apk add --no-cache libxslt libxml2 expat

# Copia solo il risultato del build
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Espone la porta (configurala in base al tuo frontend se diversa)
EXPOSE 5173

CMD ["nginx", "-g", "daemon off;"]
