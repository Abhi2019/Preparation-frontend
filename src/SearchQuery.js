import {data} from './utils';
const fetchData = ()=>{
    return new Promise((resolve)=>{
        resolve(data);
    })
}
export const SearchQueryCall = async(text)=> {
    if(text !== "") {
        let result = await fetchData();
        let filtered = result.filter(i=> i.substring(0,text.length).toUpperCase() === text.toUpperCase());
        return filtered;
    }
   
}
