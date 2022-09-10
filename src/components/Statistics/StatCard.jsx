import PropTypes from "prop-types";
import { StatisticsStats } from "./StatisticsStats";
import { StatisticsTitle } from "./StatisticsTitle";
import css from "components/Statistics/Statistics.module.css"



export const StatCard = ({stats, title}) => {
    return (

        <section className={css.statistics}>
            
            <StatisticsTitle title="Upload stats" stats={title} />


            <ul className={css.statList}>
                {
                    stats.map(item => (
                        <li key={item.id} className={css.statItem}>
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