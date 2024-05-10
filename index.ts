import express from "express";

const app = express();

app.get("/test", (_req: any, res: { send: (arg0: string) => any; }) => res.send("Express on Vercel Test Change"));

app.listen(3000, () => console.log("Server ready on port 3000."));

