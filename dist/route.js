"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoStockService_1 = __importDefault(require("./mongoStockService"));
const router = express_1.default.Router();
mongoStockService_1.default.connect();
router.get('/latest', (request, response) => __awaiter(this, void 0, void 0, function* () {
    let result = yield mongoStockService_1.default.getLatestPrice();
    response.send(result);
    console.log(`count ${result.length}`);
}));
router.get('/stocks/:stockName', (request, response) => __awaiter(this, void 0, void 0, function* () {
    let name = request.params.stockName;
    let result = yield mongoStockService_1.default.getStockHistory(name);
    response.send(result);
}));
router.get('', (request, response) => __awaiter(this, void 0, void 0, function* () {
    response.redirect('./index.html');
}));
exports.default = { router };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUE4QjtBQUM5Qiw0RUFBK0M7QUFDL0MsTUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQywyQkFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBRXZCLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFDLENBQU8sT0FBdUIsRUFBQyxRQUF5QixFQUFFLEVBQUU7SUFDN0UsSUFBSSxNQUFNLEdBQUcsTUFBTSwyQkFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ2pELFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQzFDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFDLENBQU8sT0FBdUIsRUFBQyxRQUF5QixFQUFDLEVBQUU7SUFDdkYsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDcEMsSUFBSSxNQUFNLEdBQUcsTUFBTSwyQkFBWSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RCxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzFCLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFRixNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBQyxDQUFPLE9BQXVCLEVBQUMsUUFBeUIsRUFBQyxFQUFFO0lBQ3JFLFFBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDdEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNILGtCQUFlLEVBQUMsTUFBTSxFQUFDLENBQUMifQ==