import PropTypes from 'prop-types'
import { TransactionRow } from 'components/Transactions/TransactionRow'
import css from 'components/Transactions/Transaction.module.css'

export const TransactionTable = ({ transactions }) => {
    return (
        <table className={css.transactionHistory}>
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
