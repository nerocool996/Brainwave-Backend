import express from 'express';
import bodyParser from 'body-parser';
import route from './route';

class App {
    public express: express.Application;
    constructor () {
      this.express = express();
      this.express.use(bodyParser.json());
      this.allowCors();
      this.mountRoutes();
      this.express.use(express.static('files'))
    }
    private allowCors (): void {
      let allowedHeaders:string[] = ['localhost:8080','localhost:8100','http://localhost:4200'];
      this.express.use(function(req: express.Request, res : express.Response, next : express.NextFunction) {
      //Adding for CORS headers
      if(typeof req.headers.origin == "string" && allowedHeaders.indexOf(req.headers.origin)){
          console.log("CORS orgin allowed");
          res.header('Access-Control-Allow-Origin', <string>req.headers.origin);       
      }
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
      });
    }
  
    private mountRoutes (): void {  
      this.express.use('/', route.router);
    }  
  }

export default new App().express;