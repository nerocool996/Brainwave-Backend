"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('source-map-support').install();
const App_1 = __importDefault(require("./App"));
const port = 3000;
App_1.default.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN4QyxnREFBdUI7QUFHdkIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFBO0FBRWhCLGFBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBTyxFQUFFLEVBQUU7SUFDNUIsSUFBSSxHQUFHLEVBQUU7UUFDUCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7S0FDeEI7SUFDRCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLElBQUksRUFBRSxDQUFDLENBQUE7QUFDdEQsQ0FBQyxDQUFDLENBQUEifQ==