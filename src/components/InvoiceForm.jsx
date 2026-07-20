import { generatePDF } from "../utils/generatePDF";
import { FaPlus, FaTrash, FaFileDownload, FaCalculator } from "react-icons/fa";

export default function InvoiceForm({ invoiceData, setInvoiceData }) {
  // Helper Format Rupiah
  const formatRupiah = (value) => new Intl.NumberFormat("id-ID").format(value);

  // Helper untuk update data utama ke Parent (Invoice.jsx)
  const handleChange = (field, value) => {
    setInvoiceData({ ...invoiceData, [field]: value });
  };

  // Helper untuk update item di dalam array
  const handleItemChange = (index, field, value) => {
    const updatedItems = [...invoiceData.items];
    updatedItems[index][field] = value;
    handleChange("items", updatedItems);
  };

  const addItem = () => {
    handleChange("items", [
      ...invoiceData.items,
      { description: "", qty: 1, price: 0 },
    ]);
  };

  // Perbaikan Tombol Hapus (Minimal 1 item)
  const removeItem = (index) => {
    if (invoiceData.items.length === 1) return;
    const updatedItems = invoiceData.items.filter((_, i) => i !== index);
    handleChange("items", updatedItems);
  };

  // Kalkulasi Otomatis (Hanya untuk ditampilkan di UI ringkasan form ini)
  const subtotal = invoiceData.items.reduce(
    (acc, item) => acc + Number(item.qty) * Number(item.price),
    0
  );
  const taxAmount = (subtotal * Number(invoiceData.tax)) / 100;
  const total = subtotal + taxAmount - Number(invoiceData.discount);

  // Helper styles
  const inputClass = "w-full border-2 border-slate-300 bg-slate-50 focus:border-slate-900 focus:bg-white focus:ring-0 p-3 font-medium transition-colors outline-none rounded-none";
  const labelClass = "block mb-2 font-mono text-xs font-bold uppercase tracking-widest text-slate-600";

  return (
    <div className="bg-white border-2 border-slate-900 shadow-[8px_8px_0px_#0F172A] p-6 md:p-8">
      
      {/* Header Form */}
      <div className="flex items-center justify-between border-b-2 border-slate-900 pb-4 mb-6">
        <div>
          <h2 className="text-2xl font-black uppercase tracking-tight text-slate-900">
            Formulir <span className="text-blue-600">Invoice</span>
          </h2>
        </div>
        <div className="hidden md:flex w-10 h-10 bg-slate-900 text-white items-center justify-center">
          <FaCalculator />
        </div>
      </div>

      {/* Data Invoice */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div>
          <label className={labelClass}>Perusahaan Anda</label>
          <input
            type="text"
            className={inputClass}
            placeholder="PT Teknologi Maju"
            value={invoiceData.company}
            onChange={(e) => handleChange("company", e.target.value)}
          />
        </div>

        <div>
          <label className={labelClass}>Klien / Pelanggan</label>
          <input
            type="text"
            className={inputClass}
            placeholder="Budi Santoso"
            value={invoiceData.customer}
            onChange={(e) => handleChange("customer", e.target.value)}
          />
        </div>

        <div>
          <label className={labelClass}>No Invoice</label>
          <input
            type="text"
            className={`${inputClass} font-mono`}
            value={invoiceData.invoiceNo}
            onChange={(e) => handleChange("invoiceNo", e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className={labelClass}>Tanggal</label>
            <input
              type="date"
              className={inputClass}
              value={invoiceData.date}
              onChange={(e) => handleChange("date", e.target.value)}
            />
          </div>
          <div>
            <label className={labelClass}>Tempo</label>
            <input
              type="date"
              className={inputClass}
              value={invoiceData.dueDate}
              onChange={(e) => handleChange("dueDate", e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Item Invoice */}
      <div className="mb-8">
        <h3 className="text-lg font-bold uppercase text-slate-900 border-b-2 border-slate-200 pb-2 mb-4">
          Daftar Layanan
        </h3>
        <div className="space-y-4">
          {invoiceData.items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-3 bg-slate-50 p-4 border-2 border-slate-200 focus-within:border-slate-900 transition-colors"
            >
              <div className="flex-grow">
                <input
                  type="text"
                  placeholder="Deskripsi pekerjaan atau produk"
                  className="w-full bg-transparent border-b-2 border-slate-300 focus:border-slate-900 outline-none p-2 font-medium"
                  value={item.description}
                  onChange={(e) => handleItemChange(index, "description", e.target.value)}
                />
              </div>

              <div className="w-full md:w-20">
                <input
                  type="number"
                  placeholder="Qty"
                  className="w-full bg-transparent border-b-2 border-slate-300 focus:border-slate-900 outline-none p-2 text-center font-mono"
                  value={item.qty}
                  onChange={(e) => handleItemChange(index, "qty", e.target.value)}
                />
              </div>

              <div className="w-full md:w-40 relative">
                <span className="absolute left-0 top-2 font-mono text-slate-500">Rp</span>
                <input
                  type="number"
                  placeholder="0"
                  className="w-full bg-transparent border-b-2 border-slate-300 focus:border-slate-900 outline-none p-2 pl-8 font-mono"
                  value={item.price}
                  onChange={(e) => handleItemChange(index, "price", e.target.value)}
                />
              </div>

              <button
                onClick={() => removeItem(index)}
                className="w-full md:w-10 h-10 bg-red-100 text-red-600 hover:bg-red-600 hover:text-white border-2 border-transparent hover:border-red-900 flex items-center justify-center transition-colors mt-2 md:mt-0"
                title="Hapus Item"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={addItem}
          className="mt-4 flex items-center gap-2 bg-slate-900 text-white px-4 py-2 font-bold text-sm uppercase hover:bg-blue-600 transition-colors shadow-[4px_4px_0px_#cbd5e1]"
        >
          <FaPlus /> Tambah Baris
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Catatan Kiri */}
        <div>
          <label className={labelClass}>Catatan Tambahan</label>
          <textarea
            rows="4"
            className={inputClass}
            placeholder="Terima kasih atas kepercayaan Anda..."
            value={invoiceData.notes}
            onChange={(e) => handleChange("notes", e.target.value)}
          />
        </div>

        {/* Pajak & Diskon Kanan */}
        <div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className={labelClass}>Pajak (%)</label>
              <input
                type="number"
                className={`${inputClass} text-right font-mono`}
                value={invoiceData.tax}
                onChange={(e) => handleChange("tax", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Diskon (Rp)</label>
              <input
                type="number"
                className={`${inputClass} text-right font-mono`}
                value={invoiceData.discount}
                onChange={(e) => handleChange("discount", e.target.value)}
              />
            </div>
          </div>

          <div className="bg-slate-100 border-2 border-slate-900 p-4">
            <div className="flex justify-between font-mono text-sm mb-2">
              <span className="text-slate-600 font-bold">TOTAL KESELURUHAN</span>
            </div>
            <div className="text-2xl font-black text-blue-600">
              Rp {formatRupiah(total)}
            </div>
          </div>
        </div>
      </div>

      {/* Tombol Aksi - Target ID sekarang adalah "invoice-pdf" dari komponen InvoicePreview */}
      <button
        onClick={() => generatePDF("invoice-pdf")}
        className="w-full flex justify-center items-center gap-3 bg-blue-600 hover:bg-slate-900 text-white py-4 font-black text-lg uppercase tracking-widest border-2 border-slate-900 shadow-[6px_6px_0px_#0F172A] hover:shadow-[2px_2px_0px_#0F172A] transition-all duration-200"
      >
        <FaFileDownload className="text-xl" />
        Render & Download PDF
      </button>

    </div>
  );
}