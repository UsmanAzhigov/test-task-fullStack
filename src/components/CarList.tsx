import React from 'react';
import CarCard from './CarCard';
import styles from '../styles/CarList.module.scss';

const CarList = ({ cars }) => {
  return (
    <div className={styles['car-list']}>
      {cars.map((car, id) => (
        <CarCard key={id} car={car} />
      ))}
    </div>
  );
};

export default CarList;