import React from 'react';
import PropTypes from 'prop-types';

function RecordsTable({ records }) {
  const voltageAvg = records.reduce(
    (acc, { voltage_V: voltage }) => acc + voltage, 0,
  ) / 24;
  const currentAvg = records.reduce(
    (acc, { current_A: current }) => acc + current, 0,
  ) / 24;
  const temperatureAvg = records.reduce(
    (acc, { temperature_C: temperature }) => acc + temperature, 0,
  ) / 24;
  const powerAvg = records.reduce(
    (acc, { power_kW: power }) => acc + power, 0,
  ) / 24;
  const powerTotal = records.reduce(
    (acc, { power_kW: power }) => acc + power, 0,
  );

  return (
    <table>
      <tr>
        <td>Tensão Média / Hora</td>
        <td>
          {voltageAvg.toFixed(2)}
          {' '}
          V
        </td>
      </tr>
      <tr>
        <td>Corrente Média / Hora</td>
        <td>
          {currentAvg.toFixed(2)}
          {' '}
          A
        </td>
      </tr>
      <tr>
        <td>Temperatura Média / Hora</td>
        <td>
          {temperatureAvg.toFixed(2)}
          {' '}
          °C
        </td>
      </tr>
      <tr>
        <td>Potência Média / Hora</td>
        <td>
          {powerAvg.toFixed(2)}
          {' '}
          kW
        </td>
      </tr>
      <tr>
        <td>Potência Total</td>
        <td>
          {powerTotal.toFixed(2)}
          {' '}
          kW
        </td>
      </tr>
    </table>
  );
}

RecordsTable.propTypes = {
  records: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default RecordsTable;
