import { CrouselComp, ItemsCrousel } from "../../../../App/RecomendedJob";
import axios from "axios";
import { Api_url } from "../../../../globalConfig.js";
import { useEffect, useState } from "react";

export function InternshipsCrousel() {
  const [internshipData, setInternshipData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${Api_url}/FeatureJobs/6`);
        if(!response){
          throw new Error('Received empty data from server');
        }
        setInternshipData(response.data.jobsCollection);
      } catch (err) { 
        console.error("Failed to fetch internships:", err);
       };
      };
    fetchData();
  }, []);
  console.log(internshipData);

  return (
    <>
      <p className="internshiptxt">Internships</p>
      <div className="internshipsCrouselcontainer">
        <ItemsCrousel CrouselData={internshipData} CrouselComp={CrouselComp} />
      </div>
    </>
  );
}
