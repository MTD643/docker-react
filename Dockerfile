#Multi-step build

#step 1: builder phase
FROM node:alpine AS builder

WORKDIR '/app'

COPY package.json .
RUN npm install
COPY . .
RUN npm run build

#step 2: run phase
#files live in: /app/build

FROM nginx
#--from references a different phase
COPY --from=builder /app/build /usr/share/nginx/html

#nginx runs by default