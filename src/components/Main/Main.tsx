import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps) {
  return (
    <main className="flex flex-col w-6xl mr-3 mt-[-13px]">{children}</main>
  );
}
