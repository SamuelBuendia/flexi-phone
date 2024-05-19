import { FAKEAPI_SERVICES } from "~/composables/constats";

export async function getAllProducts() {
  try {
    const response = await fetch(`${FAKEAPI_SERVICES}/products`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const productsFormat = await response.json();
    
    return productsFormat;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

export async function getProduct(productId: string) {
  try {
    const response = await fetch(`${FAKEAPI_SERVICES}/products/${productId}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const productsFormat = await response.json();

    return productsFormat;
  } catch (error) {
    console.log(error);
  }
}
