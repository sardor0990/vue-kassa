<template>
    <div id="login">
        <div class="login background">
            <div class="login_wrap">
                <div class="row">
                    <div class="login__column" style="border: 1px solid #0069d9;">
                        <div class="form__container">
                            <form>
                                <div class="form__input">
                                    <input type="text" placeholder="Введите имя" required>
                                </div>

                                <div class="form__input">
                                    <input type="password" name="password" placeholder="Введите пороль" re>
                                </div>
                                <div style="text-align: center">
                                    <button @click="submit__form" class="login__button">Войти</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
          return{
              formData: "",
              form: {
                name: "",
                password: "",
              },
          }
        },
        methods:{

        },
    }
</script>

<style lang="scss" scoped>

    .background{
        height: 100vh;
    }
    .login {
        &_wrap {
            width: 1200px;
            margin: 0 auto;
        }

        &_row {
            display: flex;
            align-items: center;
            padding: 60px 0;
            justify-content: center;
        }
    }

    .row {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .login__column {
        padding: 40px 50px;
        border-radius: 20px;
        width: 300px;
        margin-top: 150px;
    }

    .form__container {

    }

    .login__column .form__input input {
        width: 90%;
        border-radius: 40px;
        border: 1px solid #ccc;
        padding: 10px 15px;
        outline: none;
        margin: 10px auto;
    }

    .form__input {

    }

    .email__input i {
        position: absolute;
        left: 10px;
        top: 20px;
        filter: invert(50%);
    }

    .password__input {
        position: relative;
        margin-top: 20px;
    }

    .rememberMe__row {
        justify-content: space-between;
        margin-left: 25px;
    }

    .login__button {
        outline: none;
        border: 1px solid #0069d9;
        background: #007bff;
        color: #ffffff;
        width: 50%;
        padding: 10px;
        border-radius: 40px;
        margin: 0 auto;
        &:hover{
            background: #0069d9;
        }
    }

</style>