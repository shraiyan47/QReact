import { useState } from "react";
import "./App.css";
import DownloadableQRCode from "./qrcodeGen";
import QrCodeScanner from "./QrCodeScanner";

function App() {
  const [gen, setGen] = useState("none");
  const [scan, setScan] = useState("none");
  const [qrValue, setQrValue] = useState("");

  function generateQRHandler() {
    if (gen === "none") {
      setGen("");
    } else {
      setGen("none");
    }
  }

  function qrVal(x) {
    setQrValue(x.target.value);
  }

  function scanQRHandler() {
    if (scan === "none") {
      setScan("");
    } else {
      setScan("none");
    }
  }

  return (
    <div className="App">
      <header className="App-header">WELCOME TO QReact</header>
      <div className="body">
        <div>
          <button
            className={gen === "" ? "App-btn" : "App-btn-active"}
            onClick={generateQRHandler}
          >
            Generate QR
          </button>
          <button
            className={scan === "" ? "App-btn" : "App-btn-active"}
            onClick={scanQRHandler}
          >
            Scan QR
          </button>
        </div>

        <table style={{width:"100%"}}>
          <tr >
            <td>
              <div style={{ display: gen, background: "white" }}>
                <h3>Generate QR</h3>
                <textarea
                  name="qrVal"
                  id="qrVal"
                  cols="30"
                  rows="10"
                  onChange={qrVal}
                ></textarea>
                <DownloadableQRCode
                  value={qrValue !== "" ? qrValue : "NO QR VALUE"}
                />
              </div>
            </td>

            <td>
              <div style={{ display: scan }}>
                <h3>Scan QR</h3>
                <QrCodeScanner />
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
