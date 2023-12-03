import React from 'react';
import CarList from '@/components/CarList';

import Link from 'next/link';
import styles from '../styles/index.module.scss';

const Home = ({ cars }) => {
  return (
    <div className={styles['page-container']}>
      <div className={styles['card-add']}>
        <h1 className={styles['page-title']}>Каталог автомобилей</h1>
        <Link href='/add-car'>
          <button className={styles['add-car-button']}>Добавить машину</button>
        </Link>
      </div>
      <CarList cars={cars} />
    </div>
  );
};

export async function getStaticProps() {
  try {
    const response = await fetch('http://localhost:3000/api/cars');
    const data = await response.json();

    return {
      props: {
        cars: data,
      },
    };
  } catch (error) {
    console.error('Error fetching car data:', error);
    return {
      props: {
        cars: [],
      },
    };
  }
}

export default Home;
