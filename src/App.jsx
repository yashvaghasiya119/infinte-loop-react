import { useEffect, useState } from "react";
import { Thapa } from "./thapa";
import { Infinite } from "./infinte";
import { Prc } from "./prc";

function App() {
  // let [data, setdata] = useState();
  // let [lo, setlo] = useState(true);
  // let[page,setpage]=useState(1)

  // async function getdata(page) {
  //   let datas = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&page=${page}`);
  //   let res = await datas.json();
  //   console.log(res);
  //    setdata(res); 
  //    if(page>1){
  //      setdata((prev)=>[...prev,...res])
  //    }
  //   setlo(false)
  //   return res; // Return the resolved data
  // }

  

  // useEffect(() => {
  //   getdata(page);
  // }, [page]);

  // if (lo) return <h2>Loading..</h2>;

  // console.log(data);
  // function loadmore(e){
  //   let bottom = e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop < 10 
  //   if(bottom){
  //     let updatepage = page +1
  //     getdata(updatepage)
  //     setpage(updatepage)
  //     setlo(true)

  //   }
  // }

  return (
    <>
 {/* <Thapa/>      */}
 {/* <Infinite/>  */}
 <Prc/>

    </>
  );
}

export default App;

// import { useEffect, useState } from "react";

// function App() {
//   let [data, setdata] = useState([]);
//   let [lo, setlo] = useState(true);
//   let [page, setpage] = useState(1);

//   // Fetch data function
//   async function getdata(page) {
//     let datas = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`);
//     let res = await datas.json();
//     console.log(res);
//     setdata((prevData) => [...prevData, ...res]);  // Append new data to existing data
//     setlo(false);  // Set loading to false after data is fetched
//   }

//   // useEffect hook to load data when the page changes
//   useEffect(() => {
//     if (data.length >= 100) return;  // Stop loading if data length is 100 or more
//     setlo(true);  // Reset loading state to true when page is updated
//     getdata(page);
//   }, [page, data]); // Trigger the effect when the page changes or data changes

//   if (lo) return <h2>Loading..</h2>;

//   // Scroll handler to load more data
//   function loadmore(e) {
//     const bottom = e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop < 50;
//     if (bottom && data.length < 90) {  // Prevent loading if data length is 100 or more
//       let updatepage = page + 1;
//       setpage(updatepage);  // Update page state to trigger useEffect
//     }
//   }

//   return (
//     <>
//       <h2>App</h2>
//       <div className="grid" onScroll={loadmore}>
//         {data &&
//           data.map((cur, index) => {
//             return (
//               <div key={index} className="imgclass">
//                 <h2>{index} {cur.title}</h2>
//                 <p>{cur.body}</p>
//               </div>
//             );
//           })}
//       </div>
//     </>
//   );
// }

// export default App;

