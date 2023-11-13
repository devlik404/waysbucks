import { Grid ,Box} from "@chakra-ui/react";
import CardPay from "../components/cards/cardTransaction";
import NavbarSessions from "../components/navbar/navbarSessions";


const MyProfile = ()=>{
    return(
        <>
        <NavbarSessions/>
       <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
  <Box>Item 1</Box>
  <Box><CardPay/></Box>
  
</Grid>
        </>
    )
}

export default MyProfile;