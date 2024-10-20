# web-designs
Web pages exercices 


## docker commands

### build image
docker build -t nginx-server -f  docker/dockerfile.dev .

### run container to dev
docker run -d --rm -p 8000:8000 --name web-pages -v  D:\Frank\Dev\web-designs\:/app nginx-server 