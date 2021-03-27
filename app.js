const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello Felipe Cavalcante! RM 339128')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
