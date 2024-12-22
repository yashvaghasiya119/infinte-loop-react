import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export function Prc(){

    let[data,setdata]=useState([])
    let[page,setpage]=useState(1)

    async function getdata(){
        let da = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`);
        let result = await da.json()
        console.log(result);
        setdata((prev) => {
            const newData = result.filter(item => !prev.some(existingItem => existingItem.id === item.id));
            return [...prev, ...newData];
    })
    }
useEffect(()=>{
    getdata()
},[page])
function fetchmore(){
    setpage((prev)=>prev +1)
}
    return<>
    <div>

    <InfiniteScroll
    dataLength={data.length}
    next={fetchmore}
    hasMore={data.length <90}
    loader={<h1>Loading...</h1>}
    >

    {data &&
        data.map((data, index) => { 
            return       <div key={index}>
            <h1>{data.id} {data.title}</h1>
            <p>{data.body}</p>
          </div>
         })}
    </InfiniteScroll>
         </div>
    </>
}