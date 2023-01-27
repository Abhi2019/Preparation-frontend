import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { SearchQueryCall } from "./SearchQuery";
import ListItem from "./ListItem";

const App = () => {
  const [searchItem, setSearchItem] = useState([]);
  const debouceCall = () => {
    let timer;
    return function(event) {
      clearTimeout(timer);
      timer = setTimeout(async()=>{
        let modified = await SearchQueryCall(event.target.value);
        setSearchItem(modified);
      }, 1000);
    }
  };

  const onActionChange = debouceCall();
  return (
    <div>
      <label>Search : </label>
      <input type="text" id="search-box" onChange={onActionChange}></input>
      {searchItem?.length ? <ListItem query={searchItem}></ListItem> : null}
    </div>
  );
};
export default App;
