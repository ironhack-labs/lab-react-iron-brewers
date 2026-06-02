import axios from "axios"

const http = axios.create({
    baseURL: "https://beers-api.edu.ironhack.com"
})

export async function getBeers() {
  
    const { data } = await http.get("/beers");
    return data; 
}

export async function getOneBeer(id) {
    const { data } = await http.get(`/beers/${id}`);
    return data; 
}

export async function randomBeer() {
    const { data } = await http.get("/beers/random");
    return data; 
}

export async function searchBeer(query) {
    const { data } = await http.get("/beers/search", { params: { q: query }});
    return data; 
}

export async function createBeer(beer) {
    const { data } = await http.post("/beers/new", beer); 
    return data; 
}


