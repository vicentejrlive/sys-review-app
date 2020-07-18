FROM node:latest

ENV HOME=/app
RUN mkdir /app

COPY api/package.json $HOME

WORKDIR $HOME
RUN npm i -g @adonisjs/cli && npm install

CMD ["npm", "start"]