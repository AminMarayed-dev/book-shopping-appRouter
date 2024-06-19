// import React from 'react'

// function getCookieData({name} : {name : string}) {


//         const value = "; " + document.cookie;
//         const parts = value.split("; " + name + "=");
//        const getCookie = parts?.pop().split(";").shift();
    
//     const encodedString = getCookie;
//     const decodedString = decodeURIComponent(encodedString!);
//     const jsonObject = JSON.parse(decodedString);
// return jsonObject

// }
  

// export default getCookieData

import { TypeUserCookie } from '@/components/single-product/hook/type';
import React from 'react';



const getCookieData = (name: string) => {
    const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith(name + '='));
    
    if (!cookieValue) {
        return null;
    }

    const cookieData = cookieValue.split('=')[1];
    const decodedCookie = decodeURIComponent(cookieData);
   
    try {
        const parsedData = JSON.parse(decodedCookie);
        return parsedData ;
    } catch (error) {
        console.error('Error parsing cookie data:', error);
        return null;
    }
};

export default getCookieData;