import React from 'react';
import Layout from '../components/layout/Layout';
import { UnorderedList, ListItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Rankings = () => {
    return (
        <Layout title="컬렉션 통계" pagename="ranking">
            <UnorderedListStyled>
                <ListItem className="active">
                    <Link to="/rankings/series">인기 항목</Link>
                </ListItem>
                <ListItem>
                    <Link to="/rankings/series">상위 항목</Link>
                </ListItem>
                <ListItem>
                    <Link to="/rankings/series">관심 목록</Link>
                </ListItem>
            </UnorderedListStyled>
        </Layout>
    );
};

const UnorderedListStyled = styled(UnorderedList)`
    display: flex;
    position: sticky;
    top: 80px;
    margin: 50px 0 0;
    border-bottom: 1px solid red;
    a {
        display: block;
        padding: 10px;
    }
`;

export default Rankings;
