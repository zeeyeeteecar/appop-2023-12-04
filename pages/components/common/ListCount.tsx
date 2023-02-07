import React from 'react'
import {Box,Text,} from "@chakra-ui/react";

export default function ListCount({ count }) {
    
        return (
          <Box>
            <Text
              color="red.300"
              bgColor={"yellow.100"}
              w="200px"
              alignContent="center"
              align={"center"}
              fontSize="lg"
            >
              Total Record(s):{count}
            </Text>
          </Box>
        );
 
}
