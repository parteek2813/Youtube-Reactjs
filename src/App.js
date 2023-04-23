import "./App.css"
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  //All these children goes where my router outlet is: 
  // which is in the body component!
  children: [
    {
      path: "/",
      element: <MainContainer></MainContainer>
    },
    {
      path: "watch",
      element: <WatchPage></WatchPage>
    },
  ]
}])

function App() {
  

  return (

    <Provider store = {store}>

   
    <div >

   
      <Head />
      <RouterProvider router={appRouter}/>

     {/**
       * Head
       *Body
       * sidebar
        --- Menuitems
        *Main container
            Buttonlist
            videocontainer
            --video card
       **/ }
    </div>
    </Provider>
  );
}

export default App;
