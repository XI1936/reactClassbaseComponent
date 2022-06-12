import { Component } from "react";

class SearchBox extends Component {

    render() {
        const changeHandler=this.props.searchChange;
        return (
            <div className="searchBox">
                <input type="search" 
                placeholder="Search here"
                onChange={changeHandler}/>
            </div>
        )
    }
}

export default SearchBox;