import { useState } from "react";
import Timer from "@components/Timer"


function VideoPage() {
    const url =window.localStorage.getItem('videoUrl')?.toString();
    const duration:any=window.localStorage.getItem('duration');
    const [showTimer, setShowTimer] = useState<boolean>(true);
  
    function handleTimerEnd() {
      

      setShowTimer(true);
    }
  
    return (
        <>
        {showTimer && <Timer millis={duration} onTimerEnd={handleTimerEnd} />}

      <div style={{ backgroundColor: '#000', height: '100vh', position: 'relative' }}>

        <video controls autoPlay muted style={{ width: '100%', height: '100%' }}>
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </div>
      </>
    );
  }
  
  export default VideoPage;