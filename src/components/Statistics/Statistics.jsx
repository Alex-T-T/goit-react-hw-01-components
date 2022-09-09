import PropTypes from 'prop-types'

export const Statistics = ({ label, percentage }) => {
    return (
        <>
            <span className="label">{label}</span>
            <span className="percentage">{percentage} %</span>
        </>
    )

}

Statistics.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number,
}
