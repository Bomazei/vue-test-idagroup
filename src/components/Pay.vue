<template>
    <div class="content">
        <div class="main">

            
            <div class="pay-info">
                <p class="pay-info__head">Информация по оплате:</p>
                <br/>
                <div class="pay-info__block">
                    <div class="pay-info__text">Номер счёта: </div><input class="pay-info__input" v-model="accountNumber" placeholder="84568745847">
                </div>
                <br/>
                <div class="pay-info__block">
                    <div class="pay-info__text">Сумма платежа: </div><input class="pay-info__input" v-model="payAmount" placeholder="100 руб.">
                </div>
                
                
            </div>
            <div class="pay-form">
                <h2 class="pay-form__title">Данные банковской карты</h2>
                <form method="POST" @submit.prevent="onSubmit" class="form">
                    
                    <div class="card card-front">
                        <label class="card-label" for="card-number">Номер карты</label>
                        <div class="card-number">
                            <input class="card-number__input" type="text"  maxlength='4' v-model="cardNumber1" pattern="[0-9]*" :class="{invalid: ($v.cardNumber1.$dirty && !$v.cardNumber1.required) || ($v.cardNumber1.$dirty && !$v.cardNumber1.minLength) || ($v.cardNumber1.$dirty && !$v.cardNumber1.maxLength)}">
                            <input class="card-number__input" type="text"  maxlength='4' v-model="cardNumber2" pattern="[0-9]*" :class="{invalid: ($v.cardNumber2.$dirty && !$v.cardNumber2.required) || ($v.cardNumber2.$dirty && !$v.cardNumber2.minLength) || ($v.cardNumber2.$dirty && !$v.cardNumber2.maxLength)}">
                            <input class="card-number__input" type="text"  maxlength='4' v-model="cardNumber3" pattern="[0-9]*" :class="{invalid: ($v.cardNumber3.$dirty && !$v.cardNumber3.required) || ($v.cardNumber3.$dirty && !$v.cardNumber3.minLength) || ($v.cardNumber3.$dirty && !$v.cardNumber3.maxLength)}">
                            <input class="card-number__input" type="text"  maxlength='4' v-model="cardNumber4" pattern="[0-9]*" :class="{invalid: ($v.cardNumber4.$dirty && !$v.cardNumber4.required) || ($v.cardNumber4.$dirty && !$v.cardNumber4.minLength) || ($v.cardNumber4.$dirty && !$v.cardNumber4.maxLength)}">
                        </div>   
                        <label class="card-label" for="">Срок действия</label> 
                        <div class="card-data">
                            <select class="data-select" name="cardDataM" id="cardDataM" v-model="cardDataM" :class="{invalid: ($v.cardDataM.$dirty && !$v.cardDataM.required)}">
                                <option v-for="(month, index) of ['01','02','03','04','05','06','07','08','09','10','11','12']" :key="index" :value="month">{{month}}</option>
                            </select>
                            <select class="data-select" name="cardDataY" id="cardDataY" v-model="cardDataY" :class="{invalid: ($v.cardDataY.$dirty && !$v.cardDataY.required)}">
                                <option v-for="(year, index) of ['2020','2021','2022','2023','2024','2025','2026']"  :key="index" :value="year">{{year}}</option>
                                
                            </select>
                        </div>
                        <input type="text"  class="card-holder" placeholder="Держатель карты" v-model="cardHolder" pattern="[A-Za-z]*[ -][A-Za-z]*" :class="{invalid: ($v.cardHolder.$dirty && !$v.cardHolder.required) && ($v.cardHolder.$dirty && $v.cardHolder.minLength)}">
                        
                    </div>
                    <div class="card card-back">
                        <div class="card-cvv">
                            <label class="card-label" for="cvv">Код CVV2 / CVC2</label>
                            <input name="cvv" class="card-cvv__input" type="text" maxlength='3' v-model="cardCvv" pattern="[0-9]*" :class="{invalid: ($v.cardCvv.$dirty && !$v.cardCvv.required && $v.cardCvv.minLength && $v.cardCvv.maxLength)}">
                            <div class="hint">
                                3 цифры сзади карты
                            </div>
                        </div>
                    </div>
                
                    
                    <button class="button-submit" type="submit">
                        Оплатить
                    </button>
                </form>
            </div>
        </div>
        
        <div class="footer">
            
            Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности играет важную роль в формировании соответствующий условий активизации. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции обеспечивает широкому кругу (специалистов) участие в формировании дальнейших направлений развития. Повседневная практика показывает, что укрепление и развитие структуры играет важную роль в формировании систем массового участия. С другой стороны реализация намеченных плановых заданий позволяет оценить значение системы обучения кадров, соответствует насущным потребностям. Задача организации, в особенности же реализация намеченных плановых заданий требуют определения и уточнения дальнейших направлений развития. <br/><br/>
            Таким образом дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке новых предложений.
            Равным образом постоянный количественный рост и сфера нашей активности требуют определения и уточнения направлений прогрессивного развития. 
        </div>
    </div>
</template>

<script>
import {required, minLength, maxLength} from 'vuelidate/lib/validators'
export default {
    name: 'Pay',
    data() {
        return {
            accountNumber: '',
            payAmount: '',
            cardNumber1: '',
            cardNumber2: '',
            cardNumber3: '',
            cardNumber4: '',
            cardDataM: '',
            cardDataY: '',
            cardCvv: '', 
            cardHolder: ''
        }
    },
    validations: {
            cardNumber1: {required, minLength: minLength(4), maxLength: maxLength(4)},
            cardNumber2: {required, minLength: minLength(4), maxLength: maxLength(4)},
            cardNumber3: {required, minLength: minLength(4), maxLength: maxLength(4)},
            cardNumber4: {required, minLength: minLength(4), maxLength: maxLength(4)},
            cardDataM: {required},
            cardDataY: {required},
            cardCvv: {required, minLength: minLength(3), maxLength: maxLength(3)}, 
            cardHolder: {required, minLength: minLength(2)}
    },
    methods: {
        onSubmit () {  
            if(this.$v.$invalid){
                this.$v.$touch()
                return
            }
            let date = new Date()
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long',
                timezone: 'UTC',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            };
            const trans = {
                cardNumber1: this.cardNumber1,
                cardNumber2: this.cardNumber2,
                cardNumber3: this.cardNumber3,
                cardNumber4: this.cardNumber4,
                cardDataM: this.cardDataM,
                cardDataY: this.cardDataY,
                cardCvv: this.cardCvv, 
                cardHolder: this.cardHolder,
                date: date.toLocaleString("ru", options),
                accountNumber: this.accountNumber,
                payAmount: this.payAmount
            }
            this.$store.commit('addTrans', trans)
            this.$store.commit('addLastTrans', trans)
            this.$router.replace('pay-success')
            
        },
        
                
        
    }
    
}
</script>
