import React,{useState,useEffect} from 'react'
import axios from 'axios'

const ImageGallery = () => {
  

const [images,setImages]=useState([])

useEffect(() => {
    axios.get('http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0')
    .then(res=>setImages(res.data))
    
}, [])


return (
    
        <div className="row" >
            {images.map((data,index)=>(
                <div className="col-md-6 col-lg-3" key={index}>
                    <a href={data.urls.small} target="_blank"><img id="img" className="p-3" src={data.urls.small} alt="" /></a>
                </div>
            ))}

         
        </div>
    
    )
}

export default ImageGallery
