function Styles() {
    
    let obj = {
        wrapper: {
            position: 'relative', 
            zIndex: -10,
            textAlign: "left"
          },
          error: {
            fontWeight: "bold",
            color: "#ff0000"
          },
          success: {
            fontWeight: "bold",
            color: "#4b8b3b"
          },
          
          cc: {
            padding: "44px 60px",
            marginTop: '48px',
            marginBottom: '48px',
            top: '0',
            left: '20px',
            position: 'absolute',
            maxWidth: '30%'
          },
          ccc: {
            position: 'relative',
            boxSizing: 'border-box'
          },
          inp: {
            flex: 1,
            display: 'flex',
            overflow: 'hidden',
            flexWrap: 'wrap',
            alignItems: 'center'
          },
          inp2: {
            height: 'auto',
            display: 'flex',
            padding: '0',
            minWidth: '384px'
        
          },
          emptyLine: {
            height: '40px'
          }
    };

    return obj;
};

export default Styles;