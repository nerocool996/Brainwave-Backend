require('source-map-support').install();
import csvtojson from 'csvtojson';
import {MongoClient,Db} from 'mongodb';

const csvFilePath = "./prices763fefc.csv";
const mongoDbURL = "mongodb://localhost:27017";

const dbName = 'Brainwave';
const client = new MongoClient(mongoDbURL,{ useNewUrlParser: true });

async function connectToDb(){
    try{
        let data:any,formattedData = [];
        let db:Db;
        [data, ] = await Promise.all([csvtojson().fromFile(csvFilePath),client.connect()]);
        console.log(data.length);
        db = client.db(dbName);
        const collection = db.collection('stocks');
        formattedData= data.map( (x:any) => {
            x.date = new Date(x.date)
            return x
        });
        console.log(await collection.insertMany(formattedData));
        collection.createIndex({date:-1});
        client.close();
    } catch (e) {
        throw e;
    }
}


connectToDb();