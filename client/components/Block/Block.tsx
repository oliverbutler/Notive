import React, { useEffect, useRef, useState } from "react";
import { EllipsisVertical, Add } from "react-ionicons";
import { motion, useDragControls, useMotionValue } from "framer-motion";
import { useMeasurePosition } from "components/BlockList/useMeasurePosition";

interface BlockProps {
  block: any;
  i: number;
  updatePosition: any;
  updateOrder: any;
  draggable: boolean;
  emitDrag: any;
}

const Block = ({
  block,
  i,
  updatePosition,
  updateOrder,
  draggable,
  emitDrag,
}: BlockProps) => {
  const [isDragging, setDragging] = useState(false);

  const [isDraggable, setDraggable] = useState(false);
  const [isMouseUp, setMouseUp] = useState(true);

  const ref = useMeasurePosition((pos) => updatePosition(i, pos));

  return (
    <motion.div
      ref={ref}
      layout
      className={"flex flex-row m-2 group text-center"}
      style={{ zIndex: isDragging ? 3 : 1 }}
      drag={isDraggable ? "y" : false}
      initial={false}
      onDragStart={() => {
        setDragging(true);
        emitDrag(true);
      }}
      onDragEnd={() => {
        emitDrag(false);
        setDragging(false);
        setMouseUp(true);
        setDraggable(false);
      }}
      onViewportBoxUpdate={(_viewportBox, delta) => {
        isDragging && updateOrder(i, delta.y.translate);
      }}
      dragPropagation
    >
      <div
        className="flex flex-row"
        style={{ visibility: draggable ? "visible" : "hidden" }}
      >
        <div className="flex flex-col">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            animate={{}}
            className="my-auto select-none hover:bg-gray-100 rounded-sm opacity-0 group-hover:opacity-100 p-1 cursor-pointer"
          >
            <Add width="15px" height="15px" color="rgb(156, 163, 175)" />
          </motion.div>
        </div>
        <div className="flex flex-col">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="my-auto mr-1 hover:bg-gray-100  rounded-sm opacity-0 group-hover:opacity-100 p-1 cursor-pointer"
            onMouseEnter={() => {
              if (!isDragging) {
                setDraggable(true);
                setMouseUp(true);
              }
            }}
            onMouseLeave={() => {
              if (isMouseUp) {
                setDraggable(false);
                setMouseUp(false);
              }
            }}
            onMouseDown={() => {
              setDraggable(true);
              setMouseUp(false);
            }}
            onMouseUp={() => setMouseUp(true)}
          >
            <EllipsisVertical
              width="15px"
              height="15px"
              color="rgb(156, 163, 175)"
            />
          </motion.div>
        </div>
      </div>
      <div className="">
        <p className="">{block.text}</p>
      </div>
    </motion.div>
  );
};

export default Block;
