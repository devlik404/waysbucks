import {
  Box,
  Heading,
  Stack,
  Image,
  Text,
  Card,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/react";

import cardsDummy from "../../utils/cards.json";
import { Link } from "react-router-dom";

export default function Cards() {
  return (
    <>
      <Center p={"14"}>
        <Box maxW="1440px">
          <Text
            color="#BD0707"
            fontSize="36px"
            fontWeight="900"
            lineHeight="normal"
            mb={"14"}
          >
            Let's Order
          </Text>

          <Grid templateColumns="repeat(4, 1fr)" gap={"16"} maxW="1440px">
            {cardsDummy.map((data) => (
              <GridItem colSpan={1}>
                <Link to={`/productDetail/${data.id}`}>
                  <Card
                    width="241px"
                    height="392px"
                    borderRadius={"10px"}
                    bg={"#F6DADA"}
                    key={data.id}
                  >
                    <Image src={data.image} width="241px" height="312px" />
                    <Stack mt={2} spacing={3} m={2}>
                      <Heading
                        size="md"
                        color={"#BD0707"}
                        font-size="18px"
                        fontWeight="900"
                      >
                        {data.title}
                      </Heading>
                      <Text fontSize="2xl"
                       color={"#974A4A"}
                       font-size="14px"
                       fontWeight="400"
                       >Rp.{data.price}</Text>
                    </Stack>
                  </Card>
                </Link>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Center>
    </>
  );
}
