//How many of everything you have to start out with
let bitcoins = 0,
  clicks = 0,
  gpuslot = 0,
  gtx1050 = 0,
  rx580 = 0,
  gtx1060 = 0,
  machine = 0,
  rxvega64 = 0,
  gtx1080ti = 0,
  titanv = 0;
//How much everything costs to start with
let clickCost = 50,
  gpuslotCost = 15,
  gtx1050Cost = 100,
  rx580Cost = 1100,
  gtx1060Cost = 12000,
  machineCost = 130000,
  rxvega64Cost = 1200000,
  gtx1080tiCost = 20000000,
  titanvCost = 330000000;
//How much CPS you get at Start
let click = 1,
  gpuslots = 0,
  gtx1050s = 0,
  rx580s = 0,
  gtx1060s = 0,
  factories = 0,
  rxvega64s = 0,
  gtx1080tis = 0,
  titanvs = 0;
//Every time you click, you get X number of bitcoins
document.querySelector(".mainBitcoin").addEventListener("click", function() {
  bitcoins = bitcoins + click;
  document.getElementById("bitcoins").innerHTML = bitcoins + " bitcoins";
});
//Every time you buy a GT 1030 your gpuslots and gpuslot give twice as many bitcoins
document.querySelector(".powerClick").addEventListener("click", function() {
  if (bitcoins - clickCost >= 0) {
    bitcoins = bitcoins - 50;
    click = click * 2;
    clicks = clicks + 1;
    clickCost = clickCost * 5;
    gpuslots = gpuslots * 2;
    document.getElementById("pp").innerHTML = "You have " + clicks + " GeForce GT 1030 | Cost: " + clickCost + " bitcoins";
    document.getElementById("messages").innerHTML = "You bought 1 GeForce GT 1030. Now you have " + clicks + ".";
  } else {
    bitcoins = bitcoins;
    clicks = clicks;
    clickCost = clickCost;
  }
});
let gpuslotRun = function() {
  bitcoins = bitcoins + gpuslots;
  bitcoins = Math.ceil(bitcoins * 10) / 10;
  document.getElementById("bitcoins").innerHTML = bitcoins + " bitcoins";
};
document.querySelector(".gpuslot").addEventListener("click", function() {
  if (bitcoins - gpuslotCost >= 0) {
    console.log("gpuslot is equal to " + gpuslotCost);
    bitcoins = bitcoins - gpuslotCost;
    gpuslotCost = Math.round(gpuslotCost * 1.5);
    gpuslots = gpuslots + 0.1;
    setInterval(gpuslotRun, 1000);
    gpuslot = gpuslot + 1;
    document.getElementById("pc").innerHTML = "You have " + gpuslot + " GPU Slots | Cost: " + gpuslotCost + " bitcoins";
    document.getElementById("messages").innerHTML = "You bought 1 GPU Slot. Now you have " + gpuslot + ".";
  }
});
let gtx1050Run = function() {
    bitcoins = bitcoins + gtx1050s;
    document.getElementById("bitcoins").innerHTML = bitcoins + " bitcoins"
  }
document.querySelector(".gtx1050").addEventListener("click", function() {
  if (bitcoins - gtx1050Cost >= 0) {
    bitcoins = bitcoins - gtx1050Cost;
    gtx1050Cost = Math.round(gtx1050Cost * 1.5);
    gtx1050s = gtx1050s + 1;
    setInterval(gtx1050Run, 1000);
    gtx1050 = gtx1050 + 1;
    document.getElementById("pg").innerHTML = "You have " + gtx1050 + " gtx1050s | Cost: " + gtx1050Cost + " bitcoins";
    document.getElementById("messages").innerHTML = "You bought 1 gtx1050. Now you have " + gtx1050 + ".";
  }
});
let rx580Run = function() {
    bitcoins = bitcoins + rx580s;
    document.getElementById("bitcoins").innerHTML = bitcoins + " bitcoins"
  }
