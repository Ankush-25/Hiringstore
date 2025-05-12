import { Imagepaths } from "../../assets/Global_Need_files/ImagesPaths.js";
import { Footerfunctions } from "../Var.jsx";
import {
  FooterWrapper,
  SingleRowFooterLink,
  FooterColumnWrapper,
} from "./FooterSecStyles.jsx";
import "./FooterSec.css";

export function Footerbody() {
  const footerfunction = Object.entries(Footerfunctions);
  const footerfunctionlast = footerfunction.slice(0, 4);
  const footerfunctionMid = footerfunction.slice(4, 8);
  const footerfunctionFirst = footerfunction.slice(8, 12);

  return (
    <FooterWrapper>
      <div class="outerCover">
        <FooterSecLogo />
        <SingleFooterColumn footerfunctionArray={footerfunctionlast} />
        <SingleFooterColumn footerfunctionArray={footerfunctionMid} />
        <SingleFooterColumn footerfunctionArray={footerfunctionFirst} />
      </div>
      <div class="copyrightpart">
        <p className="copyright-years">
          &copy; All rights are reserved to Vigyapanam.pvt.ltd{" "}
          <span>(2021-2025)</span>
        </p>
      </div>
    </FooterWrapper>
  );
}

export function SingleFooterColumn({ footerfunctionArray }) {
  return (
    <FooterColumnWrapper>
      {footerfunctionArray.map(([index, item]) => (
        <SingleRowFooterLink to={item.path} key={index}>
          {item.name}
        </SingleRowFooterLink>
      ))}
    </FooterColumnWrapper>
  );
}
export function FooterSecLogo() {
  return (
    <div class="Logodiv">
      <img
        class="ImageFooterSec"
        src={Imagepaths.HiringstoreslogoPath}
        alt="Hiring Store"
      />
      <h3>Follow Us!</h3>
      <p>😊 Stay Ahead with Free Job Alerts 🔔</p>
    </div>
  );
}
