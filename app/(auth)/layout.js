import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          style={{
            height: "100vh",
            background: "#7926c5",
            margin: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
