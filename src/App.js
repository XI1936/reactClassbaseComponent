import './App.css';
import SearchBox from "./components/searchBox/search.component";
import CardList from "./components/card-list/cardlist.component"

function App() {
  const catUrl="https://robohash.org/3?set=set4&size=450x450"
  return (
    <div className="App">
      <header className="App-header">
        <img src={catUrl} className="App-logo" alt="logo" />
      </header>
      <SearchBox/>
      <CardList/>
    </div>
  );
}

export default App;
