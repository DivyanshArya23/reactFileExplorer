"use client";
import { useState } from "react";

type ButtonProps = {
  isFolder: boolean;
  name: string;
  id: string;
  items: Array<Record<string, any>>;
};

export const Button = ({ isFolder, name, id, items = [] }: ButtonProps) => {
  const [showItems, setShowItems] = useState(true);
  const toggleItems = () => setShowItems((val) => !val);

  return (
    <div style={{ marginLeft: "20px" }}>
      <div
        aria-hidden
        style={{
          width: "max-content",
          cursor: "pointer",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "5px",
          padding: "2px",
        }}
        onClick={toggleItems}
      >
        {isFolder ? "> " : null}
        <div
          style={{
            border: "1px solid red",
            borderRadius: "20px",
            padding: "5px 10px",
            display: "inline-block",
          }}
        >
          {name}
        </div>
      </div>
      {showItems &&
        items?.map(
          ({
            name: childName,
            id: childId,
            isFolder: childIsFolder,
            items: childItems,
          }) => {
            return (
              <Button
                key={id}
                name={childName}
                id={childId}
                isFolder={childIsFolder}
                items={childItems}
              />
            );
          }
        )}
    </div>
  );
};
