<template>
    <div id="costs">
        <div class="costs" style="background: gold; height: 100vh;">
            <div class="costs_wrap">
                <div class="row">
                     <div class="col" style="margin-top: 100px;">
                        <div class="row" style="background: #FF9933; padding: 10px; border-radius: 5px;">
                            <div class="col" style="display: flex; flex-direction: column;">
                                <p class="first__text">Расходы:</p>
                                <p class="below__date__paragraph">От</p>
                                <input type="date" name="dateofbirth" id="dateofbirth" class="mb date_input">
                                <p class="below__date__paragraph">До</p>
                                <input type="date" name="dateofbirth" id="dateofbirth" class="mb date_input">
                                <input type="submit">
                            </div>
                            <div class="col column-design badge__info mt">
                                <span>Сегодня <br><b>20000сум</b></span>
                                <span>30 дней <br><b>20000сум</b></span>
                                <span>Вчера <br><b>20000сум</b></span>
                            </div>
                        </div> 
                     </div>
                    <div class="col second__column">
                        <p class="first__text">Расходы:</p>
                        <div>
                           <table>
                               <tr>
                                   <th style="padding: 10px 50px;">Категория:</th>
                                   <th>Сумма:</th>
                                   <th>Дата:</th>
                               </tr>
                               <tr v-for="(item , index) in cost" :key="index">
                                   <td>{{item.cat}}</td>
                                   <td>{{item.sum}}</td>
                                   <td>{{item.date}}</td>
                               </tr>
                           </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Costs",
        data(){
            return{
                cost:[
                    {
                        cat:"line",
                        sum:"99881",
                        date:"12.42.2021",
                    },
                    {
                        cat:"line",
                        sum:"99881",
                        date:"12.42.2021",
                    },
                    {
                        cat:"line",
                        sum:"99881",
                        date:"12.42.2021",
                    },
                    {
                        cat:"line",
                        sum:"99881",
                        date:"12.42.2021",
                    },
                    {
                        cat:"line",
                        sum:"99881",
                        date:"12.42.2021",
                    },
                    {
                        cat:"line",
                        sum:"99881",
                        date:"12.42.2021",
                    },
                    {
                        cat:"line",
                        sum:"99881",
                        date:"12.42.2021",
                    },
                    {
                        cat:"line",
                        sum:"99881",
                        date:"12.42.2021",
                    },{
                        cat:"line",
                        sum:"99881",
                        date:"12.42.2021",
                    },
                    {
                        cat:"line",
                        sum:"99881",
                        date:"12.42.2021",
                    },{
                        cat:"line",
                        sum:"99881",
                        date:"12.42.2021",
                    },
                    {
                        cat:"line",
                        sum:"99881",
                        date:"12.42.2021",
                    },

]

            }
        }
    }
</script>

<style lang="scss" scoped>
    .costs{
        padding: 0;
        margin: 0;

    }
    .costs{
        &_wrap{
            width: 1200px;
            margin: 0 auto;
            font-family: sans-serif;
        }
    }

    .row{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* CALENDAR CSS  */
    [type="date"] {
        background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)  97% 50% no-repeat ;
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
        box-shadow: inset 0 3px 6px rgba(0,0,0,0.1);
        width: 190px;
    }



    .mb{
        margin-bottom: 10px;
    }

    .below__date__paragraph{
        padding: 0;
        margin: 10px 0;
    }

    .column-design{
        display: flex;
        flex-direction: column;
    }

    .badge__info span{
        border: 1px solid #0069d9;
        background: #0069d9;
        padding: 24px 20px;
        border-radius: 5px;
        margin-bottom: 30px;
        margin-left:  20px;
        color: #ffffff;
    }

    input[type="submit"]{
        background:#0069d9;
        color: #ffffff;
        padding: 15px 2px;
        border: 1px solid #c4c4c4;
        border-radius: 5px;
        box-shadow: inset 0 3px 6px rgba(0,0,0,0.1);
    }
    .mt{
        margin-top: 110px;
    }

    .first__text{
       font-size: 30px;
        font-weight: 700;

    }

    table{
        border-collapse: collapse;
    }
    table td,table th{
        border: 1px solid black;
        padding: 10px;
    }



    .second__column{
        margin-left: 50px;
        background: #ff9933;
        padding: 20px;
        border-radius: 5px;
    }

</style>