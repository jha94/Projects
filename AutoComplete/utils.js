import { FRUITS } from "./data";

export const getSuggestions = (keyword) =>{
    const result = FRUITS.filter(i=>i.substring(0, keyword.length).toLowerCase()===keyword.toLowerCase())
    return result;
}