document.querySelector(".rx580").addEventListener("click", function() {
  if (bitcoins - rx580Cost >= 0) {
    bitcoins = bitcoins - rx580Cost;
    rx580Cost = Math.round(rx580Cost * 1.5);
    rx580s = rx580s + 3;
    setInterval(rx580Run, 1000);
    rx580 = rx580 + 1;
    document.getElementById("pf").innerHTML = "You have " + rx580 + " rx580s | Cost: " + rx580Cost + " bitcoins";
    document.getElementById("messages").innerHTML = "You bought 1 rx580. Now you have " + rx580 + ".";
  }
});
let gtx1060Run = function() {
  bitcoins = bitcoins + gtx1060s;
  document.getElementById("bitcoins").innerHTML = bitcoins + " bitcoins"
}
document.querySelector(".gtx1060").addEventListener("click", function() {
  if (bitcoins - gtx1060Cost >= 0) {
    bitcoins = bitcoins - gtx1060Cost;
    gtx1060Cost = Math.round(gtx1060Cost * 1.5);
    gtx1060s = gtx1060s + 10;
    setInterval(gtx1060Run, 1000);
    gtx1060 = gtx1060 + 1;
    document.getElementById("pm").innerHTML = "You have " + gtx1060 + " gtx1060s | Cost: " + gtx1060Cost + " bitcoins";
    document.getElementById("messages").innerHTML = "You bought 1 gtx1060. Now you have " + gtx1060 + ".";
  }
});
let machineRun = function() {
  bitcoins = bitcoins + factories;
  document.getElementById("bitcoins").innerHTML = bitcoins + " bitcoins"
}
document.querySelector(".machine").addEventListener("click", function() {
  if (bitcoins - machineCost >= 0) {
    bitcoins = bitcoins - machineCost;
    machineCost = Math.round(machineCost * 1.5);
    factories = factories + 50;
    setInterval(machineRun, 1000);
    machine = machine + 1;
    document.getElementById("fp").innerHTML = "You have " + machine + " Machines | Cost: " + machineCost + " bitcoins";
    document.getElementById("messages").innerHTML = "You bought 1 machine. Now you have " + machine + ".";
  }
});
let rxvega64Run = function() {
  bitcoins = bitcoins + rxvega64s;
  document.getElementById("bitcoins").innerHTML = bitcoins + " bitcoins"
}
document.querySelector(".rxvega64").addEventListener("click", function() {
  if (bitcoins - rxvega64Cost >= 0) {
    bitcoins = bitcoins - rxvega64Cost;
    rxvega64Cost = Math.round(rxvega64Cost * 1.5);
    rxvega64s = rxvega64s + 100;
    setInterval(rxvega64Run, 1000);
    rxvega64 = rxvega64 + 1;
    document.getElementById("pb").innerHTML = "You have " + rxvega64 + " rxvega64s | Cost: " + rxvega64Cost + " bitcoins";
    document.getElementById("messages").innerHTML = "You bought 1 rxvega64. Now you have " + rxvega64 + ".";
  }
});
let gtx1080tiRun = function() {
  bitcoins = bitcoins + gtx1080tis;
  document.getElementById("bitcoins").innerHTML = bitcoins + " bitcoins"
}
document.querySelector(".rxvega64").addEventListener("click", function() {
  if (bitcoins - gtx1080tiCost >= 0) {
    bitcoins = bitcoins - gtx1080tiCost;
    gtx1080tiCost = Math.round(gtx1080tiCost * 1.5);
    gtx1080tis = gtx1080tis + 500;
    setInterval(gtx1080tiRun, 1000);
    gtx1080ti = gtx1080ti + 1;
    document.getElementById("pt").innerHTML = "You have " + gtx1080ti + " gtx1080tis | Cost: " + gtx1080tiCost + " bitcoins";
    document.getElementById("messages").innerHTML = "You bought 1 gtx1080ti. Now you have " + gtx1080ti + ".";
  }
});
let titanvRun = function() {
  bitcoins = bitcoins + titanvs;
  document.getElementById("bitcoins").innerHTML = bitcoins + " bitcoins"
}
document.querySelector(".titanv").addEventListener("click", function() {
  if (bitcoins - titanvCost >= 0) {
    bitcoins = bitcoins - titanvCost;
    titanvCost = Math.round(titanvCost * 1.5);
    titanvs = titanvs + 1000;
    setInterval(titanvRun, 1000);
    titanv = titanv + 1;
    document.getElementById("pw").innerHTML = "You have " + titanv + " titanvs | Cost: " + titanvCost + " bitcoins";
    document.getElementById("messages").innerHTML = "You bought 1 titanv. Now you have " + titanv + ".";
  }
});
