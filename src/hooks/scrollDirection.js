import { useEffect, useState } from "react";
import {renderStartIndexByScreen} from '../utils/helpers'

const useScrollDirection = () => {
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
      setDirection(renderStartIndexByScreen());
   }, false);
  }, []);

  return direction;
};

export default useScrollDirection;
