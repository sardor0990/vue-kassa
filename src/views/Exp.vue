<template>
    <div id="exp">
        <div class="exp">
            <div class="exp_wrap">
                <div class="exp_wrap_row">
                    <div class="title">
                        <h1 style="font-family: sans-serif">
                            Расходы
                        </h1>
                    </div>
                    <div class="exp_list_sum">
                        <div class="exp_list_block">
                            <input class="exp_list_input" type="text" placeholder="Введите сумму">
                            <div class="exp_list_buttons">
                                <button class="exp_list_buttons_btn"><i class="fas fa-plus"></i> Добавить</button>
                            </div>
                        </div>

                    </div>
                    <div class="exp_list">
                        <div class="exp_select_block">
                            <select multiple class="exp_select">
                                <option class="exp_select_option">Чебурашка</option>
                                <option class="exp_select_option">Крокодил Гена</option>
                                <option class="exp_select_option">Шапокляк</option>
                            </select>
                        </div>

                        <div class="table">
                            <div class="table_block">
                                <table class="table">
                                    <tr class="table_row">
                                        <th class="table_data">Наименовая</th>
                                        <th class="table_data">Номер</th>
                                        <th class="table_data">Сумма</th>
                                        <th class="table_data">Дата</th>
                                        <th class="table_data">Удалить</th>
                                    </tr>

                                    <tr class="table_row">
                                        <td class="table_data">asd</td>
                                        <td class="table_data">asd</td>
                                        <td class="table_data">asd</td>
                                        <td class="table_data">asd</td>
                                        <td class="table_data">
                                            <button class="exp_list_buttons_rem"><i class="fas fa-trash-alt"></i>
                                                Удалить
                                            </button>
                                        </td>
                                    </tr>
                                </table>
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
        name: "Exp"
    }
</script>

<style scoped lang="scss">
    .exp_list {
        display: flex;

        &_sum {
            align-self: center;
            margin-right: 20px;
        }

        &_block {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
        }

        &_input {
            border-radius: 10px;
            height: 30px;
            width: 250px;
            padding: 3px 15px;
            font-size: 20px;
            outline: none;
            border: 1px grey solid;
        }

        &_buttons {
            display: flex;
            align-items: center;

            &_btn {

                margin-left: 20px;
                margin-right: 20px;
                padding: 12px 20px;
                border-radius: 10px;
                color: white;
                background: linear-gradient(180deg, #4B1CD1 0%, rgba(25, 6, 79, 0.65) 100%);
                font-size: 20px;
                outline: none;
                cursor: pointer;
                border: none;

                &:hover {
                    background: #0062cc;
                }


            }

            &_rem {
                background: #dc3545;
                margin-right: 20px;
                padding: 12px 20px;
                border-radius: 10px;
                color: white;
                font-size: 15px;
                outline: none;
                cursor: pointer;
                border: none;

                &:hover {
                    background: #c82333;
                }
            }
        }
    }

    .exp_select {
        width: 500px;
        padding: 20px 10px;
        outline: none;
        height: 400px;
        font-size: 30px;
        text-align: center;

        &_block {
            margin-right: 10px;
        }
    }

    .table_block {
        width: 100%;
        height: 400px;
    }

    .table {
        width: 100%;
        border-collapse: collapse;
        overflow-y: scroll;

        &_row:nth-child(even) {
            background-color: #dddddd;
        }

        &_data {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
            width: 150px;
        }
    }

</style>