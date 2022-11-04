import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from 'react-router-dom';
import {fetchPicture} from "../../store/actions/picturesActions";
import {
    Avatar,
    Backdrop,
    Button,
    CircularProgress,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography
} from "@mui/material";
import {ArrowBack, AttachMoney, Collections, Description} from "@mui/icons-material";

const Picture = () => {
    const {address, tokenId} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const picture = useSelector(state => state.picture);
    const loading = useSelector(state => state.singleLoading);

    useEffect(() => {
        dispatch(fetchPicture(address, tokenId));
    }, [dispatch, address, tokenId]);

    return (
        <>
            {loading &&
                <Backdrop open={loading}>
                    <CircularProgress color='inherit'/>
                </Backdrop>
            }
            {picture &&
                <>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            {picture.image_url &&
                                <img src={picture.image_url} alt={picture.name} width='350'/>}
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography component="h2" variant="h3">
                                {picture.name}
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Description/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Description"
                                                  secondary={picture.description ? picture.description : picture.collection.description}/>
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Collections/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Collection" secondary={picture.collection.name}/>
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <AttachMoney/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="USD price"
                                                  secondary={picture.collection.payment_tokens[0].usd_price}/>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>

                    <Grid container justifyContent="center" sx={{my: 6}}>
                        <Button onClick={() => navigate(-1)} variant="contained" size="large"
                                startIcon={<ArrowBack/>}>Go back</Button>
                    </Grid>
                </>
            }
        </>
    );
};

export default Picture;