import React from 'react';

export default function Stats({ question, answer }) {
  return (
    <li>
      <h2>{question}</h2>
      <p>{answer}</p>
    </li>
  )
}