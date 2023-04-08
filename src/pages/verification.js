import { fetchWord } from "@/lang/fetchWord";
import Head from "next/head";
import Image from "next/image";
import { useContext, useState } from "react";

import { LanguageContext } from "./../context/LangContext";
import { InputField } from "@/components/Forms/InputField";
import { Button } from "@/components/Global/Button/Button";
import { Layout } from "@/components/Layout/Layout";
import AuthLayout from "@/components/AuthLayout/AuthLayout";

export default function ForgotPassword() {
  const { lang } = useContext(LanguageContext);
  const [numbers, setNumbers] = useState("");
  return (
    <>
      <Head>
        <title>{fetchWord("verification", lang)}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthLayout>
        <div className="flex flex-col w-full max-w-[500px] mt-24">
          <h1 className="text-xl text-center mb-8 font-medium capitalize">
            {fetchWord("verification", lang)}
          </h1>

          <p className=" text-[#505050] font-medium gap-1 flex justify-center">
            {fetchWord("please_enter", lang)}
            <span className="text-primary font-medium uppercase">
              {fetchWord("secret_code", lang)}
            </span>
            <span className="text-primary">{fetchWord("sent_to", lang)}</span>
          </p>
          <p className="text-center mb-8 text-sm mt-2 font-medium">
            +45451231551
          </p>
          <div className="flex gap-4">
            <InputField
              type="tel"
              classes="!p-6"
              onChange={(e) => setNumbers(e.target.value)}
            />
            <InputField
              type="tel"
              classes="!p-6"
              onChange={(e) => setNumbers(e.target.value)}
            />
            <InputField
              type="tel"
              classes="!p-6"
              onChange={(e) => setNumbers(e.target.value)}
            />
            <InputField
              type="tel"
              classes="!p-6"
              onChange={(e) => setNumbers(e.target.value)}
            />
          </div>
          <Button classes="rounded-none capitalize !p-3">
            {fetchWord("confirm", lang)}
          </Button>
        </div>
      </AuthLayout>
    </>
  );
}
