import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { popularJobDesignations } from '../../../Var.jsx';
import { JobBoxWrapper, SingleJobBoxCon } from './UpperSecTypeStyles.jsx';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import "./upperSecType.css"
export function PopularJobtype() {
    const jobBoxes = Object.entries(popularJobDesignations);
    console.log(jobBoxes)


    return (
        <div className='tobjobcontainer'>
            <div class="topJobs">
                Popular Sectors
            </div>
            <JobBoxWrapper>

                {jobBoxes.map(([Designation, DesigLogo], index) => (
                    <SingleJobBox
                        key={index}
                        designation={Designation}
                        desigLogo={DesigLogo}
                    />
                ))}
            </JobBoxWrapper>
        </div>
    );
}

export function SingleJobBox({ designation, desigLogo }) {
    return (
        <SingleJobBoxCon>
            <div class="singlejobdesign">
                {desigLogo}
                {designation}
                <div class='iconContainer'>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
        </SingleJobBoxCon>
    )
}