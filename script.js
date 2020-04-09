var anh_nguoi_may = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg"
var anh_bai_bien = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg"
var anh_vu_tru = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg"
var cua_so1 = document.getElementById("cua-1");
var cua_so2 = document.getElementById("cua-2");
var cua_so3 = document.getElementById("cua-3");
var nut_Start = document.getElementById("start");
var so_ngau_nhien;
var is_dang_choi = true;

/************************************
Gán ảnh vào các cửa 1 cách ngẫu nhiên
************************************/
  /** TẠO HÀM QUAY SỐ NGẪU NHIÊN:
  - Tạo ra 3 trường hợp, mỗi trường hợp cửa nhận 1 giá trị khác nhau
  - Tạo hàm quay số interger ngẫu nhiên
     Thuật toán: randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
     Nguồn: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
  - Ta có tổng cộng 3 trường hợp nên số min = 1; max = 3
  **/
  const tao_soNgauNhien = () => {
      var min = 1;
      var max = 3;
      so_ngau_nhien = Math.floor(Math.random()*(max-min+1)+1);
      return so_ngau_nhien;
    }
  /** TẠO HÀM GÁN HÌNH VÀO CỬA THEO 3 TRƯỜNG HỢP NGẪU NHIÊN**/
  const gan_hinhVaoCua = () => {
    tao_soNgauNhien();
    switch (so_ngau_nhien) {
      case 1:
        cua_so1.src = anh_nguoi_may;
        cua_so2.src = anh_bai_bien;
        cua_so3.src = anh_vu_tru;
        break;
      case 2:
        cua_so3.src = anh_nguoi_may;
        cua_so1.src = anh_bai_bien;
        cua_so2.src = anh_vu_tru;
        break;
      case 3:
        cua_so2.src = anh_nguoi_may;
        cua_so3.src = anh_bai_bien;
        cua_so1.src = anh_vu_tru;
        break;
    }
  }

//Xét xem cửa có Robot không? Nếu có thì gameOver
  var is_nguoi_may = (cua_so_x) => {
    if(cua_so_x === anh_nguoi_may){
      gameOver();
    }
  }

//Khi click vào các cửa thì các sẽ đổi hình
cua_so1.onclick = () => {
  if(is_dang_choi == true){
  switch (so_ngau_nhien){
    case 1:
      cua_so1.src = anh_nguoi_may;
      gameOver();
      break;
    case 2:
      cua_so1.src = anh_bai_bien;
      break;
    case 3:
      cua_so1.src = anh_vu_tru;
      break;
  }
}
};
cua_so2.onclick = () => {
  switch (so_ngau_nhien){
    case 1:
      cua_so2.src = anh_bai_bien;
      break;
    case 2:
      cua_so2.src = anh_vu_tru;
      break;
    case 3:
      cua_so2.src = anh_nguoi_may;

      break;
  }
  }
cua_so3.onclick = () => {
  switch (so_ngau_nhien){
    case 1:
      cua_so3.src = anh_vu_tru;
      break;
    case 2:
      cua_so3.src = anh_nguoi_may;
      gameOver();
      break;
    case 3:
      cua_so3.src = anh_bai_bien;
      break;
  }
};

//Tạo hàm gameOver
var gameOver = () => {
  nut_Start.innerHTML = "Bạn đã thua! Click để chơi lại."
  is_dang_choi = false;
}

tao_soNgauNhien();
