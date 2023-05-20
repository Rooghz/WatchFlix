import React from 'react';
import { Button, Text } from '@chakra-ui/react';
import { FaPlay } from 'react-icons/fa';


const WatchNowButton = () => {
    const buttonStyle = {
        bg: '#DA3714',
        borderRadius: '27px',
        width: '176.25px',
        height: '45px',
    };


    return (
        <Button {...buttonStyle} leftIcon={<FaPlay boxSize={6} />}>
            <Text className='watch-now'>Watch Now</Text>
        </Button>
    );
};

export default WatchNowButton;
