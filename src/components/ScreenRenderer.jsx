import React from 'react';
import { FixedSizeList as List } from 'react-window';
import MatchLine from "./Match.Line";

const ScreenRenderer = ({ data }) => {
  const Row = ({ index, style }) => (
    <div style={style} key={index}>
      <MatchLine rowIndex={index} event={data[index]} />
    </div>
  );

  return (
    <div>
      <List
        height={window.innerHeight}
        itemCount={data.length}
        itemSize={50}
        width={window.innerWidth}
        itemData={data}
      >
        {Row}
      </List>
    </div>
  );
};

export default ScreenRenderer;