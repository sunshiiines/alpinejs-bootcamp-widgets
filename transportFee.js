function transportFee() {
    const radios = document.getElementsByName('time');
    let price = '';
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        price = radios[i].value;
        break;
      }
    }
    switch(price){
      case "morning":
        return "R20";
      case "afternoon":
        return "R10";
      case "nightshift":
        return "free";
    }
  }

  function calculateFee() {
    const fee = transportFee();
    document.getElementById("totalFee").value = fee;
  }
