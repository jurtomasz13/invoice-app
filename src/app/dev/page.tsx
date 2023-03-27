import { notFound } from "next/navigation";
import { development } from "@/utils";

export default function Page() {
  if (development()) notFound();

  return <main>Development</main>;
}
