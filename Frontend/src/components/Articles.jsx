
// import { useEffect, useState } from 'react';
// import {Box} from '@mui/material';
// import { getNews } from '../service/api';

// import Article from './Article';


// const Articles = () => {

//     const [news,setNews] = useState([]);
//     useEffect(() =>{
//         dailyNews();

//     },[]);

//     const dailyNews = async() => {
//         let response = await getNews();
//         console.log(response.data);
//         setNews(response.data);
//     }
//     return(
//         <Box>
//            { news.map(data => (
            
//             <Article data={data} />

//            ))
//            }
         
//         </Box>

//     )
// }

// export default Articles;


import { useState, useEffect } from 'react';
import { getNews } from "../service/api";

import InfiniteScroll from 'react-infinite-scroll-component';

//components
import Article from './Article';

const Articles = () => {

    const [news, setNews] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const dailyNews = async () => {
            const response = await getNews(page);
            console.log(new Set([...news, ...response.data]));
            setNews([...new Set([...news, ...response.data])]);
        }
        dailyNews();
    }, [page])

    useEffect(() => {
        console.log(news);
    }, [news])

    return (
        <InfiniteScroll
            dataLength={news.length}
            next={() => setPage(page => page + 1)}
            hasMore={true}
        >
            {
                news.map(article => (
                    <Article article={article} />
                ))
            }
        </InfiniteScroll>
    )
}

export default Articles;