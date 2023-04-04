import mongoose from 'mongoose';


const Connection = async (username,password) => {
    const URL =`mongodb://abhishekpundir2280:userinshorts@ac-btdollu-shard-00-00.inezf06.mongodb.net:27017,ac-btdollu-shard-00-01.inezf06.mongodb.net:27017,ac-btdollu-shard-00-02.inezf06.mongodb.net:27017/?ssl=true&replicaSet=atlas-ur8p81-shard-0&authSource=admin&retryWrites=true&w=majority`;
     try {
       await mongoose.connect(URL,{useNewUrlParser: true})
       console.log('Database connected successfully');

     } catch(error) {
        console.log('Error while connecting the database',error);

     }

}

export default Connection;