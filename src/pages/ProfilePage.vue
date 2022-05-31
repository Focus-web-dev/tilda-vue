<template>
  <Header class="header">
    <template v-slot:leftItems>
      <div class="left-items col-10 col-md-6">
        <div class="left-items__logo">
          <router-link to="/" aria-label="Go to homepage">
            <img class="icon" src="@/assets/svg/logo.svg" alt="Logotype">
          </router-link>
        </div>

        <nav class="nav">
          <ul class="nav-list">
            <li class="nav-list__item">
              <router-link to="/" class="link">Мои сайты</router-link>
            </li>
            <li class="nav-list__item">
              <router-link to="/profile" class="link">Профиль</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </template>
    <template v-slot:rightItems>
      <div class="right-items col-2 col-md-6">
        <ul class="nav-list">
          <li class="nav-list__item">
            <a href="javascript:void(0);" class="link">Выйти</a>
          </li>
        </ul>
      </div>
    </template>
  </Header>
  <h1 style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)">YOUR PROFILE</h1>
  <Footer />
</template>

<script>
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

export default {
  name: "MyProfile",
  components: {
    Header,
    Footer,
  }
}
</script>