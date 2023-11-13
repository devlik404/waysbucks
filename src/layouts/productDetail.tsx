import {
  Flex,
  Box,
  Image,
  Text,
  Avatar,
  Wrap,
  WrapItem,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";

import NavbarSessions from "../components/navbar/navbarSessions";
import { IProduct } from "../interface/product";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import productDummy from "../utils/cards.json";
import topingTeste from "../utils/toping.json";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct | null>(null); 
  
  useEffect(() => {
  
    const selectedProduct = productDummy.find(
      (item) => item.id === parseInt(id, 10)
    );

    if (selectedProduct) {
      setProduct(selectedProduct);
     
    }
  }, [id]);

  return (
    <>
      <NavbarSessions />

      <Flex h={"100vh"} mt={"-24"} justifyContent={"center"} gap={"20"}>
        <Box width="1440px" boxSize="lg" h={"80vh"} mt={"24"}>
          <Image width="1440px" src={product?.image} />
        </Box>
        <Box h={"80vh"} mt={"24"}>
          <Text
            color="#BD0707"
            fontSize="48px"
            fontStyle="normal"
            fontWeight="900"
            lineHeight="normal"
          >
            {product?.title}
          </Text>
          <Text
            color="#974A4A"
            fontSize="24px"
            fontStyle="normal"
            fontWeight="400"
            mt={"5"}
          >
            Rp.{product?.price}
          </Text>

          <Box pt={"20"}>
            <Text
              color="#974A4A"
              fontSize="24px"
              fontStyle="normal"
              fontWeight="800"
            >
              Toping
            </Text>

            <Box p={"5"}>
              <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                {topingTeste.map((teste, i) => (
                  <GridItem colSpan={1} key={i} p={1} mt={5}>
                    <Wrap
                      display={"flex"}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <WrapItem>
                        <Avatar src={teste.image_taste} />
                      </WrapItem>
                    </Wrap>
                    <Text textAlign="center">{teste.taste}</Text>
                  </GridItem>
                ))}
              </Grid>
            </Box>
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              p={"5"}
              mt={"5"}
            >
              <Box>
                <Text
                  color="#974A4A"
                  fontSize="24px"
                  fontStyle="normal"
                  fontWeight="900"
                  lineHeight="normal"
                >
                  Total:
                </Text>
              </Box>
              <Box>
                <Text
                  color="#974A4A"
                  fontSize="24px"
                  fontStyle="normal"
                  fontWeight="900"
                  lineHeight="normal"
                >
                  {" "}
                  Rp.{product?.price}
                </Text>
              </Box>
            </Flex>
            <Box mt={"10"}>
              <Button colorScheme="red" variant="solid" w={"100%"}>
                Add Cart
              </Button>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
