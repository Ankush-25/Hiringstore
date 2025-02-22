import { CompaniesLogoPaths } from "../../../../assets/Global_Need_files/ImagesPaths";
import { OuterSliderComCover, SingleCompanyComp } from "./CompaniesSliderStyles";
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
                {CompaniesEntries.map(([companyName, logoPath], index) => (
                    <SingleCompanyComp key={index}>
                        <img 
                            className="CompaniesImages"
                            src={logoPath} 
                            alt={companyName} 
                        />
                    </SingleCompanyComp>
                ))}
            </OuterSliderComCover>
        </>
    );
}
