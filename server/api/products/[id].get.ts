import { getProduct } from "~/server/services/products.service";

export default defineEventHandler((event) => {
  try {
    const id = getRouterParam(event, "id");
    const product = getProduct(id!);
    return product;
  } catch (error) {
    console.log(error);
    throw new Error(`Error fetching product: ${JSON.stringify(error)}`);
  }
});
