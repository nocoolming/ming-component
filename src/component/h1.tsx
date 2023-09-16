import { forwardRef } from 'react';

const H1 = forwardRef(function H1(props, ref) {
  return <h1>{props.children}</h1>;
});

export default H1;
