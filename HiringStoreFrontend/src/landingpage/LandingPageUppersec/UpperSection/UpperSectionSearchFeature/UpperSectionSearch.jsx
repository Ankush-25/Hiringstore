import { SearchBar, SearchButton, SearchInput, UpperSearchAndTextWrapper } from "./UpperSectionSearchStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./UpperSection.css"
import React, { useState, useEffect } from "react";
import { Searchplaceholders } from "../../../Var";
import axios from "axios";
import { Api_url } from "../../../../globalConfig";
import { useNavigate } from "react-router-dom";

export function UpperSectionSearch() {
  const [searchValues, setSearchValues] = useState(['', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleOnChangeInput = (e, index) => {
    const newVal = [...searchValues];
    newVal[index] = e.target.value;
    setSearchValues(newVal);
  }

  const handleSearch = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Extract search parameters
      const [query, experience, location] = searchValues;
      
      // Build query parameters
      const params = new URLSearchParams();
      if (query) params.append('query', query);
      if (experience) params.append('experience', experience);
      if (location) params.append('location', location);
      
      // Make API call
      const response = await axios.get(`${Api_url}/searchJobs?${params.toString()}`);
      
      // Store search results in localStorage for the results page
      localStorage.setItem('jobSearchResults', JSON.stringify(response.data));
      
      // Navigate to search results page
      navigate('/search-results');
      
    } catch (error) {
      console.error('Error searching jobs:', error);
      setError('Failed to search jobs. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const SearchPlaceholderArray = Object.values(Searchplaceholders);

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
          <React.Fragment key={index}>
            {index > 0 && <div className="inputSeprator"> | </div>}
            <SearchInput
              index={index}
              placeholder={placeholder}
              value={searchValues[index]}
              onChange={(e) => handleOnChangeInput(e, index)}
              onKeyPress={handleKeyPress}
              name={`Search${index}`}
              disabled={isLoading}
            />
          </React.Fragment>
        ))}
        <SearchButton onClick={handleSearch} disabled={isLoading}>
          {isLoading ? 'Searching...' : 'Search'}
        </SearchButton>
      </SearchBar>
      {error && <div className="search-error">{error}</div>}
    </UpperSearchAndTextWrapper>
  );
}
