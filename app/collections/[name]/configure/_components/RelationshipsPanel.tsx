import { EntryType } from "@/types/EntryType";
import React from "react";
import { TbArrowNarrowRight } from "react-icons/tb";

type Relationship = {
  parent: EntryType;
  child: EntryType;
};

const RelationshipsPanel = ({
  relationships,
}: {
  relationships: Relationship[];
}) => {
  return (
    <div>
      {relationships.map(({ parent, child }) => {
        return (
          <div
            className="flex flex-row gap-x-2 text-xl font-poppins text-fern-900 items-center"
            key={`${parent.id}-${child.id}`}
          >
            <div>{parent.pluralName} collects</div>
            <TbArrowNarrowRight />
            <div>{child.pluralName}</div>
          </div>
        );
      })}
    </div>
  );
};

export default RelationshipsPanel;
