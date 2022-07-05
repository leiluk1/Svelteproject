
<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="intro">
    <div class="container_about">
        <div class="me">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img src="https://sun1.megafon-nn.userapi.com/s/v1/ig2/xYk68XUbJtyHz9Tay0DPGeulCk1fJ2fC1X-uVTSZT0uyw0I0XDSrBPETBllxzbswWOPSUgQ1zDPkRCSNpMtHBxTM.jpg?size=1170x1170&quality=96&type=album">
        </div>
        <div class="personal_info">
            <p>I am bachelor at Innopolis Univesity. I am 18 years old. I was born in Kazan, Tatarstan.</p>
            <p>Some interesting facts about me:</p>
            <ul>
                <li>I am big fan of Netflix series and Haribo gummies</li>
                <li>I speak Tatar language</li>
                <li>Recently I cooked borcht myself</li>
                <li>I like dogs, they are cute</li>
            </ul>
            <p>P.S. Click on DOGS</p>
        </div>
    </div>    
</div>


<style>
* {
	color: azure;
    box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6 {
    margin: 0;
}

.intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: rgb(247,90,212);
	background: linear-gradient(90deg, rgba(247,90,212,1) 0%, rgba(255,78,227,1) 7%, rgba(195,105,227,1) 39%, rgba(194,95,255,1) 50%, rgba(105,190,228,1) 77%, rgba(120,230,250,1) 100%);
    background-size: cover;
}

.container_about {
    padding: 15px;
    display: grid;
    grid-template-areas: 'result info';
    grid-gap: 10px;
    grid-template-columns: 1fr 2fr;
    justify-content: center;
}

.personal_info {
    grid-area: info;
    padding: 15px;
    border: 2px solid azure;
    font-size: 35px;
    font-weight: 400;
    font-family: Georgia, 'Times New Roman', Times, serif;
   
}
.me img {
    grid-area: result;
    object-fit: cover; 
    height: 100%;
    width: 100%; 
}

</style>
