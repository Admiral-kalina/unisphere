import React, {useEffect} from "react";
import Parallax from "parallax-js";
import Dashed from '../../assets/animateImg/dashedImg/blueDashedTime.png'
import './styles.scss'

const SandClock = () => {
    useEffect(() => {
        const sand_clock_animate = document.getElementById("sand_clock_animate");
        new Parallax(sand_clock_animate);
    });
    return (
        <div className="sand_clock_wrapper">
            <svg className='sand_clock_block' width="212" height="482" viewBox="0 0 212 482" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path className='polygon_sand-clock'
                      d="M211.086 30.4863C211.086 13.6089 164.02 0 105.603 0C47.1854 0 0.118853 13.6089 0.118853 30.4863L0.118853 164.436C0.118853 193.733 24.1275 217.742 53.4253 217.742C65.9645 217.742 76.186 227.904 76.186 240.503V240.562C76.186 253.22 65.905 263.501 53.247 263.501H53.1281C23.8304 263.501 0.118853 287.213 0.118853 316.511L0.118853 450.698H0C0 467.337 47.3042 481.125 105.721 481.125C164.139 481.125 211.265 467.337 211.265 450.698H211.086V316.511C211.086 287.213 187.494 263.501 158.196 263.501H158.255C145.478 263.501 135.138 253.399 135.138 240.325C135.138 227.251 145.478 217.148 158.255 217.148H158.077C187.375 217.148 210.967 193.496 210.967 164.198V30.4863H211.086Z"
                      fill="#0057BD"/>

            </svg>
            <div id="sand_clock_animate" className='polygon'>
                <img alt="" className='dashed' data-depth={2} src={Dashed} />
            </div>
        </div>
    )

}
export default SandClock