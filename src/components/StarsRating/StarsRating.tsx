import React, {FC} from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

interface StarRatingProps {
    rating: number;
}

const StarsRating:FC<StarRatingProps> = ({ rating }) => {
    const totalStars = 10;
    const filledStars = Math.round(rating) ;

    return (
        <div>
            {[...Array(totalStars)].map((_, index) => {
                const starNumber = index + 0.1;
                if (starNumber <= filledStars) {
                    return <FaStar key={index} color="#ffc107" size={15} />;
                } else if (starNumber - 0.1 === filledStars) {
                    return <FaStarHalfAlt key={index} color="#ffc107" size={15} />;
                } else {
                    return <FaStar key={index} color="#e4e5e9" size={15} />;
                }
            })}
        </div>
    );
};

export default StarsRating;