function sacarFibo(){
    let limit = document.getElementById("fibo").value;
    let sequence = [0, 1];
    for (let i = 2; i < limit; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    document.getElementById("imprimir").innerHTML = sequence;
  }