import { Component } from "react";

class SearchBox extends Component {

    render() {
        const changeHandler=this.props.searchChange;
        const placeholderText=this.props.placeholderText;
        return (
            <div className="searchBox">
                <input type="search" 
                placeholder={placeholderText}
                onChange={changeHandler}/>
            </div>
        )
    }
}

export default SearchBox;