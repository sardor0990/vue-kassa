<template>
    <div>

        <div class="container">
            <div class="orders-col">
                <div class="box">
                    <div class="box__title">Заказы</div>
                    <div class="user-box" v-for="(item, index) in order" :key="index" @click="openItem(index);">
                        <div class="user-box__name">{{item.name}}</div>
                        <div class="user-box__delete" @click="showDelete=true"><i class="fas fa-times"></i></div>
                    </div>
                </div>
                <div>
                    <div class="add-button" @click="showClean=true">
                        +
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="box-name">
                    <div class="box_text">Имя: {{obj.name}}</div>
                </div>
                <div class="box-description">
                    <div>
                        <div class="box-description__title"> Описание:</div>
                        <div class="box-description__text">
                            {{obj.desc}}
                        </div>
                    </div>
                </div>
            </div>

            <transition name="modal" v-show="showClean">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-container">
                            <div class="modal-header">
                                <slot name="header">
                                    <div>
                                        Добавить корзину
                                    </div>
                                </slot>
                            </div>
                            <div class="modal-body">
                                <slot name="body">
                                    <div class="body">
                                        <div class="body_input">
                                            <input type="text" name="name" placeholder="Введите имя">
                                            <textarea name="desc" id="" cols="30" rows="10" placeholder="Введите заказ"></textarea>
                                        </div>
                                        <div class="body_btn">
                                            <button class="btnm green">Добавить</button>
                                            <button class="btnm red" @click="showClean=false">Отмена</button>
                                        </div>
                                    </div>
                                </slot>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>

            <transition name="modal" v-show="showDelete">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-container">
                            <div class="modal-header">
                                <slot name="header">
                                    <div>
                                        Удалить?
                                    </div>
                                </slot>
                            </div>
                            <div class="modal-body">
                                <slot name="body">
                                    <div class="body">
                                        <div class="body_btn">
                                            <button class="btnm green">Да</button>
                                            <button class="btnm red" @click="showDelete=false">Отмена</button>
                                        </div>
                                    </div>
                                </slot>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Order',
        data() {
            return {
                showClean: false,
                showDelete: false,
                isActive: false,
                obj: {
                    name: "",
                    desc: "",
                },
                order: [
                    {
                        name: "JOHN",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque consequuntur distinctio dolor dolores doloribus exercitationem fugiat ipsa iusto maiores molestias non porro quas, quia ratione sint temporibus unde velit?",
                    },
                    {
                        name: "Mike",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque consequuntur distinctio dolor dolores doloribus exercitationem fugiat ipsa iusto maiores molestias non porro quas, quia ratione sint temporibus unde velit?",
                    },
                    {
                        name: "SMio",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque consequuntur distinctio dolor dolores doloribus exercitationem fugiat ipsa iusto maiores molestias non porro quas, quia ratione sint temporibus unde velit?",
                    },
                    {
                        name: "SFIE",
                        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque consequuntur distinctio dolor dolores doloribus exercitationem fugiat ipsa iusto maiores molestias non porro quas, quia ratione sint temporibus unde velit?",
                    },
                ]
            }


        },

        methods:{
            openItem(index){
                console.log(this.obj = this.order[index])
            }
        },
    }

</script>


<style scoped lang="scss">
    .box_text {
        padding: 20px;
        font-size: 25px;
    }

    ::-webkit-scrollbar {
        width: 8px;
        height: 5px;
    }

    ::-webkit-scrollbar-track-piece {
        margin: 18px 5px
    }

    ::-webkit-scrollbar-thumb:vertical {
        height: 5px;
        background: #DCDCDC;
        border-radius: 40px;
    }

    .container {
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }

    .orders-col {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .add-button {
        width: 390px;
        height: 100px;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
        color: white;
        font-size: 150px;
        background: linear-gradient(180deg, #62257E 0%, rgba(20, 106, 185, 0.81) 100%);
        border-radius: 20px;
    }

    .box {
        margin: 5px 30px;
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 380px;
        height: 480px;

        border: 5px #692CB6 solid;
        border-radius: 30px;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .box__title {
        margin: 5px 0 10px 0;
        font-style: normal;
        font-weight: 700;
        font-size: 45px;
        color: black;
    }

    .user-box {
        position: relative;
        margin-bottom: 20px;
        padding: 10px 20px;
        width: 75%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.63) 100%);
        border: 1px solid #302369;
        box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 18px;

           &:active{
               background: linear-gradient(180deg, #62257E 0%, rgba(20, 106, 185, 0.81) 100%);
           }
    }

    .user-box__name {
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        color: black;
    }

    .user-box__delete {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 40px;

        cursor: pointer;
        font-size: 28px;
        color: white;
        border-radius: 50%;
        background: linear-gradient(180deg, #4B1CD1 0%, rgba(25, 6, 79, 0.65) 100%);
    }

    .box-name {
        padding: 5px;
        width: 100%;
        font-weight: 700;
        border-bottom: 2px solid #692CB6;
    }

    .box-description {
        padding: 15px 20px;
    }

    .box-description__title {
        font-size: 20px;
        font-weight: 700;
        text-align: left;
        margin-bottom: 10px;
    }

    .box-description__text {
        text-align: left;
        font-size: 17px;

        font-weight: 700;
    }


    /*  MODAL CSS */
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
        font-family: sans-serif;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 300px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
        transition: all 0.3s ease;
        font-family: Helvetica, Arial, sans-serif;

        border: 3px #692CB6 solid;
        border-radius: 30px;
    }

    .modal-header {
        display: flex;
        font-size: 25px;
    }

    .modal-header {
        margin-top: 0;

    }

    .modal-body {
        margin: 20px 0;
    }

    .modal-btn {
        color: white;
        background: #dc3545;
        outline: none;
        border: none;
        font-size: 20px;

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

    .body_input {
        input[type=text] {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;

            ::placeholder{
                font-size: 20px;
                font-family: Noto Sans;
                color: #B5B5B5;
            }
        }
        textarea {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
            resize: none;

            ::placeholder {
                font-size: 20px;
                font-family: Noto Sans;
                color: #B5B5B5;
            }
        }
    }

    .body_input input::placeholder{
        font-size: 20px;
        font-family: Noto Sans;
        color: #B5B5B5;
    }

    .body_input textarea::placeholder{
        font-size: 20px;
        font-family: Noto Sans;
        color: #B5B5B5;
    }

    .body_btn {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btnm {
        display: inline-block;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
        border: 1px solid transparent;
        padding: 15px 30px;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: .25rem;
        transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
        margin-right: 10px;
        outline: none;
    }

    .red {
        background: #dc3545;

        &:hover {
            background: #c82333;
        }
    }

    .yellow {
        background: #ffc107;

        &:hover {
            background: #e0a800;
        }
    }

    .green {
        background: #28a745;
        &:hover {
            background: #218838;
        }
    }

</style>