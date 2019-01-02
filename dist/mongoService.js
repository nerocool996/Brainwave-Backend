"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class mongoStockService {
    constructor() {
        this.url = "mongodb://localhost:27017";
        this.client = new mongodb_1.MongoClient(this.url, { useNewUrlParser: true });
        this.db = this.client.db("Brainwave");
        this.collection = this.db.collection("stocks");
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29TZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21vbmdvU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFtRDtBQUduRCxNQUFNLGlCQUFpQjtJQU1uQjtRQUpJLFFBQUcsR0FBRywyQkFBMkIsQ0FBQztRQUtsQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUkscUJBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFDLEVBQUMsZUFBZSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDSiJ9