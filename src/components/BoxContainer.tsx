import { FunctionComponent } from 'react';
import Box from './Box';

interface BoxContainerProps {}

const BoxContainer: FunctionComponent<BoxContainerProps> = () => {
  return (
    <div className="box-container">
      <Box/>
    </div>
  );
}

export default BoxContainer;