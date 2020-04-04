# Communication Between node.js socket and client server using Docker Compose File 

Docker is great tool for managing and deploying microservices which can be used either on development or deployment. Here we explain how two docker compose file communicate with each other in development.

## Getting Started

there are Two directories which contain node.js server and client socket.
run docker compose command for both of the directories.

the socket client connects to server and sends random number and socket server saves them in redis key-value database.
here, you can find docker networks, volumes and multi containers

```
git clone https://gitlab.com/mahsaghazi/two-docker-composefile.git
cd two-docker-composefile

cd Docker-socket-server
docker-compose up --build

cd Docker-socket-client 
docker-compose up --build

```

## Author

* **Mahsa Ghazi**


