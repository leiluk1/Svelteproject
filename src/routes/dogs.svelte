<script lang="ts" >
    
    function getRandomDog() {
        fetch('https://random.dog/woof.json')
            .then(res => res.json())
            .then(data=> { 
                if (data.url.includes('.mp4')) {
                    getRandomDog()
                } else {
                    document.getElementById("dog").style.backgroundImage=`url(${data.url})`
        }
    })      
}

</script>
<svelte:head>
	<title>Dogs</title>
	<meta name="description"/>
</svelte:head>

<div class="intro">
    <div class="container_dog">
        <div class="dog_image" >
            <div id="dog">
      
            </div>
        </div>
        <button  class="button" id="btn" on:click={getRandomDog}>Click to see dog</button>
          
</div>
</div>

<style>

* {
    box-sizing: border-box;
}
    
h1, h2, h3, h4, h5, h6 {
    margin: 0;
}
    
    
.intro {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgb(247,90,212);
	background: linear-gradient(90deg, rgba(247,90,212,1) 0%, rgba(255,78,227,1) 7%, rgba(195,105,227,1) 39%, rgba(194,95,255,1) 50%, rgba(105,190,228,1) 77%, rgba(120,230,250,1) 100%);
    background-position: center;
    background-size: cover;
}
    
.button {
    display: inline-block;
    vertical-align: top;
    margin: 10px;
    padding: 12px 60px;
    border: 2px solid;
    border-color: azure;
    font-size: 25px;
    font-weight: 300;
    color: darkorchid;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    position: absolute;
    top: 88%;
    left: 40%;
}

.button:active {
    transform: scale(0.92);
}
.container_dog {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-auto-flow: row;
    grid-gap: 5px;
}

.dog_image {
    align-items: center;
    justify-content: center;
    margin: 10px;
    height: 400px;
    width: 300px;
    color: azure;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 25px;
}
#dog{
    position: absolute;
    top: 10%;
    right: 30%;
    width: 700px;
    height: 700px;
    background-size: cover;

}



</style>