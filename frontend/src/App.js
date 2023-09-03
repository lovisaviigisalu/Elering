import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [fi, setFi] = useState([]);
  const [ee, setEe] = useState([]);
  const [lv, setLv] = useState([]);
  const [lt, setLt] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/nord-pool-price")
      .then(res => res.json())
      .then(json => {
        setFi(json.data.fi);
        setEe(json.data.ee);
        setLv(json.data.lv);
        setLt(json.data.lt);
      });
  }, []);

  return (
    <div>
      <table style={{ marginLeft: "100px" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "12px", backgroundColor: "#04AA6D" }}>Ajatempel</th>
            <th style={{ border: "1px solid #ddd", padding: "12px", backgroundColor: "#04AA6D" }}>Hind</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2" style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "#04AA6D" }}>Soome</td>
          </tr>
          {fi.map(data => (
            <tr key={data.timestamp}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{new Date(data.timestamp * 1000).toISOString()}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{data.price}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="2" style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "#04AA6D" }}>Eesti</td>
          </tr>
          {ee.map(data => (
            <tr key={data.timestamp}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{new Date(data.timestamp * 1000).toISOString()}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{data.price}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="2" style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "#04AA6D" }}>Läti</td>
          </tr>
          {lv.map(data => (
            <tr key={data.timestamp}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{new Date(data.timestamp * 1000).toISOString()}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{data.price}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="2" style={{ border: "1px solid #ddd", padding: "8px", backgroundColor: "#04AA6D" }}>Leedu</td>
          </tr>
          {lt.map(data => (
            <tr key={data.timestamp}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{new Date(data.timestamp * 1000).toISOString()}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{data.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
