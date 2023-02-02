<script>
    import {firstForm, secondForm} from "../../store/store.js";
</script>

<h1>Page result 1</h1>
<div class="result-wrapper">
    <div class="item"> {$firstForm.carBrand} </div>
    <div class="item"> {$firstForm.zipCode} </div>
    <div class="item"> {$secondForm.firstName} </div>
    <div class="item"> {$secondForm.lastName} </div>
    <div class="item"> {$secondForm.carModel} </div>
    <div class="item"> {$secondForm.firstRegistration} </div>
</div>