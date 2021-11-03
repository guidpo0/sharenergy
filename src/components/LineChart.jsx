import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import './LineChart.css';

function LineChart({ records }) {
  // Prepara a legenda dos dados do gráfico
  const labels = records.map(({ time }) => time.toFixed(2));

  // Prepara os dados do gráfico
  const data = records.map(({ param }) => param);
  return (
    <div className="line-chart-container">
      <Line
        className="line-chart"
        data={{
          labels,
          datasets: [{
            label: 'Tensão (V)',
            data,
            backgroundColor: 'rgb(0, 0, 0)',
            borderColor: 'rgb(0, 0, 0)',
            borderWidth: 1,
          }],
        }}
        options={{
          responsive: false,
        }}
        width="1500"
        height="400"
      />
    </div>
  );
}

LineChart.propTypes = {
  records: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default LineChart;
