let IS_PROD = true;
const server = IS_PROD
  ? "https://video-chat-zj6a.onrender.com"
  : "http://localhost:8000";

export default server;