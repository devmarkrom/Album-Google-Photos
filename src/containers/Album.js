import React,{Component} from 'react';
import { connect } from 'react-redux';
import PhotosList from '../components/PhotosList';
import { setPhotos, clearPhotos } from '../initializers/actions';
import Axios from 'axios';

class Album extends Component {
    
    componentDidUpdate(prevProps){
        if(this.props.mainAlbum){
            if(process.env.NODE_ENV === 'production'){
            // if(true){
                this.loadPhotos()
            }else{
                import('../data/photos').then(module=>{
                    this.props.setPhotos(module.default.mediaItems);
                })
            }
        };
    }
    
    loadPhotos(){
        Axios({
           method: 'POST',
           url: 'https://photoslibrary.googleapis.com/v1/mediaItems:search',
           headers: {
             'Authorization': `Bearer ${this.props.token}`
           },
           data: {
             albumId: this.props.mainAlbum.id
           }
        }).then(r=>{
            console.log(r);
            this.props.setPhotos(r.data.mediaItems);
        })
    }

    render() {
        return (
            <PhotosList album={this.props.mainAlbum} photos={this.props.photos} />
        );
    }
}

const mapStateToProps = (state) => ({
    mainAlbum: state.mainAlbum,
    token: state.token,
    photos: state.photos
});

const mapDispatchToProps = {
    setPhotos,
    clearPhotos
}

export default connect(mapStateToProps,mapDispatchToProps)(Album);