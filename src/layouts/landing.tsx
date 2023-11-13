
import { Box } from "@chakra-ui/react";
import Jumbotron from "../components/jumbotrons/jumbotron";
import Navbar from "../components/navbar/navbar";
import Cards from "../components/cards/card";


export default function LandingPage(){
    return(
        <>
       

        <Box >
        <Navbar/>
        </Box>
        <Box >
       < Jumbotron/>
        </Box>
        <Box >
            <Cards/>
        </Box>
       
        </>
        
    )
}