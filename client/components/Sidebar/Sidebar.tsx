import { IPage } from "components/Page/Page";
import React from "react";

type RecursivePageProps = {
  pages: IPage[];
};

const RecursivePage = ({ pages }: RecursivePageProps) => {
  return (
    <div>
      {pages.map((page: IPage) => (
        <div className="ml-3">
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
