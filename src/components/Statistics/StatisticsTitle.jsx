import PropTypes from "prop-types"

export const StatisticsTitle = ({title}) => <h2 className="title">{title}</h2>

StatisticsTitle.propTypes = {
    title: PropTypes.string
}
