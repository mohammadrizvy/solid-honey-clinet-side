import React from "react";
import DataTable from "../../../../Components/DataTable/DataTable";
import DashboardBreadcrumb from "../../../../Components/DashboardBreadcurm/DashboardBreadcurm";

const BuyList = () => {
  return (
    <div>
      <DashboardBreadcrumb firstItem={"পণ্য ক্রয়"} secondItem={"ক্রয় তালিকা"}></DashboardBreadcrumb>
      <DataTable></DataTable>
    </div>
  );
};

export default BuyList;
