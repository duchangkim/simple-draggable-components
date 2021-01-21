import { ReactChild, ReactChildren, FunctionComponent, Children } from 'react';
import BoxContainer from './BoxContainer';

interface DraggableProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const Draggable: FunctionComponent<DraggableProps> = (props) => {
  return <div className="draggable">
    {Children.map(props.children, (Box, index) => {
      return (
        <BoxContainer key={index}>
          {Box}
        </BoxContainer>
      )
    })}
  </div>
}

export default Draggable;