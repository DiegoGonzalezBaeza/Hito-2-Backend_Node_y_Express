import express from "express";
import userRoute from "./routes/user.route";
import authRoute from "./routes/auth.route";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  relacionas las rutas de user.route y las especifica al string: "/api/v1/users"
app.use("/api/v1/users", userRoute);

//  relacionas las rutas de auth.route y las especifica al string: "/api/v1/auth"
app.use("/api/v1/auth", authRoute);


// Para levantar el servidor
app.listen(port, () => {
    console.log("Servidor andando en el puerto: "+ port);
});

