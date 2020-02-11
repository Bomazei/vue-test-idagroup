<template>
    <div class="content">
        <div class="main">
            <div class="history">
                <h2 class="history__title">История платежей:</h2>
                <ul>
                    <li v-for="(trans,index) in allTrans" :key="index" class="history__item">
                        <span><b>Номер счета:</b>
                        {{trans.accountNumber}}
                        </span>
                        <br/>
                        <span><b>Номер карты:</b>
                        {{`**** **** **** ${trans.cardNumber4}`}}
                        </span>
                        <br/>
                        <span><b>Сумма платежа:</b>
                        {{trans.payAmount}}
                        </span>
                        <br/>
                        <span><b>Дата платежа:</b>
                        {{trans.date}}
                        </span>
                    </li>
                </ul>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
           
        }
    },
    computed: {
        allTrans: {
            get () {
                return this.$store.state.allTrans
            }
        }
    }
  
}
</script>

