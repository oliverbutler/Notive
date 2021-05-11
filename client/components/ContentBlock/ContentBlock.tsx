import React, { useState } from "react";
import { Block } from "types/block";
import BlockHandle from "./BlockHandle";
import BlockRenderer from "./BlockRenderer/BlockRenderer";

interface Props {
  block: Block; // "ContentBlock" is a bit of a misnomer as we ALSO accept PageBlocks (as we render the links!)
  dragHandleProps: any;
}

/**
 * Each ContentBlock (or PageBlock as a link) is rendered within the page
 *
 * @param param0
 * @returns
 */
const ContentBlock = ({ block, dragHandleProps }: Props) => {
  return (
    <BlockHandle dragHandleProps={dragHandleProps}>
      <BlockRenderer block={block} />
    </BlockHandle>
  );
};

export default ContentBlock;
