import IconRender from "components/IconRender";
import React from "react";
import { Block, PageBlock, Icon, isPageBlock, isIcon } from "types/block";

type RecursivePageProps = {
  blocks: Block[];
};

const RecursivePage = ({ blocks }: RecursivePageProps) => {
  return (
    <div key={`sidebar-block-group`}>
      {blocks.map((page, index) => {
        if (isPageBlock(page)) {
          return (
            <div className="ml-3" key={`sidebar-block-${index}`}>
              <div className="flex flex-row">
                <IconRender icon={page.icon} className="mr-1" /> {page.title}
              </div>
              {page.children && <RecursivePage blocks={page.children} />}
            </div>
          );
        }
      })}
    </div>
  );
};

type SidebarProps = {
  blocks: Block[];
};

const Sidebar = ({ blocks }: SidebarProps) => {
  return (
    <div id="sidebar" className="w-48 bg-gray-50 h-screen">
      <RecursivePage blocks={blocks} />
    </div>
  );
};

export default Sidebar;
