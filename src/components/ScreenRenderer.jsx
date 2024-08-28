import React from 'react';
import { FixedSizeList as List } from 'react-window';
import MatchLine from "./Match.Line";

const ScreenRenderer = ({ data }) => {
  const Row = ({ index, style }) => (
    <div style={style} className="table-row" key={index}>
      <MatchLine rowIndex={index} event={data[index]} />
    </div>
  );

  return (
    <div className="table-container">
      <List
        height={window.innerHeight}
        itemCount={data.length}
        itemSize={100}
        width={window.innerWidth}
        itemData={data}
      >
        {Row}
      </List>
    </div>
  );
};

export default ScreenRenderer;