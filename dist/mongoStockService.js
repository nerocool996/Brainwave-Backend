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
const mongodb_1 = require("mongodb");
const cache_service_1 = __importDefault(require("./cache-service"));
class mongoStockService {
    constructor() {
        this.url = "mongodb://localhost:27017";
        this.db = null;
        this.collection = null;
        this.client = new mongodb_1.MongoClient(this.url, { useNewUrlParser: true });
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.client.connect();
                this.db = this.client.db("Brainwave");
                this.collection = this.db.collection("stocks");
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getLatestPrice() {
        if (!this.collection) {
            this.connect();
        }
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let cacheData = cache_service_1.default.getCache("latest");
                if (cacheData) {
                    resolve(cacheData);
                    return;
                }
                let cursor = yield this.collection.aggregate([
                    {
                        $sort: {
                            date: -1
                        }
                    },
                    {
                        $group: {
                            _id: "$symbol",
                            date: { $first: "$date" },
                            symbol: { $first: "$symbol" },
                            open: { $first: "$open" },
                            close: { $first: "$close" },
                            low: { $first: "$low" },
                            high: { $first: "$high" },
                            volume: { $first: "$volume" }
                        }
                    }
                ], { allowDiskUse: true });
                let result = yield cursor.toArray();
                cache_service_1.default.setCache("latest", result);
                resolve(result);
            }
            catch (e) {
                reject(e);
            }
        }));
    }
    getStockHistory(name) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let cursor = yield this.collection.find({ symbol: name });
                resolve(yield cursor.toArray());
            }
            catch (e) {
                reject(e);
            }
        }));
    }
}
exports.default = new mongoStockService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29TdG9ja1NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbW9uZ29TdG9ja1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUFtRDtBQUVuRCxvRUFBb0M7QUFFcEMsTUFBTSxpQkFBaUI7SUFNbkI7UUFKSSxRQUFHLEdBQUcsMkJBQTJCLENBQUM7UUFDbEMsT0FBRSxHQUFTLElBQUksQ0FBQztRQUNoQixlQUFVLEdBQXFELElBQUksQ0FBQztRQUdwRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUkscUJBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFDLEVBQUMsZUFBZSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUNLLE9BQU87O1lBQ1QsSUFBRztnQkFDQyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbEQ7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xCO1FBQ0wsQ0FBQztLQUFBO0lBRUQsY0FBYztRQUNWLElBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNsQjtRQUNELE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBTyxPQUFPLEVBQUMsTUFBTSxFQUFDLEVBQUU7WUFDdkMsSUFBSTtnQkFDQSxJQUFJLFNBQVMsR0FBRyx1QkFBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDekMsSUFBRyxTQUFTLEVBQUM7b0JBQ1QsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUNuQixPQUFPO2lCQUNWO2dCQUNELElBQUksTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVcsQ0FBQyxTQUFTLENBQUM7b0JBQzFDO3dCQUNJLEtBQUssRUFDTDs0QkFDSSxJQUFJLEVBQUMsQ0FBQyxDQUFDO3lCQUNWO3FCQUNKO29CQUNEO3dCQUNJLE1BQU0sRUFDTjs0QkFDSSxHQUFHLEVBQUUsU0FBUzs0QkFDZCxJQUFJLEVBQUUsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDOzRCQUN0QixNQUFNLEVBQUUsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDOzRCQUMxQixJQUFJLEVBQUUsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDOzRCQUN0QixLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDOzRCQUN4QixHQUFHLEVBQUUsRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDOzRCQUNwQixJQUFJLEVBQUUsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDOzRCQUN0QixNQUFNLEVBQUUsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDO3lCQUM3QjtxQkFDSjtpQkFDSixFQUFDLEVBQUMsWUFBWSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksTUFBTSxHQUFHLE1BQU0sTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNwQyx1QkFBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQVcsTUFBTSxDQUFDLENBQUM7Z0JBQzFDLE9BQU8sQ0FBWSxNQUFNLENBQUMsQ0FBQzthQUM5QjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNSLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNiO1FBQ0wsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxlQUFlLENBQUMsSUFBVztRQUN2QixPQUFPLElBQUksT0FBTyxDQUFlLENBQU8sT0FBTyxFQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3RELElBQUc7Z0JBQ0MsSUFBSSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVyxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO2dCQUN4RCxPQUFPLENBQUMsTUFBTSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQzthQUNuQztZQUFHLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNiO1FBQ0wsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDSjtBQUVELGtCQUFlLElBQUksaUJBQWlCLEVBQUUsQ0FBQyJ9