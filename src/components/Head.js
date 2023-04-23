import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head =() =>{

    //State changer for search input
    const [searchtxt, setSearchtxt] = useState("");
   

    const searchIn = ()=>{
        
    }


    //where will dispatch an action... I will be dispatching an action 
    //by using the useDispatch() hook
    // Use dispatch is an hook that is coming from the react-redux library! 
    const dispatch = useDispatch();

    const toggleMenuHandler= () =>{
        dispatch(toggleMenu())
    }
    return(
        <div className="grid grid-flow-col p-2 m-2 shadow-lg ">
    <div className="flex col-span-1 ">
    

    <img onClick={()=>toggleMenuHandler()} className="h-12 cursor-pointer " alt="menu" src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"/>
    <a href="/">
    <img className="h-12 ml-2" alt="yt-logo" src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"/>
    </a>
    </div>

    <div className="col-span-10 px-2 ml-40">

         <input  placeholder="search" className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" value={searchtxt} onChange={(e)=>{
            setSearchtxt(e.target.value);
         }}  >


         </input>
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-200">
        🔍
        </button>
    </div>

         <div className="col-span-1 flex ">

      
        <div >
        <img className="h-8 cursor-pointer px-0.5 ml-1" alt="upload" src="https://www.iconbolt.com/preview/twitter/remix-icon-line/video-upload.svg"></img>
        </div>


        <div >
        <img className="h-8 cursor-pointer px-1 ml-1" alt="noti" src="https://static.vecteezy.com/system/resources/previews/006/086/198/original/notification-icon-for-web-vector.jpg"></img>
        </div>


        <div >
        <img className="h-8 cursor-pointer px-1 ml-1" alt="user" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"></img>
        </div>

        </div>


        </div>
       
    )
}

export default Head;
