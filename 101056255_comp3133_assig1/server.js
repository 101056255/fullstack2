var express = require('express');
var mongoose = require('mongoose');
const bodyParser = require("body-parser");
const TypeDefs = require("./schema");
const Resolvers = require("./resolvers");
const { ApolloServer } = require("apollo-server-express");

const app = express();

var dbUrl = "mongodb+srv://EdwardPhilip:Wasd1324!@cluster0.xzzsr.mongodb.net/assignment1?retryWrites=true&w=majority"

mongoose.connect(dbUrl , { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if (err) {
        console.log('Failed connection: ',err);
    }else{
        console.log('Successfully connected to database');
    }
})

const server = new ApolloServer({
    typeDefs: TypeDefs.typeDefs,
    resolvers: Resolvers.resolvers
});

app.use(bodyParser.json());
server.applyMiddleware({ app });
app.listen({ port: 5000 }, () =>
    console.log("Server running at http://localhost5000/graphql"));
