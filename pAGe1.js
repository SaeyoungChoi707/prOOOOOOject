
function anything(){
    textSize(15);
    fill("red");
    text("currently nameless app", 150,190);
    rectMode(CENTER);
    rect(200,98,50,50);
    var login = createButton("SIGN IN");
    var signnn = createButton("SIGN UP");
    login.position(160, 210);
    signnn.position(160, 260); 

    login.mousePressed(function(){
        appState = 1;
        login.hide();
        signnn.hide();
    })

}

