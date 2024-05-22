import { getAllProducts } from "~/server/services/products.service";

export default defineEventHandler(async (event) => {
  try {
    const products = await getAllProducts();
    return products;
  } catch (error) {
    console.log(error);
    throw new Error(`Error fetching products: ${JSON.stringify(error)}`);
  }
});
