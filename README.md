# Simple cookie express/react app

This code is a study of a minimal react app, which interacts with an
express backend to conceptually illustrate a cookie-based user session.
It is based off [this video][1] and [corresponding gist][2] (thanks
[Amasaabu][3]!).

# How it works?

The express app exposes two endpoints that do the following:

1. `POST` to `/` with url query params: `?name=foo`.
2. `GET` to `/` returns the `name` of the active session.

The react app presents a form that accepts a username, and it also has a
button that will retrieve the active name in the user session. This more
or less demonstrates how an authentication takes place.

# How to run it?

1. `cd backend && npm run dev`
2. `cd frontend && PORT=3001 npm run start`

# Server-side vs client-side considerations 

By using `express-session` this example commits to using [server-side
sessions][4]. An alternative would be to actually store the user session data
in a cookie is to use [`cookie-session`][5].

[1]: https://www.youtube.com/watch?v=nviGhgtFbRo
[2]: https://gist.github.com/Amasaabu/a74d7c928d2abc008b251b525cb58851
[3]: https://github.com/Amasaabu
[4]: https://github.com/expressjs/session#api
[5]: https://github.com/expressjs/cookie-session#cookie-session
