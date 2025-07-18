console.log("hello")

let inp = document.getElementById("input");
let btn = document.getElementById("btn");
let select1 = document.getElementById("select1");
let select2 = document.getElementById("select2");
let result = document.querySelector(".result");
document.addEventListener("DOMContentLoaded", () => {
    select1.get
    if (select1.value === "hexadecimal") {
        inp.placeholder = "Enter Text & numbers";
    }
})

console.log(select1.value)
btn.addEventListener("click", () => {
    let num = inp.value;
    let from = select1.value;
    let to = select2.value;
    // console.log(num.split("").includes( "0" , "1"))

    if (num === "" || num === undefined || num === " " || num === null) {
        alert("Please enter a number");
    }
    else {
        if ((from === "binary")&&(num.split("").includes("0") || num.split("").includes("1"))) {


            if (from === "binary" && to === "binary") {
                let p = document.createElement("p");
                p.innerText = num;
                result.appendChild(p);
                inp.value = "";
            }
            else if (from === "binary" && to === "octal") {
                let p = document.createElement("p");
                let split = num.split("")
                let gg = [];
                for (let i = 1; i <= split.length; i += 3) {
                    let x2 = split[split.length - 2 - i];
                    let x1 = split[split.length - 1 - i];
                    let x = split[split.length - i];
                    let f2 = (isNaN(x2) ? "0" : x2)
                    let f1 = (isNaN(x1) ? "0" : x1)
                    let f = (isNaN(x) ? "0" : x)

                    const pieace = f2 + f1 + f;
                    console.log(pieace);
                    if (pieace === "000") {
                        gg.push("0");
                    }
                    else if (pieace === "001") {
                        gg.push("1");
                    }
                    else if (pieace === "010") {
                        gg.push("2");
                    }
                    else if (pieace === "011") {
                        gg.push("3");
                    }
                    else if (pieace === "100") {
                        gg.push("4");
                    }
                    else if (pieace === "101") {
                        gg.push("5");
                    }
                    else if (pieace === "110") {
                        gg.push("6");
                    }
                    else if (pieace === "111") {
                        gg.push("7");
                    }
                    // gg.push(pieace);
                }
                gg.reverse();
                console.log(gg);
                p.innerText = gg.join("");
                result.appendChild(p);
                inp.value = "";
            }
            else if (from === "binary" && to === "decimal") {
                let p = document.createElement("p");
                let split = num.split("");
                // let target = split[split.length - 1];
                let sum = 0;
                for (let l = 0; l < split.length; l++) {
                    // console.log(split[split.length - 1 - l]);
                    let ggg = split[split.length - 1 - l] * (2 ** l);
                    console.log(ggg);
                    sum += ggg;
                }
                console.log(sum)
                p.innerText = sum;
                result.appendChild(p);
                inp.value = "";
            }

            else if (from === "binary" && to === "hexadecimal") {
                let p = document.createElement("p");
                let split = num.split("");
                let gathhex = [];
                for (let i = 0; i <= split.length; i += 4) {
                    let x3 = split[split.length - 4 - i];
                    let x2 = split[split.length - 3 - i];
                    let x1 = split[split.length - 2 - i];
                    let x = split[split.length - 1 - i];
                    let f3 = (isNaN(x3) ? "0" : x3)
                    let f2 = (isNaN(x2) ? "0" : x2)
                    let f1 = (isNaN(x1) ? "0" : x1)
                    let f = (isNaN(x) ? "0" : x);
                    let hexa = f3 + f2 + f1 + f;

                    if (hexa === "0000") {
                        gathhex.push("0");
                    }
                    else if (hexa === "0001") {
                        gathhex.push("1");
                    }
                    else if (hexa === "0010") {
                        gathhex.push("2");
                    }
                    else if (hexa === "0011") {
                        gathhex.push("3");
                    }
                    else if (hexa === "0100") {
                        gathhex.push("4");
                    }
                    else if (hexa === "0101") {
                        gathhex.push("5");
                    }
                    else if (hexa === "0110") {
                        gathhex.push("6");
                    }
                    else if (hexa === "0111") {
                        gathhex.push("7");
                    }
                    else if (hexa === "1000") {
                        gathhex.push("8");
                    }
                    else if (hexa === "1001") {
                        gathhex.push("9");
                    }
                    else if (hexa === "1010") {
                        gathhex.push("A");
                    }
                    else if (hexa === "1011") {
                        gathhex.push("B");
                    }
                    else if (hexa === "1100") {
                        gathhex.push("C");
                    }
                    else if (hexa === "1101") {
                        gathhex.push("D");
                    }
                    else if (hexa === "1110") {
                        gathhex.push("E");
                    }
                    else if (hexa === "1111") {
                        gathhex.push("F");
                    }
                }
                p.innerText = gathhex.reverse().join("");

                result.appendChild(p);
                inp.value = "";
            }
        }
        // else{
        //     alert("Not a binary number")
        //     alert("Please enter valid input according to the your choice");
        // }


         else if ((from === "octal")&&(num.split("").includes("0") || num.split("").includes("1") || num.split("").includes("2") || num.split("").includes("3") || num.split("").includes("4") || num.split("").includes("5") || num.split("").includes("6") || num.split("").includes("7"))) {
            console.log(num.split("").includes("0") || num.split("").includes("1") || num.split("").includes("2") || num.split("").includes("3") || num.split("").includes("4") || num.split("").includes("5") || num.split("").includes("6") || num.split("").includes("7") && from === "octal")
            if (from === "octal" && to === "binary") {
                let p = document.createElement("p");
                let split = num.split("");
                let gathhex = [];
                for (let i = 0; i <= split.length; i++) {
                    let x = split[split.length - i];
                    if (x === "0") {
                        gathhex.push("000");
                    }
                    else if (x === "1") {
                        gathhex.push("001");
                    }
                    else if (x === "2") {
                        gathhex.push("010");
                    }
                    else if (x === "3") {
                        gathhex.push("011");
                    }
                    else if (x === "4") {
                        gathhex.push("100");
                    }
                    else if (x === "5") {
                        gathhex.push("101");
                    }
                    else if (x === "6") {
                        gathhex.push("110");
                    }
                    else if (x === "7") {
                        gathhex.push("111");
                    }
                }
                p.innerText = gathhex.reverse().join("");
                result.appendChild(p);
                inp.value = "";
            }
            else if (from === "octal" && to === "octal") {
                let p = document.createElement("p");
                p.innerText = num;
                result.appendChild(p);
                inp.value = "";
            }
            else if (from === "octal" && to === "decimal") {
                let p = document.createElement("p");
                let decimal = parseInt(num, 8);
                p.innerText = decimal;
                result.appendChild(p);
                inp.value = "";
            }
            else if (from === "octal" && to === "hexadecimal") {
                let p = document.createElement("p");
                let hexadecimal = parseInt(num, 8).toString(16).toUpperCase();
                p.innerText = hexadecimal;
                result.appendChild(p);
                inp.value = "";
            }
        }
        // else{
        //     alert("Not a octal number")
        //     alert("Please enter valid input according to the your choice");
        // }
        else if ((from === "decimal")&&(num.split("").includes("0") || num.split("").includes("1") || num.split("").includes("2") || num.split("").includes("3") || num.split("").includes("4") || num.split("").includes("5") || num.split("").includes("6") || num.split("").includes("7") ||num.split("").includes("8") ||num.split("").includes("9"))) {
            if (from === "decimal" && to === "binary") {
                let p = document.createElement("p");
                let binary = parseInt(num).toString(2);
                p.innerText = binary;
                result.appendChild(p);
                inp.value = "";

            }
            else if (from === "decimal" && to === "decimal") {
                let p = document.createElement("p");
                p.innerText = num;
                result.appendChild(p);
                inp.value = "";
            }
            else if (from === "decimal" && to === "hexadecimal") {
                let p = document.createElement("p");
                let hexadecimal = parseInt(num).toString(16).toUpperCase();
                p.innerText = hexadecimal;
                result.appendChild(p);
                inp.value = "";
            }
            else if (from === "decimal" && to === "octal") {
                let p = document.createElement("p");
                let octal = parseInt(num).toString(8);
                p.innerText = octal;
                result.appendChild(p);
                inp.value = "";
            }
        }
        else if ((from === "hexadecimal")&&(num.split("").includes("0") || num.split("").includes("1") || num.split("").includes("2") || num.split("").includes("3") || num.split("").includes("4") || num.split("").includes("5") || num.split("").includes("6") || num.split("").includes("7") ||num.split("").includes("8") ||num.split("").includes("9") ||num.split("").includes("A") ||num.split("").includes("B") ||num.split("").includes("C") ||num.split("").includes("D") ||num.split("").includes("E") ||num.split("").includes("F") ||num.split("").includes("a") ||num.split("").includes("b") ||num.split("").includes("c") ||num.split("").includes("d") ||num.split("").includes("e") ||num.split("").includes("f"))) {
            if (from === "hexadecimal" && to === "hexadecimal") {
                let p = document.createElement("p");
                p.innerText = num;
                result.appendChild(p);
                inp.value = "";
            }
            else if (from === "hexadecimal" && to === "binary") {
                inp.placeholder = "Enter Text & numbers";
                let p = document.createElement("p");
                let binary = parseInt(num, 16).toString(2);
                p.innerText = binary;

                result.appendChild(p);
                inp.value = "";
            }
            else if (from === "hexadecimal" && to === "octal") {
                let p = document.createElement("p");
                let octal = parseInt(num, 16).toString(8);
                p.innerText = octal;
                result.appendChild(p);
                inp.value = "";
            }
            else if (from === "hexadecimal" && to === "decimal") {
                let p = document.createElement("p");
                let decimal = parseInt(num, 16);
                p.innerText = decimal;
                result.appendChild(p);
                inp.value = "";
            }
        }

        else {
            alert("Invalid input according to the options");
        }
    }
}
)

inp.addEventListener("focus", () => {
    result.innerHTML = "";
})