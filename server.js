const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Serves files from 'public' folder

// Route to handle shipment tracking (sample)
app.post('/track-shipment', (req, res) => {
  const { trackingNumber } = req.body;

  // Dummy response (replace with real tracking logic later)
  const fakeShipmentData = {
    trackingNumber,
    status: "In Transit",
    estimatedDelivery: "2025-04-20",
    lastLocation: "Lagos Hub"
  };

  res.json(fakeShipmentData);
});

// ✅ Route for downloading a report file
app.get('/download-report', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'sample-report.csv'); // Make sure this file exists
  res.download(filePath, 'LogiPro_Shipment_Report.csv', (err) => {
    if (err) {
      console.error("Download error:", err);
      res.status(500).send("Could not download the file.");
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
