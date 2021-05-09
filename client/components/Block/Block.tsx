import React, { useEffect, useRef, useState } from "react";
import { EllipsisVertical, Add, Apps } from "react-ionicons";
import {
  AnimatePresence,
  motion,
  useDragControls,
  useMotionValue,
} from "framer-motion";
import { useMeasurePosition } from "components/BlockList/useMeasurePosition";
import BlockRenderer from "components/BlockRenderer/BlockRenderer";
import { IBlock } from "components/BlockRenderer/BlockRenderer";

interface BlockProps {
  block: IBlock;
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
  // Are we currently holding the handle
  const [isDragging, setDragging] = useState(false);

  // Should be handle be draggable (only allow when we touch the handle)
  const [isDraggable, setDraggable] = useState(false);

  // Is the mouse currently holding the handle
  const [isMouseUp, setMouseUp] = useState(true);

  // Is the block being hovered over
  const [isHover, setHover] = useState(false);

  const ref = useMeasurePosition((pos) => updatePosition(i, pos));

  return (
    <motion.div
      ref={ref}
      layout
      className={"custom-block flex flex-row group text-center relative "}
      style={{ zIndex: isDragging ? 3 : 1 }}
      drag={isDraggable ? true : false}
      initial={false}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
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
      <AnimatePresence>
        {isHover && (
          <div
            className="flex flex-row select-none absolute -left-14 bottom-1"
            style={{ visibility: draggable ? "visible" : "hidden" }}
          >
            <div className="flex flex-col">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="my-auto select-none hover:bg-gray-100 rounded-md opacity-0 group-hover:opacity-100 p-0.5 cursor-pointer text-gray-400 stroke-current"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  strokeWidth="0.2"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.div>
            </div>
            <div className="flex flex-col">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="my-auto mr-1 hover:bg-gray-100 select-none rounded-md opacity-0 group-hover:opacity-100 p-0.5 cursor-pointer text-gray-400 stroke-current"
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
                {/* <Apps width="20px" height="20px" />
                 */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  strokeWidth="0.2"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
      <div className="flex-grow">
        <BlockRenderer block={block} />
      </div>
    </motion.div>
  );
};

export default Block;
