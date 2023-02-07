import React, { useState, useContext } from 'react';
import { SectionTitle } from './../components/Global/SectionTitle';
import Head from 'next/head';
import Image from 'next/image';
import { PrimaryButton } from './../components/Global/PrimaryButton/PrimaryButton';
import { InputField } from './../components/Forms/InputField';
import { fetchWord } from '@/lang/fetchWord';
import { LanguageContext } from './../context/LangContext';
const NewPassword = () => {
  const { lang } = useContext(LanguageContext);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex gap-4">
        <figure className="full-image-login flex-1">
          <Image
            src="/images/login.jpg"
            alt={fetchWord('New_password', lang)}
            height={500}
            width={500}
          />
        </figure>
        <div className="flex flex-col p-8 flex-1">
          <SectionTitle title={fetchWord('New_password', lang)} />
          <div className="h-14" />

          <form handleSubmit={handleSubmit}>
            <InputField
              style={{ border: '2px solid #E5E5E5', padding: '12px' }}
              label={fetchWord('New_password', lang)}
              type="password"
              name="password"
              placeholder={fetchWord('New_password', lang)}
              value={password}
              handleChange={(e) => setPassword(e.target.value)}
            />
            <InputField
              style={{ border: '2px solid #E5E5E5', padding: '12px' }}
              label={fetchWord('confirm_password_label', lang)}
              type="password"
              name="confirmPassword"
              placeholder={fetchWord('confirm_password_placeholder', lang)}
              value={confirmPassword}
              handleChange={(e) => setConfirmPassword(e.target.value)}
            />

            <PrimaryButton
              text={fetchWord('save', lang)}
              classes="max-w-[80%] w-full rounded-lg !py-3 mx-auto block mt-8"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default NewPassword;
