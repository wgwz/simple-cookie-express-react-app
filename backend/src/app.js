import express from 'express';
import session from 'express-session';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;
const COOKIE_EXP_TIME_MILLIS = 1000 * 60 * 60; // 1 hour
const FRONTEND_URL = 'http://localhost:3001';

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);
app.set("trust proxy", 1);

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: "foobar",
  cookie: {
    maxAge: COOKIE_EXP_TIME_MILLIS,
    sameSite: "none",
    secure: false,
  }
}));

app.post("/", (req, res) => {
  const { name } = req.query;
  if (name === undefined) { return res.sendStatus(500) };
  req.session.name = name;
  return res.sendStatus(201);
});

app.get("/", (req, res) => {
  const { name } = req.session;
  if (name === undefined) { return res.sendStatus(500) };
  return res.send({
    "name": req.session.name
  });
});

app.listen(PORT, () => {console.log(`Server is running on ${PORT}`)}); 
