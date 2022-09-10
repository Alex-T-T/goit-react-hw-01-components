import PropTypes from 'prop-types'

export const TransactionRow = ({type, amount, currency}) =>   {    

    return (
    <>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </>
    )
}
    
TransactionRow.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}