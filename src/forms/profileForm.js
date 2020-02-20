import React from 'react'; 
import { Paper, Grid, TextField, Button, Typography  } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'; 
import Styles from '../css/commonCss';

function proceedForm(props) {  
    const proceedForm = (e) => {
        
        e.preventDefault();
        props.proceedForm(e);
    };
    
    const errorMessages = props.errorMessages;
    const cardData = props.cardData;
    const successMessage = props.successMessage;
    
    return ( 
        <>
        { successMessage ? (
        <div className={props.classes.success} data-testid="successMessage">{successMessage}</div>
        ) : ('')}
        <form  onSubmit={ proceedForm }  data-testid="profileForm" >
                          <div  data-testid="loaded">Номер карты</div>
                          <TextField fullWidth={true} name="cardNumber" defaultValue={cardData.cardNumber}  
                          className={props.classes.inp2}  
                                placeholder="0000 0000 0000 0000"  /> 

                          { errorMessages.cardNumber ? (
                                    <div className={props.classes.error} >{errorMessages.cardNumber}</div>
                                    ) : ('')}

                                  <div className={props.classes.emptyLine} ></div>

                                  <div>Дата окончания</div>
                          <TextField fullWidth={true} name="expiryDate" defaultValue={cardData.expiryDate} className={props.classes.inp2}  
                                placeholder="02/22"  /> 

                          { errorMessages.expiryDate ? (
                                    <div className={props.classes.error} >{errorMessages.expiryDate}</div>
                                    ) : ('')}

                            <div className={props.classes.emptyLine} ></div>
 
                          <div>Имя владельца</div>
                          <TextField fullWidth={true} name="cardName" defaultValue={cardData.cardName} className={props.classes.inp2}  
                                placeholder="Ivan Ivanov"  /> 
                            { errorMessages.cardName ? (
                                          <div className={props.classes.error} >{errorMessages.cardName}</div>
                                          ) : ('')}

                          <div className={props.classes.emptyLine} ></div>


                          <div>CVC</div>
                          <TextField fullWidth={true} name="cvc" defaultValue={cardData.cvc} className={props.classes.inp2}  
                                placeholder="CVC"  /> 

                          { errorMessages.cvc ? (
                                    <div className={props.classes.error} >{errorMessages.cvc}</div>
                                    ) : ('')}
                          
                          <div className={props.classes.emptyLine} ></div>
                                    <Button type="submit" fullWidth={true} color="primary"
                                       >Сохранить</Button> 
    </form>  
    </>
  );
}
export default withStyles(Styles)(proceedForm); 