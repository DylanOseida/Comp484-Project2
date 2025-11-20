$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.

    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();

    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.wash-button').click(clickedWahshButton);
  })
  
  // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
  var pet_info = {name:"Jeff the Land Shark", weight:1, happiness:1, dirtiness: 1};

  function clickedTreatButton() {
    
    // Increase pet happiness
    pet_info.happiness++;

    // Increase pet weight
    pet_info.weight++;
    $('.pet-image').animate({width: '+=5', height: '+=5'}, 100);

    checkAndUpdatePetInfoInHtml();
  }
  
  function clickedPlayButton() {

    // Increase pet happiness
    pet_info.happiness++;

    // Decrease pet weight
    pet_info.weight--;
    $('.pet-image').animate({width: '-=5', height: '-=5'}, 100);

    //Increase pet dirtiness
    pet_info.dirtiness++;

    checkAndUpdatePetInfoInHtml();
  }
  
  function clickedExerciseButton() {

    // Decrease pet happiness
    if (pet_info.happiness <= 1){
     pet_info.happiness--;
    }
    else{
      pet_info.happiness -= 2;
    }

    // Decrease pet weight
    pet_info.weight--;
    $('.pet-image').animate({width: '-=5', height: '-=5'}, 100);

    //Increase pet dirtiness
    pet_info.dirtiness += 2;

    checkAndUpdatePetInfoInHtml();
  }

  function clickedWahshButton() {

    // Decrease pet happiness
    pet_info.happiness--;

    //Decrease pet dirtiness
    pet_info.dirtiness--;

    checkAndUpdatePetInfoInHtml();
  }

  function checkAndUpdatePetInfoInHtml() {
    checkWeightAndHappinessBeforeUpdating();  
    updatePetInfoInHtml();
  }
  
  function checkWeightAndHappinessBeforeUpdating() {

    /***********************************************************
    *                                                          *
    *                .prop() method used here                  *
    *                                                          *
    ***********************************************************/

    // Add conditional so if weight is lower than zero.
    if(pet_info.weight == 0 || pet_info.happiness == 0){
      $('.play-button, .exercise-button').prop('disabled', true) //disable play and exercise button
    }
    else{
      $('.play-button, .exercise-button').prop('disabled', false) //enable play and exercise button
    }

    if (pet_info.happiness == 0 || pet_info.dirtiness == 0){
      $('.wash-button').prop('disabled', true) //disable wash button
    }
    else{
      $('.wash-button').prop('disabled', false) //enable wash button
    }

    var mood;

    if (pet_info.happiness == 0 && pet_info.weight == 0){
      mood = 'Hangry'
    }
    else if (pet_info.happiness > 0 && pet_info.weight == 0){
      mood = 'Hungry'
    }
    else if (pet_info.happiness > pet_info.weight || pet_info.happiness == pet_info.weight){
      mood = 'Happy'
    }
    else if(pet_info.happiness < pet_info.weight){
      mood = 'Fat'
    }

    /***********************************************************
    *                                                          *
    *                .data() method used here                  *
    *                                                          *
    ***********************************************************/

    // Attach mood variable to pet-image and store mood using .data()
    $('.pet-image').data('mood', mood);
  }

  // Updates your HTML with the current values in your pet_info object
  function updatePetInfoInHtml() {
    $('.name').text(pet_info['name']);
    $('.weight').text(pet_info['weight']);
    $('.happiness').text(pet_info['happiness']);
    $('.dirtiness').text(pet_info['dirtiness']);
    $('.mood').text($('.pet-image').data('mood'));
  }
