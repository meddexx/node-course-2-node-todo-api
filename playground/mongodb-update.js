// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodpApp', (err, client)=>{

  if(err){
    return console.log('Unable to connect to mongodb');
  }
  console.log('Connected to mongodb server');
  const db = client.db('TodoApp')


  db.collection('users').findOneAndUpdate(
    {
      _id: new ObjectID('5aa74f56d95831e6eb5ac21f')
    },{
      $set:{
        name: 'Moi'
      },$inc:{
        age: 25
      }
    }).then((result)=>{
      console.log(JSON.stringify(result,undefined, 2));
    })
  client.close();
});
