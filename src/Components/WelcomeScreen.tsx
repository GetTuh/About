import { useEffect } from "react";
import {
  Text,
  Box,
  Center,
  ScaleFade,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
function WelcomeScreen() {
  useEffect(() => {
    onToggle();
    console.log("mount");
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
              Welcome
            </Text>
            <ScaleFade initialScale={0.3} in={isOpen}>
              <Center>
                <Text>Get to know Jakub.</Text>
              </Center>

              <Center m={4}>
                <IconButton aria-label="arrowDown" icon={<ArrowDownIcon />} />
              </Center>
            </ScaleFade>
          </Box>
        </Center>
      </ScaleFade>
    </div>
  );
}

export default WelcomeScreen;
