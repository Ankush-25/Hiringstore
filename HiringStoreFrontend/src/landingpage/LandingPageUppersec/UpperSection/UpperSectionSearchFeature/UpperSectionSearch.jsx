import { SearchBar, SearchInput, UpperSearchAndTextWrapper } from "./UpperSectionSearchStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./UpperSection.css"
import { useState } from "react";



export function UpperSectionSearch(){
 const[SearchValues, setSearchValues] = useState(['','',''])

 const handleOnChangeInput =(index )={
 }
  
  return(
    <UpperSearchAndTextWrapper>
      <SearchBar>
        <div className="SearchIcondiv">
          <FontAwesomeIcon style={{color:'635555',fontSize:'27px'}} icon={faMagnifyingGlass} />
          {/* <p className='SearchIcon' style={{color:'black'}}>Search Here</p> tool tip addon */}
        </div>
        {Searchbars.map((placeholder,index)=>(
          <SearchInput key={index}
           placeholder={placeholder}
           value={SearchValues[index]}
           onChange={handleOnChangeInput}
           name={`Search${index}`}
           />
        ))}

      </SearchBar>
    </UpperSearchAndTextWrapper>
  )
}
