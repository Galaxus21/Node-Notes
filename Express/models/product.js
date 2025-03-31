const fs = require('fs')
const path = require('path')

const rootDir = require('../helper/path')

const p = path.join(rootDir, 'data', 'products.json');

function getProductsFromFile(cb){
    fs.readFile(p,(err,fileContent)=>{
        if (err){
            return cb([]);
        }
        cb(JSON.parse(fileContent.toString()));
    })
}


module.exports = class Product{
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save(){
        getProductsFromFile(products=>{
            products.push(this)
            fs.writeFile(p, JSON.stringify(products),(err)=>{
                console.log(err)
            })

        })
    }

    static fetchAll(cb){
        getProductsFromFile(cb)
    }

}