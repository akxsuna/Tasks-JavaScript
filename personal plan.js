const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (plan) {
        const {languages} = plan.skills;
        const {age} = plan; 
        let strWithAgeAndLangs = ''; 
        
        strWithAgeAndLangs += `Мне ${age} и я владею языками:`;
        
        for (let value of languages) { 
            strWithAgeAndLangs += ` ${value.toUpperCase()}`;
        }    
        return strWithAgeAndLangs; 
    } 
}

personalPlanPeter.showAgeAndLangs(personalPlanPeter);


function showExperience(plan) {
    const {exp} = plan.skills;
    return exp; 
}


function showProgrammingLangs(plan) {
  let stringWithExp = "";
  const {programmingLangs} = plan.skills
  if (!Object.keys(programmingLangs).length) { 
      return ""; 
  } else { 
  for (let key in programmingLangs) {
    stringWithExp += `Язык ${key} изучен на ${programmingLangs[key]}\n`; 
    }
  }
  return stringWithExp;
  }

showProgrammingLangs(personalPlanPeter);


