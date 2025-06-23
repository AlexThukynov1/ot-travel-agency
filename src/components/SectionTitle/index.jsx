import './section-title.css'
import {PiGlobeHemisphereEastFill} from "react-icons/pi";

const SectionTitle = ({title, description, subtitle}) => {
    return (
        <div className='section-header'>
            {subtitle && (
                <>
                    <p className='section-subtitle'>
                        <PiGlobeHemisphereEastFill/>
                        {subtitle}
                    </p>
                </>
                )
            }
            <h2 className='section-title'>{title}</h2>
            <p className='section-description'>{description}</p>
        </div>
    )
}

export default SectionTitle