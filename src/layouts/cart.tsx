import {
  Box,
  Divider,
  Flex,
  Text,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  FormControl,
  Input,
  Textarea
} from "@chakra-ui/react";
import NavbarSessions from "../components/navbar/navbarSessions";
import "../assets/css/index.css";
export default function Carts() {
  return (
    <>
      <NavbarSessions />
      <Flex
        h={"100vh"}
        mt={"-24"}
        justifyContent={"center"}
        gap={"20"}
        p={"20"}
      >
        <Box flex={".5"} h={"80vh"} mt={"24"}>
          <Text mb={5} className="custom-text">
            My Cart
          </Text>
          <Box h={"263px"}>
            <Text mb={5} className="color-1">
              Review Your Order
            </Text>
            <Divider color={"red"} p={"2"}/>
            <Box pt={5} mb={"5"}>
              <Flex gap={5}>
                <Box >
                  <Image
                    boxSize="100px"
                    borderRadius={"10px"}
                    objectFit="cover"
                    src="https://bit.ly/dan-abramov"
                    alt="Dan Abramov"
                  />
                </Box>
                <Box flex={"1"}>

                <Box className="flex-beetween" mb={"5"}>
                  <Text fontSize={"14px"} fontWeight={900} className="color-text">Ice Coffe</Text>
                  <Text fontSize={"14px"} fontWeight={400} className="color-text">Rp.39000</Text>
                </Box>
                <Box className="flex-beetween">
                  <Text className="color-text" fontSize={"14px"} fontWeight={400}>Toping :</Text>
                  <Text className="color-text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 17.2322C10.3236 17.2322 10.5859 16.9698 10.5859 16.6462V8.77869C10.5859 8.45509 10.3236 8.19275 10 8.19275C9.67641 8.19275 9.41406 8.45509 9.41406 8.77869V16.6462C9.41406 16.9698 9.67641 17.2322 10 17.2322Z" fill="#BD0707"/>
  <path d="M6.77385 16.7012C6.80432 17.024 7.09084 17.26 7.41229 17.2295C7.73447 17.1991 7.97096 16.9132 7.94053 16.591L7.19764 8.72351C7.16721 8.40136 6.8819 8.1648 6.5592 8.19527C6.23701 8.2257 6.00053 8.51152 6.03096 8.83371L6.77385 16.7012Z" fill="#BD0707"/>
  <path d="M12.588 17.2295C12.9098 17.2599 13.196 17.0237 13.2264 16.7013L13.9693 8.83373C13.9998 8.51154 13.7632 8.22572 13.4411 8.19529C13.1184 8.16467 12.8331 8.40139 12.8027 8.72354L12.0598 16.5911C12.0293 16.9132 12.2659 17.1991 12.588 17.2295Z" fill="#BD0707"/>
  <path d="M2.25195 6.59668H2.60223L4.29941 19.4905C4.33777 19.7821 4.58629 20 4.88035 20H15.12C15.4141 20 15.6625 19.7821 15.7009 19.4905L17.3981 6.59668H17.7484C18.072 6.59668 18.3343 6.33434 18.3343 6.01074V3.44711C18.3343 3.12352 18.072 2.86117 17.7484 2.86117H12.7344V2.63027C12.7344 1.17996 11.5545 0 10.1042 0H9.89617C8.44586 0 7.2659 1.17996 7.2659 2.63027V2.86117H2.25195C1.92836 2.86117 1.66602 3.12352 1.66602 3.44711V6.01074C1.66602 6.33434 1.92832 6.59668 2.25195 6.59668ZM14.6061 18.8281H5.39418L3.78422 6.59668H16.2161L14.6061 18.8281ZM8.43773 2.63027C8.43773 1.82613 9.09199 1.17188 9.89613 1.17188H10.1041C10.9083 1.17188 11.5625 1.82613 11.5625 2.63027V2.86117H8.43773V2.63027ZM2.83789 4.03305H17.1625V5.4248C17.0372 5.4248 2.99414 5.4248 2.83789 5.4248V4.03305Z" fill="#BD0707"/>
</svg>
                  </Text>
                </Box>
                </Box>
              </Flex>
            </Box>
            <Divider />
            <Flex gap={6} mt={"5"}>
              <Box flex={"1"}>
                <TableContainer >
                  <Table className="text-xs">
                    <Thead >
                      <Tr>
                        <Th ><Text className="text-xs">Qty</Text></Th>

                        <Th isNumeric><Text className="text-xs">Subtotal</Text></Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td><Text className="text-xs">5</Text></Td>

                        <Td isNumeric><Text className="text-xs">99.000</Text></Td>
                      </Tr>
                    </Tbody>
                    <Tfoot >
                      <Tr>
                        <Th><Text className="text-md">Total</Text></Th>

                        <Th isNumeric><Text className="text-md" >99.000</Text></Th>
                      </Tr>
                    </Tfoot>
                  </Table>
                </TableContainer>
              </Box>
              <label htmlFor="image-upload-input" >
                    <Box
                      width="216px"
                      height="122px"
                      flex={"1"}
                      bg="rgba(224, 200, 200, 0.25)"
                      display={"flex"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      flexDirection={"column"}
                      cursor={"pointer"}
                    >
            
                 
             
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_46_449)">
                          <path
                            d="M22.3958 17.0833C22.3958 23.1143 27.3024 28.0208 33.3333 28.0208C39.3643 28.0208 44.2708 23.1143 44.2708 17.0833C44.2708 11.0524 39.3643 6.14583 33.3333 6.14583C27.3024 6.14583 22.3958 11.0524 22.3958 17.0833ZM42.6042 17.0833C42.6042 22.1953 38.4453 26.3542 33.3333 26.3542C28.2214 26.3542 24.0625 22.1953 24.0625 17.0833C24.0625 11.9714 28.2214 7.8125 33.3333 7.8125C38.4453 7.8125 42.6042 11.9714 42.6042 17.0833ZM33.3333 11.4583C33.7935 11.4583 34.1667 11.8315 34.1667 12.2917V12.6433C35.1366 12.9874 35.8333 13.9136 35.8333 15C35.8333 15.4602 35.4602 15.8333 35 15.8333C34.5398 15.8333 34.1667 15.4602 34.1667 15C34.1667 14.5405 33.7928 14.1667 33.3333 14.1667C32.8739 14.1667 32.5 14.5405 32.5 15V15.3372C32.5 15.7036 32.735 16.0232 33.0848 16.1326L34.079 16.4432C35.1283 16.7712 35.8333 17.7302 35.8333 18.8295V19.1667C35.8333 20.3666 34.9834 21.3715 33.8542 21.6118V21.875C33.8542 22.3352 33.481 22.7083 33.0208 22.7083C32.5606 22.7083 32.1875 22.3352 32.1875 21.875V21.3875C31.384 20.9713 30.8333 20.1323 30.8333 19.1667C30.8333 18.7065 31.2065 18.3333 31.6667 18.3333C32.1269 18.3333 32.5 18.7065 32.5 19.1667C32.5 19.6261 32.8739 20 33.3333 20C33.7928 20 34.1667 19.6261 34.1667 19.1667V18.8295C34.1667 18.463 33.9317 18.1434 33.5819 18.0341L32.5877 17.7234C31.5383 17.3954 30.8333 16.4365 30.8333 15.3372V15C30.8333 13.9136 31.5301 12.9874 32.5 12.6433V12.2917C32.5 11.8315 32.8731 11.4583 33.3333 11.4583ZM46.875 33.5417V44.1667C46.875 47.3832 44.2581 50 41.0417 50H8.95833C5.74188 50 3.125 47.3832 3.125 44.1667V3.33333C3.125 1.49531 4.62031 0 6.45833 0H33.5417C35.3797 0 36.875 1.49531 36.875 3.33333C36.875 3.79354 36.5019 4.16667 36.0417 4.16667C35.5815 4.16667 35.2083 3.79354 35.2083 3.33333C35.2083 2.41438 34.4606 1.66667 33.5417 1.66667H6.45833C5.53938 1.66667 4.79167 2.41438 4.79167 3.33333V44.1667C4.79167 46.4642 6.66083 48.3333 8.95833 48.3333H36.9648C35.882 47.2738 35.2083 45.7977 35.2083 44.1667V31.1458C35.2083 30.6856 35.5815 30.3125 36.0417 30.3125C36.5019 30.3125 36.875 30.6856 36.875 31.1458V44.1667C36.875 46.4642 38.7442 48.3333 41.0417 48.3333C43.3392 48.3333 45.2083 46.4642 45.2083 44.1667V33.5417C45.2083 32.6227 44.4606 31.875 43.5417 31.875H40C39.5398 31.875 39.1667 31.5019 39.1667 31.0417C39.1667 30.5815 39.5398 30.2083 40 30.2083H43.5417C45.3797 30.2083 46.875 31.7036 46.875 33.5417ZM10.4167 22.3958C10.4167 21.9356 10.7898 21.5625 11.25 21.5625H18.3333C18.7935 21.5625 19.1667 21.9356 19.1667 22.3958C19.1667 22.856 18.7935 23.2292 18.3333 23.2292H11.25C10.7898 23.2292 10.4167 22.856 10.4167 22.3958ZM10.4167 13.0208C10.4167 12.5606 10.7898 12.1875 11.25 12.1875H18.3333C18.7935 12.1875 19.1667 12.5606 19.1667 13.0208C19.1667 13.481 18.7935 13.8542 18.3333 13.8542H11.25C10.7898 13.8542 10.4167 13.481 10.4167 13.0208ZM29.5833 31.7708C29.5833 32.231 29.2102 32.6042 28.75 32.6042H11.25C10.7898 32.6042 10.4167 32.231 10.4167 31.7708C10.4167 31.3106 10.7898 30.9375 11.25 30.9375H28.75C29.2102 30.9375 29.5833 31.3106 29.5833 31.7708ZM29.5833 40.5208C29.5833 40.981 29.2102 41.3542 28.75 41.3542H11.25C10.7898 41.3542 10.4167 40.981 10.4167 40.5208C10.4167 40.0606 10.7898 39.6875 11.25 39.6875H28.75C29.2102 39.6875 29.5833 40.0606 29.5833 40.5208Z"
                            fill="#974A4A"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_46_449">
                            <rect width="50" height="50" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <Text color={"#BD0707"}>Attache of Transtaction</Text>
                    
                  
                  <Input type="file" hidden id="image-upload-input" />
             
                </Box>
                </label>
            </Flex>
          </Box>
        </Box>

        <Box flex={".5"} h={"80vh"} mt={"28"} pt={"16"}>
          <Box className="flex-class">
            <FormControl isRequired m={"2"}>
              <Input placeholder="name" />
            </FormControl>
            <FormControl m={"2"}>
              <Input type="email" placeholder="Email address" />
            </FormControl>
            <FormControl m={"2"} isRequired>
              <Input placeholder="phone" />
            </FormControl>
            <FormControl m={"2"} isRequired>
              <Input placeholder="PostCode" />
            </FormControl>
            <Textarea
              m={"2"}
              // value={value}
              // onChange={handleInputChange}
              placeholder="Address"
              size="sm"
            />
            <Box w={"100%"}>
              <button className="Button">Pay</button>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
