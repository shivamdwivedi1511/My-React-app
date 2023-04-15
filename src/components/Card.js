import { ULR_BASE_LINK } from "../config";

const Card =({data})=>{
    return (<div className="card" key={data.id}>
        {console.log('data>>>', data)}
        <div><img src={ULR_BASE_LINK + data.cloudinaryImageId}/></div>
        <div className="title">{data.name}</div>
        <div className="food-type">{data.cuisines.join(', ')}</div>
        {/* <ul className="rating-sec">
            <li>4.2</li>
            <li>24 mins</li>
            <li>200 for two</li>
            </ul> */}
        <div className="offer"> {data.aggregatedDiscountInfo?.header}</div>
        <div className="quick-view">Quick View</div>
    </div>)
}
export default Card;