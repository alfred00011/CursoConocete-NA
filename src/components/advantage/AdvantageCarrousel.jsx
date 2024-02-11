import { useState } from "react";
import images from "../../helpers/ImgAdvantage";

const Advantage = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(images[0])

    let test = `assets/images/advantages${selectedImage}`
    const selectNewImage = (index, images, next) => {
        const condition = next ? selectedIndex < images.length: seletedIndex > 0;
        const nextIndex = next ? condition ? selectedIndex + 1 : 0 
            : condition ? selectedIndex -1 : images.length -1
        setSelectedImage(images[nextIndex])
        setSelectedIndex(nextIndex)  

    }
    console.log(images[0].img)
    const previous = () => {
        selectNewImage(selectNewImage, images, false)
    }

    const next = () => {
        selectNewImage(selectNewImage, images, true)
    }
    return (
       <div>
            <img src={selectedImage.img} alt="beneficio" width="200px"/>
            {
                images.map((image, index) => (
                    <img src={image.img} alt={index.title} width="150px"/>
                ))
            }
            <button onClick={previous}>Previo</button>
            <button onClick={next}>Siguiente</button>
       </div>
    )
    
}

export default Advantage;