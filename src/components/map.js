import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom'; 
import AllSelectors from '../modules/user/selectors';
import { Paper, Grid, TextField, Button  } from '@material-ui/core';

import AllActions from '../modules/user/actions';
import { useDispatch, useSelector  } from 'react-redux'; 
import { withStyles } from '@material-ui/core/styles'; 
import Styles from '../css/commonCss';
import Mapboxgl from 'mapbox-gl';
import { compose  } from 'redux'; 

function Map( props ) { 
    
    const dispatch = useDispatch();  
    const coord = useSelector( AllSelectors.getMapCoord );
    const setMapCoord = (obj) => dispatch( AllActions.setMapCoord(obj)); 

    useEffect(() => { 
        let map = new Mapboxgl.Map({
            accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA',
            container: document.getElementById('mapBody'),
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [coord.lng, coord.lat],
            zoom: coord.zoom
        });
 
        /*
        map.on('move', () => {

          const { lng, lat } = map.getCenter();  
          
          setMapCoord({
            lng: lng.toFixed(4),
            lat: lat.toFixed(4),
            zoom: map.getZoom().toFixed(2)
          });

        });  */

    }, [coord, dispatch]); 


  return (
    <>
      <div className={props.classes.wrapper}  data-testid="mapContainer">

        <div id="mapBody" className="mapboxgl-map" data-testid="mapBody"
        style={{ position: 'absolute', top: '0px', bottom: '0px', left: '0px', right: '0px',  height: '725px' }} 
        />


      </div>
      
      <div className={props.classes.wrapper} data-testid="mapTaxiForm">
            <Paper elevation={4}  className={props.classes.cc} >
            <Grid container={true} >
                <Grid item={true} xs={12} >
                <div className={props.classes.ccc} >
                    <TextField fullWidth={true}  className={props.classes.inp2}   placeholder="Откуда" /> 
                    <div className={props.classes.emptyLine} ></div>
                    <TextField fullWidth={true}  className={props.classes.inp2}  placeholder="Куда" /> 
                    <div className={props.classes.emptyLine}> </div>
                    <Button fullWidth={true} color="primary" >Вызвать такси</Button> 
                </div>
                </Grid>
            </Grid>
            </Paper>
        </div> 
    </> 
  );
}

export default compose( 
  withRouter,
  withStyles(Styles)
)( Map );     