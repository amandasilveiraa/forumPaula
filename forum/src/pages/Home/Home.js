
import HeaderPerfil from "../../componentes/Header/HeaderPerfil";
import Menu from "../../componentes/Menu/Menu";
import Card from "../../componentes/Menu/Menu"

import { SectionStyle } from "./style";



function Home() {


  


    return (
        <>
            <HeaderPerfil />

            <SectionStyle>
                <Menu />
                <Card />

                {/* <Historicos /> */}

            </SectionStyle>

        </>
    )
}


export default Home