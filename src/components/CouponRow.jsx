import React from 'react';
import './styles.css';

const CouponRow = ({ mbs, code, match, odds }) => {
  return (
    <tr>
      <td>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span className="mbsStyle">
            {mbs}
          </span>
          <span style={{ marginLeft: '10px' }}> 
            {`Kod: ${code || ''}`}
          </span>
        </div>
        <hr style={{ margin: '5px 0' }} /> 
        {`${match || ''}`}
        <hr style={{ margin: '5px 0' }} />
        <span style={{ fontWeight: 'bold' }}>{`Oran: ${odds}`}</span>
      </td>
    </tr>
  );
};

export default CouponRow;
