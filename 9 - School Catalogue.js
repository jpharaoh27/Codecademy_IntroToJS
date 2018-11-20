//Parent class
class School {
  constructor(name, level, numOfStudents) {
    this._name = name,
    this._level = level,
    this._numOfStudents = numOfStudents
  }
    
    get name() {
      return this._name;
    };
    get level() {
      return this._level;
    };
    get numOfStudents() {
      return this._numOfStudents;
    };
    
    set numOfStudents(num) {
      if (typeof num === 'number') {
        this.numOfStudents = num
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.')
      };
    };
  
  quickFacts() {
    return console.log(`${this.name} educates ${this.numOfStudents} students at the ${this.level} school level.`);
  };
  
 static pickSubstituteTeacher(subs) {
   let randIndex = Math.floor(subs.length * Math.random());
   return subs[randIndex];   	
  };
};

//Child class - Primary
class Primary extends School {
  constructor(name, numOfStudents, pickupPolicy) {
  super (name);
  this._level = 'Primary';
  this._numOfStudents = numOfStudents;
	this._pickupPolicy = pickupPolicy;
  }
  
  get pickupPolicy() {
    return this._pickupPolicy;
  };
};
  
  //Child class - High School
  class High extends School {
  constructor(name, numOfStudents, sportsTeams) {
  super (name);
  this._level = 'High';
  this._numOfStudents = numOfStudents;
	this._sportsTeams = sportsTeams;
  }
    
  get sportsTeams() {
    return this._sportsTeams;
    };
  };

const lorraineHansbury = new Primary("Lorraine Hansbury", 514, "Students must be picked up by a parent, guardian, or a family member over the age of 13.");

lorraineHansbury.quickFacts();
console.log(Primary.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));


const alSmith = new High("Al E. Smith", 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams);