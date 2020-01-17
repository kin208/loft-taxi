import React from 'react'; 
import './App.css';
import Header from './header';
import Page from './page';



var pageValue = '';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     page: 'map',
   };
   //this.parentCallback = this.parentCallback.bind(this)
  };

 // <Header page={this.state.page} />
 


 parentCallback = (variable, e) => {
  this.setState(
      { page: variable }
    )
 };

  render() {
    return <div>
      <Header parentCallback={this.parentCallback} />
        <hr />
          <Page page={this.state.page}  parentCallback={this.parentCallback}/>
      </div>;
  }
}  

export default App;
