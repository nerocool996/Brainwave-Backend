import {MongoClient,Db,Collection } from 'mongodb';
import {Stocks,StocksHist} from './interface/stocks';
import cache from './cache-service';

class mongoStockService {
private client:MongoClient;
private url = "mongodb://localhost:27017";
private db:Db|null=null;
private collection:Collection<StocksHist>|Collection<StocksHist>|null =null;

    constructor ()  {
        this.client = new MongoClient(this.url,{useNewUrlParser: true}); 
    }
    async connect():Promise<void> {
        try{
            await this.client.connect();
            this.db = this.client.db("Brainwave");
            this.collection = this.db.collection("stocks");
        } catch (e) {
            console.log(e);
        }
    }

    getLatestPrice():Promise<Stocks[]>{
        if(!this.collection){
            this.connect();
        }
        return new Promise(async (resolve,reject)=>{
            try {
                let cacheData = cache.getCache("latest");
                if(cacheData){
                    resolve(cacheData);
                    return;
                }
                let cursor = await this.collection!.aggregate([
                    {
                        $sort:
                        {
                            date:-1
                        }
                    },
                    {
                        $group:
                        {
                            _id: "$symbol",
                            date: {$first:"$date"},
                            symbol: {$first:"$symbol"},
                            open: {$first:"$open"},
                            close: {$first:"$close"},
                            low: {$first:"$low"},
                            high: {$first:"$high"},
                            volume: {$first:"$volume"}
                        }
                    }
                ],{allowDiskUse:true});
                let result = await cursor.toArray();
                cache.setCache("latest",<Stocks[]>result);
                resolve (<Stocks[]>result);
            } catch (e) {
                reject(e);
            }
        });
    }

    getStockHistory(name:string):Promise<StocksHist[]>{
        return new Promise<StocksHist[]>(async (resolve,reject) => {
            try{
                let cursor = await this.collection!.find({symbol:name});
                resolve(await cursor.toArray());
            }   catch (e) {
                reject(e);
            }
        })
    }
}

export default new mongoStockService();