var express = require('express')
var app = express()

app.use(express.static('public'))

app.set('view engine', 'hbs')
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/login',(req,res) =>{
    res.render('login')
})



app.get('/search', (req, res) => {
    
}) 

const PORT = process.env.PORT || 5000
app.listen(PORT)
console.log("Loopian project is runnning at port 5000!!!")