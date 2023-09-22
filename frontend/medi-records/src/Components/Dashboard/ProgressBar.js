import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate progress over time
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 10);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    // Cleanup the interval on unmount
    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{ width: `${progress}%` , backgroundColor:"#757587",borderRadius:10,height:8}}
      >
      </div>
    </div>
  );
};

export default ProgressBar;
