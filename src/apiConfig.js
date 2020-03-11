let apiURL;
const expressProt =5000
const apiUrls={
    development :`http://localhost:${expressProt}/api`,
    production :`https://aqueous-atoll-85096.herokuapp.com/api`,
}

if(window.location.hostname==='localhost'){
    apiURL= apiUrls.development;
    }
    else{
     apiURL= apiURL.production;   
    }

export default apiURL;
