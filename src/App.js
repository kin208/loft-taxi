import React, { useState } from "react";
import './App.css';
import Header from './header';
import Page from './page';

function App() {

  const [page, setPage] = useState('map');

  const parentCallback = (page) => {
    setPage(page);
  };

  return (
    <div>
      <Header parentCallback={parentCallback} />
        <hr />
          <Page page={page}  parentCallback={parentCallback} />
    </div>
  );

}

export default App;