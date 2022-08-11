const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

app.get('/', (req,res) => {
    const mysql = require('mysql')
    const con = mysql.createConnection(config)
    
    con.query("INSERT INTO people(name) VALUES('Peter')");
      
    let query = 'SELECT name FROM people';
    con.query(query, (err, rows) => {
        if (err) throw err;
        console.log(rows);
        res.send(`<h1>Hello ${rows[0].name} !!!</h1>`);
    });
})

app.listen(port, "0.0.0.0", () => {
    console.log('Rodando na porta ' + port)
})