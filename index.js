
import express from "express";
import fetch from "node-fetch"

const app = express();
const PORT = 4000;

app.use(express.json());

app.post('/api/meetings', async (req, res) => {
  try {
    const dyteApiKey = "841d2f57842b03a4c3af";
    const dyteApiUrl = 'https://api.dyte.io/v2/room';

    const response = await fetch(dyteApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${dyteApiKey}`
      }
    });

  

    const data = await response.json();
    res.status(201).json({ meetingId: data.roomId });
  } catch (error) {
    console.error('Error creating meeting:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
