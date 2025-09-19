let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

let qrColor = document.getElementById("qrColor");
let bgColor = document.getElementById("bgColor");
let qrSize = document.getElementById("qrSize");
let qrFormat = document.getElementById("qrFormat");

let downloadBtn = document.getElementById("downloadBtn");
let qrURL = ""; // store last generated QR url

function generateQR() {
  if (qrText.value.trim().length === 0) {
    alert("Please enter some text or a URL!");
    return;
  }

  let qrData = qrText.value;
  let size = qrSize.value;
  let color = qrColor.value.substring(1);   // remove #
  let bg = bgColor.value.substring(1);      // remove #
  let format = qrFormat.value;

  qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${encodeURIComponent(qrData)}&color=${color}&bgcolor=${bg}&format=${format}`;

  qrImage.src = qrURL;
  imgBox.style.display = "block";
  downloadBtn.style.display = "inline-block";
}

function downloadQR() {
  if (!qrURL) return;

  let link = document.createElement("a");
  link.href = qrURL;
  link.download = "QRCode." + qrFormat.value; // e.g. QRCode.png
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
