import React from "react";
import Layout from "../components/layout/Layout";
import styled from "styled-components";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";

const Shop = () => {
  return (
    <Layout title="Shop" pagename="Shop">
      <Serchtitle>
        <Titletxt>SHOP</Titletxt>
      </Serchtitle>
      <Pcshoptab>
        <Tabs>
          <TabListStyle>
            <Wraptab>
              <Tab ps={0} pe={0}>
                전체
              </Tab>
              <TabStyle ps={0} pe={0}>
                럭셔리
              </TabStyle>
              <TabStyle ps={0} pe={0}>
                아우터
              </TabStyle>
              <TabStyle ps={0} pe={0}>
                신발
              </TabStyle>
              <TabStyle ps={0} pe={0}>
                상의
              </TabStyle>
              <TabStyle ps={0} pe={0}>
                하의
              </TabStyle>
              <TabStyle ps={0} pe={0}>
                가방
              </TabStyle>
              <TabStyle ps={0} pe={0}>
                지갑
              </TabStyle>
              <TabStyle ps={0} pe={0}>
                시계
              </TabStyle>
              <TabStyle ps={0} pe={0}>
                패션잡화
              </TabStyle>
              <TabStyle ps={0} pe={0}>
                컬렉터블
              </TabStyle>
              <TabStyle ps={0} pe={0}>
                {" "}
                뷰티
              </TabStyle>
              <TabStyle ps={0} pe={0}>
                테크
              </TabStyle>
              <TabStyle ps={0} pe={0}>
                캠핑
              </TabStyle>
              <TabStyle ps={0} pe={0}>
                가구/리빙
              </TabStyle>
            </Wraptab>
          </TabListStyle>
          <TabPanels>
            <Container>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </Container>
          </TabPanels>
        </Tabs>
      </Pcshoptab>
    </Layout>
  );
};

const Pcshoptab = styled.nav`
  background: #fff;
  position: -webkit-sticky;
  position: sticky;
  top: var(--global-header-height);
  z-index: 1;
`;

const Serchtitle = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 16px 0;
  position: relative;
`;

const Titletxt = styled.h1`
  color: #000;
  cursor: pointer;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.12px;
`;

const TabStyle = styled(Tab)`
  margin-left: 27px;
`;

const TabListStyle = styled(TabList)`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;

const Wraptab = styled.div`
  max-width: 1280px;
  display: flex;
  width: 100%;
  margin: 0 auto;
  white-space: nowrap;
`;

export default Shop;
