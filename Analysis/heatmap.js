'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var playerDiv = document.getElementById('playerDiv');
var makeMapButton = document.getElementById('makeMap');

//Court SVG
var court = document.getElementById("courtgroup");
var courtscale = 0.00154559566895681913;
court.setAttribute('transform', 'scale(' + courtscale * window.innerHeight + ',' + courtscale * window.innerHeight + ')');
var courtwidth = .808124 * window.innerHeight;
var courtheight = .758714 * window.innerHeight;
var courtsvg = document.getElementById('court');
courtsvg.setAttribute('width', '' + courtwidth);
courtsvg.setAttribute('height', '' + courtheight);

//Hoop SVG
var hoop = document.getElementById("hoop");
var hoopTopGap = .115;
var hoopRadius = 0.01236476043276661515;
var hoopx = courtwidth / 2;
var hoopy = hoopTopGap * courtheight;
hoop.setAttribute('cx', '' + hoopx);
hoop.setAttribute('cy', '' + hoopy);
hoop.setAttribute('r', '' + hoopRadius * window.innerHeight);

var roster = {
	"Roster": [{
		"Name": "Rus Hu"
	}, {
		"Name": "Panda He"
	}, {
		"Name": "Roy Li"
	}, {
		"Name": "Steven Sun"
	}, {
		"Name": "Roy Pan"
	}, {
		"Name": "Xincheng Yuan"
	}, {
		"Name": "Ben Song"
	}, {
		"Name": "Sebastian Jin"
	}, {
		"Name": "Eddy Wu"
	}, {
		"Name": "Hongyang Zhou"
	}, {
		"Name": "Roger Wang"
	}, {
		"Name": "Jamie Z"
	}, {
		"Name": "Bryan Yao"
	}, {
		"Name": "Jeremy Dou"
	}, {
		"Name": "Zihan Ai"
	}, {
		"Name": "Liyan Ma"
	}, {
		"Name": "Ziqiao Wang"
	}, {
		"Name": "Gary Guo"
	}, {
		"Name": "Henry Wei"
	}]
};

