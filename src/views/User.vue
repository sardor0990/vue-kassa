<template>
    <div id="user">
        <div class="user">
            <div class="user_wrap">
                <div class="row">
                    <div class="col first__column">
                        <div class="first__column__inner">
                            <input type="text" placeholder="Поиск">
                            <button><i class="fas fa-search">Поиск</i></button>
                        </div>

                        <div class="table__content">
                            <table>
                                <tr>
                                    <th>Наименовая</th>
                                    <th>Номер</th>
                                    <th>сумма</th>
                                    <th>Добавить</th>
                                </tr>
                                <tr>
                                    <td>asdasd</td>
                                    <td>asdasdasd</td>
                                    <td>55757</td>
                                    <td>
                                        <button>Добавить</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>asdasd</td>
                                    <td>asdasdasd</td>
                                    <td>55757</td>
                                    <td>
                                        <button>Добавить</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>asdasd</td>
                                    <td>asdasdasd</td>
                                    <td>55757</td>
                                    <td>
                                        <button>Добавить</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>asdasd</td>
                                    <td>asdasdasd</td>
                                    <td>55757</td>
                                    <td>
                                        <button>Добавить</button>
                                    </td>
                                </tr>


                            </table>
                        </div>
                    </div>

                    <div class="col second__column">
                        <div class="second__column__inner" style="">
                            <table>
                                <tr>
                                    <th>Скидка</th>
                                    <th>Наименование товара</th>
                                    <th>сумма</th>
                                    <th>Удалить</th>
                                </tr>
                                <tr>
                                    <td>
                                        <button class="percent_button" @click="showModal=true">%</button>
                                    </td>
                                    <td>asdasdasd</td>
                                    <td>55757</td>
                                    <td>
                                        <button class="delete_button">delete</button>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <div class="last__btns">
                            <div class="last__btns__chek__button"
                                 @click="showChek=true; ">chek
                            </div>
                            <div class="last__btns__count">14555</div>
                            <div id="demo"></div>
                        </div>
                    </div>
                </div>

                <!--procent modal-->

                <transition name="fade" appear>
                    <div class="modal-overlay" v-show="showModal" @click="showModal=false">
                    </div>
                </transition>

                <transition name="slide" appear>
                    <div class="modal" v-show="showModal">
                        <div class="modal_header">
                            Выберите скидку
                        </div>
                        <div style="text-align: center;">
                            <div class="modal__inner__content red">Б</div>
                            <div class="modal__inner__content yellow">C</div>
                            <div class="modal__inner__content green">M</div>
                        </div>
                        <div style="text-align: center; margin-top: 10px;">
                            <button  style="padding: 10px; margin-right: 20px">Отправить</button>
                            <button @click="showModal=false" style="padding: 10px">Отмена</button>
                        </div>
                    </div>
                </transition>
                <!--check modal-->

                <transition name="fade" appear>
                    <div class="modal-overlay" v-show="showChek" @click="showChek=false">
                    </div>
                </transition>

                <transition name="slide" appear>
                    <div class="modal" v-show="showChek">
                        <div style="text-align: center; margin-top: 10px;">
                            <button style="padding: 10px; margin-right: 100px;">Отправить
                            </button>
                            <button @click="showChek=false" style="padding: 10px">Отмена</button>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "User",
        data() {
            return {
                showModal: false,
                showChek: false,
            }


        },



    }
</script>

<style lang="scss" scoped>

    .user {
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
        margin-top: 30px;
    }

    .first__column {
        text-align: center;

        table, td, th {
            border: 1px solid black;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            background: #ffffff;

            td button {
                padding: 10px;
                background: #007bff;
                border-radius: 4px;
                color: #ffffff;
                cursor: pointer;
            }
        }

        th, td {
            padding: 20px;
        }

        .first__column__inner {
            input {
                border-radius: 10px;
                height: 30px;
                width: 250px;
                padding: 3px 20px;
                font-size: 20px;
                outline: none;
                margin-bottom: 30px;

                &::placeholder {
                    font-size: 20px;
                }
            }

            button {
                background: none;
                padding: 12px 20px;
                border-radius: 10px;
                margin-left: 15px;
                color: white;
                background: #007bff;
                font-size: 15px;
                outline: none;
                cursor: pointer;
            }
        }

        .table__content {
            overflow-y: scroll;
            height: 300px;
            border: 1px solid black;
            padding: 0px 20px 20px 20px;
            border-radius: 10px;
            background: grey;
        }
    }

    .second__column {
        margin-left: 134px;
        margin-top: 50px;

        .second__column__inner {
            overflow-y: scroll;
            height: 300px;
            background: grey;
            padding: 0px 20px 20px 20px;

        }
        table, td, th {
            border: 1px solid black;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            background: #ffffff;
        }

        th, td {
            padding: 20px;
        }
    }

    .percent_button {
        padding: 5px 20px;
        background: #007bff;
        color: #ffffff;
    }

    .delete_button {
        padding: 5px 20px;
        background: red;
        color: #ffffff;
    }

    .last__btns {
        margin-top: 20px;
        display: flex;
        justify-content: space-around;

        .last__btns__chek__button {
            border: 1px solid #007bff;
            padding: 20px 40px;
            background: #007bff;
            color: #ffffff;
            display: inline-block;
            cursor: pointer;
            &:hover {
                background: lightgreen;
            }
        }

        .last__btns__count {
            border: 1px solid #007bff;
            padding: 20px 40px;
            color: #ffffff;
            display: inline-block;
            background: #00bff5;
        }
    }

    /*MODAL*/
    .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 98;
        background: rgba(0, 0, 0, 0.3);
    }

    .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 99;
        width: 100%;
        max-width: 400px;
        background-color: #ffffff;
        border-radius: 16px;
        padding: 25px;
        &_header{
            margin-left: 40px;
            line-height: 40px;
            font-size: 20px;
        }
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .slide-enter-active,
    .slide-leave-active {
        transition: transform 0.5s;
    }

    .slide-enter,
    .slide-leave-to {
        transform: translateY(-50%) translateX(100vw);
    }

    .modal__inner__content {
        border: 1px solid black;
        padding: 20px 40px;
        display: inline-block;
        margin: 0 10px;
        color: black;
        cursor: pointer;
    }

    .red {
        background: red;
    }

    .yellow {
        background: yellow;
    }

    .green {
        background: green;
    }

</style>