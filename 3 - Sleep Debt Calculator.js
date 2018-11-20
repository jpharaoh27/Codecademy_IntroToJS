let getSleepHours = day => {
  switch(day) {
    case 'monday':
      return 7
      break;
    case 'tuesday':
      return 15
      break;
    case 'wednesday':
      return 6
      break;
    case 'thursday':
      return 7
      break;
    case 'friday':
      return 9
      break;
    case 'saturday':
      return 8
      break;
    case 'sunday':
      return 7
      break;
    default:
      return 'Error!';
  };
};

let getActualSleepHours = () => {
  return getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');
};

let getIdealSleepHours = () => {
  let idealHours = 8
  return idealHours * 7
};

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than you needed! You are well rested!');
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep than you needed this week. You should get some rest!');
  } else {
    console.log('Oops! something went wrong!');
  };
};

calculateSleepDebt();