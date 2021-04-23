import { useState } from 'react';
import Coin from '../components/Coin';

const Connect4 = () => {
  const [currentVal, setCurrentVal] = useState('white');
  const generateArray = (col, row) => {
    const matrix = new Array(col)
      .fill(0)
      .map((item, index) =>
        new Array(row).fill(0).map((item2, index2) => index2)
      );
    return matrix;
  };
  generateArray(4, 5);
  //   const grid = array.map(item => {
  //     return <Coin value={currentVal} setValue={setCurrentVal} />;
  //   });
  return <div>{generateArray(4, 5)}</div>;
  //   return grid;
};
export default Connect4;
