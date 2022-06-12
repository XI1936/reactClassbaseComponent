import './App.css';
import SearchBox from "./components/searchBox/search.component";
import CardList from "./components/card-list/cardlist.component"
import { Component } from 'react';

class App extends Component {

  constructor() {
    super();

    this.state = {
      catsData: [],
      searchKey:"",
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((catsData) => this.setState(
        () => {return {catsData:catsData}},
        () => console.log(this.state)));

  }

  searchChange=(event)=>{
    // console.log("search")
    const searchKey=event.target.value.toLowerCase();
    this.setState(()=>{
      return {searchKey}
    },
    ()=>{console.log(this.state)})

  }
  render() {
    const {catsData,searchKey}=this.state;
    const  {searchChange}=this;
    const filteredCats=catsData.filter((cat)=>{
      return cat.name.toLowerCase().includes(searchKey);
    })
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <SearchBox searchChange={searchChange}/>
        <CardList cardList={filteredCats}/>
      </div>
    );
  }
}
export default App;
