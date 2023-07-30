import CarouselHistories from "./CarouselHistories";


const HomeContent = () => {
    return (
        <div className="content_wrapper">
            <div className="left_content_wrapper">
                <h1>
                    <span> 
                        Curso <br/>
                        <span className="second"> 
                            Conócete A Ti Mismo 
                        </span>
                    </span>
                </h1>
                <p>Y responde tus preguntas sobre la vida.</p>
            </div>
            <div className="right_content_wrapper">
                <CarouselHistories/>
            </div>
        </div>
    )
}

export default HomeContent;