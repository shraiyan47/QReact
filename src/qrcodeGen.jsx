import React, { useRef } from 'react';
import QRCode from 'qrcode.react'; 

const DownloadableQRCode = ({ value }) => {
  const qrCodeRef = useRef();
  return (
    <div>
      <QRCode value={value} size={200} ref={qrCodeRef} />  
    </div>
  );
};

export default DownloadableQRCode;
