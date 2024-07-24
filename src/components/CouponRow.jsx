
const CouponRow = ({ mbs, code, match, odds}) => {
  return (
    <tr>
        <td>
            {`${mbs} Kod: ${code || ''} Maç: ${match || ''} `}
            <span style={{ fontWeight: 'bold' }}>{`Oran: ${odds}`}</span>
        </td>
    </tr>
  )
};

export default CouponRow;