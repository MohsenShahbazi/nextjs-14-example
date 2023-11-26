"use client";
import { usePathname } from "next/navigation";
import { use } from "react";
export default function PostPage({ params }: { params: { id: string } }) {
  const pathName = usePathname();

  console.log(pathName);

  return (
    <>
      <h2 className="text-lg font-bold">post page</h2>
      <div>post Id: {params.id}</div>
    </>
  );
}
