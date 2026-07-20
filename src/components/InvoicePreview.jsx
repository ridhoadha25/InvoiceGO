export default function InvoicePreview({ invoiceData }) {
  const formatRupiah = (value) => new Intl.NumberFormat("id-ID").format(value);

  // Kalkulasi ulang di sini berdasarkan data props
  const subtotal = invoiceData.items.reduce(
    (acc, item) => acc + Number(item.qty) * Number(item.price),
    0
  );
  const taxAmount = (subtotal * Number(invoiceData.tax)) / 100;
  const total = subtotal + taxAmount - Number(invoiceData.discount);

  return (
    // ID ini yang dipanggil oleh generatePDF()
    <div 
      id="invoice-pdf" 
      className="p-10 mx-auto shadow-2xl"
      style={{
        backgroundColor: "#ffffff",
        color: "#000000",
        width: "794px", // Lebar proporsional A4
        minHeight: "1123px", // Tinggi minimal A4
        fontFamily: "sans-serif",
      }}
    >
      {/* Header */}
      <div 
        className="pb-6 mb-8 flex justify-between items-end"
        style={{ borderBottom: "3px solid #000000" }}
      >
        <h1 className="text-5xl font-black tracking-tighter" style={{ color: "#000000" }}>INVOICE</h1>
        <div className="text-right">
          <p className="text-sm font-bold uppercase" style={{ color: "#6b7280" }}>No. Invoice</p>
          <p className="text-xl font-bold" style={{ color: "#000000" }}>{invoiceData.invoiceNo}</p>
        </div>
      </div>

      {/* Info Perusahaan & Klien */}
      <div className="flex justify-between mb-8">
        <div>
          <p className="text-sm font-bold mb-1 uppercase" style={{ color: "#6b7280" }}>Diterbitkan Oleh:</p>
          <p className="font-bold text-xl" style={{ color: "#000000" }}>{invoiceData.company || "Nama Perusahaan"}</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-bold mb-1 uppercase" style={{ color: "#6b7280" }}>Ditagihkan Kepada:</p>
          <p className="font-bold text-xl" style={{ color: "#000000" }}>{invoiceData.customer || "Nama Pelanggan"}</p>
        </div>
      </div>

      {/* Tanggal */}
      <div 
        className="flex justify-between mb-10 p-5"
        style={{ backgroundColor: "#f3f4f6", border: "2px solid #000000" }}
      >
        <div>
          <p className="text-xs font-bold uppercase" style={{ color: "#6b7280" }}>Tanggal Invoice</p>
          <p className="font-bold text-lg" style={{ color: "#000000" }}>{invoiceData.date || "-"}</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-bold uppercase" style={{ color: "#6b7280" }}>Jatuh Tempo</p>
          <p className="font-bold text-lg" style={{ color: "#000000" }}>{invoiceData.dueDate || "-"}</p>
        </div>
      </div>

      {/* Tabel Item */}
      <table 
        className="w-full mb-10 border-collapse"
        style={{ border: "2px solid #000000" }}
      >
        <thead>
          <tr style={{ backgroundColor: "#000000", color: "#ffffff" }}>
            <th className="p-4 text-left" style={{ border: "1px solid #000000" }}>Deskripsi Layanan / Produk</th>
            <th className="p-4 text-center w-20" style={{ border: "1px solid #000000" }}>Qty</th>
            <th className="p-4 text-right w-40" style={{ border: "1px solid #000000" }}>Harga</th>
            <th className="p-4 text-right w-48" style={{ border: "1px solid #000000" }}>Jumlah</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.items.map((item, index) => (
            <tr key={index} style={{ color: "#000000" }}>
              <td className="p-4" style={{ border: "1px solid #000000" }}>{item.description || "-"}</td>
              <td className="p-4 text-center font-mono" style={{ border: "1px solid #000000" }}>{item.qty}</td>
              <td className="p-4 text-right font-mono" style={{ border: "1px solid #000000" }}>Rp {formatRupiah(item.price)}</td>
              <td className="p-4 text-right font-bold font-mono" style={{ border: "1px solid #000000" }}>
                Rp {formatRupiah(item.qty * item.price)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Kalkulasi Total */}
      <div className="flex justify-end mb-10">
        <div className="w-7/12">
          <div className="flex justify-between p-2 font-mono text-lg" style={{ color: "#000000" }}>
            <span>Subtotal</span>
            <span>Rp {formatRupiah(subtotal)}</span>
          </div>
          <div className="flex justify-between p-2 font-mono text-lg" style={{ color: "#000000" }}>
            <span>Pajak ({invoiceData.tax}%)</span>
            <span>Rp {formatRupiah(taxAmount)}</span>
          </div>
          <div className="flex justify-between p-2 font-mono text-lg" style={{ color: "#dc2626" }}>
            <span>Diskon</span>
            <span>- Rp {formatRupiah(Number(invoiceData.discount))}</span>
          </div>
          <div 
            className="flex justify-between p-4 mt-4"
            style={{ backgroundColor: "#f3f4f6", borderTop: "3px solid #000000", borderBottom: "3px solid #000000", color: "#000000" }}
          >
            <span className="font-black text-xl">TOTAL TAGIHAN</span>
            <span className="font-black text-2xl text-blue-600">Rp {formatRupiah(total)}</span>
          </div>
        </div>
      </div>

      {/* Catatan */}
      {invoiceData.notes && (
        <div className="mt-12 pt-6" style={{ borderTop: "2px solid #d1d5db" }}>
          <p className="text-sm font-bold mb-2 uppercase" style={{ color: "#6b7280" }}>Catatan Tambahan:</p>
          <p className="text-base whitespace-pre-wrap" style={{ color: "#000000" }}>{invoiceData.notes}</p>
        </div>
      )}
    </div>
  );
}