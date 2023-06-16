"use client";
import { notFound } from "next/navigation";

import AddNewItemButton from "@/components/Buttons/AddNewItemButton/AddNewItemButton";
import DeleteButton from "@/components/Buttons/DeleteButton/DeleteButton";
import EditButton from "@/components/Buttons/EditButton/EditButton";
import MarkAsPaidButton from "@/components/Buttons/MarkAsPaidButton/MarkAsPaidButton";
import NewInvoiceButton from "@/components/Buttons/NewInvoiceButton/NewInvoiceButton";
import SaveAsDraftButton from "@/components/Buttons/SaveAsDraftButton/SaveAsDraftButton";
import { development } from "@/utils";

export default function Page() {
  if (!development()) notFound();

  const handleClick = () => {
    console.log("click");
  };

  return (
    <main>
      <NewInvoiceButton handleClick={handleClick} />
      <MarkAsPaidButton handleClick={handleClick} />
      <EditButton handleClick={handleClick} />
      <SaveAsDraftButton handleClick={handleClick} />
      <DeleteButton handleClick={handleClick} />
      <AddNewItemButton handleClick={handleClick} />
    </main>
  );
}
