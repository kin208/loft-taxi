import React, { useContext } from "react";
import PropTypes from "prop-types"; 
import Styles from '../css/commonCss';
import { withStyles } from '@material-ui/core/styles'; 
import { Paper, Grid, TextField, Button, Typography  } from '@material-ui/core';

function Profile(props) { 
    return (  
        <div className={props.classes.wrapper}  data-testid="profileForm" >
            <Paper elevation={4}  className={props.classes.cc} >
                <Grid container={true} >
                    <Grid item={true} xs={12} >
                        <Typography variant="h4">Профиль</Typography>  
                    </Grid>
                </Grid>
            </Paper>
        </div> 
    );
}  

Profile.propTypes = {
    subParentCallback: PropTypes.func.isRequired
};

export default withStyles(Styles)(Profile);   
