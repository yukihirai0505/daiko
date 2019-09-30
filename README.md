## Deploy

```
$ now secret add mongodb-atlas-uri "your-mongodb-atlas-uri"

$ now secret add twitter-consumer-key
$ now secret add twitter-secret
$ now secret add twitter-access-token
$ now secret add twitter-user-secret
$ yarn deploy
```

## Local Development

Download
-> https://firebase.google.com/docs/admin/setup/

Generate new private key

move the json file to `src/credentials/server.js`

```
$ mv .env.sample .env
$ vi .env # edit environment variables
$ yarn start:dev
```
