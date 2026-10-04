FROM node:22-slim

WORKDIR /app

COPY package.json package-lock.json ./
COPY client/package.json ./client/package.json
COPY server/package.json ./server/package.json
RUN npm ci

COPY server ./server
RUN npm run build -w server

EXPOSE 3001

# Run pending migrations against the external Postgres, then start the API.
CMD ["sh", "-c", "npm run db:migrate -w server && node server/dist/index.js"]
