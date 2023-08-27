FROM node:18-alpine3.16

WORKDIR /app

COPY package*.json ./

RUN npm install 

RUN npm install -g nodemon

RUN npm install react-scripts@latest --force

RUN npm install --save-dev react-error-overlay@6.0.9 --force

COPY . .

CMD ["npm", "run", "dev"]