import React, { useContext } from 'react';
import PlantsAndCustomersContext from '../context/PlantsAndCustomersContext';
import InvestmentCard from '../components/InvestmentCard';
import './Wallet.css';

function Wallet() {
  const { plants, user } = useContext(PlantsAndCustomersContext);

  return (
    <main className="wallet-container">
      <h2 className="title">{ `Olá ${user.userName}!` }</h2>
      <h3 className="subtitle">Seus Investimentos</h3>
      <div className="cards-container">
        {
          plants.map((plant) => {
            if (user.plants.some((userPlant) => plant.plantId === userPlant.plantId)) {
              return (<InvestmentCard plant={plant} />);
            }
            return null;
          })
        }
      </div>
    </main>
  );
}

export default Wallet;
