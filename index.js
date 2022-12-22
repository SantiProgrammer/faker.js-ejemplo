import faker from "faker";
faker.locale = "es";
const { name, internet, random } = faker;
import { writeFile } from "fs";

let str = "NOMBRE;APELLIDO;EMAIL;TRABAJO;LUGAR\n";
//'/test?cant=30' una funcion get que le pasan por parametro una cantidad x
for (let i = 0; i < 1000; i++) {
  str +=
    name.firstName() +
    ";" +
    name.lastName() +
    ";" +
    internet.email() +
    ";" +
    name.jobTitle() +
    ";" +
    random.locale() +
    "\n";
}

//la reespuesta de de todo lo ingresado agregando ademas el id

writeFile("./test.csv", str, (err) => {
  if (err) console.log(err);
  console.log("archivo guardado");
});
