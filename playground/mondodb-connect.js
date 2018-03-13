// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodpApp', (err, client)=>{

  if(err){
    return console.log('Unable to connect to mongodb');
  }
  console.log('Connected to mongodb server');
  const db = client.db('TodoApp')
  // db.collection('Todos').insertOne({
  //   text: 'Somthing to do',
  //   completed: false
  // }, (err, result) =>{
  //   if(err){
  //     return console.log('Unable to insert Todos ', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })


  client.close();
});
