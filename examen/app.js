const userName = document.getElementById("txt-name");
const userNote1 = document.getElementById("txt-note1");
const userNote2 = document.getElementById("txt-note2");
const userNote3 = document.getElementById("txt-note3");

const btnPublic = document.getElementById("btn-public");

const responseFinal = document.getElementById("final-note");

btnPublic.addEventListener("click", btnFinal);

function btnFinal() {

  let username = userName.value;
  let note1 = parseFloat(userNote1.value);
  let note2 = parseFloat(userNote2.value);
  let note3 = parseFloat(userNote3.value);

  noteFinal = (0.30 * note1) + (0.30 * note2) + (0.40 * note3);
  
  

  if (noteFinal < 4.5) {
    responseFinal.textContent = `${username} Usted es considerado un estudiante EXCELENTE con una nota de → ${noteFinal}`;
  }  else if (noteFinal <= 3.5 && noteFinal >= 4.5){
    responseFinal.textContent = `${username} Usted es considerado un estudiante BUENO con una nota de → ${noteFinal}`;
  }
  else if (noteFinal <= 2 && noteFinal >= 3.4) {
    responseFinal.textContent = `${username} Usted perdió la materia pero tiene otra oportunidad de recuperar → ${noteFinal}`;
  }
  else if (noteFinal > 2) {
    responseFinal.textContent = `${username} Usted perdió la materia pero tiene otra oportunidad de recuperar → ${noteFinal}`;
  }
}






// const note1 = document.getElementById("txt-note1");
// const note2 = document.getElementById("txt-note2");
// const note3 = document.getElementById("txt-note3");
// const send = document.getElementById("btn-send");

// send.addEventListener('click', () => {

//   let Note1 = parseFloat(note1.value);
//   let Note2 = parseFloat(note2.value);
//   let Note3 = parseFloat(note3.value);


//   
//     let result = 0.30 * Note1 + 0.30 * Note2 + 0.40 * Note3;

//     console.log(result);
//   } else {
//     console.log('Error');
//   }

// })