import { FieldType } from "../../components/auth/signIn/SignIn";
import { type Response } from "../../types";
import { api } from "./index";

const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation<Response, FieldType>({
      query: (body) => ({
        url: "/user/login",
        method: "POST",
        body,
      }),

    }),
    signUp: build.mutation<Response, FieldType>({
      query: (body) => ({
        url: "/users/add",
        method: "POST",
        body
      }),
    })
  }),
});

export const {useSignInMutation, useSignUpMutation} = authApi;