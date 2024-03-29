const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middleware = jsonServer.defaults({
    static: 'node_modules/json-server/dist'
});

server.use(middleware);

server.use(jsonServer.bodyParser);

server.use(function(req,res,next){
setTimeout(next, 0);
});

server.use((req, res, next)=>{
if(req.method === 'POST'){
    req.body.createdAt = Date.now();
}
next();
});

server.use(router);


const port = 3001;
server.listen(port, ()=>{
console.log('JSON server is running on ${port}');
})

function createSlug(value) {
	return value.replace(/[^a-z0-9_]+/gi, '-').replace(/^-|-$/g, '').toLowerCase();
}