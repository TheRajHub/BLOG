import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css'; // assuming you have a CSS module for styles

const Card = ({ id, img, topic, date, onclick}) => {
  const da = new Date(date);
  const year = da.getFullYear();
  const month = da.getMonth();
  const day = da.getDate();
  const formattedDate = `${day}-${month + 1}-${year}`;

  const image = img ? `data:image/*;base64,${img.toString('base64')}` : null;

  return (
    <div key={id} onClick={()=>{onclick(id)}}className={styles.cards} id={id}>
      <div
        className={styles.ig}
        style={image ? { backgroundImage: `url(${image})` } : { backgroundColor: 'rgb(255, 238, 232)' }}
      />
      <section>{topic}</section>
      <section className={styles.date}>{formattedDate}</section>
    </div>
  );
};


export default Card;
