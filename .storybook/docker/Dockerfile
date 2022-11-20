# Production enviroment
FROM nginx:latest
COPY ./storybook-static /app/
RUN echo "\ndaemon off;" >> /etc/nginx/nginx.conf
COPY .storybook/docker/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT ["nginx"]
