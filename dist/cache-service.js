"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const memory_cache_1 = __importDefault(require("memory-cache"));
class cacheService {
    constructor() {
        this.client = new memory_cache_1.default.Cache();
    }
    setCache(key, value) {
        this.client.put(key, value);
    }
    getCache(key) {
        let result = this.client.get(key);
        return result;
    }
}
exports.default = new cacheService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FjaGUtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jYWNoZS1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZ0VBQWlDO0FBR2pDLE1BQU0sWUFBWTtJQUdkO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLHNCQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFVLEVBQUUsS0FBYztRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFVO1FBQ2YsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztDQUNKO0FBRUQsa0JBQWUsSUFBSSxZQUFZLEVBQUUsQ0FBQyJ9