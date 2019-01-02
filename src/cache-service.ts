import cache from 'memory-cache';
import { Stocks } from './interface/stocks';

class cacheService {
    private client: cache.CacheClass<string, Stocks[]>;

    constructor() {
        this.client = new cache.Cache();
    }

    setCache(key:string, value:Stocks[]){
        this.client.put(key, value);
    }

    getCache(key:string): Stocks[]|null{
        let result = this.client.get(key);
        return result;
    }
}
 
export default new cacheService();