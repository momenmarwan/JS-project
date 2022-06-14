let generate = document.getElementById('generate');
let input = document.getElementById('name');
let cards = document.querySelector('.cards');
let Delete = document.getElementById("delete");





const names = JSON.parse(localStorage.getItem('names') || '[]');
console.log(names);

generate.addEventListener('click', () => {
  let name = input.value;
  if (name) {
    addOne(name);
  }
  input.value = '';
});

function addOne(name) {
  names.push(name);
  localStorage.setItem('names', JSON.stringify(names));
  showOneCard(name);
}

function showOneCard(name) {
  var color = randomColors();

  let card = `
         <div class="card"  style="background-color:${color}">
                    <span>Welcome Her your tag<span>
                        <br>
                    <span>${name}</span>
                    <div class ="delete">
                    <button id="submit" onclick="deleteCard(${
                      names.length - 1
                    })">Delete</button>

                    </div>
                    
                </div>
         `;
        
  cards.insertAdjacentHTML('afterbegin', card);

  
  
}

function deleteCard(cardNum) {
  names.splice(cardNum, 1); 
  
  localStorage.setItem('names', JSON.stringify(names));
  cards.innerHTML = ' ';
  showCards();
}
function showCards() {
  for (let i = 0; i < names.length; i++) {
    let card = `
       <div class="card" >
                <span>Welcome Her your tag<span>
                    <br>
                <span>${names[i]}</span>
                <button id="submit" onclick="deleteCard(${i})">Delete</button>
            </div>
       `;
    cards.insertAdjacentHTML('afterbegin', card);
   
  }
}
function randomColors(){
    let hexArray = [0,1,2,3,4,5,6,7,8,9,"A","B" ,"C","D","E","F"]
    let color = []
    
    for(let i =0 ; i < 6 ; i++){
        color.push(hexArray[Math.floor(Math.random() * hexArray.length)]);   
    }
    let finalColor = `#${color.join("")}`
    return finalColor;
}


showCards();
function deleteAll(){
    localStorage.clear();
    names.splice(0)
    cards.innerHTML = ' ';
}
