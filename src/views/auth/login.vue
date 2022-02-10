<template>
  <div>
    <div class="loading" v-if="loading">
      <div class="lds-ellipsis"><div></div><div></div><div></div>
      </div>
    </div>
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100 p-l-60 p-r-60 p-t-30 p-b-30 shadow-lg">
          <form
            class="login100-form validate-form"
          >
            <!-- <img src="@/assets/img/logo_spread.svg" width="150" alt="" /> -->
            <div class="m-b-5">
              <span class="login100-form-title text-center p-b-30">
              User Login
            </span>
            </div>

            <div class="m-b-20">
              <span class="txt1 p-b-11"> Email </span>
              <div
                class="wrap-input100 validate-input"
                data-validate="Username is required"
              >
                <input
                  class="input100"
                  type="email"
                  name="email"
                  v-model="email"
                />
                <span class="focus-input100"></span>
              </div>
            </div>

           <div class="m-b-20">
              <span class="txt1 p-b-11"> Password </span>
            <div
              class="wrap-input100 validate-input"
            >
              <input
                class="input100"
                type="password"
                name="pass"
                v-model="password"
              />
              <span class="focus-input100"></span>
            </div>
           </div>

            <div class="container-login100-form-btn">
              <router-link to="/dashboard"><button class="login100-form-btn">LOGIN</button></router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import helpers from "@/helpers/index";
// import Swal from 'sweetalert2'
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      photo:null,
      loading: false,
      error_msg: {},
    };
  },
  methods: {
   
  },
};
</script>

<style scoped>
/* Loader  */
.loading {
  position: fixed;
  min-height: 100vh;
  width: 100%;
  background-color: var(--light-color);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: var(--primary-color);
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}


a {
  font-size: 14px;
  line-height: 1.7;
  color: #fff;
  margin: 0px;
  transition: all 0.4s;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
}

a:focus {
  outline: none !important;
}

a:hover {
  text-decoration: none;
  color: var(--primary-color);
}

/*---------------------------------------------*/
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0px;
}

p {
  font-size: 14px;
  line-height: 1.7;
  color: #fff;
  margin: 0px;
}

ul,
li {
  margin: 0px;
  list-style-type: none;
}

/*---------------------------------------------*/
input {
  outline: none;
  border: none;
}

textarea {
  outline: none;
  border: none;
}

textarea:focus,
input:focus {
  border-color: transparent !important;
}

input:focus::-webkit-input-placeholder {
  color: transparent;
}
input:focus:-moz-placeholder {
  color: transparent;
}
input:focus::-moz-placeholder {
  color: transparent;
}
input:focus:-ms-input-placeholder {
  color: transparent;
}

textarea:focus::-webkit-input-placeholder {
  color: transparent;
}
textarea:focus:-moz-placeholder {
  color: transparent;
}
textarea:focus::-moz-placeholder {
  color: transparent;
}
textarea:focus:-ms-input-placeholder {
  color: transparent;
}

input::-webkit-input-placeholder {
  color: var(--tertiary-color);
}
input:-moz-placeholder {
  color: var(--tertiary-color);
}
input::-moz-placeholder {
  color: var(--tertiary-color);
}
input:-ms-input-placeholder {
  color: var(--tertiary-color);
}

textarea::-webkit-input-placeholder {
  color: var(--tertiary-color);
}
textarea:-moz-placeholder {
  color: var(--tertiary-color);
}
textarea::-moz-placeholder {
  color: var(--tertiary-color);
}
textarea:-ms-input-placeholder {
  color: var(--tertiary-color);
}

label {
  display: block;
  margin: 0;
}

/*---------------------------------------------*/
button {
  outline: none !important;
  border: none;
  background: transparent;
}

button:hover {
  cursor: pointer;
}

iframe {
  border: none !important;
}

/*//////////////////////////////////////////////////////////////////
[ Utility ]*/
.txt1 {
  font-size: 13px;
  color: var(--dark-color);
  line-height: 1.4;
  text-transform: uppercase;
}

.txt2 {
  font-size: 13px;
  color: var(--tertiary-color);
  line-height: 1.4;
}

.txt3 {
  font-size: 13px;
  color: var(--dark-color);
  line-height: 1.4;
}

/*//////////////////////////////////////////////////////////////////
[ login ]*/

.limiter {
  width: 100%;
  margin: 0 auto;
}

.container-login100 {
  width: 100%;
  min-height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: var(--accent-color);
}

