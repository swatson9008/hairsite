import scissors from '../assets/scissors.svg'
import { MotionAnimate } from 'react-motion-animate'

export default function Bio() {
    return (
        <div className="bioMain">
            <div className="scissors">
                <MotionAnimate 
                    animation='fadeInUp' 
                    delay={0.2}
                    speed={1.5}
                    distance={60}
                    reset={true}>
                        <img src={scissors} alt=""/>
                </MotionAnimate></div>
            <div className="circle">
                <div className="circleText">some sample text</div>
            </div>
        </div>
    )
}