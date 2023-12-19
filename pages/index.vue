<template>
  <div class="app">
    <main>
      <div>
        <!-- <SearchInput 
        :search-keyword="searchKeyword"
        @input="updateSearchKeyword"
        ></SearchInput> -->
        <SearchInput 
          v-model="searchKeyword"
          @search="searchProducts"
        ></SearchInput>
      </div>
      <ul>
        <li class="item flex" v-for="product in products" :key="product.id" @click="moveToDetailPage(product.id)">
          <!-- {{ product }} -->
          <img class="product-image" :src="product.imageUrl" :alt="product.name" />
          <p>{{ product.name }}</p>
          <span>{{ product.price }}</span>
        </li>
      </ul>
      <div class="cart-wrapper">
        <button class="btn" @click="moveToCartPage">장바구니 바로가기</button>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
// import ProductList from '~/components/ProductList.vue';
import SearchInput from '@/components/SearchInput.vue'
import { fetchProductsByKeyword } from '@/api/index'


export default {
  components: { SearchInput },
  // data() {
  //   return {
  //     products: [],
  //     }
  //   },

  /**
   * asyncData 설명
   * asyncData 는 pages에만 들어가는 메소드이다.
   * created 보다 더 전에 동작(view 가 나오기전에 동작)
   * this 가 안된다.(view 이전이라?)
   */
  async asyncData() {
    const response = await axios.get('http://localhost:3000/products')
    // console.log(response)
    // this.products = response.data
    const products = response.data.map(
      (item) => ({
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`
      })
      // {
      //   return {
      //     ...item,
      //     imageUrl: `${item.imageUrl}?random=${Math.random()}`
      //   }
      // }
    )
    return { products }
  },

  data() {
    return {
      searchKeyword: '',
    }
  },
  methods: {
    moveToCartPage() {
      this.$router.push(`/cart`)
    },
    moveToDetailPage(id) {
      console.log(id)
      this.$router.push(`detail/${id}`)
    },
    // updateSearchKeyword(keyword) {
    //   this.searchKeyword = keyword
    // }
    async searchProducts() {
      const response = await fetchProductsByKeyword(this.searchKeyword)
      this.products = response.data.map(
      (item) => ({
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`
      }))
    },
  },
  // async created() {},
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>

