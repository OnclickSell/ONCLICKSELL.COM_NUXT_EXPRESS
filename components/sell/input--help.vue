<template>
    <div class='input__help'><span class='input__help--text'>What's this?</span></div>
</template>

<script>
export default {
  props: ['help'],
  components: {
  }
}
</script>

<style lang='scss'>

.input__help {
   width: 100%;
   text-align: right;
}

.input__help--text {
    color: #666666;
    font-size: 0.8em;
    text-decoration: underline;
    padding: 5px;
    width: 150px;
    margin-left: auto;
    cursor: pointer;

    &:hover {
        color: #a2a2a2;
        transition: 0.3s;
    }
}
</style>
