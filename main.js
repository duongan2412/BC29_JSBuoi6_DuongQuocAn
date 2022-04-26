function getEleID(element) {
    return document.getElementById(element);
}

/**
 * Bài 1
 */

getEleID("btnKq1").onclick = function () {
    var num1 = getEleID("num1").value;
    var cnt = 0;
    var sum = 0;
    while (sum < num1) {
        cnt++;
        sum += cnt;
    }
    getEleID("kq1").innerHTML = cnt;
}

function tinhTongXN(x, n) {
    var xPowN = Math.pow(x, n);
    return xPowN;
}


/**
 * Bài 2
 */
getEleID("btnKq2").onclick = function () {
    var numX = getEleID("numX").value;
    var numN = getEleID("numN").value;
    var xPowN = 0;
    var sum = 0;
    for (var i = 1; i <= numN; i++) {
        xPowN = tinhTongXN(numX, i);
        sum += xPowN;
    }
    getEleID("kq2").innerHTML = "Tổng : "+ sum;
}

/**
 * Bài 3
 */

getEleID("btnKq3").onclick = function () {
    var num3 = getEleID("num3").value;
    var giaiThua = 1;
    for (var i = 2; i <= num3; i++) {
        giaiThua *= i;
    }
    getEleID("kq3").innerHTML = "Giai thừa: " + giaiThua;
}

/**
 * Bài 4
 */

function laSoChan(n) {
    var soChan = false;
    return n % 2 == 0 ? soChan = true : soChan = false;
}

getEleID("btnKq4").onclick = function () {
    kq = "";
    for (var i = 1; i <= 10; i++) {
        var soChan = laSoChan(i);
        if (!soChan) {
            kq += "<div style='background-color: red;color: white;'> Div lẻ " + i + "</div>"
        } else {
            kq += "<div style='background-color: blue;color: white;'> Div chẵn " + i + "</div>"
        }
    }
    getEleID("div_content").innerHTML = kq;
}


















