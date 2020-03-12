import apiURL from '../apiConfig';
import axios from 'axios';



 const getAllArticles = ()=>{
  return axios.get(`${apiURL}/articales`);

                     
};

export {getAllArticles,};