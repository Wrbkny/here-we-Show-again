// Collaborated with Blaine Presnull and Chritopher Haley on this Assessment

const parentElement = document.querySelector('.katas-list')

//kata 1
const kata1Heading = document.createElement('h3')
parentElement.append(kata1Heading)
kata1Heading.append('kata 1')

for (let kata1Counter = 1; kata1Counter <= 20; kata1Counter += 1) {
    let kata1Answer = kata1Counter
    const kata1Output = document.createElement('li')
    kata1Output.append(kata1Answer)
    parentElement.append(kata1Output)
}

//kata 2                                                                                                                                              
const kata2Heading = document.createElement('h3')
parentElement.append(kata2Heading)
kata2Heading.append('kata 2')

for (let kata2Counter = 2; kata2Counter <= 20; kata2Counter += 2) {
    let kata2Answer = kata2Counter
    const kata2Output = document.createElement('li')
    kata2Output.append(kata2Answer)
    parentElement.append(kata2Output)
}

//kata 3                                                                                                                                              
const kata3Heading = document.createElement('h3')
parentElement.append(kata3Heading)
kata3Heading.append('kata 3')

for (let kata3Counter = 1; kata3Counter <= 20; kata3Counter += 2) {
    let kata3Answer = kata3Counter
    const kata3Output = document.createElement('li')
    kata3Output.append(kata3Answer)
    parentElement.append(kata3Output)
}

//kata 4                                                                                                                                              
const kata4Heading = document.createElement('h3')
parentElement.append(kata4Heading)
kata4Heading.append('kata 4')

for (let kata4Counter = 5; kata4Counter <= 100; kata4Counter += 5) {
    let kata4Answer = kata4Counter
    const kata4Output = document.createElement('li')
    kata4Output.append(kata4Answer)
    parentElement.append(kata4Output)
}

//kata 5 Blain Presnull and Christopher Haley helped fix spelling error                                                                                                                                             
const kata5Heading = document.createElement('h3')
parentElement.append(kata5Heading)
kata5Heading.append('kata 5')

for (let kata5Counter = 1; kata5Counter <= 100; kata5Counter += 1) {
    const counter5IsPerfectSquare = Number.isInteger(Math.sqrt(kata5Counter))

    if (counter5IsPerfectSquare) {
        let kata5Answer = kata5Counter
        const kata5Output = document.createElement('li')
        kata5Output.append(kata5Answer)
        parentElement.append(kata5Output)
    }
}

//kata 6                                                                                                                                              
const kata6Heading = document.createElement('h3')
parentElement.append(kata6Heading)
kata6Heading.append('kata 6')

for (let kata6Counter = 20; kata6Counter >= 1; kata6Counter -= 1) {
    let kata6Answer = kata6Counter
    const kata6Output = document.createElement('li')
    kata6Output.append(kata6Answer)
    parentElement.append(kata6Output)
}

//kata 7                                                                                                                                              
const kata7Heading = document.createElement('h3')
parentElement.append(kata7Heading)
kata7Heading.append('kata 7')

for (let kata7Counter = 20; kata7Counter >= 1; kata7Counter -= 2) {
    let kata7Answer = kata7Counter
    const kata7Output = document.createElement('li')
    kata7Output.append(kata7Answer)
    parentElement.append(kata7Output)
}

//kata 8 
const kata8Heading = document.createElement('h3')
parentElement.append(kata8Heading)
kata8Heading.append('kata 8')

for (let kata8Counter = 19; kata8Counter >= 1; kata8Counter -= 2) {
    let kata8Answer = kata8Counter
    const kata8Output = document.createElement('li')
    kata8Output.append(kata8Answer)
    parentElement.append(kata8Output)
}

//kata 9 
const kata9Heading = document.createElement('h3')
parentElement.append(kata9Heading)
kata9Heading.append('kata 9')

for (let kata9Counter = 100; kata9Counter >= 5; kata9Counter -= 5) {
    let kata9Answer = kata9Counter
    const kata9Output = document.createElement('li')
    kata9Output.append(kata9Answer)
    parentElement.append(kata9Output)
}
//kata 10 
const kata10Heading = document.createElement('h3')
parentElement.append(kata10Heading)
kata10Heading.append('kata 10')

