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
var so_lan_thang_hienTai = 0;
var so_lan_thang_caoNhat = 0;

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
          ghiDiem_caoNhat();
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
          ghiDiem_caoNhat();
          break;
      case 2:
          cua_so1.src = anh_bai_bien;
          gameOver("win");
          ghiDiem_hienTai();
          ghiDiem_caoNhat();
          break;

      case 3:
          cua_so1.src = anh_vu_tru;
          gameOver("win");
          ghiDiem_hienTai();
          ghiDiem_caoNhat();
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
          ghiDiem_caoNhat();
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
          ghiDiem_hienTai();
          ghiDiem_caoNhat();
          break;
        case 2:
          cua_so2.src = anh_vu_tru;
          gameOver("win");
          ghiDiem_hienTai();
          ghiDiem_caoNhat();
          break;
        case 3:
          cua_so2.src = anh_nguoi_may;
          gameOver();
          ghiDiem_caoNhat();
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
          ghiDiem_caoNhat();
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
          ghiDiem_hienTai();
          ghiDiem_caoNhat();
          break;
        case 2:
          cua_so3.src = anh_nguoi_may;
          gameOver();
          break;
        case 3:
          cua_so3.src = anh_bai_bien;
          gameOver("win");
          ghiDiem_hienTai();
          ghiDiem_caoNhat();
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
  so_cua_mo = 0;
  tao_soNgauNhien();
  nut_Start.innerHTML ="Chúc may mắn!"
  is_dang_choi = true;
  ghiDiem_hienTai();
};

//Tạo hàm gameOver
var gameOver = (trang_thai) => {
  if (trang_thai === "win") {
    nut_Start.innerHTML = "Bạn đã thắng! Click để chơi lại.";
    so_lan_thang_hienTai ++;
  }
  else {
    nut_Start.innerHTML = "Bạn đã thua! Click để chơi lại.";
    so_lan_thang_hienTai = 0;
  }
  is_dang_choi = false;
}

/*****************************
    HÀM ĐẾM SỐ LẦN THẮNG
****************************/
var diem_hienTai = document.getElementById("diem-hien-tai");
var diem_caoNhat = document.getElementById("diem-cao-nhat");
var ghiDiem_hienTai = () => {
  diem_hienTai.innerHTML = so_lan_thang_hienTai;
}

var ghiDiem_caoNhat = () => {
  if (so_lan_thang_hienTai > so_lan_thang_caoNhat) {
    so_lan_thang_caoNhat = so_lan_thang_hienTai;
  }
  diem_caoNhat.innerHTML = so_lan_thang_caoNhat;

}


//KHỞI TẠO
tao_soNgauNhien();
ghiDiem_hienTai();
ghiDiem_caoNhat();
