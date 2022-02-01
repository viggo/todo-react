import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Hilsen() {
  let { navn } = useParams();

  return (
    <>
      <h2>Dette er siden til</h2>
      <p>{navn}</p>
    </>
  );
}
