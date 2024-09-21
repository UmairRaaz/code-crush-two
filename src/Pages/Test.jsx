import { useState } from 'react';

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
      <button onClick={fetchHealthCheck}>Check Health</button>
      <p>{message}</p> {/* Display the message from the API */}
    </div>
  );
};

export default Test;
