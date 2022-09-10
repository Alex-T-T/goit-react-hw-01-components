import PropTypes from "prop-types"
import { StatisticsStats } from "./StatisticsStats"
import { StatisticsTitle } from "./StatisticsTitle";


export const StatCard = ({stats, title}) => {
    return (

        <section className="statistics">
            
            <StatisticsTitle title="Upload stats" stats={title} />


            <ul className="stat-list">
                {
                    stats.map(item => (
                        <li key={item.id}>
                            <StatisticsStats
                                label={item.label}
                                percentage={item.percentage}
                            />
                        </li>
                    ))
                }
            </ul>
        </section>
    );
}

StatCard.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    )
}