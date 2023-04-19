import { useEffect, useState } from "react";
import Card from "./Card";

const Body =()=>{
    const [list, setList] =useState([]);
    
    const getData =async()=>{
        let res = await  fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4275236&lng=80.3353368&page_type=DESKTOP_WEB_LISTING')
        let data = await res.json();
        console.log('data>>>>', data.data.cards[2].data.data.cards);
        setList(data.data.cards[2].data.data.cards)
    }

    useEffect(()=>{
        getData()
    },[])
    return (
        <div className="body">
           {list.map(item=><Card data={item.data} />)}
        </div>
    )
        
    
}

export default Body;