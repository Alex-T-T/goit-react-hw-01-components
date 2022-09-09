import { Statistics } from "./Statistics"


export const StatCard = ({items}) => {
    return (

        <section className="statistics">
            <h2 className="title">Upload stats</h2>

            

            <ul className="stat-list">
                {
                    items.map(item => (
                        <li key={item.id}>
                            <Statistics
                                label={item.lasbel}
                                percentage={item.percentage}
                            />
                        </li>
                    ))
                }
            </ul>
        </section>
    );
}