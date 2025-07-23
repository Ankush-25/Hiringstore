import { Fragment } from "react";
import { PopularJobtype } from "../UpperSectionType/upperSecTypeParent";
import { UpperSectionSearch } from "./UpperSectionSearch";
import { InternshipsCrousel } from "./InternshipsCrousel";
import RemoteJobsCarousel from "./RemoteJobsCarousel";
import {FreshersJobsCarousel} from "./FreshersJobsCarousel.jsx";


export function UpperSectionParent() {
    return (
        <Fragment>
            <UpperSectionSearch />
            <PopularJobtype />
            <div className="black-theme-wrapper">
                <InternshipsCrousel/>
                <RemoteJobsCarousel />
                <FreshersJobsCarousel />
            </div>
        </Fragment>
    )
}