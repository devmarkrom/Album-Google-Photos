import React from 'react';
import { withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '../animations/Box';
import { PoseGroup } from 'react-pose';

function PhotosCarousel(props){
    return(
        <div className={props.classes.container}>
            <PoseGroup>
                {props.photos.map((photo,index)=>{
                    return(
                        <Box key={photo.id} position={index} className={props.classes.card}>
                            <Card>
                                <img alt={photo.filename} src={photo.baseUrl} className={props.classes.img} />
                                <CardContent>
                                    <Typography variant="caption" component="p">
                                        {photo.filename}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    );
                })}
            </PoseGroup>
        </div>
    );
}

export default withStyles({
    container:{
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'scroll',
        justifyContent: 'center',
        padding: '1em 0'
    },
    card:{
        minWidth: '300px',
        marginRight: '1em'
    },
    img:{
        maxWidth: '100%',
        height: 'auto'
    }
})(PhotosCarousel);