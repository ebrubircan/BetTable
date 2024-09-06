import { headKeys } from '../utils/constants';
import style from "./TableHeader.module.css";
import tableStyle from "./Table.module.css";

const TableHeader = ({ count }) => {
  return (
<div className={`${style.headerRow} ${tableStyle.wrapper}`}>
  <span className={`${style.headerCell} ${tableStyle.firstCol}`} style={{ fontSize: '14px', textAlign: 'center', lineHeight: '40px' }}>
    Event Count: {count}
  </span>
  <span className={style.headerCell} style={{ lineHeight: '40px' }}>Yorumlar</span>
  <span className={style.headerCell} style={{ lineHeight: '40px' }}>MBS</span>
  {headKeys.map((key, index) => (
    <span className={style.headerCell} key={index} style={{ lineHeight: '40px' }}>{key}</span>
  ))}
</div>

  );
};

export default TableHeader;
