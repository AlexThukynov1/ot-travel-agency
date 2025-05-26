import './section-title.css'

const SectionTitle = ({title, description, subtitle}) => {
    return (
        <div className='section-header'>
            <h2 className='section-title'>{title}</h2>
            <p className='section-description'>{description}</p>
        </div>
    )
}

export default SectionTitle