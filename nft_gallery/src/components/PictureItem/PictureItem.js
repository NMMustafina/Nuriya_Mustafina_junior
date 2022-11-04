import React from 'react';
import {Link} from "react-router-dom";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";

const PictureItem = ({name, image, address, tokenId}) => {
    return (
        <Grid item xs={12} sm={12} md={6} lg={3}>
            <Card sx={{height: '100%'}}>
                <CardMedia
                    alt={name}
                    component="img"
                    image={image}
                    height="250"
                />
                <CardContent>
                    <Typography gutterBottom variant="body1">
                        <i>Name:</i> <strong>{name}</strong>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button component={Link} to={`/nft/${address}/${tokenId}`}>More info</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default PictureItem;