var data1 = {
	"Practices": [{
		"Date": "2018-9-30",
		"Data": [{
			"Player": "Rus Hu",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.4420538370111442, 0.13838363065838302],
			"Time": [20, 26, 7, 939]
		}, {
			"Player": "Henry Wei",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.8143930904076276, 0.20251263023178004],
			"Time": [20, 43, 55, 115]
		}, {
			"Player": "Steven Sun",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.2265723967476474, 0.2902681033322181],
			"Time": [20, 44, 3, 746]
		}, {
			"Player": "Hongyang Zhou",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.40561212284893516, 0.1333208149025885],
			"Time": [20, 44, 27, 119]
		}, {
			"Player": "Panda He",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.7747825315356613, 0.4742170757927516],
			"Time": [20, 53, 20, 262]
		}, {
			"Player": "Rus Hu",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.2535075767805845, 0.5012187598236556],
			"Time": [20, 59, 52, 369]
		}, {
			"Player": "Rus Hu",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.45948248291480936, 0.10969434137554752],
			"Time": [21, 0, 40, 805]
		}, {
			"Player": "Henry Wei",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.06654573890490342, 0.21601347224723205],
			"Time": [21, 1, 30, 634]
		}, {
			"Player": "Roy Li",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.461066905269688, 0.10125631511589002],
			"Time": [21, 1, 34, 537]
		}, {
			"Player": "Roy Pan",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.5228593771099556, 0.10800673612361603],
			"Time": [21, 3, 1, 496]
		}, {
			"Player": "Rus Hu",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.465820172334324, 0.10631913087168453],
			"Time": [21, 3, 8, 537]
		}, {
			"Player": "Steven Sun",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.6464443207904904, 0.5450964963738746],
			"Time": [21, 3, 35, 939]
		}, {
			"Player": "Henry Wei",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.47374228410871727, 0.12319518339099952],
			"Time": [21, 4, 4, 552]
		}, {
			"Player": "Eddy Wu",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.5355347559489847, 0.10463152561975302],
			"Time": [21, 4, 24, 765]
		}, {
			"Player": "Rus Hu",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.45948248291480936, 0.12319518339099952],
			"Time": [21, 4, 44, 688]
		}, {
			"Player": "Roy Pan",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.5577166689172859, 0.12319518339099952],
			"Time": [21, 5, 1, 632]
		}, {
			"Player": "Roy Li",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.5291970665294701, 0.11644476238327352],
			"Time": [21, 5, 16, 419]
		}, {
			"Player": "Roy Pan",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.5307814888843487, 0.12150757813906803],
			"Time": [21, 5, 18, 487]
		}, {
			"Player": "Steven Sun",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.5894051160148589, 0.3763359711807246],
			"Time": [21, 5, 34, 501]
		}, {
			"Player": "Panda He",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.5323659112392274, 0.12319518339099952],
			"Time": [21, 6, 22, 704]
		}, {
			"Player": "Rus Hu",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.2265723967476474, 0.4894055230601351],
			"Time": [21, 6, 41, 99]
		}, {
			"Player": "Steven Sun",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.5260282218197129, 0.11306955187941052],
			"Time": [21, 6, 45, 25]
		}, {
			"Player": "Panda He",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.7747825315356613, 0.4624038390292311],
			"Time": [21, 7, 33, 176]
		}, {
			"Player": "Steven Sun",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.46423574997944533, 0.12825799914679403],
			"Time": [21, 7, 51, 126]
		}, {
			"Player": "Steven Sun",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.538703600658742, 0.13838363065838302],
			"Time": [21, 7, 53, 654]
		}, {
			"Player": "Jamie Z",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.511768420625805, 0.5619725488931896],
			"Time": [21, 8, 9, 271]
		}, {
			"Player": "Ben Song",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.5101839982709263, 0.13838363065838302],
			"Time": [21, 8, 23, 423]
		}, {
			"Player": "Henry Wei",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.45472921585017345, 0.28520528757642355],
			"Time": [21, 8, 29, 999]
		}, {
			"Player": "Jamie Z",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.5355347559489847, 0.16369770943735554],
			"Time": [21, 8, 35, 131]
		}, {
			"Player": "Eddy Wu",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.5181061100453196, 0.5653477593970526],
			"Time": [21, 8, 47, 149]
		}, {
			"Player": "Jamie Z",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.538703600658742, 0.13500842015452003],
			"Time": [21, 9, 19, 273]
		}, {
			"Player": "Henry Wei",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.044363825936602284, 0.14682165691804053],
			"Time": [21, 9, 23, 594]
		}, {
			"Player": "Henry Wei",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.22974124145740468, 0.15694728842962954],
			"Time": [21, 9, 27, 408]
		}, {
			"Player": "Henry Wei",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.12041609897077764, 0.3206449978669851],
			"Time": [21, 9, 39, 533]
		}, {
			"Player": "Henry Wei",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.07129900596953939, 0.18901178821632802],
			"Time": [21, 11, 5, 313]
		}, {
			"Player": "Eddy Wu",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.7240810161795445, 0.5029063650755871],
			"Time": [21, 11, 20, 248]
		}, {
			"Player": "Eddy Wu",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.5228593771099556, 0.11306955187941052],
			"Time": [21, 11, 36, 766]
		}, {
			"Player": "Eddy Wu",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.5133528429806836, 0.13500842015452003],
			"Time": [21, 11, 39, 691]
		}, {
			"Player": "Ben Song",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.46423574997944533, 0.11981997288713653],
			"Time": [21, 11, 42, 293]
		}, {
			"Player": "Roy Pan",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.5688076254014365, 0.5602849436412581],
			"Time": [21, 13, 11, 320]
		}, {
			"Player": "Jamie Z",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.4563136382050521, 0.12150757813906803],
			"Time": [21, 14, 12, 852]
		}, {
			"Player": "Rus Hu",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.5688076254014365, 0.24639036678199905],
			"Time": [21, 14, 30, 911]
		}, {
			"Player": "Roy Li",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.5783141595307084, 0.24470276153006754],
			"Time": [21, 17, 41, 756]
		}, {
			"Player": "Roy Li",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.548210134788014, 0.11138194662747902],
			"Time": [21, 18, 18, 450]
		}, {
			"Player": "Roy Li",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.6385222090160971, 0.16538531468928702],
			"Time": [21, 18, 45, 627]
		}, {
			"Player": "Eddy Wu",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.1822085708110451, 0.16032249893349254],
			"Time": [21, 19, 4, 627]
		}, {
			"Player": "Henry Wei",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.2661829556196137, 0.5062815755794501],
			"Time": [21, 19, 37, 741]
		}, {
			"Player": "Panda He",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.6670418114039129, 0.5366584701142171],
			"Time": [21, 20, 7, 760]
		}, {
			"Player": "Steven Sun",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.69397699143685, 0.4944683388159296],
			"Time": [21, 20, 24, 770]
		}, {
			"Player": "Steven Sun",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.41987192404284307, 0.5535345226335321],
			"Time": [21, 20, 41, 94]
		}, {
			"Player": "Roy Li",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.5545478242075286, 0.12319518339099952],
			"Time": [21, 22, 7, 236]
		}, {
			"Player": "Eddy Wu",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.621093563112432, 0.3847739974403821],
			"Time": [21, 22, 29, 350]
		}, {
			"Player": "Steven Sun",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.38659905459039134, 0.17382334094894453],
			"Time": [21, 23, 1, 269]
		}, {
			"Player": "Panda He",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.5402880230136207, 0.16369770943735554],
			"Time": [21, 23, 56, 59]
		}, {
			"Player": "",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.5181061100453196, 0.6294767589704496],
			"Time": [21, 24, 58, 41]
		}, {
			"Player": "Roy Li",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.4388849923013869, 0.30376894534767007],
			"Time": [21, 25, 4, 361]
		}, {
			"Player": "Hongyang Zhou",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.5276126441745914, 0.17044813044508153],
			"Time": [21, 25, 19, 450]
		}, {
			"Player": "Hongyang Zhou",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.621093563112432, 0.4134632867232176],
			"Time": [21, 25, 42, 614]
		}, {
			"Player": "Ben Song",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.4341317252367509, 0.18563657771246503],
			"Time": [21, 26, 6, 391]
		}, {
			"Player": "Panda He",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.5006774641416544, 0.41177568147128607],
			"Time": [21, 26, 37, 574]
		}, {
			"Player": "Roy Li",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.5594528558655437, 0.13634686569915536],
			"Time": [1, 22, 1, 169]
		}, {
			"Player": "Roy Li",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.46146958732412074, 0.12119721395480476],
			"Time": [1, 22, 42, 501]
		}, {
			"Player": "Roy Li",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.6037033642390895, 0.23902783863308716],
			"Time": [1, 23, 10, 41]
		}]
	}, {
		"Date": "2018-10-3",
		"Data": [{
			"Player": "Roy Li",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.5357472263797155, 0.11446403540176005],
			"Time": [1, 23, 23, 428]
		}, {
			"Player": "Roy Li",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.45672846142695517, 0.12793039250784946],
			"Time": [1, 23, 26, 70]
		}, {
			"Player": "Roy Li",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.5515509793702676, 0.16327957991133418],
			"Time": [1, 23, 28, 163]
		}, {
			"Player": "Roy Li",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.5152023474919979, 0.16327957991133418],
			"Time": [1, 25, 4, 380]
		}, {
			"Player": "Eddy Wu",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.5183630980901083, 0.16832946382611771],
			"Time": [1, 25, 33, 948]
		}, {
			"Player": "Ben Song",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.5262649745853843, 0.17506264237916244],
			"Time": [1, 28, 17, 532]
		}, {
			"Player": "Steven Sun",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.538907976977826, 0.11614733004002123],
			"Time": [1, 28, 53, 274]
		}, {
			"Player": "Rus Hu",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.4504069602307343, 0.11278074076349888],
			"Time": [1, 29, 9, 165]
		}, {
			"Player": "Hongyang Zhou",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.4108975777543541, 0.15149651744350595],
			"Time": [1, 29, 39, 509]
		}, {
			"Player": "Steven Sun",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.5436491028749916, 0.11446403540176005],
			"Time": [1, 29, 43, 896]
		}, {
			"Player": "Panda He",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.5341668510806603, 0.1110974461252377],
			"Time": [1, 30, 9, 351]
		}, {
			"Player": "Hongyang Zhou",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.8344381579011498, 0.40399071318268254],
			"Time": [1, 30, 29, 178]
		}, {
			"Player": "Roy Pan",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.7569997682474446, 0.4864721504574802],
			"Time": [1, 30, 36, 963]
		}, {
			"Player": "Bryan Yao",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.4172190789505749, 0.26764384748352715],
			"Time": [1, 30, 49, 995]
		}, {
			"Player": "Bryan Yao",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.43618358253923745, 0.5184547485844426],
			"Time": [1, 31, 26, 590]
		}, {
			"Player": "Steven Sun",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.7190707610701197, 0.503305096840092],
			"Time": [1, 31, 37, 803]
		}, {
			"Player": "Bryan Yao",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.7585801435464999, 0.16327957991133418],
			"Time": [1, 31, 46, 777]
		}, {
			"Player": "Rus Hu",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.463049962623176, 0.12119721395480476],
			"Time": [1, 31, 53, 161]
		}, {
			"Player": "Sebastian Jin",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.055313135466932284, 0.16832946382611771],
			"Time": [1, 32, 15, 308]
		}, {
			"Player": "Steven Sun",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.45356771082884473, 0.13634686569915536],
			"Time": [1, 32, 30, 750]
		}, {
			"Player": "Jamie Z",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.5483902287721573, 0.12961368714611066],
			"Time": [1, 32, 36, 325]
		}, {
			"Player": "Rus Hu",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.36190594348364263, 0.24576101718613189],
			"Time": [1, 33, 56, 21]
		}, {
			"Player": "Panda He",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.7633212694436655, 0.4612227308835626],
			"Time": [1, 34, 2, 278]
		}, {
			"Player": "",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.6716595020984635, 0.26259396356874365],
			"Time": [1, 34, 14, 349]
		}, {
			"Player": "Eddy Wu",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.554711729968378, 0.14644663352872242],
			"Time": [1, 34, 16, 353]
		}, {
			"Player": "Jamie Z",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.6495342479116906, 0.13971345497567772],
			"Time": [1, 35, 2, 459]
		}, {
			"Player": "Eddy Wu",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.8059914025181562, 0.4427064898626896],
			"Time": [1, 35, 20, 25]
		}, {
			"Player": "Steven Sun",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.630569744323028, 0.14644663352872242],
			"Time": [1, 36, 23, 252]
		}, {
			"Player": "Zihan Ai",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.13117114982158226, 0.41240718637398843],
			"Time": [1, 36, 30, 573]
		}, {
			"Player": "Panda He",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.5910603618466478, 0.1481299281669836],
			"Time": [1, 36, 40, 211]
		}, {
			"Player": "Steven Sun",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.5436491028749916, 0.1262470978695883],
			"Time": [1, 37, 3, 59]
		}, {
			"Player": "Eddy Wu",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.45198733552978954, 0.560537114540972],
			"Time": [1, 37, 6, 146]
		}, {
			"Player": "Eddy Wu",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.7791250224342176, 0.4578561416070402],
			"Time": [1, 37, 21, 883]
		}, {
			"Player": "Panda He",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.5357472263797155, 0.132980276422633],
			"Time": [1, 37, 28, 547]
		}, {
			"Player": "",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.5436491028749916, 0.17506264237916244],
			"Time": [1, 37, 35, 818]
		}, {
			"Player": "Roy Li",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.5562921052674332, 0.13634686569915536],
			"Time": [1, 37, 49, 556]
		}, {
			"Player": "Jamie Z",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.5420687275759364, 0.12288050859306594],
			"Time": [1, 38, 48, 396]
		}, {
			"Player": "Roy Li",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.5294257251834947, 0.12793039250784946],
			"Time": [1, 39, 6, 614]
		}, {
			"Player": "Eddy Wu",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.2323151689611156, 0.47132249871312965],
			"Time": [1, 39, 13, 177]
		}, {
			"Player": "Rus Hu",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.2702441761384406, 0.5167714539461814],
			"Time": [1, 39, 28, 151]
		}, {
			"Player": "Roy Li",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.20702916417623227, 0.4645893201600849],
			"Time": [1, 39, 45, 924]
		}, {
			"Player": "Roy Li",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.7190707610701197, 0.5100382753931367],
			"Time": [1, 41, 44, 625]
		}, {
			"Player": "Bryan Yao",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.45356771082884473, 0.15149651744350595],
			"Time": [1, 42, 19, 618]
		}, {
			"Player": "Roy Li",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.49623784390333536, 0.5723201770088002],
			"Time": [1, 44, 40, 64]
		}, {
			"Player": "Henry Wei",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.5136219721929426, 0.12793039250784946],
			"Time": [1, 44, 45, 299]
		}, {
			"Player": "Sebastian Jin",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.546809853473102, 0.1262470978695883],
			"Time": [1, 44, 59, 279]
		}, {
			"Player": "Bryan Yao",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.7649016447427207, 0.12793039250784946],
			"Time": [1, 45, 8, 287]
		}, {
			"Player": "Eddy Wu",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.26708342554033015, 0.503305096840092],
			"Time": [2, 15, 55, 710]
		}, {
			"Player": "Bryan Yao",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.4472462096326239, 0.15654640135828948],
			"Time": [2, 16, 4, 805]
		}, {
			"Player": "Hongyang Zhou",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.42037982954868536, 0.16496287454959538],
			"Time": [2, 16, 42, 373]
		}, {
			"Player": "Eddy Wu",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.5167827227910531, 0.4864721504574802],
			"Time": [2, 16, 58, 45]
		}, {
			"Player": "Steven Sun",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.6574361244069665, 0.31814268663136247],
			"Time": [2, 18, 7, 38]
		}, {
			"Player": "Rus Hu",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.45988921202506555, 0.11783062467828241],
			"Time": [2, 18, 33, 949]
		}, {
			"Player": "Jamie Z",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.600542613640979, 0.3770579989705037],
			"Time": [2, 19, 0, 390]
		}, {
			"Player": "Panda He",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.5499706040712125, 0.13971345497567772],
			"Time": [2, 19, 28, 338]
		}, {
			"Player": "Steven Sun",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.31923581040915205, 0.34339210620528016],
			"Time": [2, 19, 34, 486]
		}, {
			"Player": "Steven Sun",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.7996699013219353, 0.43765660594790606],
			"Time": [2, 20, 7, 35]
		}, {
			"Player": "Henry Wei",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.8012502766209905, 0.43765660594790606],
			"Time": [2, 21, 39, 655]
		}, {
			"Player": "Eddy Wu",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.2923694303252135, 0.521821337860965],
			"Time": [2, 22, 1, 807]
		}, {
			"Player": "Roy Li",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.30659280801671035, 0.1700127584643789],
			"Time": [2, 23, 49, 482]
		}, {
			"Player": "Jamie Z",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.5057200956976666, 0.36527493650267545],
			"Time": [2, 26, 3, 780]
		}, {
			"Player": "Steven Sun",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.7791250224342176, 0.4612227308835626],
			"Time": [2, 26, 46, 591]
		}, {
			"Player": "Rus Hu",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.6195071172296416, 0.32655915982266837],
			"Time": [2, 29, 36, 741]
		}, {
			"Player": "Bryan Yao",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.6321501196220832, 0.12456380323132711],
			"Time": [2, 32, 4, 482]
		}, {
			"Player": "Roy Li",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.6274089937249177, 0.34844199012006366],
			"Time": [2, 32, 16, 395]
		}, {
			"Player": "Eddy Wu",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.9134569228539103, 0.25417749037743775],
			"Time": [2, 32, 34, 50]
		}, {
			"Player": "Roy Li",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.3476825657921458, 0.3114095080783178],
			"Time": [2, 33, 18, 87]
		}, {
			"Player": "Roy Pan",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.35716481758647706, 0.27942690995135544],
			"Time": [2, 33, 37, 695]
		}, {
			"Player": "Roy Li",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.6100248654353103, 0.30972621344005663],
			"Time": [2, 34, 26, 441]
		}, {
			"Player": "Eddy Wu",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.20702916417623227, 0.4696392040748684],
			"Time": [2, 34, 35, 360]
		}, {
			"Player": "Roy Li",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.6258286184258625, 0.23229466008004246],
			"Time": [2, 34, 56, 398]
		}, {
			"Player": "Roy Pan",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.14065340161591353, 0.36022505258789195],
			"Time": [2, 35, 46, 484]
		}, {
			"Player": "Jamie Z",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.35874519288553225, 0.13971345497567772],
			"Time": [2, 36, 30, 85]
		}, {
			"Player": "Rus Hu",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.45830883672601036, 0.12119721395480476],
			"Time": [2, 36, 51, 787]
		}, {
			"Player": "Panda He",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.9482251794331249, 0.09258120510436475],
			"Time": [2, 36, 54, 73]
		}, {
			"Player": "Jamie Z",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.5420687275759364, 0.11278074076349888],
			"Time": [2, 38, 15, 500]
		}, {
			"Player": "Eddy Wu",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.17858240879323853, 0.40399071318268254],
			"Time": [2, 39, 46, 572]
		}, {
			"Player": "Steven Sun",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.706427758677678, 0.5066716861166144],
			"Time": [2, 40, 8, 9]
		}, {
			"Player": "Eddy Wu",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.0979832685414229, 0.30972621344005663],
			"Time": [2, 40, 26, 235]
		}, {
			"Player": "Roy Li",
			"Pressure": "Scrimmage",
			"Action": "Shot Missed",
			"Location": [0.7001062574814572, 0.36022505258789195],
			"Time": [2, 41, 28, 347]
		}, {
			"Player": "Henry Wei",
			"Pressure": "Scrimmage",
			"Action": "Shot Made",
			"Location": [0.24495817135355727, 0.49152203437226377],
			"Time": [2, 42, 3, 643]
		}]
	}]
};

