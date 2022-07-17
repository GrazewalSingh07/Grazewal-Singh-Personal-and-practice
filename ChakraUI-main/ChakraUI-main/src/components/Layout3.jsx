import { Box, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'

const Layout3 = () => {
  return (
    <Box
      w={"70%"}
      margin={"auto"}
      marginTop={"50px"}
    
    >
      <Grid
        h="500px"
        templateRows="repeat(11, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={2}
      >
        <GridItem colSpan={[6, 3, 3]} rowSpan={[2, 4, 4]} bg="#ffc83c" />
        <GridItem colSpan={[6, 3, 3]} rowSpan={[2, 4, 4]} bg="#ffc83c" />

        <GridItem colSpan={6} rowSpan={4} bg="#ff3c69" />

        <GridItem colSpan={[6, 2, 2]} rowSpan={[1, 4, 4]} bg="
#6e7dff" />
        <GridItem colSpan={[6, 2, 2]} rowSpan={[1, 4, 4]} bg="
#6e7dff" />
        <GridItem colSpan={[6, 2, 2]} rowSpan={[1, 4, 4]} bg="
#6e7dff" />
      </Grid>
    </Box>
  );
}

export default Layout3