FROM node:10.16.3
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 4200
CMD npm run start