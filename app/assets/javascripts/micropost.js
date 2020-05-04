function setDate(day){
    var now = new Date(day);
    var year = now.getFullYear();
    var month = now.getMonth()+1;
    var date = now.getDate();
    var dateT = ["日","月","火","水","木","金","土"];
    var day = dateT[now.getDay()];
    var content = year + "年" + month + "/" + date + " (" + day + ")";
    document.getElementById("ilmDate").innerHTML = content;
  }
  
document.getElementById("setDate").onchange = function() { 
    var date = document.getElementById("setDate").value;
    setDate(date);
  };
  
function setDay(){
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth()+1;
    var date = now.getDate();
    var toTwoDigits = function (num, digit) {
      num += ''
      if (num.length < digit) {
        num = '0' + num
      }
      return num
    }
    var yyyy = toTwoDigits(year, 4)
    var mm = toTwoDigits(month, 2)
    var dd = toTwoDigits(date, 2)
    var today = yyyy + "-" + mm + "-" + dd;
    document.getElementById("setDate").value = today;
    today = yyyy + "/" + mm + "/" + dd;
    setDate(today);
  }
  
setDay();