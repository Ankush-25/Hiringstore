import { SearchBar, SearchInput, UpperSearchAndTextWrapper } from "./UpperSectionSearchStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./UpperSection.css"
import { useState } from "react";
import { Searchplaceholders } from "../../Var";



export function UpperSectionSearch() {
  const [SearchValues, setSearchValues] = useState(['', '', ''])

  const handleOnChangeInput = (e, index) => {
    const newVal = [...SearchValues]
    newVal[index] = e.target.value;
    setSearchValues(newVal);
  }

  const SearchPlaceholderArray = Object.values(Searchplaceholders)
  console.log(SearchPlaceholderArray  )

  return (
    <UpperSearchAndTextWrapper>
      <SearchBar>
        <div className="SearchIcondiv">
          <FontAwesomeIcon 
            style={{ color: '#635555', fontSize: '27px' }} 
            icon={faMagnifyingGlass} 
          />
        </div>

        <div className="search-inputs-container">
          {SearchPlaceholderArray.map((placeholder, index) => (
              <SearchInput
                placeholder={placeholder}
                value={SearchValues[index]}
                onChange={(e) => handleOnChangeInput(e, index)}
                name={`Search${index}`}
              />
          ))}
        </div>
      </SearchBar>
    </UpperSearchAndTextWrapper>
  )
}
