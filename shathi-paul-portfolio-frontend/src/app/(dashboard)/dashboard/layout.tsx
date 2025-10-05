import SideNav from "../../../components/shared/sidebar/SideNav";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div>
        <div className="flex">
          {/* Sidebar - hidden on small screens, visible on md+ */}
          <div className="hidden md:block md:w-56 lg:w-64">
            <SideNav />
          </div>

          {/* Content area */}
          <main className="flex-1 p-4">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
