
make sure that your docker service is running
# build
run 
'docker-compose up --build'


# database

navigate to http://localhost:8080
- user: root
- password: rootpassword



# front
navigate to http://localhost:5000
user credential:
- email:tinah.andriamarosoa@gmail.com 
- password:Qwerty12345

# ps
if there is no default data ,just rerun the container
if something is going wrong
please remove file ./mysql-init-scripts/init.sql and rerun container

make sur that port 3307,8080,5000,8000 is not in used
if you change one of them,thenyou should verify 
- blogPost/src/config/index.ts
- blogPost/index.js
- blogPost/Dockerfile
- back/.env
- back/Dockerfile
- docker-compose.yml
