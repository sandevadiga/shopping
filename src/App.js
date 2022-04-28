import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header'
import Section from './components/Section'
import {DataProvider} from './components/Context'


   
// const loadRecipe = async function () {
//   try {
//     const data = await fetch(`https://fakestoreapi.com/products`);
//     const res = await data.json();
   
//   console.log(res);
 
//   } catch (err) {
//     // Temp error handling
//     console.error(`${err} 💥💥💥💥`);
//     throw err;
//   }
// };

// DataProvider.loadRecipe();

class App extends React.Component{
  render(){
    return(
      <DataProvider>
        <div className="app">
          <Router>
            <Header />
            <Section />
          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default App;
