

function showMadLib(){
    hideEntries();
    hideShowButton();
    addResults();
};
    
function resetButton(){
    removeResults();
    revealEntries();
    revealShowButton();
}
     
function removeResults(){
    const div = document.getElementById("results");
    div.style.display = 'none';
}

function revealEntries(){
    const entries = document.querySelectorAll('[id*="entry"]').forEach(entry =>{
        entry.style.display = 'block';
    })
}

function revealShowButton(){
    let button = document.getElementById("show-mad-lib");
    button.style.display = 'block';
}

function hideEntries(){
    const entries = document.querySelectorAll('[id*="entry"]').forEach(entry =>{
        entry.style.display = 'none';
    })
}

function hideShowButton(){
    let button = document.getElementById("show-mad-lib");
    button.style.display = 'none';
}

function addResults(){
    const container = document.getElementById("container");
    
    let box = document.createElement("div");
    box.setAttribute("id", "results");
    
    let story = document.createElement("p");
    let input1 = document.getElementById("input1").value;
    let word1 = document.createTextNode("A vacation is when you take a trip to some " +input1);
    let input2 = document.getElementById("input2").value;
    let word2 = document.createTextNode(" place with your " +input2);
    let input3 = document.getElementById("input3").value;
    let word3 = document.createTextNode(" family. Usually you go to some place that is near a/an " +input3);
    let input4 = document.getElementById("input4").value;
    let word4 = document.createTextNode(" or up on a/an " +input4);
    let input5 = document.getElementById("input5").value;
    let word5 = document.createTextNode(". A good vacation place is one where you can ride " +input5);
    let input6 = document.getElementById("input6").value;
    let word6 = document.createTextNode(" or play " +input6);
    let input7 = document.getElementById("input7").value;
    let word7 = document.createTextNode(" or go hunting for " +input7);
    let input8 = document.getElementById("input8").value;
    let word8 = document.createTextNode(". I like to spend my time " +input8);
    let input9 = document.getElementById("input9").value;
    let word9 = document.createTextNode(" or " +input9);
    let input10 = document.getElementById("input10").value;
    let word10 = document.createTextNode(". When parents go on a vacation, they spend their time eating three " +input10);
    let input11 = document.getElementById("input11").value;
    let word11 = document.createTextNode(" a day, and fathers play golf, and mothers sit around " +input11);
    let input12 = document.getElementById("input12").value;
    let word12 = document.createTextNode(". Last summer, my little brother fell in a/an " +input12);
    let input13 = document.getElementById("input13").value;
    let word13 = document.createTextNode(" and got poison " +input13);
    let input14 = document.getElementById("input14").value;
    let word14 = document.createTextNode(" all over his " +input14);
    let input15 = document.getElementById("input15").value;
    let word15 = document.createTextNode(". My family is going to go to (the) " +input15);
    let input16 = document.getElementById("input16").value;
    let word16 = document.createTextNode(", and I will practice " +input16);
    let input17 = document.getElementById("input17").value;
    let word17 = document.createTextNode(". Parents need vacations more than kids because parents are always very " +input17);
    let input18 = document.getElementById("input18").value;
    let word18 = document.createTextNode(" and because they have to work " +input18);
    let input19 = document.getElementById("input19").value;
    let word19 = document.createTextNode(" hours every day all year making enough " +input19);
    let word20 = document.createTextNode(" to pay for the vacation.");

    story.appendChild(word1);
    story.appendChild(word2);
    story.appendChild(word3);
    story.appendChild(word4);
    story.appendChild(word5);
    story.appendChild(word6);
    story.appendChild(word7);
    story.appendChild(word8);
    story.appendChild(word9);
    story.appendChild(word10);
    story.appendChild(word11);
    story.appendChild(word12);
    story.appendChild(word13);
    story.appendChild(word14);
    story.appendChild(word15);
    story.appendChild(word16);
    story.appendChild(word17);
    story.appendChild(word18);
    story.appendChild(word19);
    story.appendChild(word20);

    let resetButton = document.getElementById("reset-button");
    resetButton.style.display = 'initial';

    box.appendChild(story);
    box.appendChild(resetButton);
    container.appendChild(box);
}