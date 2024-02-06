"use client";
import { Explorer } from "@/app/constants";
import { useState } from "react";
import { Button } from "../Button/Button";

export const FileExplorer = () => {
  const [explorer, setExplorer] = useState(Explorer);
  const { id, name, isFolder, items } = explorer;

  //   const out = addFolder(explorer, "3", {
  //     id: "40",
  //     name: "mynewFile.html",
  //     isFolder: false,
  //     items: [],
  //   });
  //   console.log("out", out);

  return (
    <div>
      <Button id={id} name={name} isFolder={isFolder} items={items} />
    </div>
  );
};
