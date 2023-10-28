import React from 'react';
import { VStack, Heading } from '@chakra-ui/react';

const Title = ({ title }) => {
    return (
        <VStack alignItems={'flex-start'} spacing={4}>
            <Heading as={'h2'} fontSize={'34px'} fontWeight={700}>
                {title}
            </Heading>
            {/* <Text variant={'txt164'}>{props.desc}</Text> */}
        </VStack>
    );
};

export default Title;
