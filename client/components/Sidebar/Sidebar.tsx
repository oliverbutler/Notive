import { IPage } from "components/Page/Page";
import React from "react";

type RecursivePageProps = {
  pages: IPage[];
};

const RecursivePage = ({ pages }: RecursivePageProps) => {
  return (
    <div key={`sidebar-block-group`}>
      {pages.map((page: IPage, index) => (
        <div className="ml-3" key={`sidebar-block-${index}`}>
          <p>
            {page.emoji} {page.title}
          </p>
          {page.pages && <RecursivePage pages={page.pages} />}
        </div>
      ))}
    </div>
  );
};

type SidebarProps = {
  pages: IPage[];
};

const Sidebar = ({ pages }: SidebarProps) => {
  return (
    <div id="sidebar" className="w-48 bg-gray-50 h-screen">
      <RecursivePage pages={pages} />
    </div>
  );
};

export default Sidebar;
