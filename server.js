import express from 'express';
import path from 'path';
import Routes from './routes/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv'


dotenv.config();
const __dirname = path.resolve();



const app = express();

const PORT = process.env.PORT || 5000;

///////////////////////////////////
// Serving static files
////////////////////////////////////
app.use(express.static(path.join(__dirname,"client", "build")));
app.use(express.static("public"))

app.get('*',(req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });


  app.use(cors());
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json());
  app.use(Routes);


const url = `mongodb://neel:neel@crud-shard-00-00.niieg.mongodb.net:27017,crud-shard-00-01.niieg.mongodb.net:27017,crud-shard-00-02.niieg.mongodb.net:27017/MERN?ssl=true&replicaSet=atlas-stud0b-shard-0&authSource=admin&retryWrites=true&w=majority`


await mongoose.connect(process.env.MONGO_URI || url).then(()=>{    
    console.log('database connected');
    app.listen(PORT, ()=>{
        console.log(`Running at ${PORT}`);
    })
}).catch(e=>{
    console.log(`error in connecting to database ${e}`);
})

