import { DATA_LIST } from "../config";
import Card from "./Card";

const Body =()=>{
    return (
        <div className="body">
           {DATA_LIST.map(item=><Card data={item.data} />)}
        </div>
    )
        
    
}

export default Body;