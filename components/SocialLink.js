import Link from "next/link";

export default function SocialLink({ children, href = "/" }) {
  return (
    <li className="p-2 hover:bg-primary hover:text-gray-100 duration-150">
      <Link href={href}>{children}</Link>
    </li>
  );
}
