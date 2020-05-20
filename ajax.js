const http = require("http");
 
http.createServer().listen(3000);

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/user', urlencodedParser, (req, reply) => {
    console.log(req.body.data + " **GET");
    reply.status(200).send("user get is delivered");
});

app.post('/user', urlencodedParser, (req, reply) => {
    if (req.headers["user-agent"] != "Mozilla/5.0 (Windows NT 10.0; Win 64; AppleWebkit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129") {
        console.log(req.body.data + "  *POST");
        console.log(req.headers);
        console.log(req.headers.origin);
        reply.status(200).send("user post is delivered");
        console.log("not a chrome")
    }else{
        console.log("access is denied")
    }
});