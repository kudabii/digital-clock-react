import React, {useState, useEffect} from 'react'

export default function DigitalClock(){
  const [time, setTime] = useState(new Date())

  useEffect(()=>{
    const intervalId = setInterval(() => {
      setTime(new Date)
    }, 1000);

    return()=>{
      clearInterval(intervalId);
    }
  },[]);

    function formatTime(time){
      return time.toLocaleTimeString("en-US")
    } 

  return(
    <>
      <div className='clock-container'>
          <div className='clock'>
            <span>{formatTime(time)}</span>
          </div>
      </div>
    </>
  )
}