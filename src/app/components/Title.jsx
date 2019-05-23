import React from 'react';

export function Title({text, onClick}) {
  return <h1 onClick={onClick}>{text}</h1>;
}