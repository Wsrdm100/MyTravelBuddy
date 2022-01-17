import styles from "./auth.module.scss";

import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required("Email requis"),
    password: yup
      .string()
      .min(8, "Le mot de passse doit contenir au moins 8 caractères")
      .max(32, "Le mot de passse doit contenir moins de 32 caractères")
      .matches()
      .required("Mot de passe requis"),
    confirm_password: yup
      .string()
      .oneOf(
        [yup.ref("password"), null],
        "Les mots de passe doivent être identiques"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };
  return (
    <main class="page">
      <form onSubmit={handleSubmit(onSubmitHandler)} className={styles.form}>
        <h2 className={styles.title}>Créer un compte</h2>
        <div className="form-group">
          <label className="label">Email :</label>
          <input
            name="email"
            {...register("email")}
            placeholder="Adresse mail"
            className="input"
          />
          <p className="error">{errors.email?.message}</p>
        </div>
        <div className="form-group">
          <label className="label">Mot de passe :</label>

          <input
            name="password"
            {...register("password")}
            placeholder="Mot de passe"
            className="input"
          />
          <p className="error">{errors.password?.message}</p>
        </div>
        <div className="form-group">
          <label className="label">Confirmer mot de passe :</label>
          <input
            name="confirm_password"
            {...register("confirm_password")}
            placeholder="Confirmer mot de passe"
            className="input"
          />
          <p className="error">{errors.confirm_password?.message}</p>
        </div>
        <div className={`row space-between ${styles.bottomRow}`}>
          <button className="primary-btn">Créer un compte</button>
          <div className={styles.bottomText}>
            <span>Déjà un compte ?</span>
            <a className="primary-link" href="#">
              Se connecter
            </a>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Register;
