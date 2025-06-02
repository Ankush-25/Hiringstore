import { CompaniesLogoPaths, SecondCompaniesLogoPaths } from "../../../../assets/Global_Need_files/ImagesPaths";
import { CompaniesContainer, OuterSliderComCover, SingleCompanyComp, CompaniesContainerSec } from "./CompaniesSliderStyles";
import "./CompaniesSlider.css"
export function CompaniesHelpSlider() {
    const CompaniesEntries = Object.entries(CompaniesLogoPaths);
    const SecondlistEntries = Object.entries(SecondCompaniesLogoPaths);

    return (
        <>
            <div className="CompaniesComTitle">
                <p>Companies We've Helped</p>
            </div>
            <div class="wholeCompWrapper">
                <OuterSliderComCover>
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

                </OuterSliderComCover>
                <OuterSliderComCover>
                    <CompaniesContainerSec >
                        {SecondlistEntries.map(([companyName, logoPath], index) => (
                            <SingleCompanyComp key={index}>

                                <img
                                    className="CompaniesImages"
                                    src={logoPath}
                                    alt={companyName}
                                />
                            </SingleCompanyComp>

                        ))}
                    </CompaniesContainerSec>
                    <CompaniesContainerSec >
                        {SecondlistEntries.map(([companyName, logoPath], index) => (
                            <SingleCompanyComp key={index}>

                                <img
                                    className="CompaniesImages"
                                    src={logoPath}
                                    alt={companyName}
                                />
                            </SingleCompanyComp>

                        ))}
                    </CompaniesContainerSec>

                </OuterSliderComCover>
            </div>

        </>
    );
}
