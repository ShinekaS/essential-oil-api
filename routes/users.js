let express = require('express');
let router = express.Router();
const fs = require('fs');

//establishes a connection to the users json db
const users_file = './data/users.json'


/* GET users listing. */
router.get('/', (req, res, next) => {

  fs.readFile(users_file, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('There was a promblem reading the file')
      return;
    }
    res.json(JSON.parse(data));
  })
});

//GET a single user
router.get('/:id', (req, res,) => {
  fs.readFile(users_file, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('There was a promblem reading the file')
      return;
    }
    //this is to search and locate user by user ID.
    const users = JSON.parse(data)
    const user = users.find(user => user.id === req.params.id)
    console.log(user);
    console.log(req.params);
    res.json(user);
  })
});

//POST a new user
router.post('/', (req, res) => {
  fs.readFile(users_file, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('There was a promblem reading the file')
      return;
    }
    //put the data in an array so we can push to it (JSON from is slightly diff.
    const users = JSON.parse(data)
    const newUser = {
      id: (users_file.length + 1).toString(),
      first_name: req.body.name,
      last_name: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
    };

  });
  users.push(newUser);
  fs.writeFile(users_file, JSON.stringify(users), err => {
    if (err) {
      console.error(err);
      res.status(500).send('There was a promblem reading the file')
      return;
    }
    res.json(newUser);
  })
});



module.exports = router;
