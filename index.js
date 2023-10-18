const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser');
const port = 5000;

// Setting folder views
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'src/view'))

// Configurasi dan gunakan library
app.use(express.urlencoded({ extended: false}))
app.use(bodyParser.urlencoded({ extended: true }));

//routing
app.get('/', home)
app.get('/contact', contact)
app.get('/detail', detail)
app.get('/deleteblog/:id', deleteBlog)
app.get('/edit-blog/:id', editBlog)
app.post('/updateblog/:id', updateBlog)
app.get('/addproject', addproject)
app.post('/addproject', addblog)
app.get('/testimonial', mytestimoni)

//get static file atau assets
app.use(express.static('src/assets'))

//local server
app.listen(port, () => {
    console.log("App listening at port 5000");
})

//dummy data 
const blogs = [
    {
        project_name: "Dummy",
        start_date: "1 oktober 2023",
        end_date: "25 desember 2023",
        technologies: "Node Js",
        postedAt: new Date(),
        description: "ini coba coba, Template engines handle the task of interpolating data into HTML code while providing some features (like partials in EJS) that would have been difficult to replicate by concatenating strings."
    },
    {
        project_name: "Dummy 2",
        start_date: "5 oktober 2023",
        end_date: "30 desember 2023",
        technologies: "React Js",
        postedAt: new Date(),
        description: "ini coba coba, Template engines handle the task of interpolating data into HTML code while providing some features (like partials in EJS) that would have been difficult to replicate by concatenating strings."
    }
]

// Gunakan routes yang telah didefinisikan
function home(req, res) {
    res.render('home', {
        title: "Jodi Adrian - Home Page"
    })
}

function contact(req, res) {
    res.render('contact-me', {
        title: "Contact-Page"
    })
}

function mytestimoni(req, res) {
    res.render('mytestimoni')
}

function detail(req, res) {
    res.render('project-detail', {
        blogs,
        title: "Detail-Page"
    })
}

function addproject(req, res) {
      res.render('addproject')
}

function addblog(req, res) {
    const {project_name, start_date, end_date, description, technologies, postedAt} = req.body

    const data = {
        project_name,
        start_date,
        end_date,
        description,
        technologies,
        postedAt: new Date()
    }

    blogs.unshift(data)
    console.log(blogs)

    res.redirect('/detail')
}

function deleteBlog(req, res) {
    const { id } = req.params
    console.log(id);

    blogs.splice(id, 1)
    res.redirect('/detail')

}

function editBlog(req, res) {
    const id = parseInt(req.params.id)
    const data = blogs[id]
    res.redirect('/edit-blog', {data})
}

function updateBlog(req, res) {
    const id = parseInt(req.params.id)
    const updateData = req.body; 

    const blog = blogs[id];
    if (blog) {
        blog.project_name = updateData.project_name;
        blog.start_date = updateData.start_date;
        blog.end_date = updateData.end_date;
        blog.description = updateData.description;
        blog.technologies = updateData.technologiesl

        res.redirect('/detail')
    }
}


