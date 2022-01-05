import * as React from 'react';
import {styled} from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';


const StyledRating = styled(Rating)({
    '& .MuiRating-icon': {
        marginRight: '3px',
        fontSize: '12px',
    },

    '& .MuiRating-iconFilled': {
        color: '#21268F',
    },
    '& .MuiRating-iconHover ': {
        color: '#21268F',
    },

});

type MainRatingPropsType = {
    rating: number
}

export default function MainRating(props: MainRatingPropsType) {

    return (
        <StyledRating
            precision={0.2}
            emptyIcon={<StarIcon style={{color: '#D7D8EF', fontSize: '12px'}}/>}
            name="customized-6"
            defaultValue={props.rating}
            max={5}/>

    );
}