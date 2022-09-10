import PropTypes from 'prop-types'
import { TransactionRow } from 'components/Transactions/TransactionRow'

export const TransactionTable = ({ transactions }) => {
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map(transaction => <tr key={transaction.id}>
                    <TransactionRow 
                        type={transaction.type}
                        amount={transaction.amount}
                        currency={transaction.currency}
                    />
                </tr>)}
            </tbody>
        </table>
    )
} 

TransactionTable.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    )
}
