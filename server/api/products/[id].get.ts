import { getProduct } from "~/server/services/products.service";

export default defineEventHandler((event) => {
  const id = getRouterParam(event, "id");

  console.log("id", id);

  try {
    const product = getProduct(id!);
    return product;
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
