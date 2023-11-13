import { Heading, Box, Text, Image, Flex } from "@chakra-ui/react";

import rectangle from "../../assets/image/R3.png";

export default function Jumbotron() {
  return (
      <Box width="1440px"  position={"relative"}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Box
            width="958px"
            height="400px"
            flexShrink="0"
            borderRadius="10px"
            background="#BD0707"
          >
            <Box
             p={"10"}
              maxW="2xl"
            
              textAlign={{ base: "center", md: "left" }}
            >
              <Heading
                size="2xl"
                fontWeight="extrabold"
                letterSpacing="tight"
                lineHeight="normal"
                color="white"
              >
              WaysBucks
              </Heading>
              <Text mt={4} fontSize="xl" fontWeight="medium" color="white">
                Lorem ipsum dolor sit amet 
              </Text>
              <Text mt={4} fontSize="xl" fontWeight="medium" color="white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus doloremque rem praesentium nesciunt, vero repellat accusantium placeat iure, temporibus alias, eligendi reiciendis numquam obcaecati voluptatem eveniet. Nam dicta debitis ipsa!
              </Text>
              <Text mt={4} fontSize="xl" fontWeight="medium" color="white">
               Lets Orders........
              </Text>
            </Box>
          </Box>
          <Box
            width="451px"
            height="324px"
            flex-shrink="0"
            position={"absolute"}
            right={0}
          >
            <Image
              src={rectangle}
              alt="Dan Abramov"
              border-radius=" 0px 10px 10px 0px"
            />
          </Box>
        </Flex>
      </Box>
   
  );
}
