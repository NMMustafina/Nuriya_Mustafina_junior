import React from 'react';
import {Link} from "react-router-dom";
import {Box, Button, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";

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
                    <Typography gutterBottom variant="h6" align='center'>
                        {name}
                    </Typography>
                </CardContent>
                <Box textAlign='center' sx={{mb: 3}}>
                    <Button component={Link} to={`/nft/${address}/${tokenId}`} variant="outlined">More info</Button>
                </Box>
            </Card>
        </Grid>
    );
};

export default PictureItem;