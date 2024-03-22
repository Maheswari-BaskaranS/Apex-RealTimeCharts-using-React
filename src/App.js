import React from 'react';
import RealTimeLineChart from './RealTimeChart'
import RealTimeLineCharts from './RealTimeLineCharts';
import RealTimeLineSeries from './RealTimeLineSeries';
import DynamicLine from './DynamicLine';
import Realtime from './Realtime';
const App = () => {
  return (
    <div className="app">
      <h1>Real-Time Line Chart</h1>
      <Realtime />
    </div>
  );
};

export default App;
