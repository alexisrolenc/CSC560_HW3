const {MongoClient} = require('mongodb');

async function main(){
    const uri = "mongodb+srv://alexisrolenc:YdBlo0a2XnobbSeA@players-cluster.467jc.mongodb.net/<dbname>?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    
    try{
        await client.connect();
        //await addPlayer(client, newPlayer);
        //await getData(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function addPlayer(req, res, client) {
    const result = await client.db("MyBaseballStats").collection("players").insertOne(newPlayer);
    console.log(result);    
    return result;
}

// async function updatePlayer(req, res, client) {
//     const result = await client.db("MyBaseballStats").collection("players").insertOne(newPlayer);
//     console.log(result);    
//     return result;
// }

// async function deletePlayer(req, res, client) {
//     const result = await client.db("MyBaseballStats").collection("players").insertOne(newPlayer);
//     console.log(result);    
//     return result;
// }

async function getData(req, res, client) {
    const cursor = await client.db("MyBaseballStats").collection("players").find({});
    const result = await cursor.toArray();
    console.log(result);
    //return result;
}

async function findMostHomeRuns(req, res, client) {
    const cursor = await client.db("MyBaseballStats").collection("players").find({}).sort({numOfHomeRuns: -1}).limit(1);
    const result = await cursor.toArray();
    console.log(result);
    return result;
}

async function lte5Walks(req, res, client) {
    const cursor = await client.db("MyBaseballStats").collection("players").find({numOfWalks: {$lte: 5}});
    const result = await cursor.toArray();
    console.log(result);
    return result;
}

async function avgBatSpeedDes(req, res, client) {
    const cursor = await client.db("MyBaseballStats").collection("players").find({}).sort({avgBatSpeed: -1});
    const result = await cursor.toArray();
    console.log(result);
    return result;
}

async function twoLeastAmountOfOuts(req, res, client) {
    const cursor = await client.db("MyBaseballStats").collection("players").find({}).sort({numOfOuts: 1}).limit(2);
    const result = await cursor.toArray();
    console.log(result);
    return result;
}

async function mostNumOfStrikes(req, res, client) {
    const cursor = await client.db("MyBaseballStats").collection("players").find({}).sort({numOfStrikes: -1}).limit(1);
    const result = await cursor.toArray();
    console.log(result);
    return result;
}
   
async function listDatabases(req, res, client){
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    const result = databasesList.databases.forEach(db => console.log(` -${db.name}`));
    return result;
};

module.exports = {
    addPlayer,
    // updatePlayer,
    // deletePlayer,
    findMostHomeRuns,
    lte5Walks,
    avgBatSpeedDes,
    twoLeastAmountOfOuts,
    mostNumOfStrikes,
    listDatabases
}