import { Flex, FormControl, Input,Box,Text,Image } from "@chakra-ui/react";
import "../../assets/css/index.css"
import NavbarSessions from "../../components/navbar/navbarSessions";


export default function AddProduct() {
  return (
    <>
    <NavbarSessions/>
      <Flex h={"100vh"} mt={"-24"} justifyContent={"center"} gap={"50"} p={"16"}>
        <Box flex={"1"} h={"80vh"} mt={"24"} >
          <Text fontSize={"36px"} fontWeight={800} className="color-text">Product</Text>
          <FormControl isRequired  isInvalid className="form-margin">
            <Input placeholder="Product Name" />
          </FormControl>
          <FormControl isRequired  isInvalid  className="form-margin">
            <Input placeholder="Price" />
          </FormControl>
          <FormControl isRequired  isInvalid  className="form-margin" >
            <Input placeholder="Image Product" type="file"/>
          </FormControl>
          <Box w={"100%"}  mt={"100px"}>
              <button className="Button">Add Toping</button>
            </Box>
        </Box>
        <Box flex={"1"} h={"80vh"} mt={"24"} className="flex-class">
        <Box>
  <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov'  w={"436px"} h={"555px"} borderRadius={"10px"}/>
</Box>
        </Box>
      </Flex>
    </>
  );
}
