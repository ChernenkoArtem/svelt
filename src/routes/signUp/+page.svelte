
<script>
    import {goto} from '$app/navigation';
    import {secondForm, firstForm, brands, errorPopup} from "../../store/store.js";
    import {randomIndex , fakeLoad} from "../../utils/utils.js";
    import ProgressBar from "../../components/ProgressBar.svelte";
    import ErrorPopup from "../../components/ErrorPopup.svelte";
    import Modal, { bind } from 'svelte-simple-modal';
    import {onDestroy} from "svelte";

    const resultLinks = ['/result1', '/result2'];
    let isLoading = false;
    let duration = 0;
    let step = 1;
    let formFirst = {}
    let formSecond = {};

    const unsubF = firstForm.subscribe((v)=>  formFirst = v);
    const unsubS= secondForm.subscribe((v)=>  formSecond = v);

    function nextStep(){

        switch (step) {
            case 1:
                console.log('formFirst',formFirst)
                if(checkIsEmptyInputs(formFirst) || !codesValidate()) return;
                step = step + 1;
            break;
            case 2:
                if(checkIsEmptyInputs(formSecond) || !carModelsValidate()) return;
                isLoading = true;
                duration = randomIndex(6) * 1000;
                fakeLoad(duration).then(()=> {
                    isLoading = false;
                    goto(resultLinks[randomIndex(resultLinks.length)]);
                })
        }

    }

    function prevStep(){
        step = step - 1;
        const initialState = {
            firstName: '',
            lastName: '',
            carModel: '',
            firstRegistration: ''
        }
        secondForm.set(initialState)
    }

    function codesValidate(){ //todo use form lib for simple validation patterns, and bind value
        const zipCodes = brands.zipCodes;
        console.log('formFirst.zipCod',formFirst.zipCode)

        const isValid = zipCodes.some((code)=> +code === +formFirst.zipCode)
        if (!isValid) {
            openErrorPopup(`${formFirst.zipCode}, postal code is unfortunately not serviced.`)
            return false;
        }
        return true;

    }

    function carModelsValidate(){
        const carModels = brands.carModels;

        const isValid = carModels.some((model)=> model === formSecond.carModel)
        if (!isValid) {
            openErrorPopup(`${formSecond.carModel}, model is unfortunately not serviced.`)
            return false;
        }
        return true;
    }

    function checkIsEmptyInputs(formData){
        let isEmpty = false;

        for (let field in formData) {
            if (!formData[field]) {
                isEmpty = true;
                break;
            }
        }
        console.log('isEmpty',isEmpty)
        return isEmpty;
    }

    function openErrorPopup(msg){  //todo open/close functions must be own methods of component errorPopup
        errorPopup.set(bind(ErrorPopup, { message: msg }));
        setTimeout(()=>{ errorPopup.set(null)},5000)
    }

    onDestroy(()=> {
        unsubS();
        unsubF();
    })
</script>


{#if !isLoading}
    {#if step === 1}
        <form on:submit|preventDefault={()=>{}}>
            <label>
                сar brand
                <input name="сarBrand" type="text" bind:value={$firstForm.carBrand} required>
            </label>
            <label>
                zip code
                <input name="zipCode" type="text" bind:value={$firstForm.zipCode} required>
            </label>
            <button on:click = {nextStep}>next</button>
        </form>
    {:else if step === 2}

        <form on:submit|preventDefault={()=>{}}>
            <label>
                First Name
                <input name="firstName" type="text" bind:value={$secondForm.firstName} required>
            </label>
            <label>
                Last Name
                <input name="lastName" type="text" bind:value={$secondForm.lastName} required>
            </label>
            <label>
                Car Model
                <input name="carModel" type="text" bind:value={$secondForm.carModel} required>
            </label>
            <label>
                First Registration
                <input name="firstRegistration" bind:value={$secondForm.firstRegistration} type="text" required>
            </label>
            <button on:click = {prevStep}>back</button>
            <button on:click = {nextStep}>next</button>
        </form>
    {/if}
{:else }
    <ProgressBar {duration}/>
{/if}


<Modal
        show={$errorPopup}
        styleBg={{width: '0', height: '0'}}
        closeButton = {false}
        closeOnEsc = {false}
        closeOnOuterClick= {false}
>
</Modal>