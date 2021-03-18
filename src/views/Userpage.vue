<template>
    <hr>
    <br>
    <div >
        <div class="keeper">
            <div class="keeper_cont">
                <div class="keeper_cont_wrap">
                    <div class="keeper_cont_wrap_table">
                        <div style="width: 100%;">
                            <div class="search">
                                <input type="text" placeholder="Поиск">
                                <div class="btn_block">
                                    <div class="add_input_btn">
                                        <div class="search_btn"><i class="far fa-search"></i> Поиск</div>
                                    </div>
                                </div>
                            </div>
                            <div class="table_block">
                                <table class="table">
                                    <tr class="table_row">
                                        <th class="table_data">Наименовая</th>
                                        <th class="table_data">Номер</th>
                                        <th class="table_data">сумма</th>
                                        <th class="table_data">Добавить</th>
                                    </tr>
                                    <tr class="table_row">
                                        <td class="table_data">Наименовая</td>
                                        <td class="table_data">Номер</td>
                                        <td class="table_data">сумма</td>
                                        <th class="table_data">
                                            <button class="btn">
                                                Добавить
                                            </button>
                                        </th>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div style="width: 100%;">
                            <div class="table_block">
                                <table class="table">
                                    <tr class="table_row">
                                        <th class="table_data"> Скидка</th>
                                        <th class="table_data"> Наименование товара</th>
                                        <th class="table_data"> сумма</th>
                                        <th class="table_data"> Удалить</th>
                                    </tr>
                                    <tr class="table_row">
                                        <td class="table_data">
                                            <button class="table_btn blue">
                                                <i class="fas fa-percent"></i>
                                            </button>
                                        </td>
                                        <td class="table_data"><span class="text">vlowreiytvlewriyvml</span></td>
                                        <td class="table_data"><span class="text">1234</span></td>
                                        <td class="table_data">
                                            <button class="table_btn red">
                                                <i class="fas fa-trash-alt"></i>
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
        name: "Userpage"
    }
</script>

<style scoped lang="scss">
    .keeper {
        &_wrap {
            width: 100%;

            &_row {
                display: flex;
            }
        }
    }

    .btn {
        border: 1px solid;
    }

    .red {
        background: #dc3545;
        color: white;
        &:hover{
            background: #c82333;
        }
    }

    .blue {
        background: #007bff;
        color: white;
        &:hover{
            background: #0062cc;
        }
    }

    .checklist {
        border: 1px solid #007bff;
        height: 700px;
        width: 80%;
        overflow-y: scroll;
        margin-top: 70px;
    }

    .order_prod {
        display: flex;
        width: 100%;
        justify-content: space-between;
        border-bottom: 1px solid;
    }

    .keeper_cont_wrap_table {
        display: flex;
        text-align: center;
        align-self: center;
    }

    .order_btn_b {
        border-right: 1px solid;
        font-size: 20px;
        padding: 15px;
        margin: 5px;
        width: 50px;
    }

    .order_name_text {
        padding: 25px 15px 18px 15px;
        font-size: 15px;
        width: 100%;
    }

    .search {
        display: flex;

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
            background: none;
            padding: 12px 20px;
            width: 65px;
            border-radius: 10px;
            margin-left: 15px;
            color: white;
            background: #007bff;
            font-size: 15px;
            outline: none;
            cursor: pointer;

            &:hover {
                background: #0062cc;
            }
        }
    }

    .table_block {
        width: 100%;
        margin-top: 30px;
        height: 800px;
        overflow-y: scroll;

    }
    .table_btn {
        padding: 10px 40px;
        outline: none;
        border-radius: 10px;
    }
    .text{
        font-size: 25px;
    }
    .btn{
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
    .table {
        &_data {
            text-align: center;
            padding: 8px;
        }



        &:last-child {
            width: 100%;
        }
    }
</style>