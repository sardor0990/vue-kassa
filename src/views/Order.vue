<template>
    <div id="order">
        <div class="order">
            <div class="order_wrap">
                <div class="row">
                    <div class="col first__column ">
                        <div class="name__of__order">imya zakaz</div>

                        <div class="name__with__button">
                            <div class="inner__name__with__button" v-for="(item , index) in order" :key="index" @click="openObj(index)">
                                {{item.name}}
                                <button >X</button>
                            </div>

                        </div>

                        <div class="add__button" @click="showModal=true ">
                            +
                        </div>
                    </div>

                    <div class="col right__column">
                        <div class="right__column__inner">
                            <div class="right__column__inner__name">{{obj.name}}</div>
                            <div class="right__column__inner__textarea">
                                {{obj.disc}}
                            </div>
                        </div>
                    </div>
                </div>

                <transition name="fade" appear>
                    <div class="modal-overlay" v-if="showModal" @click="showModal=false">
                    </div>
                </transition>

                <transition name="slide" appear>
                    <div class="modal" v-if="showModal">
                        <div style="display: flex; flex-direction: column">
                            <input type="text" name="name" placeholder="name"
                                   style="border-radius: 40px;padding: 10px; margin-bottom: 10px;">
                            <textarea name="disc" id="" cols="30" rows="10" placeholder="text"
                                      style="border-radius: 10px;padding: 10px;"></textarea>
                        </div>
                        <div style="text-align: center; margin-top: 10px;">
                            <button @click="showModal=false" style="padding: 10px">Отправить</button>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "",
        data() {
            return {
                showModal: true ,
                obj: {
                    name: "",
                    disc: "",
                },
                order: [
                    {
                        name: "1",
                        disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque consequuntur distinctio dolor dolores doloribus exercitationem fugiat ipsa iusto maiores molestias non porro quas, quia ratione sint temporibus unde velit?",
                    },
                    {
                        name: "2",
                        disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque consequuntur distinctio dolor dolores doloribus exercitationem fugiat ipsa iusto maiores molestias non porro quas, quia ratione sint temporibus unde velit?",
                    },
                    {
                        name: "3",
                        disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque consequuntur distinctio dolor dolores doloribus exercitationem fugiat ipsa iusto maiores molestias non porro quas, quia ratione sint temporibus unde velit?",
                    },
                    {
                        name: "4",
                        disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque consequuntur distinctio dolor dolores doloribus exercitationem fugiat ipsa iusto maiores molestias non porro quas, quia ratione sint temporibus unde velit?",
                    },
                ],
            }

        },
        methods: {
            openObj(index) {
                console.log(this.obj = this.order[index])
            }
        },
    }
</script>

<style lang="scss" scoped>


    #order {
        width: 100vw;
        position: relative; /*  agar buni ochirsa overlay header ustidan boladi  */
        height: 100vh;
    }

    .order {
        &_wrap {
            width: 1200px;
            margin: 0 auto;
            overflow-x: hidden;
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

    .first__column {
        width: 300px;
        margin-top: 50px;
    }

    .name__of__order {
        border: 1px solid grey;
        padding: 20px;
        text-align: center;
        background: grey;
        margin-bottom: 20px;
    }

    .name__with__button {
        border: 1px solid black;
        padding: 10px;
        margin-bottom: 20px;
        height: 300px;
        overflow-y: scroll;

        .inner__name__with__button {
            border: 1px solid black;
            text-align: right;
            padding: 10px;
            margin-bottom: 10px;
            background: sandybrown;
            button {
                margin-left: 70px;
                padding: 10px 20px;
            }
        }

    }

    .add__button {
        text-align: center;
        cursor: pointer;
        padding: 10px;
        border: 1px solid black;
        font-size: 52px;
        background: #ff0000;
    }

    .right__column {
        margin-left: 300px;
        width: 400px;
        min-height: 300px;
        height: 100%;

        .right__column__inner {
            border: 1px solid black;
            padding: 10px;

            .right__column__inner__name {
                border: 1px solid black;
                padding: 10px;
                background: lightblue;
                margin-bottom: 10px;

            }

            .right__column__inner__textarea {
                border: 1px solid black;
                padding: 10px;
                background: lightblue;
                height: 100%;
                min-height: 300px;
            }

        }
    }

    .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 98;
        background: rgba(0, 0, 0, 0.3);
    }

    .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 99;
        width: 100%;
        max-width: 400px;
        background-color: #ffffff;
        border-radius: 16px;
        padding: 25px;

    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .slide-enter-active,
    .slide-leave-active {
        transition: transform 0.5s;
    }

    .slide-enter,
    .slide-leave-to {
        transform: translateY(-50%) translateX(100vw);
    }

</style>