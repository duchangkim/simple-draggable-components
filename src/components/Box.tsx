import { FunctionComponent, useState } from 'react';

interface BoxProps {}

const Box: FunctionComponent<BoxProps> = () => {
  const [position, setPosition] = useState({
    initialX: 0,
    initialY: 0,
    currentX: 0,
    currentY: 0,
    xOffset: 0,
    yOffset: 0,
  });
  const [active, setActive] = useState(false);

  const setTranslate = (
    x: number,
    y: number,
    dragItem: HTMLDivElement
  ) => {
    dragItem.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }

  const handleDragStart = (e: React.MouseEvent): void => {
    e.stopPropagation();
    e.preventDefault();
    setPosition((prev) => ({
      ...prev,
      initialX: e.clientX - position.xOffset,
      initialY: e.clientY - position.yOffset,
    }));
    setActive(true);
  }
  const handleDrag = (e: React.MouseEvent): void => {
    e.stopPropagation();
    e.preventDefault();
    if (active) {
      setPosition((prev) => ({
        ...prev,
        // 마우스의 위치 - 초기좌표 = 현재위치
        currentX: e.clientX - position.initialX,
        currentY: e.clientY - position.initialY,
        xOffset: position.currentX,
        yOffset: position.currentY,
      }));
      
      setTranslate(
        window.innerWidth / 2 - (e.target as HTMLDivElement).scrollWidth / 2 >= Math.abs(position.currentX)
        ? position.currentX 
        : position.currentX < 0
        ? -(window.innerWidth / 2 - (e.target as HTMLDivElement).scrollWidth / 2)
        : window.innerWidth / 2 - (e.target as HTMLDivElement).scrollWidth / 2,
        window.innerHeight / 2 - (e.target as HTMLDivElement).scrollHeight / 2 >= Math.abs(position.currentY)
        ? position.currentY
        : position.currentY < 0
        ? -(window.innerHeight / 2 - (e.target as HTMLDivElement).scrollHeight / 2)
        : window.innerHeight / 2 - (e.target as HTMLDivElement).scrollHeight / 2,
        (e.target as HTMLDivElement)
      );
    }
  }
  const handleDragEnd = (e: React.MouseEvent): void => {
    e.stopPropagation();
    e.preventDefault();
    setPosition((prev) => ({
      ...prev,
      initialX: position.currentX,
      initialY: position.currentY,
    }));
    setActive(false);
  }

  return <div className="box"
    onMouseDown={(e) => handleDragStart(e)}
    onMouseMove={(e) => handleDrag(e)}
    onMouseUp={(e) => handleDragEnd(e)}
  ></div>
}

export default Box;