for (let kata10Counter = 100; kata10Counter >= 1; kata10Counter -= 1) {
    const counter10IsPerfectSquare = Number.isInteger(Math.sqrt(kata10Counter))

    if (counter10IsPerfectSquare) {
        let kata10Answer = kata10Counter
        const kata10Output = document.createElement('li')
        kata10Output.append(kata10Answer)
        parentElement.append(kata10Output)
    }
}

const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71,
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
];

//kata 11 Assisted by Blaine Presnull on line 143
const kata11Heading = document.createElement('h3')
parentElement.append(kata11Heading)
kata11Heading.append('kata 11')

for (let kata11Counter = 0; kata11Counter < sampleArray.length; kata11Counter += 1) {
    let kata11Answer = sampleArray[kata11Counter]
    const kata11Output = document.createElement('li')
    kata11Output.append(kata11Answer)
    parentElement.append(kata11Output)
}
//kata 12
const kata12Heading = document.createElement('h3')
parentElement.append(kata12Heading)
kata12Heading.append('kata 12')

for (let kata12Counter = 0; kata12Counter < sampleArray.length; kata12Counter += 1) {
    if (sampleArray[kata12Counter] % 2 == 0) {
        let kata12Answer = kata12Counter[kata12Counter]
        const kata12Output = document.createElement('li')
        kata12Output.append(sampleArray[kata12Counter])
        parentElement.append(kata12Output)
    }
}
//kata 13
const kata13Heading = document.createElement('h3')
parentElement.append(kata13Heading)
kata13Heading.append('kata 13')

for (let kata13Counter = 0; kata13Counter < sampleArray.length; kata13Counter += 1) {

    if (sampleArray[kata13Counter] % 2 !== 0) {
        let kata13Answer = kata13Counter[kata13Counter]
        const kata13Output = document.createElement('li')
        kata13Output.append(sampleArray[kata13Counter])
        parentElement.append(kata13Output)
    }
}
// //kata 14 Blaine Presnull corrected spelling error
// const kata14Heading = document.createElement('h3')
// parentElement.append(kata14Heading)
// kata14Heading.append('kata 14')

// for (let kata14Counter = 0; kata14Counter < sampleArray.length; kata14Counter += 1) {
//     let kata14Answer = Math.pow(sampleArray[kata14Counter],)
//     const kata14Output = document.createElement('li')
//     kata14Output.append(kata14Answer)
//     parentElement.append(kata14Output)

// }
// //kata 15
// const kata15Heading = document.createElement('h3')
// parentElement.append(kata15Heading)
// kata15Heading.append('kata 15')

// for (let kata15Counter = 2; kata15Counter <= 20; kata15Counter += 2) {
//     let kata15Answer = kata15Counter
//     const kata15Output = document.createElement('li')
//     kata15Output.append(kata15Answer)
//     parentElement.append(kata15Output)
// }
// //kata 16
// const kata16Heading = document.createElement('h3')
// parentElement.append(kata16Heading)
// kata16Heading.append('kata 16')

// for (let kata16Counter = 2; kata16Counter <= 20; kata16Counter += 2) {
//     let kata16Answer = kata16Counter
//     const kata16Output = document.createElement('li')
//     kata16Output.append(kata16Answer)
//     parentElement.append(kata16Output)
// }
// //kata 17
// const kata17Heading = document.createElement('h3')
// parentElement.append(kata17Heading)
// kata17Heading.append('kata 17')

// for (let kata17Counter = 2; kata17Counter <= 20; kata17Counter += 2) {
//     let kata17Answer = kata17Counter
//     const kata17Output = document.createElement('li')
//     kata17Output.append(kata17Answer)
//     parentElement.append(kata17Output)
// }
// //kata 18
// const kata18Heading = document.createElement('h3')
// parentElement.append(kata18Heading)
// kata18Heading.append('kata 18')

// for (let kata18Counter = 2; kata18Counter <= 20; kata18Counter += 2) {
//     let kata18Answer = kata18Counter
//     const kata18Output = document.createElement('li')
//     kata18Output.append(kata18Answer)
//     parentElement.append(kata18Output)
// }



