import { headKeys } from '../utils/constants';

const TableHeader = ({ count }) => {
  return (
    <div className="table-header">
      <div className="header-row">
        <span className="header-cell" colSpan="7">Event Count: {count}</span>
        <span className="header-cell">Yorumlar</span>
        <span className="header-cell">MBS</span>
        {headKeys.map((key, index) => (
          <span className="header-cell" key={index}>{key}</span>
        ))}
      </div>
    </div>
  );
};

export default TableHeader;
