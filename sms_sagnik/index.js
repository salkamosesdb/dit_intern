const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const port= process.env.PORT || 5000;

app.use(bodyparser.urlencoded({extended:false}));

app.use(bodyparser.json());

app.get('/',(req,res)=>
{
    res.send("Home");
});

const smsroute = require('./src/routes/sms.route');

app.use('/sms',smsroute);

app.listen(port,()=>
{
    console.log(`Express server is running at port ${port}`);
}); 