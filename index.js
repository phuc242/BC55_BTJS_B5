// Bài tập tính điểm tuyển sinh
var diemKV = 0.0;
var diemDT = 0.0;
function ketQua() {
  var diemChuan = document.getElementById("diemChuan").value * 1;
  var diemMon_1 = document.getElementById("diemMon_1").value * 1;
  var diemMon_2 = document.getElementById("diemMon_2").value * 1;
  var diemMon_3 = document.getElementById("diemMon_3").value * 1;
  var maKhuVuc = document.getElementById("khuVuc").value;
  diemKV = chonKhuVuc(maKhuVuc);
  var maDoiTuong = document.getElementById("doiTuong").value * 1;
  diemDT = chonDoiTuong(maDoiTuong);
  var tongDiem = diemMon_1 + diemMon_2 + diemMon_3 + diemKV + diemDT;
  if (diemMon_1 == 0 || diemMon_2 == 0 || diemMon_3 == 0) {
    var ketQua = "Bạn đã rớt do có điểm liệt";
    var divThongBao = document.getElementById("thongBao");
    divThongBao.innerText = ketQua;
    divThongBao.classList.add("thongBao");
  } else if (tongDiem >= diemChuan) {
    var ketQua = "Bạn đã đậu với số điểm là : " + tongDiem;
    var divThongBao = document.getElementById("thongBao");
    divThongBao.innerText = ketQua;
    divThongBao.classList.add("thongBao");
  } else if (tongDiem < diemChuan) {
    var ketQua = "Bạn đã rớt";
    var divThongBao = document.getElementById("thongBao");
    divThongBao.innerText = ketQua;
    divThongBao.classList.add("thongBao");
  }
}

function chonKhuVuc(maKhuVuc) {
  var diemKhuVuc = 0;
  if (maKhuVuc == "A" || maKhuVuc == "a") {
    diemKhuVuc = 2;
  } else if (maKhuVuc == "B" || maKhuVuc == "b") {
    diemKhuVuc = 1;
  } else if (maKhuVuc == "C" || maKhuVuc == "c") {
    diemKhuVuc = 0.5;
  } else if (maKhuVuc == "X" || maKhuVuc == "x") {
    diemKhuVuc = 0;
  } else {
    alert("Vui lòng nhập đúng khu vực");
  }
  return diemKhuVuc;
}
function chonDoiTuong(maDoiTuong) {
  var diemDoiTuong = 0;
  if (maDoiTuong == 1) {
    diemDoiTuong = 2.5;
  } else if (maDoiTuong == 2) {
    diemDoiTuong = 1.5;
  } else if (maDoiTuong == 3) {
    diemDoiTuong = 1;
  } else if (maDoiTuong == 0) {
    diemDoiTuong = 0;
  } else {
    alert("vui lòng chọn đối tượng hợp lệ");
  }
  return diemDoiTuong;
}

// Bài tập tính tiền điện
const soKw_1 = 500;
const soKw_2 = 650;
const soKw_3 = 850;
const soKw_4 = 1100;
const soKw_5 = 1300;
var tienkw_1 = 0;
var tienkw_2 = 0;
var tienkw_3 = 0;
var tienkw_4 = 0;
var tienkw_5 = 0;
var tongTien = 0;

function tinhTien() {
  var hoTen = document.getElementById("hoTen").value;
  var soKw = document.getElementById("soKw").value * 1;
  tinhTienChiTiet(soKw, soKw_1, soKw_2, soKw_3, soKw_4, soKw_5);

  var text =
    "Tổng số tiền điện của Anh/Chị " + hoTen + " là " + tongTien + " VNĐ";

  var divThongBao1 = document.getElementById("thongBao1");
  divThongBao1.innerText = text;
  divThongBao1.classList.add("thongBao1");
}

