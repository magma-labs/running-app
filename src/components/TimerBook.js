import React from "react";
import "./ExploreContainer.css";
import Timer from "react-compound-timer";

const TimerBook = () => {
  return (
    <Timer initialTime={0} startImmediately={false}>
      {({ start, resume, pause, stop, reset, timerState }) => (
        <React.Fragment>
          <div className="timer">
            <div style={{ paddingRight: 5 }}>
              <Timer.Hours /> hours
            </div>
            <div style={{ paddingRight: 5 }}>
              <Timer.Minutes /> minutes
            </div>
            <div style={{ paddingRight: 5 }}>
              <Timer.Seconds /> seconds
            </div>
          </div>
          <br />
          <div className="timer">
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
          </div>
        </React.Fragment>
      )}
    </Timer>
  );
};

export default TimerBook;
