<template>
    <div class="content">
        <div class="main">
            <div class="success">
            <h1 class="success__title">Успешно!</h1>
            <ul v-if="curTrans" class="success__info">
                <li><h3 class="success__item">Номер счёта:</h3><span>{{curTrans.accountNumber}}</span></li>
                <li><h3 class="success__item">Сумма платежа:</h3><span>{{curTrans.payAmount}}</span></li>
                <li><h3 class="success__item">Имя владельца:</h3><span class="success-folder">{{curTrans.cardHolder}}</span></li>
                <li><h3 class="success__item">Дата платежа:</h3><span>{{curTrans.date}}</span></li>               
            </ul>
            </div>
            
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'success',
    mounted(){
        if (this.$store.state.lastTrans.length === 0){
            this.$router.push('pay')
        }
        
    },
    computed: {
        curTrans: {
            get () {
                return this.$store.state.lastTrans        
            }
        }
    }
    
}


</script>

