import react, { useEffect, useState } from "react";
export default function SPLoader(){

    const [text, setText]=useState("")
    const [showImg, setshowImg]=useState(true)

  useEffect(() =>{
    setTimeout(()=>{
      setshowImg(false)
        setText("Welcome to My Page")

    },3000)
  },[])
    
  return(
    <>
      <div>
        {
          showImg ?(
            //<img src="Images/gnu.png"></img>
            "Loading..."
          ):(
            <h3>{text}</h3>
          )
        }
      </div> 
    </>    
    
  )
}