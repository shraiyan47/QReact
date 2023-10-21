import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

export default function QrCodeScanner() {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error(err) {
      console.warn(err);
    }
  }, []);

  return (
    <>
      <div>QrCodeScanner</div>
      {
        scanResult
        ?
          <div>Success: {scanResult} </div>
        :
          <div id="reader"> </div>
      }

      <div id="reader" ></div>
    </>
  );
}
