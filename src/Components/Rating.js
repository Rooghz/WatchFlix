import { Icon } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { SlStar } from 'react-icons/sl';


const Rating = ({ rating }) => {
    const filledStars = Math.floor(rating); // Get the integer part for the filled stars

    return (
        <div>
            {[...Array(filledStars)].map((_, index) => (
                <Icon key={index} as={StarIcon} color="gold" boxSize={6} css={{ marginRight: '6px' }} />
            ))}
            <Icon as={SlStar} color="gold" boxSize={6} css={{ filter: 'grayscale(100%)', stroke: 'transparent', marginRight: '6px' }} />
        </div>
    );
};

export default Rating;
