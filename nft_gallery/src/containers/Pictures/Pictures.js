import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Backdrop, Button, CircularProgress, Grid} from "@mui/material";
import {fetchPictures} from "../../store/actions/picturesActions";
import PictureItem from "../../components/PictureItem/PictureItem";
import {ArrowBack, ArrowForward} from "@mui/icons-material";

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
            {loading &&
                <Backdrop open={loading}>
                    <CircularProgress color='inherit'/>
                </Backdrop>
            }
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
                        <Grid item xs={6}>
                            <Button disabled={!previous} onClick={onPreviousBtnClick} variant="contained" size="large"
                                    startIcon={<ArrowBack/>}>Previous</Button>
                        </Grid>
                        <Grid item xs={6} sx={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Button disabled={!next} onClick={onNextBtnClick} variant="contained" size="large"
                                    endIcon={<ArrowForward/>}>Next</Button>
                        </Grid>
                    </Grid>
                </>
            }
        </>
    );
};

export default Pictures;