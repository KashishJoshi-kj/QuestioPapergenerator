var questionGenerate = document.getElementById("qn-generates");


function generateQuestionnaire() {
    var difficulty1 = document.getElementById("difficulty1");
    var difficulty2 = document.getElementById("difficulty2");
    var difficulty3 = document.getElementById("difficulty3");
    var difficulty1marks = document.getElementById("difficulty1marks");
    var difficulty2marks = document.getElementById("difficulty2marks");
    var difficulty3marks = document.getElementById("difficulty3marks");


    if (difficulty1marks.value !== "" && difficulty2marks.value !== "" && difficulty3marks.value !== "") {
        generateQuestionpaper1(difficulty1.value, difficulty1marks.value);
        generateQuestionpaper2(difficulty2.value, difficulty2marks.value);
        generateQuestionpaper3(difficulty3.value, difficulty3marks.value);
    }
}

function generateQuestionpaper1(givenDifficulty, givenDifficultyMark) {
    var storedValueByDiff = JSON.parse(localStorage.getItem("appObjects"));

    var fetchDifficultyQn1 = [];

    for (jx1 = 0; jx1 < storedValueByDiff.length; jx1++) {
        if (JSON.parse(localStorage.getItem("appObjects"))[jx1]['qnDifficulty'] == 'Easy')
            fetchDifficultyQn1.push(JSON.parse(localStorage.getItem("appObjects"))[jx1]);
    }

    var difficulty1RestrictMarks = [];
    var difficulty1RestrictData = [];

    for (jx2 = 0; jx2 < fetchDifficultyQn1.length; jx2++) {

        difficulty1RestrictData.push(fetchDifficultyQn1[jx2]);
        difficulty1RestrictMarks.push(fetchDifficultyQn1[jx2]['qnMark']);


    }



    var list = document.getElementById('qnlist');

    var generatedData = [];

    for (kx1 = 0; kx1 < difficulty1RestrictData.length; kx1++) {
        generatedData.push(fetchDifficultyQn1[kx1]['qnMark']);

        if (sum(generatedData) <= givenDifficultyMark) {
            list.innerHTML += "<h4>" + fetchDifficultyQn1[kx1]['qnText'] + "</h4><p>" + fetchDifficultyQn1[kx1]['qnTopic'] + "</p><p>Mark :" + fetchDifficultyQn1[kx1]['qnMark'] + " | Subject :" + fetchDifficultyQn1[kx1]['qnSubject'] + " | Difficulty :" + fetchDifficultyQn1[kx1]['qnDifficulty'] + "</p><br><hr>";
        }
    }


}



function generateQuestionpaper2(givenDifficulty, givenDifficultyMark) {
    var storedValueByDiff = JSON.parse(localStorage.getItem("appObjects"));

    var fetchDifficultyQn1 = [];

    for (jx1 = 0; jx1 < storedValueByDiff.length; jx1++) {
        if (JSON.parse(localStorage.getItem("appObjects"))[jx1]['qnDifficulty'] == 'Medium')
            fetchDifficultyQn1.push(JSON.parse(localStorage.getItem("appObjects"))[jx1]);
    }

    var difficulty1RestrictMarks = [];
    var difficulty1RestrictData = [];

    for (jx2 = 0; jx2 < fetchDifficultyQn1.length; jx2++) {
        if ((sum(difficulty1RestrictMarks)) <= givenDifficultyMark) {
            difficulty1RestrictData.push(fetchDifficultyQn1[jx2]);
            difficulty1RestrictMarks.push(fetchDifficultyQn1[jx2]['qnMark']);
        }

    }

    console.log(difficulty1RestrictData);

    var list = document.getElementById('qnlist');

    var generatedData = [];

    for (kx1 = 0; kx1 < difficulty1RestrictData.length; kx1++) {
        generatedData.push(fetchDifficultyQn1[kx1]['qnMark']);

        if (sum(generatedData) <= givenDifficultyMark) {
            list.innerHTML += "<h4>" + fetchDifficultyQn1[kx1]['qnText'] + "</h4><p>" + fetchDifficultyQn1[kx1]['qnTopic'] + "</p><p>Mark :" + fetchDifficultyQn1[kx1]['qnMark'] + " | Subject :" + fetchDifficultyQn1[kx1]['qnSubject'] + " | Difficulty :" + fetchDifficultyQn1[kx1]['qnDifficulty'] + "</p><br><hr>";
        }
    }



}


function generateQuestionpaper3(givenDifficulty, givenDifficultyMark) {
    var storedValueByDiff = JSON.parse(localStorage.getItem("appObjects"));

    var fetchDifficultyQn1 = [];

    for (jx1 = 0; jx1 < storedValueByDiff.length; jx1++) {
        if (JSON.parse(localStorage.getItem("appObjects"))[jx1]['qnDifficulty'] == 'Hard')
            fetchDifficultyQn1.push(JSON.parse(localStorage.getItem("appObjects"))[jx1]);
    }

    var difficulty1RestrictMarks = [];
    var difficulty1RestrictData = [];

    for (jx2 = 0; jx2 < fetchDifficultyQn1.length; jx2++) {
        if ((sum(difficulty1RestrictMarks)) <= givenDifficultyMark) {
            difficulty1RestrictData.push(fetchDifficultyQn1[jx2]);
            difficulty1RestrictMarks.push(fetchDifficultyQn1[jx2]['qnMark']);
        }

    }

    console.log(difficulty1RestrictData);

    var list = document.getElementById('qnlist');

    var generatedData = [];

    for (kx1 = 0; kx1 < difficulty1RestrictData.length; kx1++) {
        generatedData.push(fetchDifficultyQn1[kx1]['qnMark']);

        if (sum(generatedData) <= givenDifficultyMark) {
            list.innerHTML += "<h4>" + fetchDifficultyQn1[kx1]['qnText'] + "</h4><p>" + fetchDifficultyQn1[kx1]['qnTopic'] + "</p><p>Mark :" + fetchDifficultyQn1[kx1]['qnMark'] + " | Subject :" + fetchDifficultyQn1[kx1]['qnSubject'] + " | Difficulty :" + fetchDifficultyQn1[kx1]['qnDifficulty'] + "</p><br><hr>";
        }
    }



}



function sum(input) {

    if (toString.call(input) !== "[object Array]")
        return false;

    var total = 0;
    for (var i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}

questionGenerate.addEventListener("click", generateQuestionnaire);