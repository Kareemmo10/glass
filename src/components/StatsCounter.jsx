import React from 'react';
import CountUp from 'react-countup';

function StatsCounter({ start = 0, end, duration = 2.5, suffix = '', prefix = '', decimals = 0 }) {
  return (
    <CountUp
      start={start}
      end={end}
      duration={duration}
      separator=","
      decimals={decimals}
      decimal="."
      prefix={prefix}
      suffix={suffix}
      enableScrollSpy={true} // This will start the counter when it comes into view
      scrollSpyOnce={false}   // This ensures it only triggers once
    />
  );
}

export default StatsCounter;