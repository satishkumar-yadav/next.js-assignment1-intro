import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
export const metadata: Metadata = {
  title: "My first Next App",
  description: "Next-App Created By Satish Kumar Yadav",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav
            style={{
              backgroundColor:'#333',
              padding: '1rem',
              color:'white',
              display:'flex',
              gap:'1rem',
            }}
        >
             <Link href="/" >Home</Link> |
             <Link href="/about" >About</Link> |
             <Link href="/contact" >Contact</Link>
        </nav>

        <main style={{padding: '1rem'}}>
                {children}
        </main>

        <footer className="align-baseline fixed bottom-0 h-20 bg-emerald-400 w-full">
            <div className="font-bold text-9xl text-white">
                   <p>2025 My Next.js App.</p>
                   <p>All rights reserved.</p> 
            </div>
            
        </footer>

       
      </body>
    </html>
  );
}

























// export default function RootLayout({ children }) {

