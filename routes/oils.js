let express= require('express');
let router = express.Router();
const fs =require('fs');
const {json} = require ('express')

const oils_file = './data/oils.json'

/*Get essential oil listings*/

router.get('/', function (req, res, next){
    fs.readFile(oils_file, 'utf-8',(err, data))
})

