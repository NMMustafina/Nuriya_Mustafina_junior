import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from 'react-router-dom';
import {fetchPicture} from "../../store/actions/picturesActions";
import {Box, Card, CardContent, CardMedia, Grid, LinearProgress, Typography} from "@mui/material";

const Picture = () => {
    const {address, tokenId} = useParams();
    const dispatch = useDispatch();
    const picture = useSelector(state => state.picture);
    const loading = useSelector(state => state.singleLoading);

    useEffect(() => {
        dispatch(fetchPicture(address, tokenId));
    }, [dispatch, address, tokenId]);

    return (
        <>
            {loading ? <Box sx={{width: '100%'}}><LinearProgress/></Box> : null}
            {picture &&
                <Card>
                    <Grid container component={CardContent}>
                        <Grid item>
                            <CardMedia
                                component='img'
                                alt={picture.name}
                                image={picture.image_url}
                                sx={{width: '300px', height: '350px'}}
                            />
                        </Grid>
                        <Grid item paddingX='16px'>
                            <Typography variant='h4'>
                                {picture.name}
                            </Typography>
                        </Grid>
                    </Grid>
                </Card>
            }
        </>
    );
};

export default Picture;