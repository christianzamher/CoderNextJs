import React from "react";
import ProductsTable from "@/components/admin/ProductTable";
import LogoutButton from "@/components/admin/LogoutButton";

const Admin = () => {
  return (
    <>
      <div className="container m-auto mt-6">
        <LogoutButton /> 
        <h2 className="text-2xl my-10 border-b pb-4">Admin Panel </h2>
        <ProductsTable />
      </div>
    </>
  );
};

export default Admin;
