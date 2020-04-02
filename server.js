const fs = require('fs');
const path = require('path')
const express = require('express');
const cors = require('cors');
const port = 8000;

const audiopath = './audio'
const basePath = './audio'

const app = express()
app.use(express.json({limit: '100mb'}));
app.use(cors());


const sourceSearch = (acc, val) => {
  if (val.isDirectory()) acc.push(`${basePath}/${val.name}`)
  return acc
}

app.get('/api', (req, res) => {
  // fs.readdir(basePath, {withFileTypes: true}, (err, files) => {
  //   res.json(files.filter(file => file.isDirectory()).map(file => `${basePath}/${file.name}`));
  // })
  fs.readdir(basePath, {withFileTypes: true}, (err, files) =>{
    res.json(files.reduce(sourceSearch, []))
  })
})

app.post('/api', (req, res) => {
  fs.readdir(basePath, {withFileTypes: true}, (err, files) => {
    if (files.reduce(sourceSearch, []).includes(req.body.source)) {
      fs.readFile(`${req.body.source}/recognition.json`, (err, data) => {
        if (err) {
          res.status(404).send(`${req.body.source}/recognition.json does not exist`)
        } else {
          res.json(JSON.parse(data));
        }
      })
    }
  })
})

app.post('/edit', (req, res) => {
  //console.log(req.body)
  fs.readdir(req.body.source, (err, data) => {
    if (data.includes("recognition.backup.json")) {
      fs.writeFile(`${req.body.source}/recognition.json`, JSON.stringify(req.body.voices, null, 4), {encoding: "utf8"}, (err) => {
        fs.readFile(`${req.body.source}/recognition.json`, (err, data) => {
          if (err) {
            res.status(500)
          } else {
            res.json(JSON.parse(data));
          }
        })
        if (err) console.log(err)
        else console.log("saved")
      });
    } else {
      fs.readFile(`${req.body.source}/recognition.json`, (err, data) => {
        fs.writeFile(`${req.body.source}/recognition.backup.json`, data, {encoding: "utf8"}, (err) => {
          if (err) console.log(err)
          else console.log("backuped")
          fs.writeFile(`${req.body.source}/recognition.json`, JSON.stringify(req.body.voices, null, 4), {encoding: "utf8"}, (err) => {
            fs.readFile(`${req.body.source}/recognition.json`, (err, data) => {
              if (err) {
                res.status(500)
              } else {
                res.json(JSON.parse(data));
              }
            })
            if (err) console.log(err)
            else console.log("saved")
          });
        });
      });
    }
  });
})

app.get('/audio', (req, res) => {
  res.sendFile(path.join(__dirname, req.query.audio))
})

app.use(express.static('dist'));

app.listen(port, (req, res) => {
  console.log(`server is running at localhost:${port}`);
})
