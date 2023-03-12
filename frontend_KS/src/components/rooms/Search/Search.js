import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import "./Search.css";
import CloseIcon from "@mui/icons-material/Close";

export const Search = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search-title">
      <div className="search">
        <div className="searchInputs">
          <strong>Tìm kiếm</strong>

          <input
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
          />
          <div className="searchIcon">
            {filteredData.length === 0 ? (
              <SearchIcon />
            ) : (
              <CloseIcon id="clearBtn" onClick={clearInput} />
            )}
          </div>
        </div>
        {filteredData.length !== 0 && (
          <div className="dataResult">
            {filteredData.slice().map((value, key) => {
              return (
                <div>
                  <a className="dataItem" href={`/Rooms/${value._id}`}>
                    <p> {value.title}</p>
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
