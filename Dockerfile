FROM mongo:latest

### Timezone
ENV TZ=America/Sao_Paulo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone 

### Setup Database
COPY ./dbSetup.js /docker-entrypoint-initdb.d/dbSetup.js

EXPOSE 27017

