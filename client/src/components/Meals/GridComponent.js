import React from 'react';
import classes from './GridComponent.module.css';

const GridComponent = ({ list, columns }) => {
  return (
    <div className={classes['grid-container']}>
      {list.map((item, index) => (
        <div className={classes['grid-item']} key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default GridComponent;
