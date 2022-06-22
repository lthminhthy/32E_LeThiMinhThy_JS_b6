document.getElementById('btnSoNguyenDuong').onclick = function () {
    // input  
    // 
    var sum = 0;

    var ketQua_b1 = 0;
    var n = 1;

    while (sum < 10000) {
        n++;
        if (sum += n) {
            sum > 10000
        } else {
            ketQua_b1 = n;
        }
    }
    document.getElementById("ketQua_b1").innerHTML = "Số nguyên dương nhỏ nhất: " + n;
}



// bài 2
document.getElementById('btnTinhTong').onclick = function () {
    var n = Number(document.getElementById('soN').value);
    var x = Number(document.getElementById('soX').value);
    var tong = 0;
    var t = 1;
    // xử lý
    while (t <= n) {
        tong += Math.pow(x, t);
        t++;
    }
    document.getElementById('ketQua_b2').innerHTML = "Tổng = " + tong;
}




// bài 3

document.getElementById('btnTinhGiaiThua').onclick = function () {
    var so = Number(document.getElementById('number_3').value);
    var giaiThua = 1;
    var soHang = 1;
    while (soHang <= so) {
        giaiThua = giaiThua * soHang;
        soHang++;
    }
    document.getElementById('ketQua_b3').innerHTML = "Giai thừa của "+ so + "= " +giaiThua;
}



// bài 4
document.getElementById('btnTaoTheDiv').onclick = function () {
    var html = "";
    var soThe = 10;
    var dem = 1;
    while (dem <= soThe) {
        // var div = "<div>Thẻ Div lẻ</div>"
        // html+=div;
        if (dem % 2 === 0) {
            var div = '<div style="background:red; color: white">Thẻ Div chẵn</div>';
            
            html += div;
            
        } else {
            var div = '<div style="background:blue; color: white">Thẻ Div lẻ</div>';
            html+=div;
        }
        dem++;
    }
    document.getElementById('ketQua_b4').innerHTML = html;
    
}


