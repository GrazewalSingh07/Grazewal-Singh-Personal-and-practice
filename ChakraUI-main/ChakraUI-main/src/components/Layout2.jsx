import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react'

const Layout2 = () => {
  return (
    <Box w={"70%"} margin={"auto"} marginTop={"50px"}>
      <Grid
        h={"400px"}
        templateRows={["repeat(3, 100px)", "repeat(3, 1fr)"]}
        templateColumns={["1fr", "repeat(3, 1fr)"]}
        gap={2}
      >
        <GridItem colSpan={[0, 2]} rowSpan={[0, 2]} bg="#a186bd">
          1
        </GridItem>
        <GridItem
          rowSpan={[0, 3]}
          bg="
#f26c4f"
        >
          2
        </GridItem>
        <GridItem colSpan={[0, 2]} bg="#6dcff6">
          3
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Layout2