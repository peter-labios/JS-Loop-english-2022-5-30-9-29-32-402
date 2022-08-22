for(let x = 1; x < 10; x++){
    let output = ""
    for(let y = 1; y < x+1; y++){
        output+= x+"*"+y+"="+(x*y)+" ";
    }
    console.log(output)
}