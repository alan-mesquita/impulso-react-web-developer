function mediaFinal() {
    let students = [
        {
            name: 'Alan',
            note: 10
        },
        {
            name: 'Andrerlane',
            note: 7
        },
        {
            name: 'Alisson',
            note: 5.5
        },
        {
            name: 'Laiane',
            note: 2
        },
        {
            name: 'Yan',
            note: 6
        },
    ]

    let approved = []
    let disapproved = []
    
    for(let i = 0; i < students.length; i++) {

        const {name, note} = students[i];

        if(note >= 6) {
            approved.push(students[i]);
            console.log(`Parabéns ${name}, está APROVADO! Sua nota final foi ${note}.`);
        } else {
            disapproved.push(students[i]);
            console.log(`Que pena ${name}, está REPROVADO! Sua nota final foi ${note}.`);
        }
    }
    console.log('Aprovados:', approved);
    console.log('Reprovados:', disapproved);
    console.log('Todos os dados:', students);
}

mediaFinal()