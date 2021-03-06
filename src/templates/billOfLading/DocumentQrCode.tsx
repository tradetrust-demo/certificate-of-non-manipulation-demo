import React, { FunctionComponent } from "react";
import QRCode, { ImageSettings } from "qrcode.react";
import "./style.css";

interface DocumentQrCode {
  url: string;
  size?: number;
}

export const DocumentQrCode: FunctionComponent<DocumentQrCode> = ({ url }) => {
  const imageSettings: ImageSettings = {
    src: `/static/images/logo-qrcode.png`,
    height: 90,
    width: 100,
    excavate: true,
  };

  return (
    <div className="show-print">
      <QRCode value={url} level="M" size={250} imageSettings={imageSettings} />
      <div style={{ fontSize: 32, marginLeft: 64 }}>Scan the QR code with a QR code scanner device.</div>
      <div className="generated-text">Automatically Generated</div>
    </div>
  );
};
