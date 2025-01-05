document.addEventListener("DOMContentLoaded",function(){

    const searchButton=document.getElementById("buttons");
    const usernameinput=document.getElementById("input");
    const staccontainer=document.querySelector(".staccontainer");
    const easyprogressCircle=document.querySelector(".easy-progress");
    const mediumprogressCircle=document.querySelector(".medium-progress");
    const hardprogressCircle=document.querySelector(".hard-progress");
    const easylable=document.getElementById(".easy-lable");
    const mediumlable=document.getElementById(".medium-lable");
    const hardlable=document.getElementById(".hard-lable");
    const cardcontainer=document.querySelector("stac-card");


    function validateusername(username){
        if(username.trim()===""){
            alert("Username should not be empty");
            return false;
        }
        const regex=/^[a-zA-Z0-9_-]{1,15}$/;
        const ismatching=regex.test(username);
        if(!ismatching){
            alert("Invaild username");
        }
        return ismatching;
    }

    async function fetchuserdetails(username) {
        const targeturl ='https://leetcode.com/graphql/';
        const myheaders =new Headers();
        
        try{
            searchButton.textContent="searching...";
            searchButton.disabled=true;
            const response= await fetch(url);
            if(!response.ok){
                throw new Error("Unable to fech the user details");
            }
            const data=await response.json();
            console.log("Loggin data",data);
        }
        catch(error){
            staccontainer.innerHTML=`<p>No data found</p>`

        }
        finally{
            searchButton.textContent="search";
            searchButton.disabled=false;

        }

        
    }

    searchButton.addEventListener('click', function(){
        const username=usernameinput.value;
        console.log("Loggin username",username);
        if(validateusername(username)){
            fetchuserdetails(username) ;

        }
    })
})