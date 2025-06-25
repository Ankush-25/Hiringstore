import { Fragment } from "react";
import { PopularJobtype } from "../UpperSectionType/upperSecTypeParent";
import { UpperSectionSearch } from "./UpperSectionSearch";
import { InternshipsCrousel } from "./InternshipsCrousel";

export function UpperSectionParent() {

    return (
        <Fragment>
            <UpperSectionSearch />
            <PopularJobtype />
            <InternshipsCrousel/>
        </Fragment>

    )

}