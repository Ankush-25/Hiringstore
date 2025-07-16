import { CrouselComp, ItemsCrousel } from "../../../../App/RecomendedJob";
import { internships } from "../../../Var";
import axios from 'axios';
import {Api_url} from '../../../../globalConfig.js'
import { useEffect, useState } from "react";

export function InternshipsCrousel() {
  const [internshipData, setInternshipData] = useState([]);
  const [isLoading, setIsLoading,] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${Api_url}/FeatureJobs/6`);
        const resData = Array.isArray(response.data) ? response.data : [response.data];
        console.log(resData)
        setInternshipData(resData);
      } catch (err) {
        console.error("Failed to fetch internships:", err);
      }finally{
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  console.log(internshipData);
 
  return (
    <>
      <p className="internshiptxt">Internships</p>
      <div className="internshipsCrouselcontainer">
        {isLoading?<p>Please wait data is loading</p> : internshipData.length>0?
        <ItemsCrousel CrouselData={internshipData} CrouselComp={CrouselComp} />
        :<p>Currently No internship available</p>
        }
      </div>
    </>
  );
}
