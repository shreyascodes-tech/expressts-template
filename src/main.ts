import express from "express";
import { json } from "body-parser";

const port = +(process.env.PORT ?? 3333);

async function main() {
  const app = express();
  // Used to parse JSON body
  app.use(json());

  app.get("/", (req, res) => {
    res.json({
      msg: "Hello, World!",
    });
  });

  app.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}`);
  });
}

main();
