<script>
    import {firstForm, secondForm} from "../../store/store.js";
</script>

<h1>Page result 2</h1>
<div class="result-wrapper">
    <div class="item"> Zip Code: {$firstForm.zipCode} </div>
    <div class="item"> Full name: {$secondForm.firstName}  {$secondForm.lastName}</div>
    <div class="item"> {$secondForm.carModel} {$firstForm.carBrand}</div>
    <div class="item"> First Registration: {$secondForm.firstRegistration} </div>
</div>