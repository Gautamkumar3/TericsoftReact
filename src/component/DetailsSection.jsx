import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import { useId } from "react";

const DetailsSection = () => {
  const { data } = useSelector((store) => store.subCategoryData);

  return (
    <Box bg={"blackAlpha.800"} py={8}>
      <Heading color={"#fff"} ml={5} fontWeight={"400"} fontSize={"30px"}>
        Highlights
      </Heading>
      <SimpleGrid columns={3} w={"90%"} m="auto" my={"2%"} spacing={"20px"}>
        {data.map((el, index) => (
          <Card key={index} name={el.name} img={el.image_url} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default DetailsSection;
