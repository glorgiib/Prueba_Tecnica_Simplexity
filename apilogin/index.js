const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
const options = {
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'admin',
        database: 'sitio'
    }
}

const knex = require('knex')(options);

app.get('/', (req, res) => {
    res.send('la aplicacion funciona correctamente');
});

app.get('/usuarios', (req, res) => {
    knex('usuarios')
    .select()
    .then((users) => {
        return res.json(users);
    })
    .catch((err) => {
        console.error(err);
        return res.json({success: false, message: 'An error occurred, please try again later.'});
    })
});

app.get('/usuarios/username/:username/password/:password', (req, res) => {
    const {username,password} = req.params;

    knex('usuarios')
    .select()
    .join("login","usuarios.username","=","login.username")
    .where("login.username","=",username)
    .where("login.password","=",password)
    .then((users) => {
        return res.json(users);
    })
    .catch((err) => {
        console.error(err);
        return res.json({success: false, message: 'An error occurred, please try again later.'});
    })
});


app.post('/usuarios', (req, res) => {
    const {username,password,email,telefono,nombre,apellido} = req.body;

    knex('login')
    .insert({username,password})
    .then((element) => {
        knex('usuarios')
        .insert({username,email,telefono,nombre,apellido})
        .then((users) => {
            console.log(users)
            return res.json({username,email,telefono,nombre,apellido});
        })
        .catch((err) => {
            console.error(err);
            return res.json({success: false, message: 'An error occurred, please try again later.'});
        })
    })
    .catch((err) => {
        console.error(err);
        return res.json({success: false, message: 'An error occurred, please try again later.'});
    })

    
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});