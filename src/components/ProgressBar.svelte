
<script>
    import {tweened} from "svelte/motion";
    import {cubicOut} from "svelte/easing";
    import {onMount} from "svelte";

    export let duration = 0;
    const progress = tweened(0,{
        duration: duration,
        easing: cubicOut,
    });

    onMount(()=> progress.set(1))

</script>
<div class="loading-bar">
    <div class="progress" style="width: {$progress * 100}%"></div>
</div>


<style>
    .loading-bar, .progress {
        height: 40px;
        border-radius: 10px;
    }

    .loading-bar {
        width: 60vw;
        margin: 200px auto;
        background-color: transparent;
        border: 1px solid indigo;
    }

    .progress {
        background-color: blueviolet;
        width: 1%;
    }
</style>