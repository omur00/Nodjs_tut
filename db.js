const dotenv = require('dotenv')
dotenv.config()
const { MongoClient, ServerApiVersion } = require('mongodb');
 


const client = new MongoClient(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
    module.exports = client
    const app = require('./app')
    app.listen(process.env.PORT)
  });

