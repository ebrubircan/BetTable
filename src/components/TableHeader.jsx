import { headKeys } from '../utils/constants';

const TableHeader = ({ count }) => {
  return (
    <thead>
      <tr>
          <th colSpan="7">Event Count: {count}</th>
          <th>Yorumlar</th>
          <th>MBS</th>
          {headKeys.map((key, index) => (
              <th key={index}>{key}</th>
          ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
