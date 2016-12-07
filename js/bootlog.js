// bootlog.js
var bootmsg = ["CODE ACADEMY System Ver.1.0.0 rev.1000<br>",">>Initalize System ... ","OK<br>",">>Detecting boot device ... ","OK<br>",">>Loading kernel ... ","OK<br>",">>Detecting OS control device ... ","OK<br>",">>Booting...<br>",">>Processor 0 status ... ","Enable<br>",">>Processor 1 status ... ","Enable<br>",">>Processor 2 status ... ","Enable<br>",">>Processor 3 status ... ","Enable<br>",">>Processor 4 status ... ","Enable[HT]<br>",">>Processor 5 status ... ","Enable[HT]<br>",">>Processor 6 status ... ","Enable[HT]<br>",">>Processor 7 status ... ","Enable[HT]<br>",">>Memory Initialize 32767/32767MBytes<br>","<br>","INIT: Kernel version 1.00 booting...<br>","<br>","ROSS:<br>","<br>","Mounting proc at /proc...　　　　　　　","[OK]<br>","Mounting sysfs at /sts...　　　　　　　　","[OK]<br>","Initialize network service<br>","Setting up localhost...　　　　　　　　　","[OK]<br>","Setting up ethernet...　　　　　　　　　","[OK]<br>","Setting up access route...　　　　　　　","[OK]<br>","Accessing authentication server...　　　","[OK]<br>","Stating system log at /log/sys...　　　　","[OK]<br>","Cleanning /var/lock　　　　　　　　　　","[OK]<br>","Cleaning /tmp　　　　　　　　　　　　　","[OK]<br>","Updating init.rc　　　　　　　　　　　　","[OK]<br>",">>codeac-server.sys : UX Graphics Module Loading..."];

function bootlogtxt() {
  var bootmsgl = bootmsg.length;
  var count = 0;
  var timer = 2000;
  var txt = "";
  var countup = function(){
	txt += bootmsg[count];
	target = document.getElementById("bootlog");
    target.innerHTML = txt;
    count++;
    var id = setTimeout(countup, timer);
	if(count == 1){timer = 200;}
	if(count == 9){timer = 2000;}
	if(count == 10){timer = 100;}
	if(count == 28){timer = 2500;}
	if(count == 29){timer = 200;}
    if(count >= bootmsgl){　
      clearTimeout(id);　//idをclearTimeoutで指定している
    }
  }
  countup();
}