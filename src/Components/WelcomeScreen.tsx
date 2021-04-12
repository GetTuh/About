import { useEffect } from "react";
import {
  Text,
  Box,
  Center,
  ScaleFade,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
function WelcomeScreen() {
  useEffect(() => {
    onToggle();
  }, []);
  const { isOpen, onToggle } = useDisclosure();
  return (
    <div>
      <ScaleFade initialScale={0.9} in={isOpen}>
        <Center h="100vh">
          <Box>
            <Text
              bgGradient="linear(to-l, #7928CA,#FF0080)"
              bgClip="text"
              fontSize="6xl"
              fontWeight="extrabold"
              className="welcomeText"
              m={2}
            >
              Hi!
            </Text>

            <Button>
              Get to know Jakub <ArrowForwardIcon ml={1} />
            </Button>
          </Box>
        </Center>
      </ScaleFade>
    </div>
  );
}

export default WelcomeScreen;
