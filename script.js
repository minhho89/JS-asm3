var anh_nguoi_may = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg"
var anh_bai_bien = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg"
var anh_vu_tru = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg"
var anh_cua_dong ="https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"
var cua_so1 = document.getElementById("cua-1");
var cua_so2 = document.getElementById("cua-2");
var cua_so3 = document.getElementById("cua-3");
var nut_Start = document.getElementById("start");
var so_ngau_nhien;
var is_dang_choi = true;
var so_cua_mo = 0;

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
    if(cua_so_x.src === anh_nguoi_may){
      gameOver();
    }
  }

//Khi click vào các cửa thì các sẽ đổi hình
cua_so1.onclick = () => {
  if(is_dang_choi == true && so_cua_mo === 0){
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
      }//switch
      so_cua_mo++;
      // alert("số cửa mở: " + so_cua_mo);
    } //if
  else if (is_dang_choi == true && so_cua_mo === 1){
    switch (so_ngau_nhien){
      case 1:
          cua_so1.src = anh_nguoi_may;
          gameOver();
          break;
      case 2:
          cua_so1.src = anh_bai_bien;
          gameOver("win");
          break;

      case 3:
          cua_so1.src = anh_vu_tru;
          gameOver("win");
          break;
      }
      so_cua_mo++;
      // alert("số cửa mở: " + so_cua_mo);
    }
};
cua_so2.onclick = () => {
  if(is_dang_choi == true && so_cua_mo === 0){
      switch (so_ngau_nhien){
        case 1:
          cua_so2.src = anh_bai_bien;
          break;
        case 2:
          cua_so2.src = anh_vu_tru;
          break;
        case 3:
          cua_so2.src = anh_nguoi_may;
          gameOver();
          break;
          }
          so_cua_mo++;
          // alert("số cửa mở: " + so_cua_mo);
      }
    else if(is_dang_choi == true && so_cua_mo === 1){
      switch (so_ngau_nhien){
        case 1:
          cua_so2.src = anh_bai_bien;
          gameOver("win");
          break;
        case 2:
          cua_so2.src = anh_vu_tru;
          gameOver("win");
          break;
        case 3:
          cua_so2.src = anh_nguoi_may;
          gameOver();
          break;
          }
      }
  }
cua_so3.onclick = () => {
  if(is_dang_choi == true && so_cua_mo === 0){
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
    }
    else if(is_dang_choi == true && so_cua_mo === 1){
      switch (so_ngau_nhien){
        case 1:
          cua_so3.src = anh_vu_tru;
          gameOver("win");
          break;
        case 2:
          cua_so3.src = anh_nguoi_may;
          gameOver();
          break;
        case 3:
          cua_so3.src = anh_bai_bien;
          gameOver("win");
          break;
      }
    }
      so_cua_mo++;
      // alert("số cửa mở: " + so_cua_mo);
};

//restart lại game
nut_Start.onclick = () => {
  cua_so1.src = anh_cua_dong;
  cua_so2.src = anh_cua_dong;
  cua_so3.src = anh_cua_dong;
};

//Tạo hàm gameOver
var gameOver = (trang_thai) => {
  if (trang_thai === "win") {
    nut_Start.innerHTML = "Bạn đã thắng! Click để chơi lại.";
  }
  else {
    nut_Start.innerHTML = "Bạn đã thua! Click để chơi lại.";
  }
  is_dang_choi = false;
}

tao_soNgauNhien();
