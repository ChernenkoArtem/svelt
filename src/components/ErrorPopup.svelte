<script>
    export let message = 'Default message';

</script>

<style lang="scss">
    .error-popup {
      position: fixed;
      bottom: 2%;
      left: 50%;
      background-color: red;
      padding: 10px 20px;
      border-radius: 10px;

      h2 {
        font-size: 1.2rem;
        text-align: center;
        color: #ffffff;
      }
    }

</style>


<div class="error-popup">
    <h2> {message}</h2>
</div>
