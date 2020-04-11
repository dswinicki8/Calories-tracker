var foodItemArray = [];
var foodCaloriesArray = [];
// Save user info to local storage 
function userInfo() {
}
// Save health goals to local storage 
function healthGoals() {
}
// Call API to log fitness activities 
function searchFitnessActivities() {
}
// Save fitness activities to local storage 
function saveFitness() {
}
// Call API to log food intake 
$("#searchBtn").click(foodLogger);
function foodLogger() {
    var foodSearch = $("#foodSearch").val().trim();
    var queryURL = "https://api.nutritionix.com/v1_1/search/cheeseburger?results=0:20&fields=item_name,nf_calories&appId=ebe70e9f&appKey=fd53e313cdb8d5c240702e52977603c3";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        //
        .then(function (response) {
            var results = response.hits;
            console.log(response)
            for (var i = 0; i < 7; i++) {
                console.log(results[i].fields.item_name)
                console.log(results[i].fields.nf_calories)
            }
            $(".hide").removeClass("hide");

            $("#foodBtn0").text(response.hits[0].fields.item_name);
            $("#foodBtn1").text(response.hits[1].fields.item_name);
            $("#foodBtn2").text(response.hits[2].fields.item_name);
            $("#foodBtn3").text(response.hits[3].fields.item_name);
            $("#foodBtn4").text(response.hits[4].fields.item_name);
            $("#foodBtn5").text(response.hits[5].fields.item_name);
            $("#foodBtn6").text(response.hits[6].fields.item_name);

            $("#foodBtn0").attr("data-food-name", response.hits[0].fields.item_name);
            $("#foodBtn0").attr("data-food-calories", response.hits[0].fields.nf_calories)
            $("#foodBtn1").attr("data-food-name", response.hits[1].fields.item_name);
            $("#foodBtn1").attr("data-food-calories", response.hits[1].fields.nf_calories)
            $("#foodBtn2").attr("data-food-name", response.hits[2].fields.item_name);
            $("#foodBtn2").attr("data-food-calories", response.hits[2].fields.nf_calories)
            $("#foodBtn3").attr("data-food-name", response.hits[3].fields.item_name);
            $("#foodBtn3").attr("data-food-calories", response.hits[3].fields.nf_calories)
            $("#foodBtn4").attr("data-food-name", response.hits[4].fields.item_name);
            $("#foodBtn4").attr("data-food-calories", response.hits[4].fields.nf_calories)
            $("#foodBtn5").attr("data-food-name", response.hits[5].fields.item_name);
            $("#foodBtn5").attr("data-food-calories", response.hits[5].fields.nf_calories)
            $("#foodBtn6").attr("data-food-name", response.hits[6].fields.item_name);
            $("#foodBtn6").attr("data-food-calories", response.hits[6].fields.nf_calories)
            // }
        });
    };
    $(".foodOption").click(saveFood);
    // Save foods to local storage 
    function saveFood() {
        var foodItem = $(this).attr("data-food-name");
        var foodCalories = $(this).attr("data-food-calories");
        foodItemArray.push(foodItem);
        foodCaloriesArray.push(foodCalories);
        console.log(foodItem);
        console.log(foodCalories);
        $(".foodTableBody").empty();
        console.log(foodItemArray);
        for (i = 0; i < foodItemArray.length; i++) {
            // Create a new table row element
            var tRow = $("<tr>");
            // Methods run on jQuery selectors return the selector they we run on
            // This is why we can create and save a reference to a td in the same statement we update its text
            var food = $("<td>").text(foodItemArray[i]);
            var calories = $("<td>").text(foodCaloriesArray[i]);
            // Append the newly created table data to the table row
            tRow.append(food, calories);
            // Append the table row to the table body
            $("tbody").append(tRow);
        }
    };

    




