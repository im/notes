<script>
const storageSet = (name, data) => {
    window.localStorage.setItem(name, JSON.stringify(data))
}
export default {
    data() {
        return {
            loading: false,
            cipher: '',
            disabled: false
        }
    },
    methods: {
        blur () {
            this.$refs.inputRef.focus()
        },
        login () {
            if (this.cipher.length) {
                storageSet('cipher',this.cipher)
                window.location.reload()
            }
        },
    },
    mounted() {
        this.blur()    
    }
}   
</script>

<template>
  <div class="login-wrap">
        <div class="login-box">
            <input ref="inputRef" v-model.trim="cipher" :disabled="loading" :autofocus="true" type="password" size="large" @blur="blur" @keyup.enter="login"></input>
            <button :loading="loading" :disabled="disabled" size="large" plain @click="login">LOGIN</button>
        </div>
    </div>
</template>

<style  lang="stylus" scoped>
.login-wrap
    width 100%
    height 100%
    display flex
    justify-content center
    align-items center
    font-family RubikMoonrocks
    padding-top 200px
.login-box
    text-align center
    button
        border-radius 0
        font-weight bold
        height 40px
        line-height 40px
        font-family RubikMoonrocks
        border 0
        cursor: pointer;
    input
        width 100%
        border-radius 0!important
        background rgba(64,158,255,0.2)
        border 0!important
        box-shadow none
        padding 5px 10px
        height 50px
        outline: none;
        font-weight bold
        border-radius 0
        font-size 24px
        font-family RubikMoonrocks
        margin-bottom 10px
        width 300px
        display block
       
</style>