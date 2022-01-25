const mysql = require('mysql');
const express = require('express');
const app = express();
const port = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'senha@124',
  database: 'nodeserverapp',
};

const connection = mysql.createConnection(config);

const createTable = `CREATE TABLE IF NOT EXISTS people (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NULL,
  PRIMARY KEY (id))
ENGINE = InnoDB;`
connection.query(createTable);

const sql = `INSERT INTO people(name) values('Richard'),('Wesley')`;
connection.query(sql);

connection.end();

app.get('/', async(req, res) => {

  const connection = mysql.createConnection(config);
  
  const sql = `select * from people`;
  
  connection.query(sql, (error, results, fields) => {
    if (error) throw error;

    const result = `
    <h1>Full Cycle Rocks!</h1>
    <h3>People</h3>
    <ul>
      <li>${results.map(r=> r.name).join("</li><li>")}</li>
    </ul>
    `;
    res.send(result);
  });

});

app.listen(port, () => console.log(`Server is up and running in port ${port}`));