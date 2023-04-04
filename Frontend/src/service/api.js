import axios from 'axios';
//import news from '../../../Backend/model/news-schema';


export const getNews = async (page,size =5) => {
    const URL ='http://localhost:8000';
    try{
       return await axios.get(`${URL}/temp/news`);

    } catch (error) {
        console.log('Error while calling get news api', error);
    }
}


// localhost:8000/news

// facebook.com/user/