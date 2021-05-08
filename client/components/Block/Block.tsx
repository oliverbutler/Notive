import React, { useState } from "react";
import { EllipsisVertical, Add } from "react-ionicons";
import { motion, useDragControls } from "framer-motion";

const Block = ({ text }) => {
  const dragControl = useDragControls();
  const [draggable, setDraggable] = useState(false);

  function startDrag(event: MouseEvent) {
    setDraggable(true);
    dragControl.start(event, { snapToCursor: true });
  }

  function stopDrag(event: MouseEvent) {
    setDraggable(false);
  }

  return (
    <motion.div
      className="flex flex-row m-2 group text-center"
      drag={draggable ? "y" : false}
      dragMomentum={false}
      dragControls={dragControl}
      onDrag={(event, info) => console.log(info.point.x, info.point.y)}
      // dragPropagation
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
          onPointerDown={startDrag}
          onPointerUp={stopDrag}
          className="my-auto mr-1 hover:bg-gray-100  rounded-sm opacity-0 group-hover:opacity-100 p-1 cursor-pointer"
        >
          <EllipsisVertical
            width="15px"
            height="15px"
            color="rgb(156, 163, 175)"
          />
        </motion.div>
      </div>
      <div className="">
        <p className="">{text}</p>
      </div>
    </motion.div>
  );
};

export default Block;
