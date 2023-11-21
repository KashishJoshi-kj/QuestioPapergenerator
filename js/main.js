var questionAddButton = document.getElementById("add-qn-btn");

var addQuestion = function() {

    var questionText = document.getElementById("text");
    var questionSubject = document.getElementById("subject");
    var questionTopic = document.getElementById("topic");
    var questionDifficulty = document.getElementById("difficulty");
    var questionMark = document.getElementById("mark");

    if (questionText.value && questionSubject.value && questionTopic.value && questionDifficulty.value !== "" && questionMark.value !== "") {
        var addquestiontoList = createpersonList(questionText.value, questionSubject.value, questionTopic.value, questionDifficulty.value, questionMark.value);

        //Render List Here 
        console.log(JSON.parse(localStorage.getItem("qnText")));


        tableCreate();

        //Reset the fields
        questionText.value = "";
        questionSubject.value = "";
        questionTopic.value = "";
        questionDifficulty.value = "";
        questionMark.value = "";

    } else {

    }
}

var createpersonList = function(qnText, qnSubject, qnTopic, qnDifficulty, qnMark) {

    // var chkStorageText = localStorage.getItem('qnText');
    // chkStorageText = chkStorageText ? JSON.parse(chkStorageText): [];
    // chkStorageText.push(qnText);
    // localStorage.setItem('qnText', JSON.stringify(chkStorageText));


    var chkStorageText = localStorage.getItem('appObjects');
    chkStorageText = chkStorageText ? JSON.parse(chkStorageText) : [];
    chkStorageText.push({
        'qnText': qnText,
        'qnSubject': qnSubject,
        'qnTopic': qnTopic,
        'qnDifficulty': qnDifficulty,
        'qnMark': qnMark
    });

    // Put the object into storage
    localStorage.setItem('appObjects', JSON.stringify(chkStorageText));

    // Retrieve the object from storage
    //var retrievedObject = localStorage.getItem('appObjects');

    //console.log('retrievedObject: ', JSON.parse(retrievedObject));							

    // var chkStorageSubject = localStorage.getItem('qnSubject');
    // chkStorageSubject = chkStorageSubject ? JSON.parse(chkStorageSubject): [];
    // chkStorageSubject.push(qnSubject);
    // localStorage.setItem('qnSubject', JSON.stringify(chkStorageSubject));

    // var chkStorageTopic = localStorage.getItem('qnTopic');
    // chkStorageTopic = chkStorageTopic ? JSON.parse(chkStorageTopic): [];
    // chkStorageTopic.push(qnTopic);
    // localStorage.setItem('qnTopic', JSON.stringify(chkStorageTopic));

    // var chkStorageDifficulty = localStorage.getItem('qnDifficulty');
    // chkStorageDifficulty = chkStorageDifficulty ? JSON.parse(chkStorageDifficulty): [];
    // chkStorageDifficulty.push(qnDifficulty);
    // localStorage.setItem('qnDifficulty', JSON.stringify(chkStorageDifficulty));	

    // var chkStorageMark = localStorage.getItem('qnMark');
    // chkStorageMark = chkStorageMark ? JSON.parse(chkStorageMark): [];
    // chkStorageMark.push(qnMark);
    // localStorage.setItem('qnMark', JSON.stringify(chkStorageMark));
}


function tableCreate() {

    document.getElementById("qnBank").style.display = "block";
    var table = document.getElementById("mytab1");
    table.innerHTML = "";

    for (i = 0; i < JSON.parse(localStorage.getItem("appObjects")).length; i++) {

        var row = table.insertRow(0);

        // Insert new cells  
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        for (j = 0; j < JSON.parse(localStorage.getItem("appObjects")).length; j++) {
            // Add Text to Cells
            cell1.innerHTML = JSON.parse(localStorage.getItem("appObjects"))[i]['qnText'];
            cell2.innerHTML = JSON.parse(localStorage.getItem("appObjects"))[i]['qnSubject'];
            cell3.innerHTML = JSON.parse(localStorage.getItem("appObjects"))[i]['qnTopic'];
            cell4.innerHTML = JSON.parse(localStorage.getItem("appObjects"))[i]['qnDifficulty'];
            cell5.innerHTML = JSON.parse(localStorage.getItem("appObjects"))[i]['qnMark'];
        }

    }

}

questionAddButton.addEventListener("click", addQuestion);
