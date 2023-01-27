import React, { useEffect, useState } from "react";
import "./App.css";
const ListItem = (props) => {
  console.log("props", props);
  let [count ,setCount] = useState(4);
  const [initialQuery, setInitialQuery] = useState(props?.query.slice(0,count));
  
  useEffect(()=>{
    let observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting) {
                let data = props?.query.slice(count, count+4);
                if(data.length) {
                    let aggre = [...initialQuery,...data]
                    setCount(count=>count+4);
                    setInitialQuery(aggre);
                }
            }
        })
      });
      observer.observe(document.getElementById("footer"));
    //   return function(){
    //     observer.unobserve(document.getElementById("footer"));
    //   }
  },[props?.query])

 

  let p = initialQuery.map((m)=>{
    return(<li key={m}> {m} <hr></hr></li>)
  });
  return <div id="search-list"> {p} <div id="footer"></div></div>;
};

export default ListItem;
