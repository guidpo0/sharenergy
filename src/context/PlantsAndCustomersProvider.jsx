import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlantsAndCustomersContext from './PlantsAndCustomersContext';
import customerData from '../dadosClientes.json';
import plantsData from '../dadosUsina.json';

function PlantsAndCustomersProvider({ children }) {
  const [customers, setCustomer] = useState(customerData);
  const [plants, setPlants] = useState(plantsData);

  const contextValue = {
    customers,
    setCustomer,
    plants,
    setPlants,
  };

  return (
    <PlantsAndCustomersContext.Provider value={contextValue}>
      {children}
    </PlantsAndCustomersContext.Provider>
  );
}

PlantsAndCustomersProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PlantsAndCustomersProvider;
