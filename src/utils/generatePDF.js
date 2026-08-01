import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export const generatePDF = async (elementId) => {
  const element = document.getElementById(elementId);

  if (!element) {
    alert("Elemen Invoice tidak ditemukan!");
    return;
  }

  try {
    await document.fonts?.ready;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      scrollX: 0,
      scrollY: -window.scrollY,
      onclone: (clonedDocument) => {
        // Tailwind v4 emits oklch colors, which html2canvas 1.x cannot parse.
        const colorFallbacks = {
          background: {
            ".bg-white": "#ffffff",
            ".bg-slate-50": "#f8fafc",
            ".bg-slate-100": "#f1f5f9",
            ".bg-blue-600": "#2563eb",
            ".bg-red-100": "#fee2e2",
            ".bg-red-600": "#dc2626",
          },
          text: {
            ".text-slate-500": "#64748b",
            ".text-slate-600": "#475569",
            ".text-slate-900": "#0f172a",
            ".text-blue-600": "#2563eb",
            ".text-red-600": "#dc2626",
          },
          border: {
            ".border-slate-200": "#e2e8f0",
            ".border-slate-300": "#cbd5e1",
            ".border-slate-900": "#0f172a",
          },
        };

        const style = clonedDocument.createElement("style");
        style.textContent = Object.entries(colorFallbacks)
          .flatMap(([property, fallbacks]) =>
            Object.entries(fallbacks).map(
              ([selector, color]) => `${selector} { ${property === "text" ? "color" : `${property}-color`}: ${color}; }`
            )
          )
          .join("\n");
        clonedDocument.head.appendChild(style);
      },
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;
    const pageTolerance = 0.5;
    const pageCount = Math.max(1, Math.ceil((imgHeight - pageTolerance) / pdfHeight));

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, imgHeight);

    for (let page = 1; page < pageCount; page += 1) {
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, -page * pdfHeight, pdfWidth, imgHeight);
    }

    pdf.save(`Invoice_${new Date().getTime()}.pdf`);
  } catch (error) {
    console.error("Detail Error PDF:", error);
    alert("Gagal membuat PDF. Cek console browser untuk info detail.");
  }
};
