var express= require('express');
var superagent = require('superagent');

var router = express.Router();
//express body-parser swig iconv-lite bluebird request

router.post('/*',(req,res,next)=>{
        // var apiURL = 'http://www.beidouchaxun.cn:8280/api/librarywallet/info?token=c7a1577248b36eff1bbf774faacf3aa9';

        // var apiURL = 'http://www.beidouchaxun.cn:8280/api/librarywallet/info?token='+req.originalUrl;
        // var apiURL = 'http://www.beidouchaxun.cn:8280'+req.originalUrl;
        var apiURL='http://www.beidouchaxun.cn:8280'+req.url

        // var apiURL = 'http://121.43.165.81:8888'+req.originalUrl;
   console.log(apiURL)
    if(req.headers.cookie){
        var ServerCookie = req.headers.cookie;
    }
    const data=req.body;
    console.log(apiURL,data)
    console.log(req.url)
    superagent
        .post(apiURL)
        .type('form')
        .accept('json')
        .send(data)
        .set('X-API-Key', 'foobar')
        .set('Accept', 'application/json')
        .set('Cookie', ServerCookie)
        .end(function(reqe,rese){
            try{
                // console.log(rese,reqe)
                if(rese.ok) {
                    if (rese.headers && rese.headers['set-cookie']) {
                        var Cookies = {};
                        rese.headers['set-cookie'][0].split(';').forEach(l => {
                            var parts = l.split('=');
                            Cookies[parts[0].trim()] = (parts[1] || '').trim();
                        });
                        res.cookie('app_sid', Cookies.app_sid)
                    }
                    if(rese.body){
                        res.json(rese.body)
                    }
                }else{
                    res.json({msg:'请求异常',code:'911',text:rese.text})
                }
            }catch (e){
                // console.log(e)
                res.json({msg:'您请求的地址可能不存在',code:'119',text:rese ? rese.text :'地址错误'})

            }

        });
});
router.get('/*',(req,res,next)=>{

        // var apiURL = 'http://www.beidouchaxun.cn:8280/api/librarywallet/info?token=c7a1577248b36eff1bbf774faacf3aa9';
    // var apiURL = 'http://www.beidouchaxun.cn:8280/api/librarywallet/info?token='+req.originalUrl;
    // var apiURL = 'http://www.beidouchaxun.cn:8280'+req.originalUrl;
    var apiURL='http://www.beidouchaxun.cn:8280'+req.url
    console.log(apiURL)
    if(req.headers.cookie){
        var ServerCookie = req.headers.cookie;
    }
    const data=req.body;
    superagent
        .get(apiURL)
        .accept('json')
        .send(data)
        .set('X-API-Key', 'foobar')
        .set('Accept', 'application/json')
        .end(function(reqe,rese){
            try {
                if (rese.ok) {
                    if (rese.headers && rese.headers['set-cookie']) {
                        var Cookies = {};
                        rese.headers['set-cookie'][0].split(';').forEach(l => {
                            var parts = l.split('=');
                            Cookies[parts[0].trim()] = (parts[1] || '').trim();
                        });
                        res.cookie('app_sid', Cookies.app_sid)
                    }
                    if (rese.body) {
                        res.json(rese.body)
                    }
                } else {
                    res.json({msg: '请求异常', code: '911', text: rese.text})
                }
            }catch (e){
                // console.log(e)
                res.json({msg:'您请求的地址可能不存在',code:'119',text:rese.text})

            }
        });
});
module.exports = router;