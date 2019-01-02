"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const route_1 = __importDefault(require("./route"));
class App {
    constructor() {
        this.express = express_1.default();
        this.express.use(body_parser_1.default.json());
        this.allowCors();
        this.mountRoutes();
        this.express.use(express_1.default.static('files'));
    }
    allowCors() {
        let allowedHeaders = ['localhost:8080', 'localhost:8100', 'http://localhost:4200'];
        this.express.use(function (req, res, next) {
            //Adding for CORS headers
            if (typeof req.headers.origin == "string" && allowedHeaders.indexOf(req.headers.origin)) {
                console.log("CORS orgin allowed");
                res.header('Access-Control-Allow-Origin', req.headers.origin);
            }
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    }
    mountRoutes() {
        this.express.use('/', route_1.default.router);
    }
}
exports.default = new App().express;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUM5Qiw4REFBcUM7QUFDckMsb0RBQTRCO0FBRTVCLE1BQU0sR0FBRztJQUVMO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxpQkFBTyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0lBQ08sU0FBUztRQUNmLElBQUksY0FBYyxHQUFZLENBQUMsZ0JBQWdCLEVBQUMsZ0JBQWdCLEVBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUMxRixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFTLEdBQW9CLEVBQUUsR0FBc0IsRUFBRSxJQUEyQjtZQUNuRyx5QkFBeUI7WUFDekIsSUFBRyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLFFBQVEsSUFBSSxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUM7Z0JBQ25GLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFDbEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsRUFBVSxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3pFO1lBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1lBQ2xFLEdBQUcsQ0FBQyxNQUFNLENBQUMsOEJBQThCLEVBQUUsZ0RBQWdELENBQUMsQ0FBQztZQUM3RixJQUFJLEVBQUUsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLFdBQVc7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGVBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0Y7QUFFSCxrQkFBZSxJQUFJLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyJ9