const express = require('express')
const path = require('path')
const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, './public')));
app.get('*', (req, res) => {
  res.render('index.html')
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})