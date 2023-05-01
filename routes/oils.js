let express = require('express');
let router = express.Router();
const fs = require('fs');

//establishes a connection to the oils json db
const oils_file = './data/oils.json'


/* GET essential oil listing. */
router.get('/', (req, res, next) => {

  fs.readFile(oils_file, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);.
      res.status(500).send('There was a promblem reading the file')
      return;
    }
    res.json(JSON.parse(data));
  })
});

//GET a single essential oil
router.get('/:id', (req, res,) => {
  fs.readFile(oils_file, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('There was a promblem reading the file')
      return;
    }
    //this is to search and locate oil by oil ID.
    const oils = JSON.parse(data)
    const oil = oils.find(oil => oil.id === req.params.id)
    console.log(oils);
    console.log(req.params);
    res.json(oils);
  })
});

//POST a new oils
router.post('/', (req, res) => {
  fs.readFile(oils_file, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('There was a promblem reading the file')
      return;
    }
    //put the data in an array so we can push to it (JSON from is slightly diff.
    const oils = JSON.parse(data)
    const oil = {
      id: (oils_file.length + 1).toString(),
      name: req.body.name,
      usage_method: req.body.usage_method,
      botanical_name: req.body.botanical_name,
      description: req.body.description,
      benifits: req.body.benifits,
    };

  });
  oils.push(essentialOil);
  fs.writeFile(oils_file, JSON.stringify(oils), err => {
    if (err) {
      console.error(err);
      res.status(500).send('There was a promblem reading the file')
      return;
    }
    res.json(essentialOil);
  })
});



module.exports = router;