.wrap-login100 {
  width: 560px;
  background: #fff;
  border-radius: 10px;
  position: relative;
}

/*==================================================================
[ Form ]*/

.login100-form {
  width: 100%;
}

.login100-form-title {
  font-size: 20px;
  font-weight: bold;
  color: var(--dark-color);
  line-height: 1.2;
  /* text-transform: uppercase; */
  /* text-align: left; */

  width: 100%;
  display: block;
}

/*------------------------------------------------------------------
[ Input ]*/

.wrap-input100 {
  width: 100%;
  position: relative;
  background-color: #fff;
  border: 1px solid var(--primary-color);
  border-radius: 2px;
}

/*---------------------------------------------*/
.input100 {
  color: var(--dark-color);
  line-height: 1;
  font-size: 15px;

  display: block;
  width: 100%;
  background: transparent;
  height: 40px;
  padding: 0 20px 0 20px;
}
/*------------------------------------------------------------------
[ Focus Input ]*/

.focus-input100 {
  position: absolute;
  display: block;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  top: -1px;
  left: -1px;
  pointer-events: none;
  border: 1px solid var(--dark-color);
  border-radius: 3px;

  visibility: hidden;
  opacity: 0;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;

  -webkit-transform: scaleX(1.1) scaleY(1.3);
  -moz-transform: scaleX(1.1) scaleY(1.3);
  -ms-transform: scaleX(1.1) scaleY(1.3);
  -o-transform: scaleX(1.1) scaleY(1.3);
  transform: scaleX(1.1) scaleY(1.3);
}

.input100:focus + .focus-input100 {
  visibility: visible;
  opacity: 1;

  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
}

.eff-focus-selection {
  visibility: visible;
  opacity: 1;

  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
}

/*---------------------------------------------*/
.btn-show-pass {
  font-size: 15px;
  color: var(--tertiary-color);

  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  position: absolute;
  height: 100%;
  top: 0;
  right: 12px;
  padding: 0 5px;
  cursor: pointer;
  -webkit-transition: background 0.4s;
  -o-transition: background 0.4s;
  -moz-transition: background 0.4s;
  transition: background 0.4s;
}

.btn-show-pass:hover {
  color: var(--primary-color);
}

.btn-show-pass.active {
  color: var(--primary-color);
}

/*==================================================================
[ Restyle Checkbox ]*/

.input-checkbox100 {
  display: none;
}

.label-checkbox100 {
  font-size: 13px;
  color: var(--tertiary-color);
  line-height: 1.4;

  display: block;
  position: relative;
  padding-left: 26px;
  cursor: pointer;
}

.label-checkbox100::before {
  content: "\f00c";
  font-family: FontAwesome;
  font-size: 13px;
  color: transparent;

  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 2px;
  background: #fff;
  border: 1px solid var(--tertiary-color);
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
}

.input-checkbox100:checked + .label-checkbox100::before {
  color: var(--primary-color);
}

/*------------------------------------------------------------------
[ Button ]*/
.container-login100-form-btn {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.login100-form-btn {
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  line-height: 1.2;

  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  min-width: 150px;
  height: 40px;
  background-color: var(--primary-color);
  border-radius: 27px;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.login100-form-btn:hover {
  background-color: var(--secondary-color);
}

/*------------------------------------------------------------------
[ Alert validate ]*/

.validate-input {
  position: relative;
}

.alert-validate .btn-show-pass {
  visibility: hidden;
}

.alert-validate::before {
  content: attr(data-validate);
  position: absolute;
  max-width: 70%;
  background-color: #fff;
  border: 1px solid #c80000;
  border-radius: 3px;
  padding: 4px 25px 5px 10px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 12px;
  pointer-events: none;

  color: #c80000;
  font-size: 14px;
  line-height: 1.4;
  text-align: left;

  visibility: hidden;
  opacity: 0;

  -webkit-transition: opacity 0.4s;
  -o-transition: opacity 0.4s;
  -moz-transition: opacity 0.4s;
  transition: opacity 0.4s;
}

.alert-validate::after {
  content: "\f12a";
  font-family: FontAwesome;
  display: block;
  position: absolute;
  color: #c80000;
  font-size: 18px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 18px;
}

.alert-validate:hover:before {
  visibility: visible;
  opacity: 1;
}

@media (max-width: 992px) {
  .alert-validate::before {
    visibility: visible;
    opacity: 1;
  }
}

/*//////////////////////////////////////////////////////////////////
[ Responsive ]*/

@media (max-width: 576px) {
  .wrap-login100 {
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>
