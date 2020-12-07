const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const { User } = require('./models/User')

const app = express();
const port = 5000

mongoose.connect('mongodb+srv://JeongminWoo:Wjd@ls1397@react-blog.nwndv.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post('/api/users/resgister', (req, res) => {

    // 회원 가입 할 때 필요한 정보들을 client에서 가져오면
    // 그것들을 DB에 넣어준다

    const user = new User(req.body);

    user.save((err, userInfo) => {
        if(err) return res.json ({ success: false, err})

        return res.status(200).json({
            success: true
        });
    });

    
})

app .listen(port, () => console.log('Example app listening on port ${port}!'));