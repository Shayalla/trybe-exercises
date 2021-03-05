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
function createDays(){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const ulDias = document.querySelector('#days');
  
  for (let index = 0; index < dezDaysList.length; index += 1){
    const numbersDays = dezDaysList[index];
    const daysList = document.createElement('li');
    daysList.innerHTML = numbersDays;
    daysList.className = 'day';
    ulDias.appendChild(daysList);
    if(numbersDays === 24 | numbersDays ===31){
      daysList.className = 'day holyday';
    } else if(numbersDays === 4 | numbersDays === 11 | numbersDays === 18){
      daysList.className = 'day fryday';
    } else if (numbersDays === 25){
      daysList.className = 'day fryday holyday';
    }
  };
};
createDays()
 