import search from "../assets/images/search.png";

function SearchContainer(props) {
    const {inputText, handleInputChange, searchUser} = props ;
    return (
        <div className="section-2">
          <div className="input-section-2">
            <img width="30" src={search} alt=""/>
            <input 
              value={inputText}
              onChange={handleInputChange}
              className="input-search-section-2"
              type="text" 
              placeholder="Search GitHub username..."
            />
          </div>
          <div>
            <button 
              className="btn-search" 
              onClick={searchUser}
              >Search
            </button>
          </div>
        </div>
    );
}

export default SearchContainer;