import { rest } from "msw";

const baseURL = "https://poetry-6c31c94e3988.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        "pk": 4,
        "username": "Linda",
        "email": "",
        "first_name": "",
        "last_name": "",
        "profile_id": 4,
        "profile_image": "https://res.cloudinary.com/ds66fig3o/image/upload/v1/media/images/placeholder_yngwne",
        "profile_name": "Linda"
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];