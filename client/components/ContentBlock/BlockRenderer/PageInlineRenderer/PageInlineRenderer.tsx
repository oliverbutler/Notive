import IconRender from "components/IconRender";
import React from "react";
import { PageBlock } from "types/block";

interface Props {
  page: PageBlock;
}

const PageInlineRenderer = ({ page }: Props) => {
  return (
    <div className="flex flex-row cursor-pointer ">
      <IconRender icon={page.icon} />
      <p className="underline ml-1">{page.title}</p>
    </div>
  );
};

export default PageInlineRenderer;
