const Chat = require("../models/chat");

// Save a new chat message
async function saveMessage({ sender, message }) {
  const chat = new Chat({ sender, message });
  await chat.save();
  return chat;
}

// Get all chat messages (optionally limit)
async function getChatHistory(limit = 100) {
  return Chat.find().sort({ createdAt: 1 }).limit(limit);
}

module.exports = { saveMessage, getChatHistory }; 