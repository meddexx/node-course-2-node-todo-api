// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodpApp', (err, client)=>{

  if(err){
    return console.log('Unable to connect to mongodb');
  }
  console.log('Connected to mongodb server');
  const db = client.db('TodoApp')
  //deleteMany


  db.collection('users').findOneAndDelete({name: 'Meddy'}).then((result)=>{
    console.log(result);
  })
  client.close();
});
