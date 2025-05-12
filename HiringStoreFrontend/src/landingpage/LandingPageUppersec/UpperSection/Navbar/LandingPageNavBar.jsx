import { LogoIcon, MenuBarContainer, MenuBoxContainer, NavbarContainer } from "./navbarstyes";
import { TopMenus } from "../../../Var";
import { Imagepaths } from "../../../../assets/Global_Need_files/ImagesPaths";
import "./navbar.css"

export function LandingNavBar() {
    const TopMenusArray = Object.entries(TopMenus)
    
    return (
        <NavbarContainer >
            <LogoIcon>
                <img  className="logoModification" src={Imagepaths.HiringstoreslogoPath} alt="Hiring Stores Logo" />
            </LogoIcon>
            <MenuBarContainer>
                {TopMenusArray.map(([index, menu]) => (
                    <div className="ComCrouselOuter">
                        <MenuBoxContainer to={menu.path} key={index}>
                            {menu.label}
                        </MenuBoxContainer>
                    </div>
                ))}
            </MenuBarContainer>
        </NavbarContainer>

    )

}
