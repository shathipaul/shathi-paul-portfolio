import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";

const PublicLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-6 text-primary relative">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;
