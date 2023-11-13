import { Box, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr,Text } from "@chakra-ui/react";
import NavbarSessions from "../../components/navbar/navbarSessions";
import "../../assets/css/index.css"



export default function IncomeTransaction(){
    return(
        <>
        <NavbarSessions/>
        <Box  h={"100vh"} p={"50"} mt={"-24"}>
            <Box mt={"24"}>

            <Text fontSize={"36px"} fontWeight={800} className="color-text" mb={"16"}>Income Transaction</Text>
        <TableContainer>
  <Table size='sm' textColor={"black"}>
    <Thead bg={"#F6DADA"} >
      <Tr >
        <Th>No</Th>
        <Th>Name</Th>
        <Th>Address</Th>
        <Th>Post Code</Th>
        <Th>Income</Th>
        <Th>Status</Th>
        <Th>Action</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>1</Td>
        <Td>Malik Fajar</Td>
        <Td>Tangerang</Td>
        <Td>15322</Td>
        <Td isNumeric>69000</Td>
        <Td>Succses</Td>
        <Td >Icon</Td>
      </Tr>
     
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>Total Income : 102999</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
            </Box>
        </Box>
        </>
    )
}