var playerChosen = 'Whole Team';
var pressureChosen = "2018-9-30";

function sum(total, currentValue) {
	return [total[0] + currentValue[0], total[1] + currentValue[1]];
}

function findCentroid(raw) {
	return raw.reduce(sum).map(function (x) {
		return x / raw.length;
	});
}

function findDistance(point1, point2) {
	var vector = [point2[0] - point1[0], point2[1] - point1[1]];
	return Math.sqrt(Math.pow(vector[0], 2) + Math.pow(vector[1], 2));
}

var findMax = function findMax(a, b) {
	return Math.max(a, b);
};
var findMin = function findMin(a, b) {
	return Math.min(a, b);
};

function makeGroup(raw) {
	if (raw.length === 1) {
		return {
			group: [],
			nongroup: raw
		};
	} else {
		var locData = raw.map(function (x) {
			return x.Location;
		});
		var k = .2;
		var centroid = findCentroid(locData);
		var distances = locData.map(function (x) {
			return findDistance(centroid, x);
		});
		var max = distances.reduce(findMax);
		var min = distances.reduce(findMin);

		if (max < k) {
			return {
				group: raw,
				nongroup: []
			};
		} else if (min > k) {
			return {
				group: [],
				nongroup: raw
			};
		} else {
			var maxInd = distances.indexOf(max);
			var maxData = raw[maxInd];
			var pointsToGroup = raw;
			pointsToGroup.splice(maxInd, 1);
			var result = makeGroup(pointsToGroup);
			return {
				group: result.group,
				nongroup: [].concat(_toConsumableArray(result.nongroup), [maxData])
			};
		}
	}
}

