import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import AlbumCard from './AlbumCard';
import { PoseGroup } from 'react-pose';
import Box from '../animations/Box';

function AlbumList(props){
    return(
        <Grid container spacing={16} justify="center">
            <PoseGroup>
            {    
                props.albums.map((album,index)=>{
                return(
                    <Box key={index} position={index} pose={props.mainAlbum ? 'exit' : 'enter'}>
                        <AlbumCard setAlbum={props.setAlbum} album={album} />
                    </Box>
                )
                })
            }
            </PoseGroup>
        </Grid>
    )
}

export default withStyles({})(AlbumList);