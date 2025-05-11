import { SearchBar, SearchButton, SearchInput, UpperSearchAndTextWrapper } from "./UpperSectionSearchStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./UpperSection.css"
import { useState } from "react";
import { Searchplaceholders } from "../../../Var";



export function UpperSectionSearch() {

  const [SearchValues, setSearchValues] = useState(['', '', ''])

  const handleOnChangeInput = (e, index) => {
    const newVal = [...SearchValues]
    newVal[index] = e.target.value;
    setSearchValues(newVal);
  }

  const handleSearch = () => {
    console.log('Searching with values:', SearchValues);
  }

  const SearchPlaceholderArray = Object.values(Searchplaceholders)

    return (
      <UpperSearchAndTextWrapper>
        <h1 className="Tagline">
          Hiring Made Simple - Find Your Dream Job Now!
        </h1>
        <SearchBar>
          <div className="SearchIcondiv">
            <FontAwesomeIcon 
              className="SearchIcon"
              icon={faMagnifyingGlass} 
            />
          </div>
          {SearchPlaceholderArray.map((placeholder, index) => (
            <>
              {index > 0 && <div className="inputSeprator"> | </div>}
              <SearchInput
                index = {index}
                placeholder={placeholder}
                value={SearchValues[index]}
                onChange={(e) => handleOnChangeInput(e, index)}
                name={`Search${index}`}
              />
            </>
          ))}
          <SearchButton onClick={handleSearch}>Search</SearchButton>
        </SearchBar>
      </UpperSearchAndTextWrapper>
  )
}
