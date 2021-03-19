<template>
    <div>
        <div id="sclad">
            <div class="sklad">
                <div class="sklad_wrap">
                    <div class="sklad_title">
                    <span>
                        Поиск товара
                    </span>
                    </div>
                    <div class="creative">
                        <div class="search">
                            <input type="text" placeholder="Поиск">
                            <div class="btn_block">
                                <div class="add_input_btn">
                                    <div class="search_btn"><i class="far fa-search"></i> Поиск</div>
                                </div>
                                <div class="add">
                                    <div class="add_input_btn">
                                        <router-link to="/add">
                                            <div class="add_input_btn">
                                                <div class="add_btn"><i class="fas fa-plus"></i>
                                                    <span> Добавить товар</span>
                                                </div>
                                            </div>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="elem">
                    <div class="elem_wrap">
                        <div class="element_wrap_row">
                            <div class="flex_box">
                                <div class="table_block">
                                    <table class="table">
                                        <tr class="table_row">
                                            <th class="table_data">Наименовая</th>
                                            <th class="table_data">Номер</th>
                                            <th class="table_data">сумма</th>
                                            <th class="table_data">Удалить</th>
                                        </tr>
                                        <tr @click="openObj(index)" class="table_row" v-for="(item, index) in tovar"
                                            :key="index">
                                            <td class="table_data">{{item.name}}</td>
                                            <td class="table_data">{{item.id}}</td>
                                            <td class="table_data">{{item.prise}}</td>
                                            <td class="table_data">
                                                <button class="remove">
                                                    <i class="fas fa-trash-alt"></i> удалить
                                                </button>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <div class="show">
                                    <table class="show_table">
                                        <tr class="show_table_row">
                                            <th class="show_table_row_data">Наименовая</th>
                                            <th class="show_table_row_data">Номер</th>
                                            <th class="show_table_row_data">Цена</th>
                                            <th class="show_table_row_data hide">Картинка</th>
                                            <th class="show_table_row_data hide">Колличество</th>
                                        </tr>
                                        <tr class="show_table_row">
                                            <th class="show_table_row_data">{{obj.name}}</th>
                                            <th class="show_table_row_data">{{obj.id}}</th>
                                            <th class="show_table_row_data">{{obj.prise}}</th>
                                            <th class="show_table_row_data hide"><img :src="obj.img" alt=""></th>
                                            <th class="show_table_row_data hide">{{obj.count}}</th>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: "Sclad",
        data() {
            return {
                obj: {
                    name: "",
                    id: "",
                    prise: "",
                    img: "",
                    count: "",
                },
                tovar: [
                    {
                        id: 9813569,
                        name: "tarelka",
                        prise: "1",
                        img: "https://i.pinimg.com/originals/4b/ba/6f/4bba6f4d487a8029817f63ff9101911d.jpg",
                        count: "1",
                    },
                    {
                        id: 9813569,
                        name: "tarelka",
                        prise: "1",
                        img: "https://i.pinimg.com/originals/4b/ba/6f/4bba6f4d487a8029817f63ff9101911d.jpg",
                        count: "1",
                    },
                    {
                        id: 9813569,
                        name: "tarelka",
                        prise: "1",
                        img: "https://i.pinimg.com/originals/4b/ba/6f/4bba6f4d487a8029817f63ff9101911d.jpg",
                        count: "1",
                    },
                    {
                        id: 9813569,
                        name: "tarelka",
                        prise: "1",
                        img: "https://i.pinimg.com/originals/4b/ba/6f/4bba6f4d487a8029817f63ff9101911d.jpg",
                        count: "1",
                    },
                    {
                        id: 9813569,
                        name: "tarelka",
                        prise: "1",
                        img: "https://i.pinimg.com/originals/4b/ba/6f/4bba6f4d487a8029817f63ff9101911d.jpg",
                        count: "1",
                    },
                    {
                        id: 9813569,
                        name: "tarelka",
                        prise: "1",
                        img: "https://i.pinimg.com/originals/4b/ba/6f/4bba6f4d487a8029817f63ff9101911d.jpg",
                        count: "1",
                    },{
                        id: 9813569,
                        name: "tarelka",
                        prise: "1",
                        img: "https://i.pinimg.com/originals/4b/ba/6f/4bba6f4d487a8029817f63ff9101911d.jpg",
                        count: "1",
                    },{
                        id: 9813569,
                        name: "tarelka",
                        prise: "1",
                        img: "https://i.pinimg.com/originals/4b/ba/6f/4bba6f4d487a8029817f63ff9101911d.jpg",
                        count: "1",
                    },{
                        id: 9813569,
                        name: "tarelka",
                        prise: "1",
                        img: "https://i.pinimg.com/originals/4b/ba/6f/4bba6f4d487a8029817f63ff9101911d.jpg",
                        count: "1",
                    },{
                        id: 9813569,
                        name: "tarelka",
                        prise: "1",
                        img: "https://i.pinimg.com/originals/4b/ba/6f/4bba6f4d487a8029817f63ff9101911d.jpg",
                        count: "1",
                    },{
                        id: 9813569,
                        name: "tarelka",
                        prise: "1",
                        img: "https://i.pinimg.com/originals/4b/ba/6f/4bba6f4d487a8029817f63ff9101911d.jpg",
                        count: "1",
                    },{
                        id: 9813569,
                        name: "tarelka",
                        prise: "1",
                        img: "https://i.pinimg.com/originals/4b/ba/6f/4bba6f4d487a8029817f63ff9101911d.jpg",
                        count: "1",
                    },{
                        id: 9813569,
                        name: "tarelka",
                        prise: "1",
                        img: "https://i.pinimg.com/originals/4b/ba/6f/4bba6f4d487a8029817f63ff9101911d.jpg",
                        count: "1",
                    },







                ],
            }
        },
        methods: {
            openObj(index) {
                console.log(this.obj = this.tovar[index])
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sklad {
        &_wrap {
            margin-top: 20px;
        }

        &_title {
            font-size: 40px;
            font-family: sans-serif;
        }
    }

    .search {
        display: flex;
        flex-direction: row;
        width: 100%;
        & input {
            border-radius: 10px;
            height: 30px;
            width: 250px;
            padding: 3px 20px;
            font-size: 20px;
            outline: none;

            &::placeholder {
                font-size: 20px;
            }
        }

        &_btn {
            padding: 12px 20px;
            width: 65px;
            border-radius: 10px;
            margin-left: 15px;
            color: white;
            background: linear-gradient(180deg, #4B3DA0 0%, rgba(31, 106, 175, 0.8) 100%);
            font-size: 15px;
            outline: none;
            cursor: pointer;

            &:hover {
                background: linear-gradient(0deg, #a791ed 0%, #6a00ff 100%);
            }
        }
    }

    .remove {
        border-radius: 5px;
        padding: 5px 10px;
        background: #dc3545;
        border: none;
        outline: none;
        color: white;

        &:hover {
            background: #c82333;
        }
    }

    .add_input_btn {
        width: 120px;
        margin-right: 25px;
    }

    .help_text {
        font-size: 16px;
        margin-top: 0;
        color: gray;
        padding: 0 40px;
    }

    .creative {
        display: flex;
        flex-direction: row;
    }

    .btn_block {
        display: flex;
        width: 100%;
    }

    .add {
        padding: 0 40px;
        margin-left: auto;

        &_input_name {
            margin-bottom: 20px;

            & input {
                border-radius: 10px;
                height: 30px;
                padding: 3px 20px;
                width: 250px;
                font-size: 20px;
                outline: none;
            }
        }

        &_btn {
            width: 120px;
            padding: 12px 20px;
            border-radius: 10px;
            color: white;
            background: linear-gradient(180deg, #4B1CD1 0%, rgba(25, 6, 79, 0.65) 100%);
            font-size: 15px;
            outline: none;
            cursor: pointer;

            &:hover {
                background: linear-gradient(0deg, #a791ed 0%, #6a00ff 100%);
            }
        }
    }

    .elem {
        &_wrap {
            margin-top: 30px;
            width: 100%;
            margin-right: auto;
            height: 200px;
        }

        &_row {
        }
    }

    .search_result {
        display: flex;
        justify-content: space-around;
        font-size: 30px;
    }

    .flex_box {
        display: flex;
        flex: 1 0;
        justify-content: flex-start;
    }

    .table_block {
        margin-right: 20px;
        height: 450px;
        width: 420px;
        overflow-y: scroll;
        margin-left: 30px;
    }

    .table {
        border-collapse: collapse;
        position: relative;
        text-align: center;

        &_row:nth-child(even) {
            background-color: #dddddd;


        }

        &_data {
            border: 1px solid #dddddd;
            padding: 8px 15px;
            width: 100%;

        }
    }

    .show {
        margin-right: 20px;
        width: 700px;
        margin-left: 30px;

        &_table {
            border-collapse: collapse;
            position: relative;
            text-align: center;

            &_row {
                &:nth-child(even) {
                    background-color: #dddddd;
                }

                &_data {
                    border: 1px solid #dddddd;
                    padding: 8px 15px;
                    width: 150px;
                    height: 50px;
                    & img{
                        height: 250px;
                        width: 250px;
                        object-fit: cover;
                    }
                }
            }
        }
    }
</style>
