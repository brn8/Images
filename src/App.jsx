import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [imageList, setImageList]= useState([]);
  useEffect(()=>{
    const fetchDate = async()=>{
      try{
        const response = await fetch(`https://api.unsplash.com/photos/?client_id=${import.meta.env.VITE_ACCESS_KEY
        }`);
        const data = await response.json();
        setImageList(data, );
      }
      catch(err){
        console.log(err);
      }
    }
    fetchDate();

  },[])
  return (
    <>
    
    <h1>CyberConvey.dev</h1>
    {imageList.map((img)=><img src={img.urls.small} style={{height:"300px", width: "300px"}}/>)}
    </>
  )
}

export default App