function tinhTien_kw1(soKw, giaKw_1) {
  return soKw * giaKw_1;
}
function tinhTien_kw2(soKw, giaKw_2) {
  return (soKw - 50) * giaKw_2;
}
function tinhTien_kw3(soKw, giaKw_3) {
  return (soKw - 100) * giaKw_3;
}
function tinhTien_kw4(soKw, giaKw_4) {
  return (soKw - 200) * giaKw_4;
}
function tinhTien_kw5(soKw, giaKw_5) {
  return (soKw - 350) * giaKw_5;
}

function tinhTienChiTiet(soKw, giaKw_1, giaKw_2, giaKw_3, giaKw_4, giaKw_5) {
  if (0 <= soKw && soKw <= 50) {
    tienkw_1 = tinhTien_kw1(soKw, giaKw_1);
    tongTien = tienkw_1;
  } else if (50 < soKw && soKw <= 100) {
    tienkw_1 = tinhTien_kw1(50, giaKw_1);
    tienkw_2 = tinhTien_kw2(soKw, giaKw_2);
    tongTien = tienkw_1 + tienkw_2;
  } else if (100 < soKw && soKw <= 200) {
    tienkw_1 = tinhTien_kw1(50, giaKw_1);
    tienkw_2 = tinhTien_kw1(100, giaKw_1);
    tienkw_3 = tinhTien_kw3(soKw, giaKw_3);
    tongTien = tienkw_1 + tienkw_2 + tienkw_3;
  } else if (200 < soKw && soKw <= 350) {
    tienkw_1 = tinhTien_kw1(50, giaKw_1);
    tienkw_2 = tinhTien_kw1(100, giaKw_1);
    tienkw_3 = tinhTien_kw1(200, giaKw_1);
    tienkw_4 = tinhTien_kw4(soKw, giaKw_4);
    tongTien = tienkw_1 + tienkw_2 + tienkw_3 + tienkw_4;
  } else if (350 < soKw) {
    tienkw_1 = tinhTien_kw1(50, giaKw_1);
    tienkw_2 = tinhTien_kw1(100, giaKw_1);
    tienkw_3 = tinhTien_kw1(200, giaKw_1);
    tienkw_4 = tinhTien_kw1(350, giaKw_1);
    tienkw_5 = tinhTien_kw5(soKw, giaKw_5);
    tongTien = tienkw_1 + tienkw_2 + tienkw_3 + tienkw_4 + tienkw_5;
  } else {
    alert("vui lòng nhập số Kw hợp lệ");
  }
}

// Bài tập tính thuế
const phanTramThue_1 = 0.05;
const phanTramThue_2 = 0.1;
const phanTramThue_3 = 0.15;
const phanTramThue_4 = 0.2;
const phanTramThue_5 = 0.25;
const phanTramThue_6 = 0.3;
const phanTramThue_7 = 0.35;
var tienThue_1 = 0;
var tienThue_2 = 0;
var tienThue_3 = 0;
var tienThue_4 = 0;
var tienThue_5 = 0;
var tienThue_6 = 0;
var tienThue_7 = 0;
var tongThue = 0;

function tinhThue() {
  var hoVaTen = document.getElementById("hoVaTen").value;
  var tongThuNhap = document.getElementById("tongThuNhap").value * 1;
  var nguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value * 1;
  var tienThue = tongThuNhap - 4000000 - nguoiPhuThuoc * 1600000;
  tinhThueChiTiet(
    tienThue,
    phanTramThue_1,
    phanTramThue_2,
    phanTramThue_3,
    phanTramThue_4,
    phanTramThue_5,
    phanTramThue_6,
    phanTramThue_7
  );
  var text1 =
    "Họ Tên : " + hoVaTen + " Tiền Thuế Thu Nhập Cá Nhân: " + tongThue + " VNĐ";
  var divThongBao2 = document.getElementById("thongBao2");
  divThongBao2.innerText = text1;
  divThongBao2.classList.add("thongBao2");
}
function tinhThue_1(tienThue, giaThue_1) {
  return tienThue * giaThue_1;
}
function tinhThue_2(tienThue, giaThue_2) {
  return (tienThue - 60000000) * giaThue_2;
}
function tinhThue_3(tienThue, giaThue_3) {
  return (tienThue - 120000000) * giaThue_3;
}
function tinhThue_4(tienThue, giaThue_4) {
  return (tienThue - 210000000) * giaThue_4;
}
function tinhThue_5(tienThue, giaThue_5) {
  return (tienThue - 384000000) * giaThue_5;
}
function tinhThue_6(tienThue, giaThue_6) {
  return (tienThue - 624000000) * giaThue_6;
}
function tinhThue_7(tienThue, giaThue_7) {
  return (tienThue - 960000000) * giaThue_7;
}

