import "./globals.css";

export const metadata = {
  title: "Robot Game",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50">
        <div className="p-10">
          <h1 className="text-4xl font-medium text-center mb-10">Robot Game</h1>
          <div className="flex flex-col items-center">{children}</div>
        </div>
      </body>
    </html>
  );
}
