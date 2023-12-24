function qrgen(){
    var getted = document.getElementById("inp").value;
    var obj=new QRCode("qr")
    obj.makeCode(getted);
}