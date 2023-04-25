import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomString } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [commenttxt, setcommenttxt] = useState();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomString(20) + "🚀",
        })
      );
    }, 800);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>

      <form
        className="w-[99%] p-2 ml-3 mt-2 border border-black flex flex-row"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form submmitted.", commenttxt);

          dispatch(
            addMessage({
              name: "Parteek",
              message: commenttxt,
            })
          );
        }}
      >
        <input
          className="px-2 w-96"
          placeholder=""
          type={commenttxt}
          onChange={(e) => {
            setcommenttxt(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
