import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import ConmmentsCon from './ConmmentsCon';

const WatchPage = () => {

    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));

    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(closeMenu());
    },[])


    
  return (
    
    <div className='flex flex-col'>
    <div className='px-5'>
    <iframe 
        width="1000" 
        height="500" 
        src={"https://www.youtube.com/embed/"+ searchParams.get("v")} 
        title="Biggest Meetup In Jaipur With Babu Bhaiya😍" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>     
    </iframe>
   
    </div>
    <ConmmentsCon></ConmmentsCon>
    </div>
    
  );
};

export default WatchPage;