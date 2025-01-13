import React from 'react';
import styles from './Work.module.css';

const Work = ({id}) => {
  console.log(id)
  return (
    <div>
      {image ? (
        <div
          className={styles.pic}
          style={{ backgroundImage: `url('data:image/*;base64,${image}')` }}
        ></div>
      ) : ""}

      <div className={styles.blog}>
        <h1 className={styles.title} placeholder="Blog Title..">
          {result.topic}
        </h1>
        <p className={styles.date}>{fd}</p>
        <p className={styles.title} id={styles.b}>
          {result.blog}
        </p>
      </div>
    </div>
  );
};

export default Work;
