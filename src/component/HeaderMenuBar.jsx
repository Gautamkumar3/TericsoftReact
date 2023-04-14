import React from "react";
import { BiCycling, BiSwim } from "react-icons/bi";
import { GiArcher } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineGolfCourse, MdSportsGymnastics } from "react-icons/md";
import { Box, Center, Flex, Text } from "@chakra-ui/react";

import { useState } from "react";

const data = [
  {
    icons: <AiFillStar size="50px" />,
    title: "Featured",
  },
  {
    icons: <GiArcher size="50px" />,
    title: "Armoury",
  },
  {
    icons: <BiSwim size="50px" />,
    title: "Aquatics",
  },
  {
    icons: <BiCycling size="50px" />,
    title: "Cycling",
  },

  {
    icons: <MdOutlineGolfCourse size="50px" />,
    title: "Golf",
  },
  {
    icons: <MdSportsGymnastics size="50px" />,
    title: "Gymnastic",
  },
];
const HeaderMenuBar = () => {
  const [active, setActive] = useState("");

  const activeStyle = {
    border: "2px solid red",
  };

  return (
    <Flex color={"#fff"} justify={"space-around"} bg="blackAlpha.800" py={5}>
      {data.map((el) => (
        <Box
          key={el.title}
          color="#fff"
          textAlign={"center"}
          p={"20px"}
          w="120px"
          h="120px"
          borderRadius={"50%"}
          onClick={() => setActive(el.title)}
          bg={active === el.title ? "#112010" : "black.800"}
        >
          <Center>{el.icons}</Center>

          <Text my={2}>{el.title}</Text>
        </Box>
      ))}
    </Flex>
  );
};

export default HeaderMenuBar;
