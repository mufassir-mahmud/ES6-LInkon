 const name = 'Mufassir Mahmud';
 const age = 21;
 const address = 'West Ukil Para'
 const gfName = 'Munira';
 const gfAddress = 'Rampur'
 const subjects = ['html', 'css', 'js', 'dom', 'es6']
 const fullSentence =`
 My name is  ${name}
 My age is ${age}
 MY Subject is ${subjects.map(subject => subject).join(' ')}
 MY Address ${address}
 My Girl Friend Name is ${gfName}
 HEr Home Address ${gfAddress}
 ` 

 console.log(fullSentence);