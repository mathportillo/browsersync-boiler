# powerstats-admin
Administrador do Powerstats

## Dependencies
Node:

macOS
- run `brew install node`

debian/ubuntu
- run `sudo apt-get install nodejs`



## Install
- run `npm install`



## Run
- run `npm start`
- visit [localhost:8080](http://localhost:8080/)

### troubleshooting dev errors
`ENOENT`:
- run `npm install` to update modules

`EADDRINUSE`:
- another node instance may be using port 8080, run `killall node`
- if the error persist, run `lsof -n -iTCP:8080 | grep LISTEN` (or `sudo netstat -peanut | grep 8080` in linux) to find out who is using de port



## Production
- run `npm run bake`

### testing production
- run `npm run prod`
- visit [localhost:8080](http://localhost:8080/)
