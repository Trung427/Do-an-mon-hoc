// components/Greeting.tsx
import React from 'react';

type Props = {
  name: string;
};

const Greeting: React.FC<Props> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default Greeting;
