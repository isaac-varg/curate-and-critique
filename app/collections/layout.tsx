import Breadcrumbs from "@/components/app/Breadcrumbs";

const InventoryLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
        <Breadcrumbs />
        {children}
    </div>
  )
}

export default InventoryLayout