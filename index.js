const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', function(req, res){
  res.send({
    "courses": [
      "HTML",
      "CSS",
      "Docker",
      "OOP"
    ]
  })
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}