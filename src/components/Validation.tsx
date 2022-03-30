import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type IformInputs = {
  phoneNumber: string;
  address: string;
  sex: string;
  profession: string;
  password: string;
  zip1: number;
  zip2: number;
};

const formSubmitHandler: SubmitHandler<IformInputs> = (data) => {
  console.log(data);
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "形式が正しくありません")
    .max(11, "最大11桁")
    .required("必須です"),
  address: yup
    .string()
    .matches(phoneRegExp, "形式が正しくありません")
    .max(11, "最大11桁")
    .required("必須です"),
  password: yup
    .string()
    .min(4, "4桁以上必須")
    .max(20, "最大20桁")
    .required("必須です"),
});

const Validation: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IformInputs>({ resolver: yupResolver(schema) });

  return (
    <form onSubmit={handleSubmit(formSubmitHandler)}>
      <input placeholder="パスワード" {...register("password")} />
      {errors.password && (
        <span style={{ color: "red" }}>{errors.password.message}</span>
      )}
      <br />

      <input placeholder="電話番号" {...register("phoneNumber")} />
      {errors.phoneNumber && (
        <span style={{ color: "red" }}>{errors.phoneNumber.message}</span>
      )}
      <br />

      <input type="submit" />
    </form>
  );
};
export default Validation;
