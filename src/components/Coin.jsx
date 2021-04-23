import { Circle } from '@chakra-ui/react';
const Coin = props => {
  const mouseEnter = () => {
    props.setValue('black');
  };
  return (
    <Circle
      size="40px"
      bg={props.value}
      //   bg="tomato"
      color="white"
      onMouseEnter={mouseEnter}
    ></Circle>
  );
};

export default Coin;
