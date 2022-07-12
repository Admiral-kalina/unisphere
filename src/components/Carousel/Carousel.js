import React, {useEffect, useRef} from 'react'
import {Row, Col, Carousel, Button} from 'antd'

const ExploreCarousel = ({children}) => {
    const carousel = useRef();

    const handleNext = () => setTimeout(() => carousel.current.next(), 500)
    const handlePrev = () => setTimeout(() => carousel.current.prev(), 500)

    const handleScroll = (e) => {
        e.deltaY >= 1 ? handleNext() : handlePrev()
    }

    useEffect(() => {
        document.addEventListener("wheel", handleScroll)
        return () => {
            document.removeEventListener("wheel", handleScroll)
        }
    }, [])

    return (
        <>
            <Carousel ref={carousel}>
                {children}
            </Carousel>
        </>
    )
}

export default ExploreCarousel