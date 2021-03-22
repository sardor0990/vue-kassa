<template>
    <div>

        <div class="container">
            <div class="orders-col">
                <div class="box">
                    <div class="box__title">Заказы</div>
                    <div class="user-box">
                        <div class="user-box__name">Petrovich Jalla</div>
                        <div class="user-box__delete"><i class="fas fa-times"></i></div>
                    </div>
                </div>
                <div>
                    <div class="add-button">
                        +
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="box-name">
                    <div class="box_text">Petrovich Jalla</div>
                </div>
                <div class="box-description">
                    <div>
                        <div class="box-description__title"> Описание:</div>
                        <div class="box-description__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deserunt dolor eius,
                            esse
                            et facere
                            impedit iure laborum molestiae mollitia nisi nobis nostrum officia omnis, perferendis
                            placeat
                            repellat saepe
                            unde? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet dicta dolor
                            dolore
                            eos non,
                            tempore. Architecto autem, cupiditate id illo iste nisi nulla omnis quis ratione rem unde
                            voluptatibus?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deserunt dolor eius,
                            esse
                            et facere
                            impedit iure laborum molestiae mollitia nisi nobis nostrum officia omnis, perferendis
                            placeat
                            repellat saepe
                            unde? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet dicta dolor
                            dolore
                            eos non,
                            tempore. Architecto auLorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
                            deserunt dolor
                            eius, esse et facere
                            impedit iure laborum molestiae mollitia nisi nobis nostrum officia omnis, perferendis
                            placeat
                            repellat saepe
                            unde? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet dicta dolor
                            dolore
                            eos non,
                            tempore. Architecto au
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Order'

    }

</script>


<style scoped>
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
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 18px;
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


</style>