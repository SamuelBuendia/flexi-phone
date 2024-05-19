import { getAllProducts } from "~/server/services/products.service";

export default defineEventHandler(async (event) => {
  try {
    const products = await getAllProducts();

    return products;
  } catch (error) {
    console.log(error);
  }
});

// export default async (event: H3Event) => {
//   const body = await readBody(event);
//   const data = body.data;

//   const encryptedPassword: string = await bcrypt.hash(data.password, 10);

//   const userData: IUser = {
//     username: data.username,
//     name: data.name,
//     email: data.email,
//     loginType: "email",
//     password: encryptedPassword,
//   };

//   const user = await createUser(userData);

//   console.log("User", user);
//   return user;
// };
