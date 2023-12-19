<template>
  <div>
    <header class="title">
        <!-- <h1>{{ $route.name }} 페이지</h1> -->
        <!-- <NuxtLink to="/">홈페이지</NuxtLink> -->
        <!-- <NuxtLink to="/main">메인 페이지</NuxtLink> -->
        <!-- <NuxtLink to="/product">상품 페이지</NuxtLink> -->
      <NuxtLink class="logo" to="/">Nuxt Shopping</NuxtLink>
    </header>
    <Nuxt />
    <!-- <Nuxt></Nuxt> -->
    <!-- <router-view></router-view>-->  
  </div>
</template>

<script>
export default {
    // created() {
    //     console.log(this.$route)
    // }
}
</script>

<style scoped>
/* 헤더 관련 스타일 */
header { height: 60px; display: flex; align-items: center; padding: 0 0.5rem; }
.logo { font-weight: 900; } .logo:visited { color: inherit; }

</style>