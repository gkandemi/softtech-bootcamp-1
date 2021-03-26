<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Ürün Uygulaması</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link" active-class="active">Anasayfa</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/categories" class="nav-link" active-class="active">Kategoriler</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link" active-class="active">Ürünler</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
