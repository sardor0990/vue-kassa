<template>
    <div class="add">
        <div class="add_title">
            Добавление товара
        </div>
        <div class="wrap">
            <div class="table_cont">
                <table class="table">
                    <thead>
                    <tr class="table_row fix">
                        <th class="table_data br">Наименовая</th>
                        <th class="table_data">Цена</th>
                        <th class="table_data">Колличество</th>
                        <th class="table_data">Процент наценки</th>
                        <th class="table_data">Изображение</th>
                        <th class="table_data">Минимальная цена</th>
                        <th class="table_data">Описание</th>
                        <th class="table_data">Изменить</th>
                        <th class="table_data br">Удалить</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="table_row">
                        <td class="table_data">asdsd</td>
                        <td class="table_data">sdsdsd</td>
                        <td class="table_data">sdsdsd</td>
                        <td class="table_data">sdsdsd</td>
                        <td class="table_data"><img></td>
                        <td class="table_data">sdsdsdsd</td>
                        <td class="table_data">asdasdasdasd</td>
                        <td class="table_data">
                            <button class="change" @click="showChange=true"><i class="fas fa-pencil-alt"></i> </button>
                        </td>
                        <td class="table_data">
                            <button class="remove"><i class="fas fa-trash-alt"></i></button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="add_input_btn">
            <div class="btn_mod">
                <div class="btn_mod_mb" @click="showModal=true"><i class="fas fa-plus"></i></div>
                <div class="btn_mod_text">Добавить товар</div>
            </div>
        </div>
    </div>
    <transition name="modal" v-show="showModal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <slot name="header">
                            <div>
                                Заполните поля
                            </div>
                        </slot>
                        <slot name="close">
                            <div style="margin-left: auto">
                                <button class="modal-btn" @click="showModal=false"><i class="fas fa-times"></i>
                                </button>
                            </div>
                        </slot>
                    </div>
                    <div class="modal-body">
                        <slot name="body">
                            <div>
                                <div class="input_add" id="vue">
                                    <input type="text" name="name" id="name" placeholder="Введите название">
                                    <input type="text" inputmode="decimal" v-model="formattedCurrencyValue"
                                           @blur="focusOut" @focus="focusIn" name="price" id="price"
                                           placeholder="Введите Цена">
                                </div>
                                <div class="input_add">
                                    <input type="number" min="0"  name="count" id="count" placeholder="Введите колличество">
                                    <input type="number" min="0" name="percent" id="percent"
                                           placeholder="Введите процент наценки">
                                </div>
                                <div class="input_add">
                                    <input type="file" name="img" id="img">
                                    <input type="number" min="0" name="minValue" id="minValue"
                                           placeholder="Введите минимальную наценку">
                                </div>

                                <div class="input_add">
                                    <textarea type="text" class="textarea" name="disc" id="disc" placeholder="Введите описание"></textarea>
                                </div>
                                <div style="margin-left: auto">
                                    <button class="modal-send-btn">+ Добавить</button>
                                </div>
                            </div>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
    <transition name="modal" v-show="showChange">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <slot name="header">
                            <div>
                              Изменить товар
                            </div>
                        </slot>
                        <slot name="close">
                            <div style="margin-left: auto">
                                <button class="modal-btn" @click="showChange=false"><i class="fas fa-times"></i>
                                </button>
                            </div>
                        </slot>
                    </div>
                    <div class="modal-body">
                        <slot name="body">
                            <div>
                                <div class="input_add" id="vue">
                                    <input type="text" name="name" id="name1" placeholder="Введите название">
                                    <input type="text" inputmode="decimal" v-model="formattedCurrencyValue"
                                           @blur="focusOut" @focus="focusIn" name="price" id="price1"
                                           placeholder="Введите Цена">
                                </div>
                                <div class="input_add">
                                    <input type="number" min="0"  name="count" id="count1" placeholder="Введите колличество">
                                    <input type="number" min="0" name="percent" id="percent1"
                                           placeholder="Введите процент наценки">
                                </div>
                                <div class="input_add">
                                    <input type="file" name="img" id="img1">
                                    <input type="number" min="0" name="minValue" id="minValue1"
                                           placeholder="Введите минимальную наценку">
                                </div>

                                <div class="input_add">
                                    <textarea type="text" class="textarea" name="disc" id="disc1" placeholder="Введите описание"></textarea>
                                </div>
                                <div style="margin-left: auto">
                                    <button class="modal-send-btn">+ Добавить</button>
                                </div>
                            </div>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Add",
        data() {
            return {
                showModal: false,
                showChange: false,
                currencyValue: '',
                formattedCurrencyValue: ""
            }
        },
        methods: {
            focusOut() {
                this.currencyValue = parseFloat(this.formattedCurrencyValue.replace(/[^\d.]/g, ""))
                if (isNaN(this.currencyValue)) {
                    this.currencyValue = 0
                }
                // Format display value based on calculated currencyValue
                this.formattedCurrencyValue = this.currencyValue.toFixed().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
            },
            focusIn() {
                // Unformat display value before user starts modifying it
                this.formattedCurrencyValue = this.currencyValue.toString()
            },
        },

    }
