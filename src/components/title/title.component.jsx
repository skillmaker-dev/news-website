import React from 'react';
import './title.style.css';

export default function Title(props) {
  return <h2 className="titles">{props.text}</h2>;
}
