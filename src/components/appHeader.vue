<template>
  <div class="app-header shadow-lg">
    <nav class="navbar navbar-expand-sm navbar-light">
        <a class="navbar-brand" href="#">LOGO</a>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                <li class="nav-item ">
                    <a class="nav-link text-dark" href="#">Home </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark" href="#">Link</a>
                </li>
                 <li class="nav-item">
                    <a class="nav-link text-dark" href="#">Link</a>
                </li>
                 <li class="nav-item">
                    <a class="nav-link text-dark" href="#">Link</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
               <router-link to="/signin"> <button class="btn btn__login my-2 px-4 my-sm-0 mr-3" type="submit">Login</button></router-link>
               <router-link to="/signup"> <button class="btn btn__register px-4 my-2 my-sm-0" type="submit">Register</button></router-link>
            </form>
        </div>
    </nav>
  </div>
</template>

<style>

</style>