<template>
    <div id="static">
        <div class="static">
            <div class="static_wrap">
                <div class="row" style="display: flex;">
                    <div class="col">
                        <div class="card">
                            <div class="card_body">
                                <div class="card_title">
                                    <span> Заказы</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <div class="card_body">
                                <div class="card_title">
                                    <span> Заказы</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <div class="card_body">
                                <div class="card_title">
                                    <span> Заказы</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row second__row">
                    <div class="col">
                        <input type="date" name="dateofbirth" id="dateofbirth" class="mb date_input">
                    </div>

                    <div class="col second__row__second__col">
                        <input type="date" name="dateofbirth" id="dateofbirth" class="mb date_input">
                    </div>

                    <div class="col">
                        <button class="submit"><i class="fas fa-search fa-2x"></i></button>
                    </div>
                </div>

                <div class="row third__row" style=" position:relative;">
                    <div class="col first__column" style="width: 80%; height:  500px;">
                        <table style="width: 100%;">
                            <tr>
                                <th>-</th>
                                <th>ID:</th>
                                <th style="padding: 10px 50px;">Категория:</th>
                                <th>Сумма:</th>
                                <th>Дата:</th>
                            </tr>
                            <tr v-for="(item , index) in list" :key="index">

                                <td></td>
                                <td></td>
                                <td>{{item.name}}</td>
                                <td>{{item.sum}}</td>
                                <td>{{item.date}}</td>

                            </tr>
                        </table>
                    </div>

                    <div class="col" style="position:absolute; top: 0; right: 0; padding-right: 10px;">
                        <button type="submit" class="btn btn-success">
                            <i class="fas fa-search"></i> Filter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Static",
        data() {
            return {
                list: [
                    {
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },
                    {
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },
                    {
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },
                    {
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },{
                        name: "qweqwe",
                        date:"qweqwe",
                        sum: "qweqwe",

                    },





                ],
            }
        },
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

    .row {
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
        height: 100px;
        margin-left: 30px;
        margin-top: 30px;
        color: white;

        &_title {
            text-align: center;
            font-size: 24px;
            margin: 30px 0;
            color: white;
            font-family: sans-serif;
        }
    }

    /* CALENDAR CSS */

    [type="date"] {
        background: #fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png) 97% 50% no-repeat;
    }

    [type="date"]::-webkit-inner-spin-button {
        display: none;
    }

    [type="date"]::-webkit-calendar-picker-indicator {
        opacity: 0;
    }

    .date_input {
        border: 1px solid #c4c4c4;
        border-radius: 5px;
        background-color: #fff;
        padding: 10px 5px;
        box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.1);
        width: 190px;
    }

    .submit {
        background: #0069d9;
        color: #ffffff;
        padding: 10px 10px;
        border: 1px solid #c4c4c4;
        border-radius: 5px;
        box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.1);
    }

    .second__row {
        margin: 50px 0;
    }

    .second__row__second__col {
        margin: 0 100px;
    }

    .third__row table {
        border-collapse: collapse;
    }

    .third__row table td, table th {
        border: 1px solid black;
        padding: 10px;
    }

    .third__row button {
        padding: 20px 10px;
        background: #0069d9;
        color: #ffffff;
        border: none;
        border-radius: 5px;
        font-size: 20px;
    }

    .third__row .first__column {
        overflow-y: scroll;
        padding-right: 10px;
    }
</style>