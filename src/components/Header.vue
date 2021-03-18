<template>
    <header id="header">
        <!--<div class="header">
            <div class="header_wrap">
                <div class="header_wrap_cont">
                    <div class="header_wrap_cont_btn">
                        <router-link style="text-decoration: none" to="/login"><div class="btn">Выйти</div></router-link>
                    </div>
                    <div class="header_wrap_cont_btn">
                        <router-link style="text-decoration: none" to="/Sclad"><div class="btn">Cклад</div></router-link>
                    </div>
                    <div class="header_wrap_cont_btn ">
                        <router-link to="/Static" style="text-decoration: none"> <div class="btn">Статистика</div></router-link>
                    </div>
                    <div class="header_wrap_cont_btn">
                        <router-link to="/Exp" style="text-decoration: none">  <div class="btn">Затраты</div>  </router-link>
                    </div>
                    <div class="header_wrap_cont_btn">
                        <router-link to="/Userpage" style="text-decoration: none">  <div class="btn">Пробить</div>  </router-link>
                    </div>
                </div>
            </div>
        </div>-->
       <div class="user_header">
           <div class="user_header_wrap">
               <div class="user_header_wrap_cont">
                   <div class="user_header_wrap_cont_btn">
                       <router-link style="text-decoration: none" to="/login"><div class="user_btn">Выйти</div></router-link>
                   </div>
                   <div class="user_name">
                       <div class="user_name_text">
                           <h1 style="font-family: sans-serif;text-align: center; font-size: 30px ">
                               Гена василий петрович
                           </h1>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        props:{

        },
    }
</script>

<style lang="scss" scoped>
    .header {
        &_wrap {
            width: 100%;

            &_cont {
                display: flex;
                &_btn{
                    width: 100%;
                }
            }
        }
    }
.btn {
    background: #007bff;
    text-align: center;
    padding: 50px;
    font-size: 30px;
    color: white;
    border: 1px solid white;
    border-radius: 25px;
    &:hover{
        background: #0069d9;
    }
}
    .user_header{
      &_wrap{
          &_cont{
              display: flex;
              &_btn{
                  margin-right: auto;
              }
          }
      }
    }
    .user_btn{
        background: #dc3545;
        text-align: center;
        padding: 50px;
        font-size: 30px;
        color: white;
        border: 1px solid white;
        border-radius: 25px;
    }
    .user_name{
        &_text{
            padding:50px ;
        }
    }
@media screen and (max-width: 768px){
    .header_wrap_cont{
        flex-direction: column;
    }
}
</style>