const mongoose = require('mongoose');
const express = require('express');
const userSchema = require("./Users");

const app = express();
app.use(express.json());

var dbUrl = "mongodb+srv://EdwardPhilip:Wasd1324!@cluster0.xzzsr.mongodb.net/lab?retryWrites=true&w=majority"

app.get("/users", (req, res) => {
    userSchema.find({}, (err, user) => {
        res.send(user)
    })
})

app.post("/users", async (req, res) => {
    const user = new userSchema(req.body);
    await user.save((err) => {
        if(err)
        {
            console.log(err)
            res.send(err)
        }
        else
        {
            res.send(user)
        }
    });
})

mongoose.connect(dbUrl , { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if (err) {
        console.log('mongodb connected',err);
    }else{
        console.log('Successfully mongodb connected');
    }
})

app.listen(3000, () => console.log('Server running'))
