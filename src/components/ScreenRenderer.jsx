import { useMemo } from 'react';
import MatchLine from "./Match.Line";
import { screenRowCount } from '../utils/helpers';
import useScrollDirection from '../hooks/scrollDirection';

const ScreenRenderer = ({data}) => {
  const scrollDirection = useScrollDirection();

  const MatchRows = useMemo(() => {
    const rowCountToRender = screenRowCount();
    const startingIndex = scrollDirection;
    console.log({startingIndex})

    let matchRows = [];
    for (var i = 0; i<rowCountToRender; i++) {
      matchRows.push(<MatchLine key = {i} rowIndex = {i} event= {data[i+startingIndex]}/>)
    }
    return matchRows;
  }, [data, scrollDirection]);

  return MatchRows;
};

export default ScreenRenderer