import { api } from "./api.js";

const dataEndpoints = {
    getAll: "data/characters?sortBy=_createdOn%20desc",
    getSingleCharacter : 'data/characters/',
    createCharacter: 'data/characters',
}

async function getAllCharacters(){
    return api.get(dataEndpoints.getAll)
}

async function getSingleCharacter(id){
    return api.get(dataEndpoints.getSingleCharacter + id)
}

async function delCharacter(id){
    return api.del(dataEndpoints.getSingleCharacter+ id)
}

async function createCharacter(data){
    return api.post(dataEndpoints.createCharacter, data)
}

async function updateCharacter(id, data){
    return api.put(dataEndpoints.getSingleCharacter + id, data)
}

export const dataService = {
    getAllCharacters,
    getSingleCharacter,
    delCharacter,
    createCharacter,
    updateCharacter
}