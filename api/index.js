const express = require('express');
const cors = require('cors');
const app = express();
const User = require('./models/User');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://admin:KqOYUhquxY1Xu9lg@cluster0.7s7kr4d.mongodb.net/?retryWrites=true&w=majority');

app.post('/register', async (req, res) =>{
    const {username, password} = req.body;
    try{
        const userDoc = await User.create({username, password});
        res.json(userDoc);
    }
    catch(err){
        res.status(400).json(err);
    }
    
})

app.listen(4000);

// 