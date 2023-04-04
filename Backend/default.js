import {data} from './constants/data.js';

const DefaultData = async() => {
    try{
        //await News.deleteMany
        await News.insertMany(data);
        console.log("Data imported sucessfully");

    } catch(error){
        console.log('Error', error.message);
    }
}

export default DefaultData;
