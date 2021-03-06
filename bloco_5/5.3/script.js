function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
//1
function createDays(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const ulDias = document.querySelector('#days');
  
  for (let index = 0; index < dezDaysList.length; index += 1){
    const numbersDays = dezDaysList[index];
    const daysList = document.createElement('li');
    daysList.innerHTML = numbersDays;
    daysList.className = 'day';
    ulDias.appendChild(daysList);
    if(numbersDays === 24 | numbersDays === 31){
      daysList.className += ' holiday';
    } else if(numbersDays === 4 | numbersDays === 11 | numbersDays === 18){
      daysList.className += ' friday';
    } else if (numbersDays === 25){
      daysList.className += ' friday holiday';
    }
  };
};
createDays()
 
//function botaoFeriado(feriados){};
//2
const divBotao = document.createElement('button');
document.querySelector('.buttons-container').appendChild(divBotao).id = 'btn-holiday';
document.querySelector('#btn-holiday').innerHTML = 'Feriados';

//3
const button = document.querySelector('#btn-holiday');
button.addEventListener('click', function() {
  let feriados = document.querySelectorAll('.holiday');
  for (let index = 0; index < feriados.length; index += 1){
    if (feriados[index].style.backgroundColor === 'white'){
      feriados[index].style.backgroundColor = '#eee';
    } else {
      feriados[index].style.backgroundColor = 'white';
    }
  }
}
);

//4
const divBotaoSexta = document.createElement('button');
document.querySelector('.buttons-container').appendChild(divBotaoSexta).id = 'btn-friday';
document.querySelector('#btn-friday').innerHTML = 'Sexta - Feira';

//5
const fridaysDays = [4, 11, 18, 25]
const button1 = document.querySelector('#btn-friday');
button1.addEventListener('click', function() {
  let feriados = document.querySelectorAll('.friday');
  for (let index = 0; index < feriados.length; index += 1){
    if (feriados[index].innerHTML === 'SEXTOOU!!!'){
      feriados[index].innerHTML = fridaysDays[index];
    } else {
      feriados[index].innerHTML = 'SEXTOOU!!!';
    }
  }
}
);

//6
function diaMouseOver() {
  let days = document.querySelector('#days'); 
    days.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
    }
  )
}
function diaMouseOut() {
  let days = document.querySelector('#days');
    days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
      }
  )

}
diaMouseOver();
diaMouseOut();

//7
//   let botaoTasks = document.querySelector('#btn-add');
//   let caixaTexto = document.querySelector('#tasks-input');
//   botaoTasks.addEventListener('click', function () {
//   let tasksContainer = document.querySelector('.my-tasks');
//   let taskName = document.createElement('span');

//   taskName.innerHTML = caixaTexto.value;
//   tasksContainer.appendChild(taskName);

// });
function newTaskSpan(task) {

  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
};

newTaskSpan('Projeto: Estudar');

//8
