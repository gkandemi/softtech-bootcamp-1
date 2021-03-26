<template>
  <nav class="navbar navbar-dark bg-dark navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Debte</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <!-- <a class="nav-link active" aria-current="page" href="#">Akış</a> -->
            <router-link class="nav-link" active-class="active" to="/"
              >Akış</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/about"
              >Hakkımda</router-link
            >
            <!-- <a class="nav-link" to="/about">Hakkımda</a> -->
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">İletişim</a> -->
            <router-link class="nav-link" active-class="active" to="/contact"
              >İletişim</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
