FROM node:13
WORKDIR /app
RUN npm install -g gatsby-cli
RUN gatsby new my-gatsby-project https://github.com/santosfrancisco/gatsby-starter-cv
EXPOSE 8000
WORKDIR /app/my-gatsby-project
CMD ["gatsby","develop","-H","0.0.0.0"]