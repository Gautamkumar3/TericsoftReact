import { Box, Text } from "@chakra-ui/react";
import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Box>
        <Text color="#fff">{this.props.name}</Text>
      </Box>
    );
  }
}

export default Card;
