(() => {
    const typedField = document.getElementById("typed");
    const untypedField = document.getElementById("untyped");

    const strs = [
        "HelloWorld",
        "Google",
        "Youtube",
        "Apple",
        "Facebook"
    ]

    let typed = "";
    let untyped = "Hello World";

    function randomInt(max){
        return Math.floor(Math.random() * Math.floor(max));
    };

    function nextString(){
        let idx = randomInt(strs.length);
        return strs[idx];
    };

    function next(){
        typed = "";
        untyped = nextString();
        updateTextField();
    };

    function updateTextField() {
        typedField.textContent = typed;
        untypedField.textContent = untyped;
    };
    
    document.addEventListener('keydown', function(e) {
        // console.log(e);
        if(e.key !== untyped.substring(0, 1)){
            return;
        };
        
        typed += untyped.substring(0, 1);
        untyped = untyped.substring(1);
        // console.log(typed);
        // console.log(untyped);
        updateTextField();

        if(untyped == ""){
            next();
        }
    })

})();