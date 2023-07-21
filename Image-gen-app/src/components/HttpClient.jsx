import { useEffect, useState } from "react"
import react from 'react'
import axios from 'axios'
function HttpClient(){
    useEffect({

    },[])

    const API_KEY = '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';

    async function getimage(){
        const res = await axions.post(
            "https://api.openai.com/v1/images/generations",
            {
              body : {
                "prompt": "A cute baby sea otter",
                "n": 2,
                "size": "1024x1024"
              }
              
            },
            {
              Headers : {
                Authorization: `Bearer $[API_KEY]`,
                "Content-Type": "application/json"
              }
            }
        )
        const data = await res.json();
          console.log(data);
    }

   /* const getimage = async () => {
       const res = await  axions.post(
            "https://api.openai.com/v1/images/generations",
            {
              body : {
                "prompt": "A cute baby sea otter",
                "n": 2,
                "size": "1024x1024"
              }
              
            },
            {
              Headers : {
                Authorization: `Bearer $[API_KEY]`,
                "Content-Type": "application/json"
              }
            }
          )

          const data = await res;
          console.log(data);
    };*/

    return(
        {getimage}
    );
};

export default HttpClient;