import PropTypes from 'prop-types'
import css from "components/Statistics/Statistics.module.css"

export const StatisticsStats = ({ label, percentage }) => {
    return (
        <>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage} %</span>
        </>
    )

}

StatisticsStats.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number,
}
