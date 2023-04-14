import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubCategoryData } from "../store/gameSubCategory/subCategory.action";
import { useEffect } from "react";
import { useState } from "react";
import { getGameData } from "../store/gameData/gamedata.action";

const CategorySection = () => {
  const [active, setActive] = useState("BMX");
  const { data, types } = useSelector((store) => store.gameData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGameData("Cycling")).then((res) => {
      dispatch(getSubCategoryData(res, "BMX"));
    });
  }, []);

  function handleFilter(type) {
    dispatch(getSubCategoryData(data, type));
    setActive(type);
  }

  return (
    <Box bg={"black"} color={"#fff"}>
      <Flex w={"60%"} m="auto" justify={"space-around"}>
        {types.map((type) => (
          <Text
            my={5}
            key={type}
            color={active === type ? "blue" : "#fff"}
            fontSize={active === type ? "20px" : "16px"}
            onClick={() => handleFilter(type)}
            _hover={{ cursor: "pointer" }}
          >
            {type}
          </Text>
        ))}
      </Flex>
    </Box>
  );
};

export default CategorySection;
