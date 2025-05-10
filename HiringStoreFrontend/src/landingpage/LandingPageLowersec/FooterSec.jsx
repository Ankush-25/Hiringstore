import { Footerfunctions } from "../Var.jsx";
import { FooterWrapper, SingleRowFooterLink, FooterColumnWrapper } from "./FooterSecStyles.jsx"

export function Footerbody() {
    const footerfunction = Object.entries(Footerfunctions)
    const footerfunctionlast = footerfunction.slice(0, 6);
    const footerfunctionMid = footerfunction.slice(6, 12)


    return (
        <FooterWrapper>
            <SingleFooterColumn footerfunctionArray={footerfunctionMid} />
            <SingleFooterColumn footerfunctionArray={footerfunctionlast} />
        </FooterWrapper>

    )
}

export function SingleFooterColumn({ footerfunctionArray }) {


    return (
        <FooterColumnWrapper>
            {footerfunctionArray.map(([index, item]) => (
                <SingleRowFooterLink
                    href={item.path} key={index}
                > {item.name}
                </SingleRowFooterLink>
            ))}

        </FooterColumnWrapper>
    );
}