function makeBuckets(raw) {
	var firstGroup = makeGroup(raw);

	if (firstGroup.nongroup.length === 0) {
		return {
			groups: [firstGroup.group],
			nongroup: []
		};
	} else if (firstGroup.group.length === 0) {
		return {
			groups: [],
			nongroup: firstGroup.nongroup
		};
	} else {
		var newGroup = makeBuckets(firstGroup.nongroup);
		return {
			groups: [firstGroup.group].concat(_toConsumableArray(newGroup.groups)),
			nongroup: newGroup.nongroup
		};
	}
}

ReactDOM.render(React.createElement(PlayerDropdown, { options: roster.Roster }), playerDiv, function () {
	var playerDropdown = document.getElementById('playerDropdown');
	var shotsGroup = document.getElementById('shotsgroup');

	function filterData() {
		var byDate = data1.Practices.filter(function (x) {
			return x.Date === pressureChosen;
		})[0];

		if (playerChosen === 'Whole Team') return byDate.Data;
		var byPlayer = byDate.Data.filter(function (x) {
			return x.Player === playerChosen;
		});
		return byPlayer;
	}

	function makeMap() {
		if (playerChosen === null) {
			alert('Choose player');
			return;
		} else if (pressureChosen === null) {
			alert('Choose pressure');
			return;
		}

		playerChosen = playerDropdown.value;
		var mapData = filterData();
		var groupedData = makeBuckets(mapData);
		groupedData = groupedData.groups.map(function (x) {
			var locs = x.map(function (y) {
				return y.Location;
			});
			return {
				data: x,
				centroid: findCentroid(locs)
			};
		});
		console.log(groupedData);

		ReactDOM.render(React.createElement(HeatMap, { data: groupedData }), shotsGroup);
	}

	makeMapButton.addEventListener('click', makeMap);
});
