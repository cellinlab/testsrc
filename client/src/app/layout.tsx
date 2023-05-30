import "./globals.css";

export const metadata = {
  title: "TESTSRC",
  description: "Generate Video or Audio Test Sources",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
