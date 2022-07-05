<script context="module" lang="ts">
	export const prerender = true;
</script>


<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home page" />
</svelte:head>

<div class="intro">
    <div class="container">
        <div class="intro_in">
            <h1 class="hello">Hello everyone, I'm Leila</h1>
			<br>
			<br>
            <h2 class="welcome">Welcome to my website!</h2>
        </div>    
    </div>
</div>


<style>

* {
    box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6 {
    margin: 0;
}

.container {
    margin: 0auto;
    width: 100%;
    max-width: 1200px;
}

.intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
	align-items: center;
    width: 100%;
    height: 100vh;
    background: rgb(247,90,212);
	background: linear-gradient(90deg, rgba(247,90,212,1) 0%, rgba(255,78,227,1) 7%, rgba(195,105,227,1) 39%, rgba(194,95,255,1) 50%, rgba(105,190,228,1) 77%, rgba(120,230,250,1) 100%);
    background-position: center;
    background-size: cover;
}

.intro_in {
    width: 100%;
    max-width: 880px;
    margin: 0 auto;
    color: azure;
    text-align: center;
}

.hello {
    font-size: 108px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 800;
    text-align: center;
    line-height: 1.1;
	color:azure;
}

.welcome {
	font-family: Georgia, 'Times New Roman', Times, serif;
	font-style: italic;
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    color: azure;
}

</style>
