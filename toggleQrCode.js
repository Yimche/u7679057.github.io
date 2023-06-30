function toggleQRCode(event, qrCodeId) {
    event.preventDefault();
    var qrCode = document.getElementById(qrCodeId);
    qrCode.classList.toggle('show');
  }
