const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addTurn(target, key, value) {
  target['key'] = value;
}

function listKeys(target) {
  console.log(Object.keys(target));
}

function objectSize(target) {
  console.log(Object.keys(target).length);
}

function listValues(target) {
  console.log(Object.values(target));
}

function allLessons() {
  const lessons = {lesson1, lesson2, lesson3};
  return Object.assign({}, lessons);
}

function totalStudents() {
  let total = 0;
  for (lesson of Object.values(allLessons())) {
      total += Number(lesson.numeroEstudantes);
  }
  return total;
}

function getValueByNumber(target, index) {
  return Object.values(target)[index];
}

function verifyPair(target, key, value) {
  const entries = Object.entries(target);
  for(entry of entries) {
    if(entry[0] === key && entry[1] === value) return true;
  }
  return false;
}

/* BONUS */

function countMathStudents() {
  const lessons = allLessons();
  let total = 0;
  for (let l in lessons) {
    if(lessons[l].materia === 'Matemática') {
      total += lessons[l].numeroEstudantes;
    }
  }
  return total;
}

function createReport(teacher) {
  const lessons = allLessons();
  const report = {
    professor: teacher,
    aulas: [],
    estudantes: 0
  };
  for (let l in lessons) {
    const lesson = lessons[l];
    if (lesson.professor === teacher) {
      if (!report.aulas.includes(lesson.materia)) {
        report.aulas.push(lesson.materia);
      }
      report.estudantes += lesson.numeroEstudantes;
    }
  }
  return report;
}