import { Fragment } from "react";
import { PopularJobtype } from "../UpperSectionType/upperSecTypeParent";
import { UpperSectionSearch } from "./UpperSectionSearch";

export function UpperSectionParent() {

    return (
        <Fragment>
            <UpperSectionSearch />
            <PopularJobtype />
        </Fragment>

    )

}