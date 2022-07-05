



<svelte:head>
	<title>Contact</title>
	<meta name="description"/>
</svelte:head>
<link href="https://fonts.googleapis.com/css2?family=Tiro+Tamil:ital@1&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div class="intro">
    <div class="container">
        <div class="intro_in">
            <h1 class="contact">You can contact me via:</h1>
            <br>
            <br>
            <div class="contact-icon">
                <a class="fa fa-vk" href="https://vk.com/leykhaertdinova"> </a>
                <a class="fa fa-telegram" href="https://t.me/leila1kh"> </a>
                <a class="fa fa-instagram" href="https://instagram.com/leiluk1?igshid=YmMyMTA2M2Y="> </a>
        </div>    
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

.contact {
    font-size: 85px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 400;
    text-align: center;
    color: azure;
    font-weight: 600;
}
.contact-icon{
    display: flex;   
    justify-content: space-around;
}

.fa {
    justify-content: space-around;
    padding: 40px;
    font-size: 40px;
    width: 120px;
    text-align: center;
    text-decoration: none;
    border-radius: 50%;
}
  
.fa:hover {
    opacity: 0.7;
    transform: scale(0.92);
}
   
.fa-telegram {
    background: #430297;
    color: white;
}

.fa-vk {
    background: #45bbff;
    color: white;
}

.fa-instagram {
    background: #f40083;
    color: white;
}
</style>