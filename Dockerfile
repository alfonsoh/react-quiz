FROM node:alpine as builder

WORKDIR '/app'

# This copies the package.json file
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx

EXPOSE 80

COPY --from=builder /app/build /usr/share/nginx/html
