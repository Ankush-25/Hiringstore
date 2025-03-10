import { CompaniesLogoPaths } from "../../../../assets/Global_Need_files/ImagesPaths";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { CompaniesContainer, OuterSliderComCover, SingleCompanyComp, SliderButton } from "./CompaniesSliderStyles";
import "./CompaniesSlider.css"
export function CompaniesHelpSlider(){
    const CompaniesEntries = Object.entries(CompaniesLogoPaths)

    return (
        <>
            <div className="CompaniesComTitle">
                <p>Companies We've Helped</p>
            </div>
            <OuterSliderComCover>
                <SliderButton>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </SliderButton>
                <CompaniesContainer >
                    {CompaniesEntries.map(([companyName, logoPath], index) => (
                        <SingleCompanyComp key={index}>
                            <img 
                                className="CompaniesImages"
                                src={logoPath} 
                                alt={companyName} 
                            />
                        </SingleCompanyComp>
                    ))}
                </CompaniesContainer>   
                <SliderButton>
                    <FontAwesomeIcon icon={faChevronRight} />
                </SliderButton>

            </OuterSliderComCover>

        </>
    );
}
