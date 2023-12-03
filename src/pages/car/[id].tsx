import {useRouter} from 'next/router';
import Link from 'next/link';
import styles from './car-details.module.scss';

const CarDetails = () => {
    const router = useRouter();
    const {id} = router.query;
    
    const cars = [
        {
            id: 1,
            image:
                'https://api2.ma.ru/images/models/toyota/camry/28652/28652_medium.jpg',
            brand: 'Toyota',
            model: 'Camry',
            price: '$30,000',
            year: 2022,
            color: 'Синий',
            engineType: 'Бензиновый',
            transmission: 'Автоматическая',
            range: null,
            features: ['регулировка сидений', 'камера заднего вида', 'обогрев руля'],
        },
    ];

    const car = cars.find((car) => car.id === Number(id));

    if (!car) {
        return <div className={styles['loading']}>Loading...</div>;
    }

    return (
        <div className={styles['car-details-container']}>
            <Link href="/">
                <button className={styles['back-button']}>Back to Home</button>
            </Link>
            <h1 className={styles['car-title']}>{`${car.brand} ${car.model}`}</h1>
            <img src={car.image} alt={`${car.brand} ${car.model}`} className={styles['car-image']}/>
            <div className={styles['details']}>
                <p className={styles['detail']}>Price: {car.price}</p>
                <p className={styles['detail']}>Year: {car.year}</p>
                <p className={styles['detail']}>Color: {car.color}</p>
                <p className={styles['detail']}>Engine Type: {car.engineType}</p>
                <p className={styles['detail']}>Transmission: {car.transmission}</p>
                {car.engineType === 'Бензиновый' && (
                    <p className={styles['detail']}>Range: {car.range} km</p>
                )}
            </div>
            <div className={styles['features']}>
                <h2>Features:</h2>
                <ul className={styles['features-list']}>
                    {car.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CarDetails;
