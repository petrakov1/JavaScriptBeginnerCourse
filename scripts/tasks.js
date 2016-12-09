// 1) Написать функцию getFieldValues, которая будет принимать на вход массив объектов,
// а возвращать будет массив значений одного из полей (отсортированных в порядке возрастания):

var usersData = [
	{ 'user' : 'Alex', 'password' : 'MyNameIsAlex' },
	{ 'user' : 'Bob', 'password' : 'MyNAmeIsBob' }
];

function getFieldValues(users, field) {
  var fields=[];
	for (var i = 0; i < usersData.length; i++) {
	 fields[i]=users[i][field];
	}
	fields.sort();
	return (fields);
}

console.log(getFieldValues(usersData, 'user')); // --> ['Alex', 'Bob']

// // 2) Написать функцию, фильтрующую массив с использованием предиката:
//
var numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
function isEven(x)
{/* Проверка на чётность */
	if (x%2==0)
		{
			return x;
		}
}
console.log(numbers.filter(isEven)); // --> [2, 8, 34]
//
// // 3) Даны 2 строки со словами (без знаков препинания),
// // вывести те слова (по одному разу), которые встречаются в обоих строках

var firstLongString = 'Load up on guns and bring your friends it\'s fun to lose and to pretend';
var secondLongString = 'She\'s over bored and self assured oh no I know a dirty word';
function words(line) {
	var words=[];
	var temp='';
	var count=0;
	for (var i = 0; i < line.length; i++) {
			if (line[i]==' ')
			{
				words[count]=temp;
				count++;
				temp='';
			}
			else {
				temp+=line[i];

			}
		}
		return words;
}
function findSimilarWords(line1,line2) {
var words1=words(line1);
var words2=words(line2);

var uniqueWords=[];

for (var i = 0; i < words1.length; i++) {
	var unique=true;
	for (var j = 0; j < words2.length; j++) {
		if(words1[i]===words2[j]) unique=false;
	}
	if(unique==false) uniqueWords[uniqueWords.length]=words1[i];
	uniqueWords = uniqueWords.filter(function(item, pos) {
    return uniqueWords.indexOf(item) == pos;
})
}

return uniqueWords;
}

console.log(findSimilarWords(firstLongString, secondLongString)); // --> ['and'];
//
// // 4) Дан IP-адрес (строка) и маска подсети (десятичное число). Написать функцию, которая будет валидировать
// // IP-адрес (4 октета, <= 255), а затем выводить сетевой и широковещательный адреса:

var IpAddress = '10.223.98.2';
var subnetMask = 28;

function generateBroadcastAndNetworsAddresses(ip, subnetmask)
{
    var adress=[];
    var j=0,start=0,current=0;
  for(var i=0;i<ip.length;i++)
	{
		if (ip[i]=='.')
		{
		    current=i-start;
		    adress[j]=Number(ip.substr(start,current));
		     start=i+1;
		    j++;
		}
		if(i==ip.length-1)
		{
		    adress[j]=Number(ip.substr(start));
		}
	}
	var mask=Math.pow(2,8) - Math.pow(2,32-subnetmask)
	 mask=mask.toString(2);
	 var last=adress[3].toString(2);
     adress[3]=last&mask
     console.log(adress);
     var broad=adress;
     broad[3]=adress[3]+Math.pow(2,32-subnetmask)-1;
 	return broad;
}

console.log(generateBroadcastAndNetworsAddresses(IpAddress, subnetMask)); // Broadcast - 10.223.98.15, Network - 10.223.98.0
//
// 5) Соединить все массивы в один, не допуская повторения элементов (порядок не важен):
// P. S. 1 == '1' (строковое и числовое представление number'ов считать идентичными)

var totalMessArray = [['a', 1, true], [true, 99, 'aa', undefined], ['1']];
function makeItClean(allTotal) {
	var array=[];

	for (var i = 0; i < allTotal.length; i++) {
		for (var j = 0; j < allTotal[i].length; j++) {
			var unique=true;
			for (var u=0;u<array.length;u++){
					if (allTotal[i][j]==array[u]) unique=false;
			}
			if (unique==true) array[array.length] = allTotal[i][j];

		}
	// 	array = array.filter(function(item, pos) {
	// 		return array.indexOf(item) == pos;
	// })
	}


	return array;

}
console.log(makeItClean(totalMessArray)); // --> ['a', 'aa', 1, undefined, true];
