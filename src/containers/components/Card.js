import React from 'react';
import style from './Card.module.css';
import format from 'date-fns/format';

const Card = (info) => {
  let date1 = new Date(info.data.timestamp).toLocaleString('en-GB');
  // let date2 = moment(date1, 'DD/MM/YYYY').format('Do MMMM YY, h:mm:ss a');
  // issue is it is trying to read 22/09/2016 as american date so there is no 22nd month
  let date2 = format(new Date(), 'do, MMM, yyy, ');
  console.log(date1, date2, 'what is date 2?');

  return (
    <div className={style.Card}>
      {info.data.avatar ? <img src={info.data.avatar} alt="users avatar" height="50px" /> : ''}
      <section className={style.Section}> {info.data.message}</section>
      <section className={style.Section}>{date1}</section>
      <div className={style.hide}>{info.data.email}</div>
    </div>
  );
};

export default Card;
