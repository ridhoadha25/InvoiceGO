import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export const generatePDF = async (elementId) => {
  const element = document.getElementById(elementId);

  if (!element) {
    alert("Elemen Invoice tidak ditemukan!");
    return;
  }

  const originalCssText = element.style.cssText;
  const isHidden = element.classList.contains("hidden");

  if (isHidden) {
    element.classList.remove("hidden");
  }

  // Pindahkan elemen ke luar area viewport untuk di-capture
  element.style.position = "absolute";
  element.style.top = "-9999px";
  element.style.left = "0px";

  try {
    // Delay sebentar agar DOM selesai me-render inline style
    await new Promise((resolve) => setTimeout(resolve, 200));

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff", // Pastikan background kanvas putih solid
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, imgHeight);
    pdf.save(`Invoice_${new Date().getTime()}.pdf`);
  } catch (error) {
    console.error("Detail Error PDF:", error);
    alert("Gagal membuat PDF. Cek console browser untuk info detail.");
  } finally {
    if (isHidden) {
      element.classList.add("hidden");
    }
    element.style.cssText = originalCssText;
  }
};