import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PlantsAndCustomersContext from '../context/PlantsAndCustomersContext';
import './InvestmentCard.css';

function InvestmentCard({ plant }) {
  const { user } = useContext(PlantsAndCustomersContext);
  let todayRecords;
  let todayTotal = 0;
  let monthTotal = 0;
  let yearTotal = 0;

  // Retorna um boolean se a data passada for igual a de hoje
  function isToday(someDate) {
    const today = new Date();
    return someDate.getDate() === today.getDate()
      && someDate.getMonth() === today.getMonth()
      && someDate.getFullYear() === today.getFullYear();
  }

  // Retorna um boolean se o mês passado for igual ao atual
  function isSameMonth(someDate) {
    const today = new Date();
    return someDate.getMonth() === today.getMonth()
      && someDate.getFullYear() === today.getFullYear();
  }

  // Retorna um boolean se o ano passado for igual ao atual
  function isSameYear(someDate) {
    const today = new Date();
    return someDate.getFullYear() === today.getFullYear();
  }

  // Retorna a soma dos ganhos dos registros passados
  function sumGains(records) {
    return records.reduce(
      (acc, { power_kW: power }) => {
        const { percentageParticipation } = user.plants.find(
          (userPlant) => userPlant.plantId === plant.plantId,
        );
        return acc + (power * 0.95 * (percentageParticipation / 100));
      },
      0,
    );
  }

  // Calcula o total dos investimentos de hoje
  plant.recordsByDate.forEach((record) => {
    if (isToday(new Date(record.date))) {
      todayRecords = record.records;
      todayTotal = sumGains(todayRecords);
    }
  });

  // Calcula o total dos investimentos deste mês
  plant.recordsByDate.forEach((record) => {
    if (isSameMonth(new Date(record.date))) {
      const sameMonthRecords = record.records;
      monthTotal += sumGains(sameMonthRecords);
    }
  });

  // Calcula o total dos investimentos deste ano
  plant.recordsByDate.forEach((record) => {
    if (isSameYear(new Date(record.date))) {
      const sameYearRecords = record.records;
      yearTotal += sumGains(sameYearRecords);
    }
  });

  return (
    <div className="card-container">
      <h3>{`Usina ${plant.plantName}`}</h3>
      <h4>Ganhos hoje</h4>
      <p>{`R$ ${todayTotal.toFixed(2) || 0.00}`}</p>
      <h4>Ganhos neste mês</h4>
      <p>{`R$ ${monthTotal.toFixed(2) || 0.00}`}</p>
      <h4>Ganhos neste ano</h4>
      <p>{`R$ ${yearTotal.toFixed(2) || 0.00}`}</p>
      <Link to={`/graficos/${plant.plantId}`}>Gráficos</Link>
    </div>
  );
}

InvestmentCard.propTypes = {
  plant: PropTypes.shape({
    plantId: PropTypes.number.isRequired,
    plantName: PropTypes.string.isRequired,
    recordsByDate: PropTypes.arrayOf(PropTypes.shape({
      date: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default InvestmentCard;
