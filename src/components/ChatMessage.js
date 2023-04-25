import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex text-center flex flex-row m-2">
      <img
        className="h-7 w-9 cursor-pointer px-1 ml-2"
        alt="user"
        src="./user.png"
      ></img>

      <span className="font-bold px-2 ">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
