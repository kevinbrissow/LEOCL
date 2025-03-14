import "./globals.css";

export const metadata = {
  title: "LEO CL",
  description: "LEO CLUBE CERRO LARGO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-zinc-50">{children}</body>
    </html>
  );
}
