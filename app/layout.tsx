import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
        <Header />
        {children}
        <Footer />
    </body>
    </html>
  );
}
