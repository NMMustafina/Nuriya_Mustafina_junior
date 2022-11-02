import React from 'react';
import {Link} from "react-router-dom";
import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";

const PictureItem = ({id, name, image}) => {
    return (
        <>
            <Grid item md={3}>
                <Card sx={{height: '100%', maxWidth: 345}} elevation={2}>
                    <CardActionArea component={Link} to={'/nft/' + id} sx={{height: '100%'}}>
                        <CardMedia
                            component="img"
                            height="250"
                            image={image}
                            alt={name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="body1">
                                <i>Name:</i> <b>{name}</b>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </>
    );
};

export default PictureItem;