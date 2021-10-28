import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import PlantsAndCustomersContext from '../context/PlantsAndCustomersContext';
import RecordsTable from '../components/RecordsTable';

function TimeGraph({ match }) {
  const { params: { id } } = match;
  const { plants, user } = useContext(PlantsAndCustomersContext);
  const plantNotFound = {
    plantName: 'Not Found',
    recordsByDate: [{
      date: '2021-10-27',
      records: [{
        time_h: 0,
        voltage_V: 0,
        current_A: 0,
        power_kW: 0,
        temperature_C: 0,
      }],
    }],
  };
  const userPlantId = user.plants.some(
    ({ plantId }) => plantId === Number(id),
  ) ? Number(id) : 0;
  const { plantName, recordsByDate } = plants.find(
    ({ plantId }) => plantId === userPlantId,
  ) || plantNotFound;
  const { percentageParticipation } = user.plants.find(
    ({ plantId }) => plantId === userPlantId,
  );

  const [records, setRecords] = useState(recordsByDate[0].records);
  const powerTotal = records.reduce(
    (acc, { power_kW: power }) => acc + power, 0,
  );

  function setData({ target: { value } }) {
    const currentRecords = recordsByDate.find(({ date }) => date === value);
    setRecords(currentRecords.records);
  }

  return (
    <div>
      <h2>{`Usina ${plantName}`}</h2>
      <div>
        <label htmlFor="date">
          <h3>Dia</h3>
          <select id="date" onChange={setData}>
            { recordsByDate.map(({ date }) => (<option value={date}>{date}</option>))}
          </select>
        </label>
      </div>
      <RecordsTable records={records} />
      <div>
        <h3>Seu retorno nesse dia</h3>
        <p>
          R$
          {' '}
          {(0.95 * powerTotal * (percentageParticipation / 100)).toFixed(2)}
        </p>
      </div>
      <div>
        <label htmlFor="data-type">
          <h3>Mostrar gráficos para:</h3>
          <select id="data-type">
            {
              ['Potência', 'Temperatura', 'Tensão', 'Corrente'].map(
                (dataType) => (<option value={dataType}>{dataType}</option>),
              )
            }
          </select>
        </label>
      </div>
    </div>
  );
}

TimeGraph.propTypes = {
  match: PropTypes.shape(PropTypes.any).isRequired,
};

export default TimeGraph;
