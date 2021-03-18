<template>
    <div class="add">

        <div class="add_title">
            Добавление товара
        </div>
        <div class="add_wrap">
            <div class="add_input_name">
                <input type="text" name="name" placeholder="Имя товара">
            </div>
            <div class="add_input_name">
                <input type="number" name="id" placeholder="Цена">
            </div>
            <div class="add_input_name">
                <input type="number" name="percent" placeholder="Процент наценки">
            </div>
            <div class="add_input_name">
                <input type="file" name="img">
            </div>
            <div class="add_input_name">
                <input type="number" placeholder="Минимальная наценка">
            </div>
            <div class="add_input_name">
                <textarea name="disc" class="textarea" placeholder="Введите описание" id=""></textarea>
            </div>
            <div class="add_input_btn">
                <div class="add_btn"><i class="fas fa-plus"></i> Добавить товар</div>
            </div>
        </div>
        <hr>
        <div class="table_cont">
            <table class="table">
                <tr class="table_row">
                    <th class="table_data">Наименовая</th>
                    <th class="table_data">Номер</th>
                    <th class="table_data">Процент наценки</th>
                    <th class="table_data">Изображение</th>
                    <th class="table_data">Минимальная цена</th>
                    <th class="table_data">Cумма</th>
                    <th class="table_data">Описание</th>
                </tr>
                <tr class="table_row">
                    <td class="table_data"></td>
                    <td class="table_data"></td>
                    <td class="table_data"></td>
                    <td class="table_data"><img alt=""></td>
                    <td class="table_data"></td>
                    <td class="table_data"></td>
                    <td class="table_data"></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Add",

        data() {
            return {}
        },
        methods: {},
    }
</script>

<style scoped lang="scss">
    .textarea{
        resize: none;
        width: 500px;
        height: 150px;
        font-size: 20px;
        padding: 20px;
    }
    .add {
        padding: 0 40px;

        &_wrap {
            width: 1200px;
        }

        &_title {
            font-size: 30px;
            padding: 30px 0px;
        }

        &_input_name {
            margin-bottom: 20px;
            margin-right: 20px;

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
            background: none;
            width: 120px;
            padding: 12px 20px;
            border-radius: 10px;
            color: white;
            background: #007bff;
            font-size: 15px;
            outline: none;
            cursor: pointer;

            &:hover {
                background: #0069d9;
            }
        }
    }

    .table_cont {
        width: 100%;

    }

    .table {
        border-collapse: collapse;
        width: 100%;
        overflow-y: scroll;

        &_row:nth-child(even) {
            background-color: #dddddd;
        }

        &_data {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;

            & img {
                width: 130px;
                height: 130px;
            }
        }

        &:last-child {
            width: 100%;
        }
    }
</style>