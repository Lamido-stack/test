function score(firstCa=15,secondCa=19,exam=50){
    if(firstCa >= 0 && firstCa <= 20 && secondCa >= 0 && secondCa <= 20 && exam >= 0 && exam <= 60){
        return firstCa + secondCa + exam
    }
    else if(firstCa < 0 || firstCa > 20){
        return "your First CA score is note valid"
    }
    else if(secondCa < 0 || secondCa > 20){
        return "your Second CA score is note valid"
    }
    else if(exam < 0 || exam > 60){
        return "your Exam score is note valid"
    }
    else{
        return "your grades don't add up"
    }
}

function grade(userGrade){    
    if (userGrade <= 40 ){
        if (40 - userGrade <= 3 ){
            return "You got a D"
        }
        else{
            return "You got a F"
        }
        }
    else if (userGrade <= 49){
        if (49 - userGrade <= 3 ){
            return "You got a C"
        }
        else{
            return "You got a D"
        }
        }
    else if (userGrade <= 59){
        if (59 - userGrade <= 3 ){
            return "You got a B"
        }
        else{
            return "You got a C"
        }
        }
    else if (userGrade <= 69){
        if (69 - userGrade <= 3 ){
            return "You got an A"
        }
        else{
            return "You got a B"
        }
        }
    else if (userGrade <= 100){
        return "You got an A"
        }  
    else{
        return userGrade
    }
}

console.log(grade(score(16,18,50)))