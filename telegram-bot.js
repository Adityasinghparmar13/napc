import express from "express";
import axios from "axios";


const app = express();
const PORT = process.env.PORT || 3000;

const BOT_TOKEN = '7320403925:AAGoTPMxqV9NQDqfg4NT3Sa6CFU8hd8FlB4';
const CHAT_ID = '-1002578513696'; // e.g., -1001234567890

const MESSAGES = [
  "🚀 This NFT beanzofficial is going high! #NFT",
  "🔥 This NFT meebits is going high! #NFT"
];

let current = 0;

const sendMessage = async () => {
  try {
    const message = MESSAGES[current % MESSAGES.length];
    await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text: message,
    });
    console.log("✅ Sent:", message);
    current++;
  } catch (error) {
    console.error("❌ Failed to send message:", error.response?.data || error.message);
  }
};

// Send every 9 seconds
setInterval(sendMessage, 9000);

// 🔌 Keep Render happy
app.get("/", (req, res) => {
  res.send("Telegram bot is running ✅");
});

app.listen(PORT, () => {
  console.log(`🌐 Web server running on port ${PORT}`);
});
