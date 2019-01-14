const express = require('express')
const fs = require('fs')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index', {
  services: JSON.parse(fs.readFileSync(path.join(__dirname, 'public/data', 'listServices.json'), 'utf8')),
  listImage: JSON.parse(fs.readFileSync(path.join(__dirname, 'public/data', 'listImages.json'), 'utf8')),
  listText : JSON.parse(fs.readFileSync(path.join(__dirname, 'public/data', 'listText.json'), 'utf8')),
  imageBox : JSON.parse(fs.readFileSync(path.join(__dirname, 'public/data', 'imageBox.json'), 'utf8')),
  listUserStory : JSON.parse(fs.readFileSync(path.join(__dirname, 'public/data', 'listUserStory.json'), 'utf8'))
  }))
  .get('/faq', (req, res) => res.render('pages/faq', {data: JSON.parse(fs.readFileSync(path.join(__dirname, 'public/data', 'listFAQ.json'), 'utf8'))}))
  .get('/career', (req, res) => res.render('pages/career', {data: JSON.parse(fs.readFileSync(path.join(__dirname, 'public/data', 'listCareer.json'), 'utf8'))}))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
