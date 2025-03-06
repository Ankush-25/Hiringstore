import { CompaniesLogoPaths } from "../../../../assets/Global_Need_files/ImagesPaths";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { OuterSliderComCover, SingleCompanyComp, SliderButton } from "./CompaniesSliderStyles";
import "./CompaniesSlider.css"
export function CompaniesHelpSlider(){
    const CompaniesEntries = Object.entries(CompaniesLogoPaths)
    console.log(CompaniesEntries)
    return (
        <>
            <div className="CompaniesComTitle">
                <p>Companies We've Helped</p>
            </div>
            
            <OuterSliderComCover>
                <SliderButton>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </SliderButton>
                
                    {CompaniesEntries.map(([companyName, logoPath], index) => (
                        <SingleCompanyComp key={index}>
                            <img 
                                className="CompaniesImages"
                                src={logoPath} 
                                alt={companyName} 
                            />
                        </SingleCompanyComp>
                    ))}
                <SliderButton>
                    <FontAwesomeIcon icon={faChevronRight} />
                </SliderButton>

            </OuterSliderComCover>

        </>
    );
}