</script>

<style scoped lang="scss">
    ::-webkit-scrollbar {
        width: 8px;
        height: 5px;
    }
    ::-webkit-scrollbar-track-piece {
        margin: 0 5px
    }
    ::-webkit-scrollbar-thumb:vertical {
        height: 5px;
        background: #DCDCDC;
        border-radius: 40px;
    }
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: table;
        transition: opacity 0.3s ease;
    }
    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }
    .modal-container {
        width: 500px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all 0.3s ease;
        font-family: Helvetica, Arial, sans-serif;
        height: 500px;
    }
    .modal-header {
        display: flex;
    }
    .input_add {
        margin-bottom: 20px;
        margin-left: 20px;
        display: flex;
        & input {
            margin-right: 10px;
            width: 100%;
            padding: 10px 15px;
            border-radius: 10px;
            border: 1px solid gray;
            outline: none;
        }
    }
    .change {
        padding: 10px 15px;
        color: white;
        font-size: 25px;
        background: #007bff;
        outline: none;
        border-radius: 30px;
        border: none;
        &:hover {
            background: #0069d9;
        }
    }
    .add_title{
        font-size: 30px;
        font-family: sans-serif;
        margin: 20px 0;
    }
    .remove {
        background: #dc3545;
        padding: 10px 15px;
        color: white;
        font-size: 25px;
        outline: none;
        border-radius: 30px;
        border: none;
        &:hover {
            background: #c82333;
        }
    }
    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }
    .modal-body {
        margin: 20px 0;
    }
    .modal-send-btn {
        display: inline-block;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
        border: 1px solid transparent;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: .25rem;
        transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
        color: #fff;
        background-color: #28a745;
        outline: none;
        &:hover {
            color: #fff;
            background-color: #218838;
            border-color: #1e7e34;
        }
    }
    .modal-btn {
        color: white;
        background: #dc3545;
        outline: none;
        &:hover {
            background: #c82333;
        }
    }
    .modal-default-button {
        float: right;
    }
    .modal-enter {
        opacity: 0;
    }
    .modal-leave-active {
        opacity: 0;
    }
    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
    .textarea {
        resize: none;
        width: 88%;
        height: 150px;
        font-size: 20px;
        padding: 20px;
        border-radius: 20px;
        outline: none;
    }
    .wrap {
        display: flex;
    }
    .add {
        padding: 0 40px;
        &_btn {
            background: none;
            padding: 12px 20px;
            border-radius: 10px;
            color: white;
            background: #007bff;
            font-size: 15px;
            outline: none;
            cursor: pointer;
            margin-right: 30px;
            &:hover {
                background: #0069d9;
            }
        }
    }
    .table_cont {
        overflow-y: scroll;
        width: 100%;
        height: 550px;
        border-radius: 25px;
    }
    .br:first-child {
        border-top-left-radius: 25px;
    }
    .br:last-child {
        border-top-right-radius: 20px;
    }
    .fix {
        width: 100%;
        position: sticky;
        height: 65px;
        border-radius: 20px;
    }
    .btn_mod {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        &_mb {
            width: 19px;
            padding: 25px 38px 25px 34px;
            border-radius: 50%;
            color: white;
            background: linear-gradient(180deg, #4B1CD1 0%, rgba(25, 6, 79, 0.65) 100%);
            font-size: 30px;
            outline: none;
            cursor: pointer;
            margin-right: 20px;
        }
        &_text {
            font-size: 30px;
            font-family: sans-serif;
        }
    }
    .table {
        border-collapse: collapse;
        position: relative;
        width: 100%;
        &_row:nth-child(even) {
            background-color: #dddddd;
        }
        &_data {
            border: 1px solid #dddddd;
            text-align: center;
            padding: 8px;
            & img {
                width: 50px;
                height: 50px;
            }
        }
        &:last-child {
            width: 100%;
        }
    }
    .table:first-child .table_row {
        border-radius: 20px;
    }
    th {
        position: sticky;
        top: 0;
        box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);
        background: #E9E2E2;
    }
</style>