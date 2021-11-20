var express = require('express');
var router = express.Router();
const axios = require('axios')
/* GET home page. */
console.log("helloooooo")
router.get('/', function(req, res, next) {

  
  const getGetHubData = async () => {
    try {
      return await axios.get('https://api.github.com/users/yashas1/repos?per_page=6&sort=asc&client_id=7709cf7c5fd2b86e2b5c&client_secret=1888471bddf43a1d4778b958626b0c8aa4daed97')
    } catch (error) {
      console.error(error)
    }
  }
  
  res.render('projects', { getGetHubData: getGetHubData });
});

module.exports = router;
