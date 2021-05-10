import BlockHandle from "components/ContentBlock/BlockHandle";
import BlockRenderer from "components/ContentBlock/BlockRenderer/BlockRenderer";
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { ContentBlock } from "types/block";
import ContentBlockRender from "../ContentBlock";

interface BlockListProps {
  blocks: ContentBlock[];
}

/**
 * Render a list of Content Blocks (sub class of Block), each ContentBlock has a different rendering method, so BlockRenderer will be used
 */
const ContentBlockList = ({ blocks }: BlockListProps) => {
  const [order, setOrder] = useState<ContentBlock[]>(blocks);

  /**
   * Shift an array to fit an element in at a give index, simulates dragging and dropping a component
   *
   * @param list
   * @param startIndex
   * @param endIndex
   * @returns
   */
  const reorder = (list: any[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = reorder(order, result.source.index, result.destination.index);
    setOrder(items as ContentBlock[]);
  };

  if (typeof window === "undefined") {
    return <></>;
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex-grow"
          >
            {order.map((block, blockIndex) => {
              return (
                <Draggable
                  key={`block-${block.id}`}
                  draggableId={String(block.id)}
                  index={blockIndex}
                >
                  {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.draggableProps}>
                      <ContentBlockRender
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

export default ContentBlockList;
