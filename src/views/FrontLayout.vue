<template>
  <!-- navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow">
    <div class="container">
      <router-link to="/" class="navbar-brand fw-bold"
        ><i class="bi bi-record-fill text-info"></i>小懶蟲</router-link
      >

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0 ms-auto text-center">
          <li class="nav-item mx-3 my-2 my-lg-0">
            <router-link class="nav-link border-bottom border-bottom-lg-0" to="/">首頁</router-link>
          </li>
          <li class="nav-item mx-3 my-2 my-lg-0">
            <a class="nav-link border-bottom border-bottom-lg-0" href="#/#serviceIntroduction"
              >服務介紹</a
            >
          </li>
          <li class="nav-item mx-3 my-2 my-lg-0">
            <a class="nav-link border-bottom border-bottom-lg-0" href="#/#costOfTheSolution"
              >方案費用</a
            >
          </li>
          <li class="nav-item mx-3 my-2 my-lg-0 border-bottom border-bottom-lg-0">
            <router-link class="nav-link border-bottom border-bottom-lg-0" to="/FAQ"
              >常見問題</router-link
            >
          </li>
          <li class="nav-item my-2 my-lg-0">
            <router-link class="nav-link btn btn-info d-none d-lg-block" to="/PlanPurchase"
              >方案購買</router-link
            >
            <router-link class="nav-link btn btn d-lg-none" to="/PlanPurchase"
              >方案購買</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- 修正 navbar 被吃掉的向下空間 -->
  <div class="navbar-height">
    <router-view></router-view>
  </div>
  <section style="background-color: var(--bs-gray-title-bkg)">
    <div class="container py-5 text-center">
      <div class="row justify-content-center">
        <div class="col-lg-10 col-8">
          <h2 class="fw-bold fs-2 mb-5">需要其他協助嗎？</h2>
          <div class="row row-cols-1 row-cols-lg-3 g-4">
            <div class="col">
              <div class="border-0 shadow fs-4 py-3 px-2 position-relative">
                <a href="tel:07-555-666" class="text-decoration-none link-dark"
                  ><i class="bi bi-telephone-fill text-info me-2 stretched-link"></i>07-555-666</a
                >
              </div>
            </div>
            <div class="col">
              <div class="border-0 shadow fs-4 py-3 px-2 position-relative">
                <a href="#" class="text-decoration-none link-dark"
                  ><i class="bi bi-facebook text-info me-2 stretched-link"></i>我就是個小懶蟲</a
                >
              </div>
            </div>
            <div class="col">
              <div class="border-0 shadow fs-4 py-3 px-2 position-relative">
                <router-link class="text-decoration-none link-dark" to="/FAQ"
                  ><i class="bi bi-question-lg text-info me-2 stretched-link"></i
                  >常見問題</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- footer -->
  <footer class="py-3" style="background-color: var(--bs-gray-footer-bkg)">
    <div class="text-white text-center">Copyright © 2021 小懶蟲.All rights reserved.</div>
  </footer>
</template>
<script>
import { RouterView, RouterLink } from 'vue-router'
export default {
  components: {
    RouterView,
    RouterLink
  }
}
</script>
<style lang="scss">
// navbar
.navbar-height {
  padding-top: var(--bs-navbar-height);
}
</style>
