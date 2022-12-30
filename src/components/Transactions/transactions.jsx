import { PropTypes } from 'prop-types';
import { Items, Table, TableData, TBody, Thead, Title } from "./transactions.styled"

export const Transactions = ({ transactions }) => {
    return (<Table>
        <Thead>
            <tr>
                <Items>Type</Items>
                <Items>Amount</Items>
                <Items>Currency</Items>
            </tr>
        </Thead>

        <TBody>
            {transactions.map(trans => (
                <Title key={trans.id}>
                    <TableData>{trans.type}</TableData>
                    <TableData>{trans.amount}</TableData>
                    <TableData>{trans.currency}</TableData>
                </Title>
            ))}
        </TBody>
    </Table>);
}

Transactions.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
  ),
} 