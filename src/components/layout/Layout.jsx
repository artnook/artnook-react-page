import { Box } from "@chakra-ui/react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import History from "../common/History";
import Title from "../common/Tilte";
import styled from "styled-components";

const Layout = ({ pagename, title, children }) => {
  return (
    <Wrap>
      <Header />
      <MainWrap>
        <Box>
          <History pagename={pagename} />
          <Title title={title} />
        </Box>
        {children}
      </MainWrap>
      <Footer />
    </Wrap>
  );
};

const Wrap = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  padding-bottom: 80px;
`;

const MainWrap = styled.main`
  /* height: 200vh; */
  margin-left: auto;
  margin-right: auto;
`;

export default Layout;
