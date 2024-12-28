
import axios from "axios";

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1",

});

//creating a function to get data from api.
export const getCountryData = ()=>{
    return api.get("/all?fields=name,population,region,capital,flags");
};

// axios.create creates a custom Axios instance with a baseURL. 
// This makes it easier to manage and reuse the API configuration across the application.

export const getCountryIndData = (name)=>{
    return api.get(
        `/name/${name}?fullText=true&fields=name,population,region,subregion,
        capital,tld,currencies,languages,borders,flags`);
};