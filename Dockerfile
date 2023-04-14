# Use a lightweight web server as a parent image
FROM nginx:alpine
# Copy the contents of your webpage to the default Nginx web root
COPY . /usr/share/nginx/html