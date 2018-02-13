require("dotenv").config();
const express = require('express');
const app = express();
const body = require('body-parser');
const authRoutes = require("./routes/auth");
const messagesRoutes = require("./routes/messages");
const db = require("./models");
const auth = require("./middleware/auth");
const messsage = require("./middleware/message");


app.use(body.json());
app.use(body.urlencoded({extended:true}));

app.get("/", function(req,res){
  res.json({message: "Make a POST requst to /api/auth/signup to signup"});
});

app.use('/api/users/:id/messages', auth.loginRequired, auth.ensureCorrectUser, messagesRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/messages', messsage.getMessages);

const PORT = 8081

app.listen(PORT, function(){
  console.log(`Server is listening on port ${PORT}`);
});