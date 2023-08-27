build-server: 
	docker build ./backend -t node-server:1.0.0
build-client: 
	docker build ./frontend -t react-client:1.0.0 
npm:
	cd server/; npm install; cd ..; cd client/; npm install; cd ..;
run-client:
	docker container run -it --rm --name react-client -p  3000:3000 -d -v /app/node_modules -v ${shell pwd}/frontend:/app react-client:1.0.0 
run-server:
	docker container run -it --rm --name node-server -p  5000:5000 -d -v /app/node_modules -v ${shell pwd}/backend:/app node-server:1.0.0 
run: 
	docker-compose up -d;
down: 
	docker-compose down;
stop: 
	docker-compose down; docker container prune; docker image prune; docker volume prune;
server-logs: 
	docker logs --follow node-server;
client-logs: 
	docker logs --follow react-client;
reload: 
	docker-compose down; docker-compose up -d;
rebuild: 
	make stop; make run;