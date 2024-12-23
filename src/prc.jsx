import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";



export function Prc(){

    let[data,setdata]=useState([])
    let[page,setpage]=useState(1)

    async function getdata(){
        let da = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`);
        let result = await da.json()
        console.log(result);
//    this set data line use to remove multiple time rendring
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
    endMessage={<h2>End data</h2>}
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
    
    
//  how to work grid structre giv dispay grid .infinite-scroll-component class name then work display grid 

//     import { useEffect, useState } from "react";
//     import InfiniteScroll from "react-infinite-scroll-component";
//     export function Prc(){
//         let[data,setdata]=useState([])
//         let[page,setpage]=useState(1)
        
        
//         async function getdata(){
//             // let da = await fetch(`https://picsum.photos/v2/list?limit=7&page=${page}`);
//                     let da = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`);
//             let result = await da.json()
//             setdata((prev) => {
//                 const newData = result.filter(item => !prev.some(existingItem => existingItem.id === item.id));
//                 return [...prev, ...newData];
//             })
//         }

//         useEffect(()=>{
//             getdata()
//         },[page])
//       function fetchmore(){
//         setpage((p)=>p+1)
//       }
//       const numbers = [1, 2, 3, 4, 5];

// const result = numbers.some(num => num < 0 );
// console.log(result);  // Output: true

//     return<>
//     <div className="main">
//         <InfiniteScroll
//         dataLength={data.length}
//         next={fetchmore}
//         hasMore={data.length < 70}
//         loader={<h1>Loading..</h1>}
//         >

//     {data &&
//         data.map((data, index) => { 
//             return <div key={index} className="children">
//             <h1>{data.id} {data.title}</h1>
//             <p>{data.body}</p>
//             <img src={data.download_url} alt="" />
//           </div>
//          })}
//          </InfiniteScroll>
//     </div>
//     </>
// }