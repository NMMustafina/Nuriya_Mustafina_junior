import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Box, Button, Grid, LinearProgress} from "@mui/material";
import {fetchPictures} from "../../store/actions/picturesActions";
import PictureItem from "../../components/PictureItem/PictureItem";

const Pictures = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.fetchLoading);
    const pictures = useSelector(state => state.pictures.assets);
    const previous = useSelector(state => state.pictures.previous);
    const next = useSelector(state => state.pictures.next);

    const [query, setQuery] = useState('format=json');

    useEffect(() => {
        dispatch(fetchPictures(query));
        window.scrollTo(0, 0)
    }, [dispatch, query]);

    const onPreviousBtnClick = () => {
        setQuery('cursor=' + previous);
    };

    const onNextBtnClick = () => {
        setQuery('cursor=' + next);
    };

    return (
        <>
            {loading ? <Box sx={{width: '100%'}}><LinearProgress/></Box> : null}
            {pictures &&
                <>
                    <Grid container rowSpacing={6} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                        {pictures.map(picture => (
                            <PictureItem
                                key={picture.id}
                                id={picture.id}
                                name={picture.name}
                                image={picture.image_thumbnail_url}
                                address={picture.asset_contract.address}
                                tokenId={picture.token_id}
                            />
                        ))}
                    </Grid>
                    <Button disabled={!previous} onClick={onPreviousBtnClick}>Previous</Button>
                    <Button disabled={!next} onClick={onNextBtnClick}>Next</Button>
                </>
            }
        </>
    );
};

export default Pictures;