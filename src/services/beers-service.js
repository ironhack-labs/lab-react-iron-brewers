
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://beers-api.edu.ironhack.com',
    timeout: 1000
});

export async function getAllBeers() {
    try {
        const response = await axios.get('https://beers-api.edu.ironhack.com/beers');
        return response.data;
    } catch (error) {
        console.log('An error has obtaining all beers data', error);
    }
}

export async function getBeerByID(id) {
    try {
        const response = await axios.get(`https://beers-api.edu.ironhack.com/beers/${id}`);
        return response.data;
    } catch (error) {
        console.log('An error has obtaining beer by id', error);
    }
}

export async function getRandomBeer() {
    try {
        const response = await axios.get('https://beers-api.edu.ironhack.com/beers/random');
        return response.data;
    } catch (error) {
        console.log('An error has obtaining a random beer', error);
    }
}

export async function getSearchBeer(search) {
    try {
        const response = await axios.get(`https://beers-api.edu.ironhack.com/beers/search?q=${search}`);
        return response.data;
    } catch (error) {
        console.log('An error has obtaining a random beer', error);
    }
}

export async function postBeerData(newBeer) {
    try {
        const response = await instance.post('/beers/new', newBeer);
        return response.data;
    } catch (error) {
        console.log('An error has posting a new beer', error);
    }
}