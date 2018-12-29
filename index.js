const express = require('express')
const fs = require('fs')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/faq', (req, res) => res.render('pages/faq', {data: JSON.parse(fs.readFileSync(path.join(__dirname, 'public/data', 'listFAQ.json'), 'utf8'))}))
  .get('/career', (req, res) => res.render('pages/career', {data: JSON.parse(fs.readFileSync(path.join(__dirname, 'public/data', 'listCareer.json'), 'utf8'))}))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
