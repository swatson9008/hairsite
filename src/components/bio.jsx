import scissors from '../assets/scissors.svg'
import comb from '../assets/comb.svg'
import { MotionAnimate } from 'react-motion-animate'
import profilePic from '../assets/profileimg.jpg'

export default function Bio() {
    return (
        <div className='bioAdjust'>
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
                <div className="circleText"><div className='insiderPic'><img src={profilePic} alt=""/></div>
                    <span>Savannah has been working as a hairstylist since 2014. Her salon accepts customers by appointment only</span></div>
            </div>
            <div className="comb">
                <MotionAnimate
                    className="combContain"
                    animation='fadeInUp' 
                    delay={0.2}
                    speed={1.5}
                    distance={60}
                    reset={true}>
                        <img src={comb} alt=""/>
                </MotionAnimate></div>
        </div>
        </div>
    )
}