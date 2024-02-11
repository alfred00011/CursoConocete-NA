import React from "react";
import TitleComponent from "../common/TitleComponent";

import MapaContent from "../../assets/images/mapa.png";

const CourseContent = () => {

    const title = 'Contenido del curso'
    const subtitle = 'Recorrido a travéz del curso' 

    return(
        <div className="service_container">
            <TitleComponent title = {title} subtitle = {subtitle}/>
            <div className="service_content">
                <div className="content">
                    <img src={MapaContent} alt="content" />
                </div>
            </div>
        </div>
    )
}

export default CourseContent;