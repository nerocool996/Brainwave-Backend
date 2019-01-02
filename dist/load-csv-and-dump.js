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
require('source-map-support').install();
const csvtojson_1 = __importDefault(require("csvtojson"));
const mongodb_1 = require("mongodb");
const csvFilePath = "./prices763fefc.csv";
const mongoDbURL = "mongodb://localhost:27017";
const dbName = 'Brainwave';
const client = new mongodb_1.MongoClient(mongoDbURL, { useNewUrlParser: true });
function connectToDb() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let data, formattedData = [];
            let db;
            [data,] = yield Promise.all([csvtojson_1.default().fromFile(csvFilePath), client.connect()]);
            console.log(data.length);
            db = client.db(dbName);
            const collection = db.collection('stocks');
            formattedData = data.map((x) => {
                x.date = new Date(x.date);
                return x;
            });
            console.log(yield collection.insertMany(formattedData));
            collection.createIndex({ date: -1 });
            client.close();
        }
        catch (e) {
            throw e;
        }
    });
}
connectToDb();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1jc3YtYW5kLWR1bXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbG9hZC1jc3YtYW5kLWR1bXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3hDLDBEQUFrQztBQUNsQyxxQ0FBdUM7QUFFdkMsTUFBTSxXQUFXLEdBQUcscUJBQXFCLENBQUM7QUFDMUMsTUFBTSxVQUFVLEdBQUcsMkJBQTJCLENBQUM7QUFFL0MsTUFBTSxNQUFNLEdBQUcsV0FBVyxDQUFDO0FBQzNCLE1BQU0sTUFBTSxHQUFHLElBQUkscUJBQVcsQ0FBQyxVQUFVLEVBQUMsRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUVyRSxTQUFlLFdBQVc7O1FBQ3RCLElBQUc7WUFDQyxJQUFJLElBQVEsRUFBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1lBQ2hDLElBQUksRUFBSyxDQUFDO1lBQ1YsQ0FBQyxJQUFJLEVBQUcsR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxtQkFBUyxFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekIsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkIsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQyxhQUFhLEdBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBRSxDQUFDLENBQUssRUFBRSxFQUFFO2dCQUMvQixDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDekIsT0FBTyxDQUFDLENBQUE7WUFDWixDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxVQUFVLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDeEQsVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFDbEMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2xCO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDUixNQUFNLENBQUMsQ0FBQztTQUNYO0lBQ0wsQ0FBQztDQUFBO0FBR0QsV0FBVyxFQUFFLENBQUMifQ==