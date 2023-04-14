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
        <Image h={"400px"} w="100%" objectFit={"cover"} src={this.props.img} />
      </Box>
    );
  }
}

export default Card;
