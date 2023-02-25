import { useState } from "react";
import Timer from "@components/Timer"



function VideoPage() {
  
    const url =sessionStorage.getItem("videoUrl")
    const duration:any=sessionStorage.getItem("duration")
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