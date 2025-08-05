
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/intern', (req, res) => {
  res.json({
    name: "Sandeep",
    referralCode: "Sandeep2025",
    donationsRaised: 2500,
    rewards: [
      "Bronze Badge",
      "Silver Badge",
      "Free T-Shirt",
      "Gold Badge",
      "VIP Event Invite",
      "Exclusive Webinar Access"
    ]
  });
});

app.get('/api/leaderboard', (req, res) => {
  res.json([
    { name: "Mukesh", donations: 5000 },
    { name: "Ritik", donations: 4700 },
    { name: "Aman", donations: 4200 },
    { name: "Ekta", donations: 2500 },
    { name: "Shivangi", donations: 2000 },
    { name: "Mohan", donations: 1800 },
    { name: "Suresh", donations: 1600 },
    { name: "Deepak", donations: 1500 },
    { name: "Prince", donations: 1300 },
    { name: "Satyam", donations: 1100 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

