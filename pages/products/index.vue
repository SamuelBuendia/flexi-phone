<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl my-5 px-4 sm:px-6 lg:max-w-4xl lg:px-8 mb-20">
      <h2 class="text-2xl font-bold tracking-tight text-gray-500 mt-10 mb-12">Choose your Product</h2>
      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in products" :key="product.id" class="group relative">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 aspect-none group-hover:opacity-75 h-80 bg-white">
            <img :src="product.image" :alt="product.image"
              class="object-scale-down max-h-full object-center h-full w-full" />
          </div>
          <div class="mt-4">
            <div>
              <h3 class="mt-4 text-sm text-gray-700">
                <nuxt-link :to="`/products/${product.id}`" class="group">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.title }}
                </nuxt-link>
              </h3>
            </div>
            <p class="mt-1 text-lg font-medium text-gray-900">${{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const { data } = await useFetch('/api/products')
const products = useState<Array<Product>>(() => data.value)

</script>

<style scoped></style>