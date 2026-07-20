import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-6 py-4 flex justify-between">
        <Link to="/" className="font-bold text-2xl text-blue-600">
          InvoiceGo
        </Link>
      </div>
    </nav>
  );
}