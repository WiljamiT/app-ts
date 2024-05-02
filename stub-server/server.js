const jsonServer = require('json-server')                  
const server = jsonServer.create()                  
const router = jsonServer.router('db.json')                  
const middlewares = jsonServer.defaults()                
                  
server.use((req, res, next) => {                  
  if (req.method === 'DELETE' && req.query['_cleanup']) {                  
    const db = router.db                  
    db.set('restaurants', []).write()                  
    res.sendStatus(204)                  
  } else {                  
    next()                  
  }                  
})                
                  
server.use(middlewares)                  
server.use(router)

PORT = 8080;
                  
server.listen(PORT, () => {                  
    console.log(`JSON Server is running on port ${PORT}`)                  
})  