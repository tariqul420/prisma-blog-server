import express, { Application, NextFunction, Request, Response } from "express";

// app initialization
const app: Application = express();
app.use(express.json());

// Home page route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// unhandled routes
app.use((req: Request, res: Response, next: NextFunction) => {
  const error: any = new Error(`Can't find ${req.originalUrl} on this server!`);
  error.status = 404;

  next(error);
});

export default app;
