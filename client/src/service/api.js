import axios from 'axios';

const url = "http://localhost:5000" 



export const getUsers = async () => {
    return  await axios.get(`${url}`);
}


export const getUsersById = async (id) => {
    return await axios.get(`${url}/${id}`);
}

export const addUser = async (user) => {
    console.log("addUser");
    return await axios.post(`${url}/add`, user);
}

export const editUser = async (id,user) => {
    return await axios.put(`${url}/${id}`, user);
}

export const deleteUser = async (id) => {
    console.log("deleted")
    return await axios.delete(`${url}/${id}`);
}