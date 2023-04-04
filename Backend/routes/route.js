import express from 'express';
import {getNews} from '../controllers/news-controller.js'

const  route = express.Router();


// console.log("Ok");
route.get('/news', getNews)

export default route;
