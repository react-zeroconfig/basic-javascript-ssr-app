import React, { useState } from 'react';
import { Title } from './components/Title';

require('./style.scss');

export function App({initialState}) {
  const [value, setValue] = useState(() => initialState.serverValue);
  
  function updateValue() {
    setValue('CLIENT VALUE : ' + Date.now());
  }
  
  return (
    <Title text={value} onClick={updateValue}/>
  );
}