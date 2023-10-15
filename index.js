const express = require('express')
const path = require('path')
const app = express()
const port = 5000;

//setup to call hbs
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'src/view'))

//parcing
app.use(express.urlencoded({ extended: false}))

//routing
app.get('/', home)
app.get('/contact', contact)
app.get('/addproject', addproject)
app.post('/addproject', addblog)
app.get('/testimonial', mytestimoni)

//get static file atau assets
app.use(express.static('src/assets'))

//local server
app.listen(port, () => {
    console.log("Server listening on port 5000");
})

function home(req, res) {
    res.render('home')
}
function contact(req, res) {
    res.render('contact-me')
}
function addproject(req, res) {
    res.render('addproject')
}
function mytestimoni(req, res) {
    res.render('mytestimoni')
}
function addblog(req, res) {
    const {project_name, start_date, end_date, description, technologies} = req.body
    console.log(project_name);  
    console.log(start_date);  
    console.log(end_date);  
    console.log(description);
    console.log(technologies);
}
