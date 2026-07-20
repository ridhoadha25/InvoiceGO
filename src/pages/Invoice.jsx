import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import InvoiceForm from "../components/InvoiceForm";
import InvoicePreview from "../components/InvoicePreview";

export default function Invoice() {
  // Semua data dipusatkan di komponen Induk
  const [invoiceData, setInvoiceData] = useState({
    company: "",
    customer: "",
    invoiceNo: `INV-${Date.now()}`,
    date: "",
    dueDate: "",
    items: [
      { description: "", qty: 1, price: 0 }
    ],
    tax: 0,
    discount: 0,
    notes: "",
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 lg:p-8 font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Tombol Back */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white border-2 border-slate-900 text-slate-900 px-5 py-2.5 font-bold text-sm uppercase tracking-wider hover:bg-slate-900 hover:text-white transition-colors shadow-[4px_4px_0px_#0F172A] hover:shadow-[2px_2px_0px_#0F172A] hover:translate-y-0.5"
          >
            <FaArrowLeft /> Kembali
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Kolom Kiri: Form (Makan 6 Kolom) */}
          <div className="lg:col-span-6">
            <InvoiceForm
              invoiceData={invoiceData}
              setInvoiceData={setInvoiceData}
            />
          </div>

          {/* Kolom Kanan: Preview Real-time (Makan 6 Kolom) */}
          <div className="lg:col-span-6 sticky top-8 overflow-x-auto">
            <div className="min-w-[794px] lg:min-w-0 origin-top-left lg:scale-[0.85] xl:scale-100 transition-transform">
              <InvoicePreview invoiceData={invoiceData} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}