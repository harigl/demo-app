Install Node version v10.16.0 and mysql

Import the database and switch to your project folder and perform `npm install` on that folder

## For Running Server

Go through the following commands
cd PROJECT_FOLDER/src/server/
Edit .env file
PORT=3001 - Port on which app need to listen
JWT_SECRET='supertajneheslo' - JWT secret
CORS_DOMIANS='http://localhost:3000' - comma seperated list of domains where cros is need to be enabled
MYSQL_DB='demoApp'
MYSQL_USER_NAME='root'
MYSQL_PASSWORD=''
MYSQL_HOST='localhost'
MYSQL_PORT='3306'

### For Development

Go To npm run server
http://localhost:3001

## For Production

Install pm2 :- pm2 node index.js
And configure any webservice like appache or nginx to forward api domain to port 3001

## For Running client

Run the following commands
cd PROJECT_FOLDER/src/
edit .env file
Give the path of API
REACT_APP_API_URL=http://localhost:3001

## For Develpment

Run the following commands

npm start
http://localhost:3000
For Production
npm run build
this will create files in build folder in src/client/build
configure any webservice like appache or nginx with src/client/build as document for the webapp domain 
