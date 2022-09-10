import PropTypes from "prop-types"
import css from "components/Statistics/Statistics.module.css"

export const StatisticsTitle = ({ title }) =>{
    return (
        <>
            { title && <h2 className={css.title}>{title}</h2> } 
        </>
)}

StatisticsTitle.propTypes = {
    title: PropTypes.string
}
