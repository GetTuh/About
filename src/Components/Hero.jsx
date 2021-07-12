import { useEffect } from 'react';
import {
  Text,
  Box,
  Container,
  ScaleFade,
  useDisclosure,
} from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

function WelcomeScreen() {
  useEffect(() => {
    onToggle();
    // eslint-disable-next-line
  }, []);
  const dismount = () => {
    onToggle();
    setTimeout(() => {}, 100);
  };
  const { isOpen, onToggle } = useDisclosure();
  return (
    <div>
      <ScaleFade initialScale={0.9} in={true}>
        <Container>
          <Text
            color="purple.300"
            fontSize="2m"
            fontWeight="extrabold"
            className="heroOneText"
            m={2}
          >
            I'm an energetic person interested in everything that conducts
            electricity and I've been interacting with computers since as long
            as I can remember. I've developed a teamwork spirit and leadership
            skills thanks to many european exchanges I've been a part of.
          </Text>
          <Box boxSize="sm">
            <Image
              src="https://siasky.net/MAC58lPRU4t8UL2FzV2ICI_VAai9YSzlXw6wVUiq0WIVjA"
              alt="Face Image"
            />
          </Box>
        </Container>
      </ScaleFade>
    </div>
  );
}

export default WelcomeScreen;
