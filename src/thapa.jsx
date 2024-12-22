// import { useEffect, useState } from "react";
// import { useAsyncError, useSearchParams } from "react-router";

// export function Thapa() {
// let[data,setdata]=useState([])
// let [page,setpage]=useState(1)
// let [loading,setloading]=useState(false)
//     async function getcarddata() {
//         setloading(true)
//         let da = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&page=${page}`)
//         let res = await da.json()
//         setdata((prev)=>[...prev,...res])
//         setloading(false)  
//     }
//     console.log(data);
    
//     async function scrollfun(){
//         try {
//          if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight)   {
//           if(!loading){
//             setpage((prev)=>prev+1)
//           }
//             console.log("ddf");
            
//          }
//         } catch (error) {
//             console.log(error);
            
//         }
//     }
//     useEffect(()=>{
//         getcarddata()
//     },[page])
//     useEffect(()=>{
//         window.addEventListener("scroll",scrollfun)
//         return ()=>{
//             window.removeEventListener("scroll",scrollfun)
//         }
//     },[loading])
    
//     return <>
//     {data && data.map((cur,index)=>{
//         return <Moviecard key={index} data={cur}/> 
      
//     })}
//     </>
// }


// function Moviecard({data}){

// return<>
//    <div>
//   <h1>{data.id} {data.title}</h1>
//   <p>{data.body}</p>
//       </div>
// {
    
// }
// </>
// }

import { useEffect, useState } from "react";

export function Thapa() {
  let [data, setdata] = useState([]);
  let [page, setpage] = useState(1);
  let [loading, setLoading] = useState(false);

  // Function to fetch the card data
  async function getcarddata() {
    setLoading(true); // Set loading to true while fetching data
    let da = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`);
    let res = await da.json();
    setdata((prev) => [...prev, ...res]); // Append new data to the existing data
    setLoading(false); // Set loading to false once data is fetched
  }

  // Scroll event handler to load more data
  async function scrollfun() {
    try {
      // Check if we're near the bottom of the page
      if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
        // Load next page if not already loading
        if (!loading) {
          setpage((prev) => prev + 1); // Increment page number
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Effect to fetch data whenever the page changes
  useEffect(() => {
    getcarddata();
  }, [page]);

  // Effect to add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", scrollfun);

    // Cleanup function to remove the scroll event listener
    return () => {
      window.removeEventListener("scroll", scrollfun);
    };
  }, [loading]); // Add `loading` as a dependency to ensure scroll event only fires when not loading new data

  return (
    <>
      {data &&
        data.map((cur, index) => {
          return <Moviecard key={index} data={cur} />;
        })}
    </>
  );
}

function Moviecard({ data }) {
  return (
    <>
      <div>
        <h1>{data.id} {data.title}</h1>
        <p>{data.body}</p>
      </div>
    </>
  );
}
