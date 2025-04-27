import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { popularJobDesignations } from '../../Var.jsx';
import { JobBoxWrapper, SingleJobBoxCon } from './UpperSecTypeStyles.jsx';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
export function PopularJobtype() {
    const jobBoxes = popularJobDesignations;
    console.log(jobBoxes)

    return (
        <JobBoxWrapper>
            {jobBoxes.map((Designation, index) => (
                <SingleJobBox
                    key={index}
                    designation={Designation}
                />


            ))}
        </JobBoxWrapper>
    );
}

export function SingleJobBox({ designation }) {
    return (
        <SingleJobBoxCon>
            <div class="singlejobdesign">
                {designation}
                    <div class='iconContainer'>
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </div>
                </div>
        </SingleJobBoxCon>
    )
}