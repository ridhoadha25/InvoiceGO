import { Link } from "react-router-dom";
import {
  FaFileInvoice,
  FaDownload,
  FaCheckCircle,
  FaArrowRight,
  FaPrint,
  FaRegListAlt,
  FaReceipt,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 selection:bg-blue-200">
      
      {/* Navbar - Clean, High Contrast Solid Border */}
      <nav className="bg-white border-b-2 border-slate-900 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-900 flex items-center justify-center">
              <FaFileInvoice className="text-white text-sm" />
            </div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900">
              INVOICE<span className="text-blue-600">GO.</span>
            </h1>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              to="/invoice"
              className="hidden md:block font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              Lihat Demo
            </Link>
            <Link
              to="/invoice"
              className="bg-blue-600 text-white px-6 py-2.5 font-bold hover:bg-slate-900 transition-colors duration-300 shadow-[4px_4px_0px_#0F172A]"
            >
              Buat Invoice
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Structured, Grid-like */}
      <section className="relative max-w-7xl mx-auto px-6 py-20 lg:py-24 overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Text (Left side - 5 cols) */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-300 font-mono text-xs uppercase tracking-widest text-slate-500 mb-6 shadow-[2px_2px_0px_#E2E8F0]">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Sistem Penagihan Aktif
            </div>

            <h1 className="text-5xl lg:text-6xl font-black leading-tight text-slate-900 mb-6">
              Tagih Klien <br />
              <span className="text-blue-600 underline decoration-4 underline-offset-8">Lebih Cepat.</span>
            </h1>

            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              Tinggalkan cara lama. Buat, kelola, dan unduh invoice berstandar profesional untuk bisnis Anda hanya dalam hitungan detik.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/invoice"
                className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 font-bold text-lg hover:bg-blue-600 transition-colors duration-300 shadow-[4px_4px_0px_#94A3B8]"
              >
                Mulai Buat Invoice <FaArrowRight />
              </Link>
            </div>
          </div>

          {/* Hero Image (Right side - 7 cols) - Styled like a sharp document */}
          <div className="lg:col-span-7 relative">
            {/* Dekorasi Grid Background di belakang gambar */}
            <div className="absolute inset-0 -m-6 border-2 border-dashed border-slate-200 -z-10 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            
            <div className="bg-white p-2 border-2 border-slate-900 shadow-[8px_8px_0px_#0F172A] transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="invoice-hero-art border border-slate-200" role="img" aria-label="Ilustrasi invoice digital InvoiceGo">
                <div className="invoice-sheet">
                  <div className="invoice-sheet-header">
                    <FaReceipt className="invoice-receipt-icon" />
                    <span>INVOICEGO.</span>
                    <b>01</b>
                  </div>
                  <div className="invoice-rule invoice-rule-wide"></div>
                  <div className="invoice-client-line">
                    <span>TAGIHAN DIGITAL</span>
                    <strong>SIAP</strong>
                  </div>
                  <div className="invoice-lines" aria-hidden="true">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                  <div className="invoice-total-line">
                    <span>TOTAL</span>
                    <strong>Rp 2.500K</strong>
                  </div>
                  <div className="invoice-stamp">TERBIT</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Data Section (Styled like an accounting ledger) */}
      <section className="border-y-2 border-slate-900 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row divide-y-2 md:divide-y-0 md:divide-x-2 divide-slate-900">
          <div className="flex-1 p-8 md:p-12 flex items-center justify-between hover:bg-slate-50 transition-colors">
            <div>
              <p className="text-slate-500 font-mono text-sm uppercase mb-1">Waktu Pembuatan</p>
              <h2 className="text-4xl font-black text-slate-900">≤ 30 DETIK</h2>
            </div>
            <FaRegListAlt className="text-4xl text-slate-300" />
          </div>
          
          <div className="flex-1 p-8 md:p-12 flex items-center justify-between hover:bg-slate-50 transition-colors">
            <div>
              <p className="text-slate-500 font-mono text-sm uppercase mb-1">Format Output</p>
              <h2 className="text-4xl font-black text-slate-900">PDF (A4)</h2>
            </div>
            <FaPrint className="text-4xl text-slate-300" />
          </div>
        </div>
      </section>

      {/* Fitur - Structured with distinct borders */}
      <section id="fitur" className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16 border-l-4 border-blue-600 pl-6">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
            Fitur Penagihan
          </h2>
          <p className="text-lg text-slate-600 mt-2 font-medium">
            Alat esensial untuk mempercepat proses administrasi Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white border-2 border-slate-200 p-8 hover:border-slate-900 transition-colors duration-300 flex flex-col h-full group">
            <FaFileInvoice className="text-3xl text-blue-600 mb-6 group-hover:scale-110 transition-transform origin-left" />
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase">Format Standar</h3>
            <p className="text-slate-600 font-medium mb-6 flex-grow">
              Komponen tagihan lengkap mulai dari identitas, deskripsi item, hingga perhitungan subtotal dan pajak (opsional).
            </p>
            <div className="w-full h-[1px] bg-slate-200 mt-auto group-hover:bg-slate-900 transition-colors"></div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border-2 border-slate-200 p-8 hover:border-slate-900 transition-colors duration-300 flex flex-col h-full group">
            <FaDownload className="text-3xl text-blue-600 mb-6 group-hover:scale-110 transition-transform origin-left" />
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase">Export Instan</h3>
            <p className="text-slate-600 font-medium mb-6 flex-grow">
              Hasil langsung dirender (generate) ke dalam dokumen PDF resolusi tinggi tanpa perlu menunggu loading lama.
            </p>
            <div className="w-full h-[1px] bg-slate-200 mt-auto group-hover:bg-slate-900 transition-colors"></div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border-2 border-slate-200 p-8 hover:border-slate-900 transition-colors duration-300 flex flex-col h-full group">
            <FaCheckCircle className="text-3xl text-blue-600 mb-6 group-hover:scale-110 transition-transform origin-left" />
            <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase">Akurasi Kalkulasi</h3>
            <p className="text-slate-600 font-medium mb-6 flex-grow">
              Sistem akan menghitung otomatis setiap baris item yang Anda masukkan untuk menghindari kesalahan (human error).
            </p>
            <div className="w-full h-[1px] bg-slate-200 mt-auto group-hover:bg-slate-900 transition-colors"></div>
          </div>
        </div>
      </section>

      {/* Cara Kerja (Receipt / Invoice Item Style) */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black uppercase tracking-widest text-slate-300">Proses Pembuatan</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="space-y-6">
            {/* Row 1 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-dashed border-slate-700 pb-6 group hover:border-blue-500 transition-colors">
              <div className="flex items-center gap-6">
                <span className="font-mono text-2xl font-bold text-slate-500 group-hover:text-blue-500">01</span>
                <div>
                  <h3 className="text-xl font-bold">Input Detail Tagihan</h3>
                  <p className="text-slate-400">Masukkan nama klien, layanan, dan nominal harga.</p>
                </div>
              </div>
              <span className="mt-4 sm:mt-0 font-mono text-slate-500 hidden sm:block">DATA_ENTRY</span>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-dashed border-slate-700 pb-6 group hover:border-blue-500 transition-colors">
              <div className="flex items-center gap-6">
                <span className="font-mono text-2xl font-bold text-slate-500 group-hover:text-blue-500">02</span>
                <div>
                  <h3 className="text-xl font-bold">Review Kalkulasi</h3>
                  <p className="text-slate-400">Periksa kembali ringkasan total tagihan di layar.</p>
                </div>
              </div>
              <span className="mt-4 sm:mt-0 font-mono text-slate-500 hidden sm:block">SYSTEM_CALC</span>
            </div>

            {/* Row 3 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-dashed border-slate-700 pb-6 group hover:border-blue-500 transition-colors">
              <div className="flex items-center gap-6">
                <span className="font-mono text-2xl font-bold text-slate-500 group-hover:text-blue-500">03</span>
                <div>
                  <h3 className="text-xl font-bold">Simpan sebagai PDF</h3>
                  <p className="text-slate-400">Unduh dokumen, invoice siap diserahkan ke klien.</p>
                </div>
              </div>
              <span className="mt-4 sm:mt-0 font-mono text-slate-500 hidden sm:block">EXPORT_FILE</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Bold and High Contrast */}
      <section className="py-24 bg-blue-600 text-white border-y-2 border-slate-900">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
            Mulai Terbitkan Invoice Anda
          </h2>
          <p className="text-xl font-medium mb-10 text-blue-100">
            Akses sistem penagihan gratis kami sekarang. Tanpa perlu registrasi kartu kredit.
          </p>
          <Link
            to="/invoice"
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-10 py-5 font-black text-lg uppercase tracking-wide hover:bg-slate-900 hover:text-white transition-colors duration-300 shadow-[8px_8px_0px_#0F172A]"
          >
            Buat Invoice Sekarang <FaFileInvoice />
          </Link>
        </div>
      </section>

      {/* Footer - Minimalist */}
      <footer className="bg-white py-8 border-t-2 border-slate-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <h3 className="text-xl font-black tracking-tight text-slate-900">
            INVOICE<span className="text-blue-600">GO.</span>
          </h3>
          <p className="font-mono text-sm text-slate-500 font-medium">
            © {new Date().getFullYear()} InvoiceGo System.
          </p>
        </div>
      </footer>

    </div>
  );
}
