"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  RiUserAddLine,
  RiLockPasswordLine,
  RiMailLine,
  RiPhoneFill,
} from "react-icons/ri";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import api from '../../lib/api'
import { useRouter } from "next/navigation";

interface LoginForm {
  phone: number;
  email: string;
  password: string;
  name: string;
  password_confirmation: string;
}

const signUpSchema = z
  .object({
    // name: z.string().min(4, "Fullname must be at least 4 characters"),
    phone: z
      .number()
      .min(10, "Invalid Phone number"),

    email: z.string().email(),
    password: z.string().min(8, "Password must be at least 8 characters"),
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords must match",
    path: ["password_confirmation"],
  });

export default function Signup() {
  const router = useRouter()
  const [errorMessage,setErrorMessage] =useState("")
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginForm>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    api.post('/register',data)
    .then(res=>{
      if(res.status<300){
        router.push('/sign-in')
      }
      else{
        setErrorMessage('')
      }
      if(res.status==422){
        setErrorMessage("")
      }
    })
    .catch(err=>{
      setErrorMessage("Server Error! can not register")
    })
    reset();
  };

  return (
    <div className="flex gap-20 h-screen w-full">
      <div className="w-3/5 hidden sm:flex justify-center items-center bg-gradient-to-b from-violet-950 to-indigo-700">
        <Image src={"/login.png"} width={500} height={500} alt="Image"></Image>
      </div>
      <div className="bg-white flex flex-col justify-center h-screen w-full">
        <form
          className="max-w-[450px] w-full mx-auto bg-gray-50 shadow-lg px-10 py-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-4xl font-bold text-center py-6">
            Digital Saving
          </h2>
          <p className="text-red-500" >{errorMessage}</p>
          <div className="flex flex-col py-2">
            <label>
              <RiUserAddLine className="inline-block mr-2" /> Fullname
            </label>
            <input
              className="border p-2"
              type="text"
              placeholder="Full name"
              {...register("name")}
            />

            {errors.fullname && (
              <p className="text-red-500">{`${errors.fullname.message}`}</p>
            )}
          </div>

          <div className="flex flex-col py-2">
            <label>
              <RiPhoneFill className="inline-block mr-2" /> Phone
            </label>
            <input
              className="border p-2"
              type="number"
              {...register("phone", {valueAsNumber: true})}
              placeholder="09XXXXXXXX"
            />
          </div>

          <div className="flex flex-col py-2">
            <label>
              <RiMailLine className="inline-block mr-2" /> Email
            </label>
            <input
              className="border p-2"
              type="email"
              placeholder="Email"
              {...register("email")}
            />

            {errors.email && (
              <p className="text-red-500">{`${errors.email.message}`}</p>
            )}
          </div>

          <div className="flex flex-col py-2">
            <label>
              <RiLockPasswordLine className="inline-block mr-2" /> Password
            </label>
            <input
              className="border p-2"
              type="password"
              placeholder="password"
              {...register("password")}
            />

            {errors.password && (
              <p className="text-red-500">{`${errors.password.message}`}</p>
            )}
          </div>

          <div className="flex flex-col py-2">
            <label>
              <RiLockPasswordLine className="inline-block mr-2" /> Confirm
              Password
            </label>
            <input
              className="border p-2"
              type="password"
              placeholder="Confirm password"
              {...register("password_confirmation")}
            />
            {errors.password_confirmation && (
              <p className="text-red-500">{`${errors.password_confirmation.message}`}</p>
            )}
          </div>
          <button
          disabled={isSubmitting}
          type="submit"
          className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white disabled:bg-indigo-300">
            Sign Up
          </button>

          <div className="flex justify-between items-center">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" /> Remember Me
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
