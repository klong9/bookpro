const express = require('express');
const app = express();
//接收post请求时，处理参数
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//设置允许跨域访问该服务.
// app.all('*', function (req, res, next) {
// res.header('Access-Control-Allow-Origin', '*');
// //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
// res.header('Access-Control-Allow-Headers', 'Content-Type');
// res.header('Access-Control-Allow-Methods', '*');
// res.header('Content-Type', 'application/json;charset=utf-8');
// next();
// });
// 购买的书籍id，数量，不用传价格，后端处理，数组[{id:1002,count:2},]
app.post('/api/buy', function (req, res) {
    console.log('req', req.body);

    res.json({
        code: 'Y',
        message: '购买成功',
        userCode: 1002,
        roletype: 'developer',
        // res:req
    })
})

app.get('/api/books', function (req, res) {
    res.json({
        info: [
            {
                bookName: '追风筝的人',
                author: '卡勒德·胡赛尼',
                price: 1.8,
                imgUrl:'http://5b0988e595225.cdn.sohucs.com/images/20190303/f688b16173584e32afe9717a1947c3bd.jpeg',
               des:'为你，千千万万遍。”我想，小说描写了一种最为诚挚的情感，而且它让你相信有些东西依然存在。在这个没有人相信承诺的年代，让人再次看到承诺背后那些美丽复杂的情感。这是一本好看的书，它让你重新思考',
                otherPrice: [
                    {
                        platform: '淘宝',
                        price:3
                    },
                     {
                        platform: '拼多多',
                        price:2
                    },
                     {
                        platform: '京东',
                        price:2.3
                    },
                      {
                        platform: '当当',
                        price:2.4
                    },
                ],
                id:1001
            },
             {
                bookName: '解忧杂货店',
                author: '东野圭吾',
                price: 3,
                imgUrl:'http://5b0988e595225.cdn.sohucs.com/images/20190303/f18c33cccd044d3381bbc7f062ee8b84.jpeg',
               des:'对于东野来说，这是一本温柔的小书。可能也只有东野，能把看似这么多温柔美好的小故事，巧妙精致地联接起来，读到最后一分钟，才恍悟原来前后都是有必然联系的。人生如此奇妙，不好好过又对得起谁',
                otherPrice: [
                    {
                        platform: '淘宝',
                        price:3.3
                    },
                     {
                        platform: '拼多多',
                        price:2.5
                    },
                     {
                        platform: '京东',
                        price:2.8
                    },
                      {
                        platform: '当当',
                        price:2.8
                    },
                ],
                id:1002
            },
              {
                bookName: '小王子',
                author: '圣埃克苏佩里',
                price: 8,
                imgUrl:'http://5b0988e595225.cdn.sohucs.com/images/20190303/f4a9dc51b7884041a47ade20ee929a34.jpeg',
               des:'十几岁的时候渴慕着小王子，一天之间可以看四十四次日落。是在多久之后才明白，看四十四次日落的小王子，他有多么难过。',
                otherPrice: [
                    {
                        platform: '淘宝',
                        price:3.3
                    },
                     {
                        platform: '拼多多',
                        price:2.5
                    },
                     {
                        platform: '京东',
                        price:2.8
                    },
                      {
                        platform: '当当',
                        price:2.8
                    },
                ],
                id:1003
            },
               {
                bookName: '白夜行',
                author: '东野圭吾',
                price: 8,
                imgUrl:'http://5b0988e595225.cdn.sohucs.com/images/20190303/732b877b422f4f34b6e0d4cd7e1e56e6.jpeg',
               des:'昨晚两点开始看《白夜行》一直看到天亮看完。展现出东野圭吾对复杂叙事的掌控能力，精彩绝伦。但是我最欣赏的还是他对恶的动机，那种孜孜不倦的探求，一直向灵魂黑洞最深处走去。他书写的恶往往不是凡俗的恶，而是一种提纯的，高智商的，有分寸的，肃穆的恶。那种恶最终会让人动容，和纯粹的善一样',
                otherPrice: [
                    {
                        platform: '淘宝',
                        price:3.3
                    },
                     {
                        platform: '拼多多',
                        price:2.5
                    },
                     {
                        platform: '京东',
                        price:2.8
                    },
                      {
                        platform: '当当',
                        price:2.8
                    },
                ],
                id:1004
            },
               {
                bookName: '围城',
                author: ' 銭锺书',
                price: 8,
                imgUrl:'http://5b0988e595225.cdn.sohucs.com/images/20190303/841a564b7c2746b6a77e08921c9a8ea8.jpeg',
               des:'有人说匠心太重，我倒喜欢这样的匠心。令人捧腹的句子不在少数，爱情与生活在调侃中被扒去鲜亮的外壳，讽刺到骨子里，真是又痛又要看下去。这书就是真理，赤裸裸啊',
                otherPrice: [
                    {
                        platform: '淘宝',
                        price:3.3
                    },
                     {
                        platform: '拼多多',
                        price:2.5
                    },
                     {
                        platform: '京东',
                        price:2.8
                    },
                      {
                        platform: '当当',
                        price:2.8
                    },
                ],
                id:1005
            },
               
               {
                bookName: '三体Ⅰ',
                author: '刘慈欣',
                price: 8,
                imgUrl:'http://5b0988e595225.cdn.sohucs.com/images/20190303/188ba44eb2e343e987e2d18e9ccd687e.jpeg',
               des:'刘慈欣对于中国科幻，就如同姚明对于中国篮球”“刘慈欣凭借一己之力将中国科幻提高到了世界级水平”。读完才知，名不虚传',
                otherPrice: [
                    {
                        platform: '淘宝',
                        price:3.3
                    },
                     {
                        platform: '拼多多',
                        price:2.5
                    },
                     {
                        platform: '京东',
                        price:2.8
                    },
                      {
                        platform: '当当',
                        price:2.8
                    },
                ],
                id:1006
            },
     
       ]
   })
});



app.get('/api/news', function (req, res) {
    res.json({
        info: [
            {
                title: '新闻1',
                content: '新闻内容1',
                type: 0,
                id:1001
            },
            {
                title: '新闻2',
                content: '新闻内容2',
                type: 1,
                id:1002
            },
            {
                title: '新闻3',
                content: '新闻内容3',
                type: 2,
                id:1003
            },
            {
                title: '新闻4',
                content: '新闻内容4',
                type: 2,
                id:1004
            },
            {
                title: '新闻5',
                content: '新闻内容5',
                type: 2,
                id:1005
            },
            {
                title: '新闻6',
                content: '新闻内容6',
                type: 2,
                id:1006
           },
       ]
   })
});


app.get('/api/junshi', function (req, res) {
    res.json({
        title: '这里是军事新闻',
        content:'中国人民解放军成功解放纽约，中华人民共和国日本省成立'
   })
});
app.get('api/bagua', function (req, res) {
    res.json({
        title: '这里是八卦新闻',
        content:'台湾彭姓男星疑似是个gay'
   })
});

app.post('/api/register', function (req, res) {
    console.log('req', req.body);
    res.json({
        code: 'Y',
        message: '注册成功',
        userCode: 1002,
        roletype: 'developer',
        // res:req
    })
})
app.post('/api/login', function (req, res) {
    console.log('req', req.body);
    res.json({
        code: 'Y',
        message: '登录成功',
        userCode: 1002,
        roletype: 'developer',
        // res:req
    })
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))