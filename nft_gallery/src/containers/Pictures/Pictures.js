import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Box, Grid, LinearProgress} from "@mui/material";
import {fetchPictures} from "../../store/actions/picturesActions";
import PictureItem from "../../components/PictureItem/PictureItem";

const Pictures = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.fetchLoading);
    const pictures = useSelector(state => state.pictures.assets);

    useEffect(() => {
        dispatch(fetchPictures());
    }, [dispatch]);

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
                            />
                        ))}
                    </Grid>
                </>
            }
        </>
    );
};

export default Pictures;