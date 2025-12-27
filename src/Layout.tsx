import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#045186] text-amber-400 relative">
      {/* Text logo / Header */}
      <div
        className="absolute top-4 left-4 text-2xl font-bold cursor-pointer hover:text-amber-700"
        onClick={() => navigate("/")}
      >
        Højskolesange Quiz
      </div>

      {/* Page content */}
      <div className="flex items-center justify-center min-h-screen">
        {children}
        <Analytics />
      </div>
    </div>
  );
}
