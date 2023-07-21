import { useEffect, useState } from "react" 
import axios from "axios"
import HttpClient from "./components/HttpClient"

import './App.css'

function App() {
  const [image, setImage] = useState([])

  //const API_KEY = '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';

  useEffect(() => {
   
    //getimage();
    /*const res = axios.post(
    'https://api.openai.com/v1/images/generations',
    request_data,
      {
        "prompt": "A cute baby sea otter",
        "n": 2,
        "size": "1024x1024"
      },
      {
        Headers : {
          Authorization: 'Bearer'+ Process.env[API_KEY],
          "Content-Type": "application"
        }
      }
    ).then((res)=>
      console.log('res'.res.data)
    )*/

    /*function getimage()
    {
      axions.post(
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
      ).then((res)=>
      console.log(res)
    )
    }*/
    
  },[]);

  
  return (
    <>
      hello world
      <HttpClient></HttpClient>

    </>
  )
}

export default App
