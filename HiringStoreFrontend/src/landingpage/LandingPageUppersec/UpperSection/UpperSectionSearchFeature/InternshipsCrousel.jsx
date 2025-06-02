import { CrouselComp, ItemsCrousel } from "../../../../App/RecomendedJob";
import { internships } from "../../../Var";

export function InternshipsCrousel() {
  const InternshipData = internships;
  console.log(InternshipData);

  return (
    <>
      <p className="internshiptxt">Internships</p>
      <div className="internshipsCrouselcontainer">
        <ItemsCrousel CrouselData={InternshipData} CrouselComp={CrouselComp} />
      </div>
    </>
  );
}
