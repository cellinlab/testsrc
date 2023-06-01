import Link from "next/link";
import Image from "next/image";

import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "TestSrc",
  description: "Generate Video or Audio Test Sources",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="h-full">
        <div className="navbar bg-base-100 border-b">
          <Image
            src="/logo.svg"
            alt="TestSrc"
            width={35}
            height={35}
            className="ml-5 shadow-2xl border border-slate-300 rounded-md"
          />
          <div className="flex-1 ml-2">
            <Link href="/" className="btn btn-ghost normal-case text-xl">
              TestSrc
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/video"> Video </Link>
              </li>
              <li>
                <Link href="/audio"> Audio </Link>
              </li>
              <li>
                <Link href="/live"> Live </Link>
              </li>
              <li>
                <Link href="/custom"> Custom </Link>
              </li>
              <li>
                <a href="https://github.com/cellinlab/testsrc" target="_blank" className="link">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ height: "calc(100vh - 117px)" }} className="hero bg-base-100 overflow-auto">
          {children}
        </div>
        <footer className="footer footer-center p-4 bg-base-200 text-base-content">
          <div>
            <p>
              Copyright ©{" "}
              {new Date().getFullYear() === 2023 ? "2023" : `2023 - ${new Date().getFullYear()}`} -
              All right reserved by{" "}
              <a className="link" target="_black" href="https://cellinlab.com">
                Cellinlab
              </a>
            </p>
          </div>
        </footer>
      </main>
      <Analytics />
    </>
  );
};

export default Layout;
