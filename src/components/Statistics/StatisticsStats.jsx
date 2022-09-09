import PropTypes from 'prop-types'

export const StatisticsStats = ({ label, percentage }) => {
    return (
        <>
            <span className="label">{label}</span>
            <span className="percentage">{percentage} %</span>
        </>
    )

}

StatisticsStats.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number,
}
