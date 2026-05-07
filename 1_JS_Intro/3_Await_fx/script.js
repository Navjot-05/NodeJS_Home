// basic syntax of async fx is
async function abcd() {
    var blob = await fetch(`https://randomuser.me/api`);
    //rest of the code that is going to use async function
    var ans = await blob.json();
    console.log(ans.results[0].name);
}
abcd();