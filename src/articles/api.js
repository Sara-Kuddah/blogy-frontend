import apiURL from '../apiConfig';
import axios from 'axios';



 const getAllArticles = ()=>{
  return axios.get(`${apiURL}/articales`);                  
};

const deleteArticleByID =(id)=>{
    return axios.delete(`${apiURL}/articales/${id}`)
}

export {getAllArticles,deleteArticleByID};