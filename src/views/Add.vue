<template>
    <div class="add">
        <div class="add_wrap">
            <div class="add_title">
                Добавление товара
            </div>
            <div class="add_input_name">
                <input type="text" placeholder="Имя товара">
            </div>
            <div class="add_input_name">
                <input type="number" placeholder="Имя Номер товара">
            </div>
            <div class="add_input_btn">
                <div class="add_btn"><i class="fas fa-plus"></i> Добавить товар</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Add"
    }
</script>

<style scoped lang="scss">
    .add {
        padding: 0 40px;
&_title{
    font-size: 30px;
    padding: 30px 0px;
}
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
            background: none;
            width: 120px;
            padding: 12px 20px;
            border-radius: 10px;
            color: white;
            background: #007bff;
            font-size: 15px;
            outline: none;
            cursor: pointer;
            &:hover{
                background: #0069d9;
            }
        }
    }
</style>