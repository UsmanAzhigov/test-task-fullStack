import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './add-car.module.scss';
import Link from 'next/link';

const AddCar = () => {
  const router = useRouter();

  const [carInfo, setCarInfo] = useState({
    brand: '',
    model: '',
    price: '',
    year: '',
    color: '',
    engineType: 'Бензиновый',
    transmission: 'Автоматическая',
    range: '',
    features: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCarInfo((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? [...prev[name], value] : value,
    }));
  };

  const handleSubmit = () => {
    router.push('/');
  };

  return (
    <div className={styles['add-car-container']}>
      <h1>Add a Car</h1>
      <form>
        {['brand', 'model', 'price', 'year', 'color', 'range'].map((field) => (
          <label key={field} className={styles['form-label']}>
            {field.charAt(0).toUpperCase() + field.slice(1)}:
            <input
              className={styles['form-input']}
              type='text'
              name={field}
              value={carInfo[field]}
              onChange={handleChange}
            />
          </label>
        ))}

        {['engineType', 'transmission'].map((field) => (
          <label key={field} className={styles['form-label']}>
            {field.charAt(0).toUpperCase() + field.slice(1)}:
            <select
              className={styles['form-select']}
              name={field}
              value={carInfo[field]}
              onChange={handleChange}
            >
              {field === 'engineType' ? (
                ['Бензиновый', 'Дизельный', 'Электрический'].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))
              ) : (
                ['Автоматическая', 'Ручная', 'Роботизированная'].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))
              )}
            </select>
          </label>
        ))}
        <label className={styles['form-label']}>Features:</label>
        <div className={styles['checkbox-group']}>
          {[
            'регулировка сидений',
            'камера заднего вида',
            'обогрев руля',
          ].map((feature) => (
            <label key={feature}>
              <input
                type='checkbox'
                name='features'
                value={feature}
                checked={carInfo.features.includes(feature)}
                onChange={handleChange}
              />
              {feature}
            </label>
          ))}
        </div>
        <div className={styles['group-button']}>
          <button className={styles['submit-button']} type='button' onClick={handleSubmit}>
            Submit
          </button>
          <Link href='/'>
            <button className={styles['submit-button']} type='button'>
              Back
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddCar;
 