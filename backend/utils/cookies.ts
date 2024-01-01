import { Response } from "express";

interface SetCookieOptions {
    name: string;
    age: number;
    data: any
}

export const setCookie = (res: Response, options: SetCookieOptions) => {
    const { name, age, data } = options; 
    res.cookie(name, data, {
    //domain: ".xyz.com",
    maxAge: age,
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });
};

export const clearCookie = (res: Response, name: string) => {
  res.clearCookie(name, {
    //domain: ".xyz.com",
  });
};
