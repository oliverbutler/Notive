import Block from "components/Block";
import { BlockInterface } from "components/BlockRenderer/BlockRenderer";
import React, { useRef, useState } from "react";

import { usePositionReorder } from "./usePositionReorder";

interface BlockListProps {
  blocks: BlockInterface[];
}

const BlockList = ({ blocks }: BlockListProps) => {
  const [order, updatePosition, updateOrder] = usePositionReorder(blocks);

  // Current drag is used to hide all handles if an element is selected
  const [currentDrag, setCurrentDrag] = useState<boolean>(false);

  return (
    <div>
      {order.map((block: BlockInterface, i) => (
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
