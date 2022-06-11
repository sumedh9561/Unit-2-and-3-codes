function navbar(){
    return `
    <div class="navbar">

    <div id="SearchBar"> 
        <input type="text" placeholder="Search Recepie" id="SearchRecepie">
    </div>
  
    <div id="home"><a href="index.html">Home</a></div>

    <div id="LatestRecipes"><a href="latestRecipe.html">Latest Recipes</a></div>
    
    <div id="Recipes_of_Day"><a href="RecipeOfDay.html">Recipes of the Day</a></div>

    <div id="login"><a href="login.html">Login</a></div>

    <div id="signup"><a href="signup.html">Sign Up</a></div>

    </div>`
}
export default navbar;