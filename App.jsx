import { useEffect, useState } from "react";
import { IoMdRefresh } from "react-icons/io";
import { VscTriangleRight } from "react-icons/vsc";
import { CiPause1 } from "react-icons/ci";
import "./App.css";

function App() {
  const [play, setPlay] = useState(false);
  const [sec, setSec] = useState(0);

  function playTimer() {
    setPlay((prev) => {
      return prev ? false : true;
    });
  }

  useEffect(() => {
    let interval = null;
    if (play) {
      interval = setInterval(() => {
        setSec((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  });

  function formatTimer(sec) {
    const hrs = String(Math.floor(sec / 3600)).padStart(2, "0");
    const secs = String(Math.floor(sec % 60)).padStart(2, "0");
    const min = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");

    return `${hrs}:${min}:${secs}`;
  }

  function refresh(){
    setSec(0);
    setPlay(false);

  }

  return (
    <>
      <div className="main-box">
        <IoMdRefresh className="refresh" onClick={refresh}/>
        <p id="time">{formatTimer(sec)}</p>
      </div>
      <button className="resume" onClick={playTimer}>
        {play ? <CiPause1 /> : <VscTriangleRight />}
      </button>
    </>
  );
}

export default App;
