var playerName = window.prompt (" what is the name of your robot?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName,playerAttack,playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
    //alerting the players that the game has begun
    window.alert ("Welcome to Gladiators!");

    var promptFight =  window.prompt("Would you like to FIGHT or SKIP this battle round");
    console.log(promptFight);

    //if player chooses to fight , then fight 

    if  (promptFight === "fight" || promptFight === "FIGHT" ) {

    // Subtract the value of `playerAttack` from the value of
    // `enemyHealth` and use that result to update the value in the `enemyHealth` variable.
     enemyHealth = enemyHealth - playerAttack;

    //Log a resulting message to the console so we know that it worked.
    console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has "  + enemyHealth  + " health remaining."
    );

    //check players health

        if (playerHealth <= 0){
            window.alert(playerName + " has died!");
        }

        else {
            window.alert(playerName + " still has "  + playerHealth + " health left.");
        }


    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.

    playerHealth = playerHealth - enemyAttack;


    // Log a resulting message to the console so we know that it worked.

    console.log (
        enemyName + " attacked " + playerName + ".  " + playerName + " now has " + playerHealth + "  health remaining."
    );

    // check enemy's health
    
    if (enemyHealth <= 0) {
        window.alert(enemyName + "  has died!." )
    } else {
        window.alert( enemyName + "  has still " + enemyHealth +"  health left .");
    }

    // if the player chooses to skip
}else if (promptFight === "skip"  ||  promptFight === "SKIP" ) {
    //confirm player wants to skip
        var confirmSkip = window.confirm ("are you sure to quit?");

        // if yes if the answer, (true) , leave fight

        if (confirmSkip){
            window.alert(playerName + "has decided to quit , Goodbye !")

            playerMoney = playerMoney -2;
        }

        else {
            fight();
        }
        window.alert(playerName + "has skipped this fight");
    } else {
        window.alert("pelase choose a valid option and try again ");
    }
}

fight();






























