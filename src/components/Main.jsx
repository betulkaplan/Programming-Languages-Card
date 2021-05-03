import React from 'react';
import Langs from './langs';
import { lang_data } from './lang_data';

export default function Main() {
  const arr = lang_data.map((item) => <Langs name={item.name} />);
  return (
    <div className="main">
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
