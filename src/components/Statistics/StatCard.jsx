import { StatisticsStats } from "./StatisticsStats"
import { StatisticsTitle } from "./StatisticsTitle";


export const StatCard = ({stats, title}) => {
    return (

        <section className="statistics">
            {title && <StatisticsTitle title="Upload stats" stats={title} />}

            

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