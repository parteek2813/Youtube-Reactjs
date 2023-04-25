import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../constants/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Head = () => {
  //State changer for search input
  const [searchtxt, setSearchtxt] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    //API CALL

    //make an api calla after every key press
    // but if diff b/w two API call <200ms
    // then decline thsi API call.

    const timer = setTimeout(() => {
      if (searchCache[searchtxt]) {
        setSuggestion(searchCache[searchtxt]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchtxt]);

  /*
    //reconciliation
    key i
        - render the component
        - useEffect() will be called
        - start timer => make api call after 200ms

    key ip
        - suppose the user enters another key within the 200ms 
        first input , then
            - destroy the component(useEffect return method )
            Basically javascript waits for none,
            Javascript starts the timer for 200ms and continue to run
            - WHen we press another key stroke , it triggers the 
            - reconcilliation process again and then 
        - re-render the component
        - useEffect() will be called

        //new timer => - start timer => make api call after 200ms

        // suppose 200ms passed in and no other keystrokes detected then it again
        automatically makes an API call.

        // if we make an call within 200ms of next keystroke then old timer is cleared automatically and 
        then timer is created everytime .
     */

  const searchIn = () => {};

  const getSearchSuggestions = async () => {
    // console.log("API CALL-"+ searchtxt);
    const data = await fetch(YOUTUBE_SEARCH_API + searchtxt);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestion(json[1]);

    //update cache
    dispatch(
      cacheResults({
        iphone: [1, 2, 3],
      })
    );
  };

  //where will dispatch an action... I will be dispatching an action
  //by using the useDispatch() hook
  // Use dispatch is an hook that is coming from the react-redux library!
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg ">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-12 cursor-pointer "
          alt="menu"
          src="https://www.svgrepo.com/show/312300/hamburger-menu.svg"
        />
        <a href="/">
          <img
            className="h-12 ml-2"
            alt="yt-logo"
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
          />
        </a>
      </div>

      <div className="col-span-10 px-2 ml-40 ">
        <div className="flex">
          <input
            placeholder="search"
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchtxt}
            onChange={(e) => {
              setSearchtxt(e.target.value);
            }}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          ></input>

          <button
            className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-200"
            type="button"
          >
            <img
              className="cursor-pointer w-5 h-5 "
              alt="upload"
              src="./magnifier.png"
            ></img>
          </button>

          <div className="w-6 m-2.5">
            <img src="./microphone.png" />
          </div>
        </div>

        {showSuggestion && (
          <div className="fixed bg-white py-2 px-2 w-[28.4rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestion.map((s) => (
                <li key={s} className="py-1 px-3 hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1 flex ">
        <div>
          <img
            className="h-8 cursor-pointer px-0.5 ml-2"
            alt="upload"
            src="./upload.png"
          ></img>
        </div>

        <div>
          <img
            className="h-8 cursor-pointer px-1 ml-2"
            alt="noti"
            src="./noti.png"
          ></img>
        </div>

        <div>
          <img
            className="h-8 cursor-pointer px-1 ml-2"
            alt="user"
            src="./user.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Head;
