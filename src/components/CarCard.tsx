import React from 'react';
import Link from 'next/link';
import styles from '../styles/CarCard.module.scss';

const CarCard = ({car}) => {
    return (
        <div className={styles['car-card']}>
            <Link href={`/car/${car.id}`}>
                <img src={car.image} alt={`${car.brand} ${car.model}`}/>
                <div className={styles['car-details']}>
                    <div className={styles['car-brand']}>{car.brand}</div>
                    <div className={styles['car-model']}>{car.model}</div>
                    <div className={styles['car-price']}>Стоимость: {car.price}</div>
                    <div className={styles['car-year']}>Год выпуска: {car.year}</div>
                    <ul className={styles['car-feature-list']}>
                        {car.features.map((feature, index) => (
                            <li key={index}>
                                <span className={styles['car-feature-icon']}>•</span> {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </Link>
            <Link href={`/edit-car/${car.id}`}>
                <button className={styles['edit-button']}>Edit</button>
            </Link>
        </div>
    );
};

export default CarCard;
