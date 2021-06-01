const express = require('express');
const path = require('path');
const hbs = require('hbs')
const port = process.env.PORT || 3000; // if 8000 is already used than it use another port number

const app = express();
const staticPath = path.join(__dirname, "../public");

const template_path = path.join(__dirname, "../templates/views");

const partials_path = path.join(__dirname, "../templates/partials");

// to Set View Engine
app.set('view engine', 'hbs');

app.set('views', template_path);
hbs.registerPartials(partials_path);

app.use(express.static(staticPath));

app.get('/', (req,res)=>{
    res.render("index");
});

app.get('/about', (req,res)=>{
    res.render("about");
});

app.get('/weather', (req,res)=>{
    res.render("weather");
});

app.get('*', (req,res)=>{
    res.render("404error", {
        errorMsg: 'Opps! Page Not Found'
    });
});

app.listen(port, ()=>{
    console.log(`use port number ${port}`);
});