import { Box, Image, Text } from "@chakra-ui/react";
import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Box pos={"relative"}>
        <Text pos={"absolute"} bottom={"10px"} left={"10px"} color="#fff">
          {this.props.name}
        </Text>
        <Image
          h={"400px"}
          w="100%"
          objectFit={"cover"}
          src={
            this.props.img ||
            "https://cdn1.vectorstock.com/i/1000x1000/50/20/no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg"
          }
        />
      </Box>
    );
  }
}

export default Card;
