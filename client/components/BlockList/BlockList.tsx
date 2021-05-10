import Block from "components/Block";
import { IBlock } from "components/BlockRenderer/BlockRenderer";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  resetServerContext,
} from "react-beautiful-dnd";

interface BlockListProps {
  blocks: IBlock[];
}

const BlockList = ({ blocks }: BlockListProps) => {
  const [order, setOrder] = useState<IBlock[]>(blocks);

  const reorder = (list: any[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = reorder(order, result.source.index, result.destination.index);
    setOrder(items as IBlock[]);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {order.map((block, blockIndex) => {
              return (
                <Draggable
                  key={`block-${block.id}`}
                  draggableId={String(block.id)}
                  index={blockIndex}
                >
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.draggableProps}>
                      <Block
                        block={block}
                        dragHandleProps={provided.dragHandleProps}
                      />
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default BlockList;
