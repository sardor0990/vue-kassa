<template>
    <div id="sclad">
        <div class="sklad">
            <div class="sklad_wrap">
                <div class="sklad_title">
                    <span>
                        Поиск и добавление товара
                    </span>
                </div>
                <div class="searching">
                    <div class="search">
                        <input type="text" placeholder="Поиск">
                            <button class="btn">
                                искать
                            </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Sclad"
    }
</script>

<style lang="scss" scoped>
    .sklad{
        &_wrap{
            width: 1200px;
            margin-right: auto;
            margin-left: auto;
        }
        &_title{
           padding: 30px 40px;
            font-size: 40px;
            font-family: sans-serif;
        }
    }
    .search{
        & input{

        }
    }
</style>