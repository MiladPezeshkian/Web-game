"use stric";
const score = document.querySelector(".score");
const heighst_score = document.querySelector(".heighest-score");
const Hidden_number = document.querySelector(".hidden-num");
const game_state = document.querySelector(".state");
const check = document.querySelector(".check");
check.disabled = true;
const start_btn = document.querySelector(".btn-start");
const form = document.querySelector(".form-main");
const input = document.querySelector(".input");
let random_num = 0;
let score_num = 10;
let heighst_score2 = 0;
start_btn.addEventListener("click", function () {
  start_btn.textContent = " Play Again!";
  Hidden_number.textContent = `?`;
  form.style.filter = "none";
  random_num = Math.floor(Math.random() * 100 + 1);
  game_state.textContent = "Game Started";
  check.disabled = false;
  form.style.backgroundColor = "inherit";
  input.value = " ";
  score.textContent = "Score : 10";
  score_num = 10;
});
check.addEventListener("click", function () {
  let user_num = parseInt(input.value);
  if (user_num === 0 || isNaN(user_num)) {
    alert("Please Enter Your Number !");
  } else if (score_num <= 1) {
    //loss
    game_state.textContent = "You Lose! 😥";
    Hidden_number.textContent = `${random_num}`;
    score_num--;
    form.style.backgroundColor = "firebrick";
  } else if (user_num == random_num) {
    heighst_score2 += score_num;
    heighst_score.textContent = ` Heighest Score : ${heighst_score2}`;

    Hidden_number.textContent = `${random_num}`;
    game_state.textContent = "You Win!😎";
    form.style.backgroundColor = "rgba(46, 204, 113,1.0)";
    //win
  } else if (user_num > random_num) {
    score_num--;

    score.textContent = `Score : ${score_num}`;
    game_state.textContent = "Your Number Is Hiegh 📈";
    //when hiegher
  } else if (user_num < random_num) {
    score_num--;
    score.textContent = `Score : ${score_num}`;
    game_state.textContent = "Your Number Is Low 📉";
    //when lower
  }
});
