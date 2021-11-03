import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import PlantsAndCustomersContext from '../context/PlantsAndCustomersContext';
import RecordsTable from '../components/RecordsTable';
import LineChart from '../components/LineChart';
import './TimeGraph.css';
import calendarIcon from '../images/icons/calendar.png';

function TimeGraph({ match }) {
  const { params: { id } } = match;
  const { plants, user } = useContext(PlantsAndCustomersContext);
  const selectableParams = [
    { value: 'voltage_V', text: 'Tensão' },
    { value: 'current_A', text: 'Corrente' },
    { value: 'power_kW', text: 'Potência' },
    { value: 'temperature_C', text: 'Temperatura' },
  ];

  // Dados para id não existente
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

  // Verifica se usina existe para o usuário
  const userPlantId = user.plants.some(
    ({ plantId }) => plantId === Number(id),
  ) ? Number(id) : 0;

  // Pega as informações da usina
  const { plantName, recordsByDate } = plants.find(
    ({ plantId }) => plantId === userPlantId,
  ) || plantNotFound;

  // Pega o percentual do usuário para a usina
  const { percentageParticipation } = user.plants.find(
    ({ plantId }) => plantId === userPlantId,
  );

  // Inicia records com os dados do primeiro dia no array
  const [records, setRecords] = useState(recordsByDate[0].records);
  const [recordsByParam, setRecordsByParam] = useState(
    recordsByDate[0].records.map(
      ({ voltage_V: voltage, time_h: time }) => ({ param: voltage, time }),
    ),
  );

  // Calcula a potência total no dia
  const powerTotal = records.reduce(
    (acc, { power_kW: power }) => acc + power, 0,
  );

  // Lida com mudanças no select da data
  function setData({ target: { value } }) {
    const currentRecords = recordsByDate.find(({ date }) => date === value);
    setRecords(currentRecords.records);
  }

  // Lida com mudanças no select do parâmetro do gráfico
  function changeRecordsByParam({ target: { value } }) {
    setRecordsByParam(
      records.map(
        ({ [value]: param, time_h: time }) => ({ param, time }),
      ),
    );
  }

  return (
    <div className="time-graph-container">
      <h2 className="title">{`Usina ${plantName}`}</h2>
      <label className="select-date-container" htmlFor="date">
        <h3>Dia</h3>
        <div className="select-date">
          <img width="20px" src={calendarIcon} alt="calendaro icone" />
          <select id="date" onChange={setData}>
            { recordsByDate.map(({ date }) => (<option value={date}>{date}</option>))}
          </select>
        </div>
      </label>
      <RecordsTable records={records} />
      <div className="cash-day">
        <h3>Seu retorno nesse dia</h3>
        <p>
          R$
          {' '}
          {(0.95 * powerTotal * (percentageParticipation / 100)).toFixed(2)}
        </p>
      </div>
      <label htmlFor="data-type" className="select-data-container">
        <h3>Mostrar gráficos para:</h3>
        <select id="data-type" onChange={changeRecordsByParam}>
          {
            selectableParams.map(
              ({ value, text }) => (<option value={value}>{text}</option>),
            )
          }
        </select>
      </label>
      <LineChart records={recordsByParam} />
    </div>
  );
}

TimeGraph.propTypes = {
  match: PropTypes.shape(PropTypes.any).isRequired,
};

export default TimeGraph;
