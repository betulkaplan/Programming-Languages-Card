import React from 'react';
import React_top from './images/react_top.svg';
import Langs from './langs';
import { lang_data } from './lang_data';

export default function Main() {
  const arr = lang_data.map((item) => (
    <Langs name={item.name} logo={item.img} options={item.options} />
  ));
  return (
    <div className="main">
      <div className="header">
        <img className="top_img" src={React_top} alt="" />
      </div>
      <div className="card">
        <div className="ribbon"></div>
        <div className="box">
          <h1 className="title">Languages</h1>
          {arr}
        </div>
      </div>
    </div>
  );
}
