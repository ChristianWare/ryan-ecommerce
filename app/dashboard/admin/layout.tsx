import AdminNav from "@/components/nav/AdminNav";
import Link from "next/link";

export default function AdminDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminNav />
      {children}
    </>
  );
}
