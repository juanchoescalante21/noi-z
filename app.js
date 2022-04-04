const express = require('express')
const path = require('path');
const app = express();
const port = 3002;
const views = path.join(__dirname,'views')
app.use(express.static('public'))

app.get('/',(req,res) => res.sendFile(path.join(views, 'home.html')));
app.get('/ensayos',(req,res) => res.sendFile(path.join(views, 'ensayos.html')));
app.get('/integrantes',(req,res) => res.sendFile(path.join(views, 'integrantes.html')));
app.get('/presentaciones',(req,res) => res.sendFile(path.join(views, 'presentaciones.html')));



app.listen(port, () => console.log('Server ON: Port ' + port))