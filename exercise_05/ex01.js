const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 25,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB',
        'Python',
        'D3.js',
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)'],
}

const getPersonInfo1 = (person) => {

    for (k in person) {
        console.log(`${k} -> ${person[k]}`)
    }
}

const getPersonInfo2 = (person) => {

    const {firstName, lastName, age, country, job, skills, languages} = person

    console.log(`Information about ${firstName} ${lastName}: ${age}yo | from ${country} | job: ${job} | skills: ${skills} | languages: ${languages}`)
}


getPersonInfo1(person)
console.log('---------------------------')
getPersonInfo2(person)