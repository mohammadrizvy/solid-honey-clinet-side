import React from "react";

const DashboardBreadcrumb = ({ firstItem, secondItem }) => {
  return (
    <div className="mb-4 breadcrumbs font-semibold bangla-regular">
      <ul className=" text-base flex space-x-2">
        <li>
          <span>ড্যাশবোর্ড</span>
        </li>
        {firstItem && (
          <li>
            <span>{firstItem}</span>
          </li>
        )}
        {secondItem && (
          <li>
            <span>{secondItem}</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default DashboardBreadcrumb;
