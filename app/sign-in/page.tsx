"use client";

import Image from "next/image";
import React, { useState,useEffect } from "react";
import { RiLockPasswordLine, RiPhoneFill } from "react-icons/ri";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import api from '../../lib/api'
import { useRouter } from "next/navigation";

interface LoginForm {
  phone: number;
  password: string;
}

const loginSchema: ZodType<LoginForm> = z.object({
  phone: z.number().min(10, "Invalid Phone number"),
  password: z.string().min(8, "Invalid Password"),
});

export default function Signin() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginForm>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: LoginForm) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    api.post('/login',data)
    .then(res=>{
      localStorage.setItem("token", JSON.stringify(res.data));
      router.push('/admin')
    })
    .catch(err=>{
      console.log('error')
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
              <RiLockPasswordLine className="inline-block mr-2" /> Password
            </label>
            <input
              placeholder="password"
              className="border p-2"
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500">{`${errors.password.message}`}</p>
            )}
          </div>

          <button 
          className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white disabled:bg-indigo-300"
          disabled={isSubmitting}
          type="submit"
          >
            Sign In
          </button>

          <div className="flex justify-between items-center">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" /> Remember Me
            </p>

            <Link
              href={"/sign-up"}
              className="flex items-center gap-2 text-indigo-700"
            >
              Create Account <LiaLongArrowAltRightSolid />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
