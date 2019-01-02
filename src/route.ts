import express from 'express';
import stockService from './mongoStockService';
const router = express.Router();

stockService.connect();

router.get('/latest',async (request:express.Request,response:express.Response) => {
    let result = await stockService.getLatestPrice();
    response.send(result);
    console.log(`count ${result.length}`);
});

router.get('/stocks/:stockName',async (request:express.Request,response:express.Response)=> {
    let name = request.params.stockName;
    let result = await stockService.getStockHistory(name);
    response.send(result);
})

router.get('',async (request:express.Request,response:express.Response)=> {
    response.redirect('./index.html');
});
export default {router};