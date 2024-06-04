var names=new Array();
names[0]="sadguru";
names[1]="murali";
names[2]="prem";
names[3]="hari";
names[4]="akhil";
names[5]="srikanth";
names[6]="sathish";
names[7]="vinay";
names[8]="suneo";
names[9]="ramana";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
