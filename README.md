# SeekAPI

## Development server

Run `yarn start` for a dev server. Navigate to `http://localhost:3001/`. 


## Running unit tests

Run `yarn test` to execute the unit tests via [Mocha](https://mochajs.org/) and [Chai](http://www.chaijs.com/).


## Production Server

Run `docker build  -t ks .` for build docker.
Run `docker run -d -it -p 3001:3001 ks` for run docker.
Navigate to `http://localhost:3001/`.
