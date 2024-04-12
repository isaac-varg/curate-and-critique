import { EntryProperty } from "@prisma/client";

type PropertiesSubpanelProps = {
  properties: EntryProperty[];
};

const PropertiesSubpanel = ({ properties }: PropertiesSubpanelProps) => {
  return (
    <div className="flex flex-col gap-y-2 mt-8">
      {properties.map((property) => (
        <div className="border-silk-200 border-b-2 py-2 flex justify-between items-center font-poppins " key={property.id}>
          <p className="text-neutral-900"> {property.name}</p>
          <p className="text-neutral-500">{property.required ? 'Required' : ''}</p>
        </div>
      ))}
    </div>
  );
};

export default PropertiesSubpanel;
