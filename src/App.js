import './App.css';
import SearchBox from "./components/searchBox/search.component";
import CardList from "./components/card-list/cardlist.component"
import { Component } from 'react';

class App extends Component {

  constructor() {
    super();

    this.state = {
      catsData: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((catsData) => this.setState(
        () => {return {catsData:catsData}},
        () => console.log(this.state)));

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <SearchBox />
        <CardList cardList={this.state.catsData}/>
      </div>
    );
  }
}
export default App;
