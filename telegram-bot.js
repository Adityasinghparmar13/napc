const axios = require('axios');

const BOT_TOKEN = '7320403925:AAGoTPMxqV9NQDqfg4NT3Sa6CFU8hd8FlB4';
const CHAT_ID = '1002578513696'; // e.g., -1001234567890

const messages = [
  '🚀 This NFT beanzofficial is going high! #NFT',
  '🚀 This NFT meebits is going high! #NFT'
];

let index = 0;

const sendMessage = async () => {
  try {
    const message = messages[index];
    await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      text: message,
    });
    console.log('Sent:', message);
    index = (index + 1) % messages.length; // Alternate messages
  } catch (error) {
    console.error('Failed to send message:', error.response?.data || error.message);
  }
};

// Send every 9 seconds
setInterval(sendMessage, 100000);
