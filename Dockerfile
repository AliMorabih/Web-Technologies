# Use a lightweight web server as a parent image
FROM nginx:alpine
# This will Copy the contents of webpage to the default Nginx web root
COPY . /usr/share/nginx/html
