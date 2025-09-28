import { httpServer } from "./app.js";

const PORT = 3000;

httpServer.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
