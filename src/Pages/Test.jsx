import { useState } from 'react';
import ChatBox from '../components/Chatbot/ChatBot';

const Test = () => {
  const [message, setMessage] = useState(''); 

  const fetchHealthCheck = async () => {
    try {
      const response = await fetch('https://codecrushbackend.vercel.app/healthcheck', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data)
      setMessage(data.message); 
    } catch (error) {
      console.error('Error fetching health check:', error);
      setMessage('Failed to fetch health check');
    }
  };

  return (
    <div className='min-h-screen my-40'>
      <ChatBox/>
    </div>
  );
};

export default Test;
