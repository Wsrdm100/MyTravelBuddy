import styles from "./auth.module.scss";

import api from "../../services/api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const schema = yup.object().shape({
    email: yup.string().required("Email requis"),
    password: yup.string().required("Mot de passe requis"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = async (data) => {
    console.log({ data });
    await api.post("/register", data);
    reset();
  };
  return (
    <main class="page">
      <form onSubmit={handleSubmit(onSubmitHandler)} className={styles.form}>
        <h2 className={styles.title}>Connexion</h2>

        <div className="form-group">
          <label className="label">Email :</label>
          <input
            name="email"
            type="mail"
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
            type="password"
            {...register("password")}
            placeholder="Mot de passe"
            className="input"
          />
          <p className="error">{errors.password?.message}</p>
        </div>
        <div className={`row space-between ${styles.bottomRow}`}>
          <button className="primary-btn">Créer un compte</button>
          <div className={styles.bottomText}>
            <span>Pas de compte ?</span>
            <Link className="primary-link" to="/auth/register">
              Créer un compte
            </Link>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Register;
