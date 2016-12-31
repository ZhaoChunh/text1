/**
 * Created by hasee on 2016/12/18.
 */

var express = require('express');
var app=express();
var router = express.Router();
router.use(express.static(_dirname));

router.get('/echarts', function (req,res) {
    res.sendFile('/');

})
app.use(['/index','/index.html'],router);
app.listen(3001);