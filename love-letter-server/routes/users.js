const router = require('koa-router')()
const usersModel =require('../Model/Users')
const getMobile = require('../util/util')
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/getPublicNoitce', async function (ctx, next) {
    const res = await usersModel.find({})
        .sort({updateTime:-1})
        .exec( (err,doc)=>{
        if(doc){
            ctx.body=doc
        }
    })
})




router.post('/setPublicNoitce', function (ctx, next) {
    // get获取cxt.query
    //post获取 ctx.request.body
    let content =ctx.request.body.content;
    let users = new  usersModel(
            {
                name:Math.random().toString(36).substr(2),
                phone:getMobile(),
                content: content,
                updateTime:(new Date()).getTime()
            }
        );
    users.save( function (err) {
        if (err) {
            console.log(err);
            ctx.body={
                result:'失败'
            }
        }
    });
    ctx.body={
        result:users
    }
})

module.exports = router
