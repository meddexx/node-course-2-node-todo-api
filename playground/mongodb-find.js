// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodpApp', (err, client)=>{

  if(err){
    return console.log('Unable to connect to mongodb');
  }
  console.log('Connected to mongodb server');
  const db = client.db('TodoApp')

  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos count: ${count}`);
  //
  // }, (err)=>{
  //   console.log('unable to fecth data', err);
  // });

  db.collection('users').find({name: 'Meddy'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs, undefined, 2));
  })
  client.close();
});
