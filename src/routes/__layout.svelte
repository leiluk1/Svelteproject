<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>
<script context="module" lang="ts">
	export const prerender = true;
</script>


<Header />

<main>
	<slot />
</main>



<style>

</style>
