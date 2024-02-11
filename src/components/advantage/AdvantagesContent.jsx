import TitleComponent from "../common/TitleComponent";
import AdvantageCarrousel from "./AdvantageCarrousel";
const BenefitsContent = () => {

    const title = 'Curso conócete a ti mismo'
    const subtitle = '¿Cuáles son los Beneficios?' 

    return(
        <div className="service_container">
            <TitleComponent title = {title} subtitle = {subtitle}/>
            <div className="service_content">
                <h1>Carousel de beneficio</h1>
                <AdvantageCarrousel/>
            </div>
        </div>
    )
}

export default BenefitsContent;