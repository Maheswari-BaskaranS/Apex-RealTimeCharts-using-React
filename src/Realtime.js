import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const Realtime = () => {
  const [options, setOptions] = useState({
    chart: {
      type: 'line',
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000
        }
      },
      toolbar: {
        show: false
      }
    },
    series: [{
      name: 'Series 1',
      data: []
    }],
    xaxis: {
      type: 'datetime',
      labels: {
        formatter: function(val) {
          return new Date(val).toLocaleTimeString();
        }
      }
    },
  });

  const [seriesData, setSeriesData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newSeriesData = [...seriesData, {
        x: new Date().getTime(),
        y: Math.floor(Math.random() * 100) // Random value for demonstration
      }];
      setSeriesData(newSeriesData);
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, [seriesData]);

  useEffect(() => {
    setOptions({ ...options, series: [{ ...options.series[0], data: seriesData }] });
  }, [seriesData]);

  return (
    <div>
      <Chart options={options} series={options.series} type="line" width={500} height={300} />
    </div>
  );
};

export default Realtime;
