import Link from "next/link";

export default function NavMenuLink({ children, href = "/" }) {
  return (
    <div className="text-gray-500 hover:text-primary hover:underline hover:underline-offset-4">
      <Link href={href}>{children}</Link>
    </div>
  );
}
