import axios from 'axios';

const  setAuthToken = token =>{
    if(token){
      axios.defaults.headers.common['x-auth-token'] = token;

    }
    else{
      delete axois.defaults.headers.common['x-auth-token']
    }
}
export default setAuthToken;