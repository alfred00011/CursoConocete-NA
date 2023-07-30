/* eslint-disable react/prop-types */

const TitleComponent = (props) => {
    return (
        <div className="title_wrapper">
            <span className="service_title">
                {props.title}
            </span>
            <h1>{props.subtitle}</h1>
        </div>
    )
}

export default TitleComponent;