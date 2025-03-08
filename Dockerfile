FROM docker.io/library/nginx:stable

# Create directory for frontend
WORKDIR /app
RUN mkdir -p /app/frontend

# Copy frontend files to nginx serve directory
WORKDIR /app/frontend
COPY frontend/ ./
COPY frontend/ /usr/share/nginx/html/

# Configure nginx to listen on port 3000 instead of default 80
RUN echo 'server {\n\
    listen 3000;\n\
    server_name localhost;\n\
    location / {\n\
        root /usr/share/nginx/html;\n\
        index index.html index.htm;\n\
    }\n\
}' > /etc/nginx/conf.d/default.conf

# Expose port 3000
EXPOSE 3000

# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
