function openNav(){
    
    document.getElementById('navbar_content').style.display='flex';
    document.getElementsByTagName('li')[0].style.margin='10px auto';
    document.getElementsByTagName('li')[1].style.margin='10px auto';
    document.getElementsByTagName('li')[2].style.margin='10px auto';
    document.getElementsByTagName('li')[3].style.margin='10px auto';
    document.getElementsByTagName('li')[4].style.margin='10px auto';
    console.log("cliked")
}
function closeNav() {
    document.getElementById('navbar_content').style.display='none';
}
