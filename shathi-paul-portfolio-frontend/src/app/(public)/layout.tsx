import BackgroundSquares from "@/components/background/BackgroundSquares";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";

const PublicLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <BackgroundSquares />
      <Navbar />
      <main className="max-w-[1400px] mx-auto px-6">{children}</main>
      <Footer />
    </>
  );
};

export default PublicLayout;
