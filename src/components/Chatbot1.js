import React, { useState } from 'react';
import { Chatbot } from 'react-chatbot-kit';
import axios from 'axios';
import "./Chatbot1.css";
import { IoIosChatbubbles } from "react-icons/io";

const Chatbot1 = () => {
  const [showBot, toggleBot] = useState(false);
  const [result, setResult] = useState(null);

  const config = {
    botName: 'MyChatbot',
    lang: 'en',
    customStyles: {
      botMessageBox: {
        backgroundColor: '#376B7E',
      },
      chatButton: {
        backgroundColor: '#376B7E',
      },
    },
    customComponents: {},
  };

  const handleOnToggle = () => {
    toggleBot(!showBot);
  };

  const handleOnMessage = async (message) => {
    const response = await axios.post('<chatbot-api-url>', {
      message,
    });
    setResult(response.data);
  };

  return (
    <div className='commonChatbot'>
      <IoIosChatbubbles className='text-white fs-1' width={50} onClick={handleOnToggle}/>
      {showBot && (
        <Chatbot
        className="text-white"
          config={config}
          messageParser={null}
          actionProvider={null}
          messageHistory={[]}
          onMessage={handleOnMessage}
        />
      )}
    </div>
  );
};

export default Chatbot1