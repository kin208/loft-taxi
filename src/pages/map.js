import React, { useContext, useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { MainContext } from '../context/mainContext'; 
import { Paper, Grid, TextField, Button  } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'; 
import Styles from '../css/commonCss';

import Mapboxgl from 'mapbox-gl';

function Map (props) {  
  const contextValue = useContext(MainContext);
  const [mapObj, setMapObj] = useState(
    {
      lng: contextValue.coord.lng,
      lat: contextValue.coord.lat,
      zoom: contextValue.coord.zoom
    }
  ); 

  const goTo = (e, page) => {
      e.preventDefault();
      props.subParentCallback(page);
  };

  useEffect(() => { 
          const map = new Mapboxgl.Map({
            accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA',
            container: document.getElementById('mapBody'),
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [mapObj.lng, mapObj.lat],
            zoom: mapObj.zoom
          });

          map.on('move', () => {

            const { lng, lat } = map.getCenter();  
            
            contextValue.setCoord(
              {
                lng: lng.toFixed(4),
                lat: lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
              }
            );
          });  
          
  }, [mapObj, setMapObj, contextValue]); 
  
  return (
    <>
      <div className={props.classes.wrapper}  data-testid="mapContainer">

        <div id="mapBody" className="mapboxgl-map" data-testid="mapBody"
        style={{ position: 'absolute', top: '0px', bottom: '0px', left: '0px', right: '0px',  height: '725px' }} 
        />
      </div>
      
    { contextValue.isLogin ? (
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
    ) : (
      <div className={props.classes.wrapper} data-testid="mapNeedLogin">
        <Paper elevation={4}  className={props.classes.cc} >
          <a href="#!" 
            onClick={ (e) => goTo(e, 'login') }>Авторизуйтесь</a> чтобы вызвать такси</Paper> 
      </div>
    )}

    </>
  );

}

Map.propTypes = {
    subParentCallback: PropTypes.func.isRequired
};
export default withStyles(Styles)(Map); 
