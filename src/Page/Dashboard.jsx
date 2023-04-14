import { Box } from "@chakra-ui/react";
import React from "react";
import HeaderMenuBar from "../component/HeaderMenuBar";
import CategorySection from "../component/CategorySection";
import DetailsSection from "../component/DetailsSection";

const Dashboard = () => {
  return (
    <Box>
      <HeaderMenuBar />
      <CategorySection />
      <DetailsSection />
    </Box>
  );
};

export default Dashboard;
