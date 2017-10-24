# Mean Training

This repo is intended to be used as a baseline for the "MEAN" training at the UW-Parkside App Factory. However any and all may use it as a baseline Express-Node-Mongo boilerplate of sorts.

## Installation

To install this repo simply run:
`git clone https://github.com/aturingmachine/mean-training.git <dir name>`

Then: 

`cd <dir name>` 

`npm install`

`cp .env.example .env`

`npm run dev` or `npm start`

`npm run dev` will start the app using [nodemon](https://github.com/remy/nodemon) which will watch for changes in the code and automatically resart the application to make development easier.

`npm start` will just run the application, requiring restarts as changes are made.

### Description

The project is just a simple REST api over a single resource, `users` described as:

| Attribute     | Type          | Required|
| :-------------: |:-------------:| :-----:  |
| `name`      	| String 		| `true`  |
| `age`      	| Number        | `true`  |
| `email` 		| String        | `true`  |

##

It has 5 endpoints described as such:

All user endpoints are behind the `/api` endpoint.

#### `GET`
`/users` - returns a list of all users inside of an array called `data`.

`/users/:id` - where `:id` is the id of a `user` resource. The resource is then returned in JSON format.

#### `POST`
`/users` - Creates a new `user` resource based on the payload of the request.

#### `DELETE`
`/users/:id` - Delete a user resouce matching the `:id` specified.

#### `PUT`
`/users` - Update a user based on the payload of the request