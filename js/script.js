// Selector form Html Markup
const inputFiled = document.querySelector('.input');
const clearBtn = document.querySelector('.clear-btn');
const result = document.querySelector('.result');
const resultItem = document.querySelector('.result-items');
const warningNoValue = document.querySelector('.warning-for-value');

// Event Listener 
inputFiled.addEventListener('keyup', searchEnter);
inputFiled.addEventListener('keyup', clearValue);
clearBtn.addEventListener('click', clearBtnFunc);

function searchEnter(evt) {
    resultItem.style.display = 'none';
    warningNoValue.style.display = 'none';
    if( inputFiled.value.length >= 1){
        if(evt.keyCode === 13){
            // console.log(inputFiled.value);
            url()
            resultItem.style.display = 'flex';

            // Clear input Filed Value 
            inputFiled.value = '';
        }  else{
        }
    }else {
        clearBtn.style.display = 'none';
        warningNoValue.style.display = 'block';
        warningNoValue.innerText = 'Please Typed Some Value!';
    }
}
function clearBtnFunc() {
    inputFiled.value = '';
    clearBtn.style.display = 'none';
}
function clearValue() {
    if (inputFiled.value.length >= 0) {
        clearBtn.style.display = 'block'; 
     } else {
         clearBtn.style.display = 'none';
     }     
};

function url() {
    const name = inputFiled.value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then(res => res.json())
    .then(data => displayData(data));
}
function displayData(name){
       if(name.meals !== null) {
          name.meals.forEach(meal => {
              console.log(meal);
            const item = document.createElement('div');
           item.innerHTML = 
           `
           <img src="${meal.strMealThumb}" />
           <div>
                <h2 class="meal_1">1. ${meal.strMeal}</h2>
                <h2 class="meal_2">2. ${meal.strMeasure9}</h2>
                <h2 class="meal_3">3. ${meal.strTags}</h2>
                <h2 class="meal_4">4. <a target="_blank" href="${meal.strYoutube}">Youtube</a></h2>
                <h2 class="meal_5">5. ${meal.strIngredient2}</h2>
                <h2 class="meal_6">6. ${meal.strIngredient4}</h2>
                <h2 class="meal_7">7. ${meal.strIngredient7}</h2>
                <h2 class="meal_8">8. ${meal.strIngredient5}</h2>
           </div>
           `;
           item.classList.add('meal-item')
           resultItem.appendChild(item)
         });
        } else {
           warningNoValue.style.display = 'block'
           resultItem.style.display = 'none';
           warningNoValue.innerText = 'Please give me a valid or Name of cooked food!'
        }

}