function tinhThueChiTiet(
  tienThue,
  giaThue_1,
  giaThue_2,
  giaThue_3,
  giaThue_4,
  giaThue_5,
  giaThue_6,
  giaThue_7
) {
  if (0 < tienThue && tienThue <= 60000000) {
    tienThue_1 = tinhThue_1(tienThue, giaThue_1);
    tongThue = tienThue_1;
  } else if (60000000 < tienThue && tienThue <= 120000000) {
    tienThue_1 = tinhThue_1(60000000, giaThue_1);
    tienThue_2 = tinhThue_2(tienThue, giaThue_2);
    tongThue = tienThue_1 + tienThue_2;
  } else if (120000000 < tienThue && tienThue <= 210000000) {
    tienThue_1 = tinhThue_1(60000000, giaThue_1);
    tienThue_2 = tinhThue_2(120000000, giaThue_2);
    tienThue_3 = tinhThue_3(tienThue, giaThue_3);
    tongThue = tienThue_1 + tienThue_2 + tienThue_3;
  } else if (210000000 < tienThue && tienThue <= 384000000) {
    tienThue_1 = tinhThue_1(60000000, giaThue_1);
    tienThue_2 = tinhThue_2(120000000, giaThue_2);
    tienThue_3 = tinhThue_3(210000000, giaThue_3);
    tienThue_4 = tinhThue_4(tienThue, giaThue_4);
    tongThue = tienThue_1 + tienThue_2 + tienThue_3 + tienThue_4;
  } else if (384000000 < tienThue && tienThue <= 624000000) {
    tienThue_1 = tinhThue_1(60000000, giaThue_1);
    tienThue_2 = tinhThue_2(120000000, giaThue_2);
    tienThue_3 = tinhThue_3(210000000, giaThue_3);
    tienThue_4 = tinhThue_4(384000000, giaThue_4);
    tienThue_5 = tinhThue_5(tienThue, giaThue_5);
    tongThue = tienThue_1 + tienThue_2 + tienThue_3 + tienThue_4 + tienThue_5;
  } else if (624000000 < tienThue && tienThue <= 960000000) {
    tienThue_1 = tinhThue_1(60000000, giaThue_1);
    tienThue_2 = tinhThue_2(120000000, giaThue_2);
    tienThue_3 = tinhThue_3(210000000, giaThue_3);
    tienThue_4 = tinhThue_4(384000000, giaThue_4);
    tienThue_5 = tinhThue_5(624000000, giaThue_5);
    tienThue_6 = tinhThue_6(tienThue, giaThue_6);
    tongThue =
      tienThue_1 +
      tienThue_2 +
      tienThue_3 +
      tienThue_4 +
      tienThue_5 +
      tienThue_6;
  } else if (960000000 < tienThue) {
    tienThue_1 = tinhThue_1(60000000, giaThue_1);
    tienThue_2 = tinhThue_2(120000000, giaThue_2);
    tienThue_3 = tinhThue_3(210000000, giaThue_3);
    tienThue_4 = tinhThue_4(384000000, giaThue_4);
    tienThue_5 = tinhThue_5(624000000, giaThue_5);
    tienThue_6 = tinhThue_6(960000000, giaThue_6);
    tienThue_7 = tinhThue_7(tienThue, giaThue_7);
    tongThue =
      tienThue_1 +
      tienThue_2 +
      tienThue_3 +
      tienThue_4 +
      tienThue_5 +
      tienThue_6 +
      tienThue_7;
  } else {
    alert("Vui lòng nhập lại");
  }
}
