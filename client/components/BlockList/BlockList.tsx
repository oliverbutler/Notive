import Block from "components/Block";
import React, { useRef, useState } from "react";

import { usePositionReorder } from "./usePositionReorder";

const BlockList = () => {
  const [blocks, setBlocks] = useState([
    { id: 1, text: "Item 1 🎉" },
    { id: 2, text: "Item 2 🚀" },
    { id: 3, text: "Item 3 🙏" },
  ]);

  const [order, updatePosition, updateOrder] = usePositionReorder(blocks);

  // Current drag is used to hide all handles if an element is selected
  const [currentDrag, setCurrentDrag] = useState<boolean>(false);

  return (
    <div>
      {order.map((block, i) => (
        <Block
          key={block.text}
          block={block}
          i={i}
          updatePosition={updatePosition}
          updateOrder={updateOrder}
          draggable={currentDrag ? false : true}
          emitDrag={setCurrentDrag}
        />
      ))}
    </div>
  );
};

export default BlockList;
