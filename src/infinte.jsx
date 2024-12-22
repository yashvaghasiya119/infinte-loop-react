import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export function Infinite(){

let [data,setdata]=useState([])
let [page,setpage]=useState(1)
let[hasMore,sethasMore]=useState(true)
    async function getcarddata() {
       // Set loading to true while fetching data
        let da = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`);
        let result = await da.json();
        setdata((prev) => {
      const newData = result.filter(item => !prev.some(existingItem => existingItem.id === item.id));
      return [...prev, ...newData];
    });
      }
      useEffect(()=>{
        getcarddata()
      },[page])
      function moredata(){
        setpage((prev)=>prev + 1    )
      }
     
    return<>
    <div>
        <InfiniteScroll
        dataLength={data.length}
        next={moredata}
        hasMore={data.length <70}
        loader={<h2>LOading..</h2>}
        endMessage={<p>no more datas</p>}
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

// gpt 

// import { useEffect, useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";

// export function Infinite() {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   // Fetch data for the current page
//   async function getCardData() {
//     let response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`);
//     let result = await response.json();
    
//     if (result.length < 9) {
//       setHasMore(false); // No more data available if the result has fewer than 9 items
//     }

//     // Append the new data to the existing data
//     setData((prev) => {
//       const newData = result.filter(item => !prev.some(existingItem => existingItem.id === item.id));
//       return [...prev, ...newData];
//     });
//   }

//   useEffect(() => {
//     getCardData();
//   }, [page]);

//   function loadMoreData() {
//     if (hasMore) {
//       setPage(prev => prev + 1); // Fetch next page of data
//     }
//   }

//   return (
//     <div>
//       <InfiniteScroll
//         dataLength={data.length}
//         next={loadMoreData}
//         hasMore={hasMore}
//         loader={<h2>Loading...</h2>}
//         endMessage={<p>No more data</p>}
//       >
//         {data.map((item, index) => (
//           <div key={index}>
//             <h1>{item.id} {item.title}</h1>
//             <p>{item.body}</p>
//           </div>
//         ))}
//       </InfiniteScroll>
//     </div>
//   );
// }
