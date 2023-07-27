import Navbar from "./Navbar";

export default async function Layout({ children }) {
  return (
    <div className="max-w-[800px] mx-auto">
      <Navbar />
      <div className="mt-5">{children}</div>
    </div>
  );
}
