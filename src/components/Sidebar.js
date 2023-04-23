import React from 'react'
import { useSelector } from 'react-redux';
import store from '../utils/store';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    // When we click on that hamburger menu, an action is dispatched
    // which calls the reducer function, which modifies the slice of our
    // redux store and our sidebar redux function has been subscribed to 
    // the redux store and it then changes its state by toggle menu.


    //early return pattern!
    if(!isMenuOpen) return null;

  return (

    <div className='w-60 p-2'>

    <div className='p-5 shadow-lg w-48 text-lg '>


    
    <div className='font-bold border-t-4  py-4'> 
    <ul>
        <li> <Link to="/">Home </Link> </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
    </ul>
    </div>

    <h1 className='font-bold border-t-4  py-4'>
        Subscriptions
    </h1>

    <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
    </ul>



    <h1 className='font-bold border-t-4 pt-5  py-4'>
        Watch Later
    </h1>

    <ul>
        <li>1st Video</li>
        <li>2nd Video</li>
        <li>3rd Video</li>
        <li>4th Video</li>
    </ul>




    <h1 className='font-bold border-t-4 pt-5 py-4'>
        More from YouTube
    </h1>
    
    <div className='flex '>
        <img className='w-8 h-8 ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmqNi9H04otfOdxNYX6GtI-zM3v5HHEkBDBdp1wmQHPw&usqp=CAU&ec=48665698'></img>
        <p>YT Premium</p>
    </div>

    <div className='flex '>
        <img className='w-8 h-8 ' src='https://upload.wikimedia.org/wikipedia/commons/d/d8/YouTubeMusic_Logo.png'></img>
        <p>YT Music</p>
    </div>

    <div className='flex '>
        <img className='w-8 h-8 ' src='https://static.vecteezy.com/system/resources/thumbnails/017/396/826/small_2x/youtube-studio-icons-free-png.png'></img>
        <p>YT Studio</p>
    </div>

    <div className='flex '>
        <img className='w-8 h-8 ' src='https://static.vecteezy.com/system/resources/previews/017/396/821/original/youtube-kids-google-apps-logo-free-png.png'></img>
        <p>YT Kids</p>
    </div>

    </div>



    </div>
  )
}

export default Sidebar