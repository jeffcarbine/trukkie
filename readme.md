# trukkie
### A simple food truck app that manages the truck's location as well as a simple loyalty program. Runs on Express, React/Redux and MongoDB.

## Installation

- Copy or fork the repo
- Turn on MongoDB with the command `mongod` (_If you don't have MongoDB on your computer, you can follow [these installation instructions](https://www.mongodb.org/downloads#production)_)
- `npm install`
- `npm run all`

## About this version
Currently, trukkie is in development. The app currently does nothing more than record the user's geolocation and write it to the database. The next steps for development are:
- Create ability to "close" the truck.
- Create user authentication for loyalty accounts.
- Create checks to only give loyalty points when within proximity of the truck, and limit giving points to a predetermined amount per time period.
- Make it look pretty.
