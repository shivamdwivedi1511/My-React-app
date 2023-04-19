import { useEffect } from "react";
import { DATA_LIST } from "../config";
import Card from "./Card";

const Body =()=>{
    const getData =async()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'KP3ctoGzvMmshGOLIYxNNmkegM4Ap1Vl22cjsnfiGfDP7immud',
                'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
            }
        };
        
        let res = await  fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', options)
        // let data = await JSON.parse(res);
        console.log('data>>>>', res);
    }

    useEffect(()=>{
        getData()
    },[])
    return (
        <div className="body">
           {DATA_LIST.map(item=><Card data={item.data} />)}
        </div>
    )
        
    
}

export default Body;