import { LogoIcon, MenuBarContainer, MenuBoxContainer, NavbarContainer } from "./navbarstyes";
import { TopMenus } from "../../Var";
import { Imagepaths } from "../../../../assets/Global_Need_files/ImagesPaths";
import "./navbar.css"

export function LandingNavBar() {
    const TopMenusArray = Object.values(TopMenus)
    
    return (
        <NavbarContainer >
            <LogoIcon>
                <img  className="logoModification" src={Imagepaths.HiringstoreslogoPath} alt="Hiring Stores Logo" />
            </LogoIcon>
            <MenuBarContainer>
                {TopMenusArray.map((menu, index) => (
                    <div className="ComCrouselOuter">
                        <MenuBoxContainer key={index}>
                            {menu}
                        </MenuBoxContainer>
                    </div>
                ))}
            </MenuBarContainer>
        </NavbarContainer>

    )

}
