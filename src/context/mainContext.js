import React, {useState, createContext} from 'react'; 

const MainContext = createContext();

// eslint-disable-next-line no-undef
const MainContextProvider = (props) => {
    const [isLoginState, setLoginState] = useState(props.isLogin);
    const [emailState, setEmailState] = useState(props.email);
    
    const [coordState, setCoordState] = useState({
        lng: 60.597465,
        lat: 56.838011,
        zoom: 12
    });

    const data = {
        email: emailState,
        isLogin: isLoginState,
        coord: coordState,
        proceedLogin: (item) => {
            console.log(item.email);

            setEmailState(item.email);
            
            //this.email = item.email;
            //this.isLogin = 1;
            setLoginState( 1 ); 
        },
        setCoord: (item) => {
            setCoordState(item);
        },
        logout: function(){
            setLoginState( 0 );
        }
    }

    return <MainContext.Provider value={ data } >
        { props.children }
    </MainContext.Provider>;
}

export { MainContext, MainContextProvider };