<template>
    <div id="static">
        <div class="static">
            <div class="static_wrap">
                <div class="row">
                    <div class="col">
                       <router-link to="/Static/Costs" style="text-decoration: none">
                        <div class="card">
                            <div class="card_body">
                                <div class="card_title">
                                    <span> Расходы</span>
                                </div>
                            </div>
                        </div>
                       </router-link>
                        <div class="card">
                            <div class="card_body">
                                <div class="card_title">
                                    <span> Прибыль</span>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card_body">
                                <div class="card_title">
                                    <span> Скупает</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <div class="card_body">
                                <div class="card_title">
                                    <span> Доходы</span>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card_body">
                                <div class="card_title">
                                    <span> Прибыль</span>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card_body">
                                <div class="card_title">
                                    <span> Реализация</span>
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
        name: "Static"
    }
</script>

<style lang="scss" scoped>


    .static {
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

    .row{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .card {

        width: 380px;
        border: 1px solid black;
        background: #0069d9;
        border-radius: 20px;
        padding: auto;
        height: 200px;
        margin-left: 30px;
        margin-top: 30px;
        color: white;

        &_title {
            text-align: center;
            font-size: 24px;
            margin: 70px 0;
            color: white;
            font-family: sans-serif;
        }
    }


</style>