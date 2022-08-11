FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/

RUN mkdir /var/www/html -p && touch /var/www/html/index.html

EXPOSE 8080

CMD [ "nginx", "-g", "daemon off;" ]