import { useState } from "react";
import Timer from "@components/Timer"



function VideoPage() {
  
  
    let url :any=sessionStorage.getItem("videoUrl")
    let duration:any=sessionStorage.getItem("duration")
    const [showTimer, setShowTimer] = useState<boolean>(true);
  
    if (typeof sessionStorage !== 'undefined') {
       url =sessionStorage.getItem("videoUrl")
       duration=sessionStorage.getItem("duration")
    }
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