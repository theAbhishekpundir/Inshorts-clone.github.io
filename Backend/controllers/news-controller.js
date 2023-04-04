import News from '../model/news.js'
// const data=require("../constants/data.js")
import {data} from "../constants/data.js"
export const getNews = async (request,response) => {
    try{
        // let data =await News.find({})
        response.status(200).json(data);

    } catch(error) {
        
        response.status(500).json({ message: data.message });

    }

}

// module.exports={
//     getNews
// }