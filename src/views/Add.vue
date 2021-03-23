<template>

    <transition name="modal" v-show="showModal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <slot name="header">
                            <div>
                                Заполните поля
                            </div>
                        </slot>
                        <slot name="close">
                            <div style="margin-left: auto">
                                <button class="modal-btn" @click="showModal=false"><i class="fas fa-times"></i>
                                </button>
                            </div>
                        </slot>
                    </div>
                    <div class="modal-body">
                        <slot name="body">
                            <div>
                                <div class="input_add" id="vue">
                                    <input type="text" name="name" id="name" placeholder="Введите название">
                                    <input type="text" inputmode="decimal" v-model="formattedCurrencyValue"
                                           @blur="focusOut" @focus="focusIn" name="price" id="price"
                                           placeholder="Введите Цена">
                                </div>
                                <div class="input_add">
                                    <input type="number" min="0"  name="count" id="count" placeholder="Введите колличество">
                                    <input type="number" min="0" name="percent" id="percent"
                                           placeholder="Введите процент наценки">
                                </div>
                                <div class="input_add">
                                    <input type="file" name="img" id="img">
                                    <input type="number" min="0" name="minValue" id="minValue"
                                           placeholder="Введите минимальную наценку">
                                </div>

                                <div class="input_add">
                                        <textarea type="text" class="textarea" name="disc" id="disc" placeholder="Введите описание"></textarea>
                                </div>
                                <div style="margin-left: auto">
                                    <button class="modal-send-btn">+ Добавить</button>
                                </div>
                            </div>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "Add",
        data() {
            return {
                showModal: false,
                currencyValue: '',
                formattedCurrencyValue: ""
            }
        },
        methods: {
            focusOut() {
                // Recalculate the currencyValue after ignoring "$" and "," in user input
                this.currencyValue = parseFloat(this.formattedCurrencyValue.replace(/[^\d.]/g, ""))
                // Ensure that it is not NaN. If so, initialize it to zero.
                // This happens if user provides a blank input or non-numeric input like "abc"
                if (isNaN(this.currencyValue)) {
                    this.currencyValue = 0
                }
                // Format display value based on calculated currencyValue
                this.formattedCurrencyValue = this.currencyValue.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
            },
            focusIn() {
                // Unformat display value before user starts modifying it
                this.formattedCurrencyValue = this.currencyValue.toString()
            }
        }
    }
</script>

<style scoped lang="scss">




</style>