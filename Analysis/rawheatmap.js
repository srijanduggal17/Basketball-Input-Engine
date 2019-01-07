const playerDiv = document.getElementById('playerDiv');
const makeMapButton = document.getElementById('makeMap');

const fs = nodeRequire('fs')

//Court SVG
var court = document.getElementById("courtgroup");
const courtscale = 0.00154559566895681913;
court.setAttribute('transform','scale(' + courtscale*window.innerHeight + ',' + courtscale*window.innerHeight + ')');
const courtwidth = .808124*window.innerHeight;
const courtheight = .758714*window.innerHeight;
const courtsvg = document.getElementById('court');
courtsvg.setAttribute('width', `${courtwidth}`);
courtsvg.setAttribute('height',`${courtheight}`);

//Hoop SVG
var hoop = document.getElementById("hoop");
const hoopTopGap = .115;
const hoopRadius = 0.01236476043276661515;
const hoopx = courtwidth/2;
const hoopy = hoopTopGap*courtheight;
hoop.setAttribute('cx', `${hoopx}`);
hoop.setAttribute('cy', `${hoopy}`);
hoop.setAttribute('r', `${hoopRadius*window.innerHeight}`);

const roster = {
	"Roster": [
		{
			"Name": "Rus Hu"
		},
		{
			"Name": "Panda He"
		},
		{
			"Name": "Roy Li"
		},
		{
			"Name": "Steven Sun"
		},
		{
			"Name": "Roy Pan"
		},
		{
			"Name": "Xincheng Yuan"
		},
		{
			"Name": "Ben Song"
		},
		{
			"Name": "Sebastian Jin"
		},
		{
			"Name": "Eddy Wu"
		},
		{
			"Name": "Hongyang Zhou"
		},
		{
			"Name": "Roger Wang"
		},
		{
			"Name": "Jamie Z"
		},
		{
			"Name": "Bryan Yao"
		},
		{
			"Name": "Jeremy Dou"
		},
		{
			"Name": "Zihan Ai"
		},
		{
			"Name": "Liyan Ma"
		},
		{
			"Name": "Ziqiao Wang"
		},
		{
			"Name": "Gary Guo"
		},
		{
			"Name": "Henry Wei"
		}
	]
};

const data1 = {
	"Practices": [
		{
			"Date": "2018-9-30",
			"Data": [
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.4420538370111442,
						0.13838363065838302
					],
					"Time": [
						20,
						26,
						7,
						939
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.8143930904076276,
						0.20251263023178004
					],
					"Time": [
						20,
						43,
						55,
						115
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.2265723967476474,
						0.2902681033322181
					],
					"Time": [
						20,
						44,
						3,
						746
					]
				},
				{
					"Player": "Hongyang Zhou",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.40561212284893516,
						0.1333208149025885
					],
					"Time": [
						20,
						44,
						27,
						119
					]
				},
				{
					"Player": "Panda He",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.7747825315356613,
						0.4742170757927516
					],
					"Time": [
						20,
						53,
						20,
						262
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.2535075767805845,
						0.5012187598236556
					],
					"Time": [
						20,
						59,
						52,
						369
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.45948248291480936,
						0.10969434137554752
					],
					"Time": [
						21,
						0,
						40,
						805
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.06654573890490342,
						0.21601347224723205
					],
					"Time": [
						21,
						1,
						30,
						634
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.461066905269688,
						0.10125631511589002
					],
					"Time": [
						21,
						1,
						34,
						537
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5228593771099556,
						0.10800673612361603
					],
					"Time": [
						21,
						3,
						1,
						496
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.465820172334324,
						0.10631913087168453
					],
					"Time": [
						21,
						3,
						8,
						537
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6464443207904904,
						0.5450964963738746
					],
					"Time": [
						21,
						3,
						35,
						939
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.47374228410871727,
						0.12319518339099952
					],
					"Time": [
						21,
						4,
						4,
						552
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5355347559489847,
						0.10463152561975302
					],
					"Time": [
						21,
						4,
						24,
						765
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.45948248291480936,
						0.12319518339099952
					],
					"Time": [
						21,
						4,
						44,
						688
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5577166689172859,
						0.12319518339099952
					],
					"Time": [
						21,
						5,
						1,
						632
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5291970665294701,
						0.11644476238327352
					],
					"Time": [
						21,
						5,
						16,
						419
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5307814888843487,
						0.12150757813906803
					],
					"Time": [
						21,
						5,
						18,
						487
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5894051160148589,
						0.3763359711807246
					],
					"Time": [
						21,
						5,
						34,
						501
					]
				},
				{
					"Player": "Panda He",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5323659112392274,
						0.12319518339099952
					],
					"Time": [
						21,
						6,
						22,
						704
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.2265723967476474,
						0.4894055230601351
					],
					"Time": [
						21,
						6,
						41,
						99
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5260282218197129,
						0.11306955187941052
					],
					"Time": [
						21,
						6,
						45,
						25
					]
				},
				{
					"Player": "Panda He",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.7747825315356613,
						0.4624038390292311
					],
					"Time": [
						21,
						7,
						33,
						176
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.46423574997944533,
						0.12825799914679403
					],
					"Time": [
						21,
						7,
						51,
						126
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.538703600658742,
						0.13838363065838302
					],
					"Time": [
						21,
						7,
						53,
						654
					]
				},
				{
					"Player": "Jamie Z",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.511768420625805,
						0.5619725488931896
					],
					"Time": [
						21,
						8,
						9,
						271
					]
				},
				{
					"Player": "Ben Song",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5101839982709263,
						0.13838363065838302
					],
					"Time": [
						21,
						8,
						23,
						423
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.45472921585017345,
						0.28520528757642355
					],
					"Time": [
						21,
						8,
						29,
						999
					]
				},
				{
					"Player": "Jamie Z",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5355347559489847,
						0.16369770943735554
					],
					"Time": [
						21,
						8,
						35,
						131
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5181061100453196,
						0.5653477593970526
					],
					"Time": [
						21,
						8,
						47,
						149
					]
				},
				{
					"Player": "Jamie Z",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.538703600658742,
						0.13500842015452003
					],
					"Time": [
						21,
						9,
						19,
						273
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.044363825936602284,
						0.14682165691804053
					],
					"Time": [
						21,
						9,
						23,
						594
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.22974124145740468,
						0.15694728842962954
					],
					"Time": [
						21,
						9,
						27,
						408
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.12041609897077764,
						0.3206449978669851
					],
					"Time": [
						21,
						9,
						39,
						533
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.07129900596953939,
						0.18901178821632802
					],
					"Time": [
						21,
						11,
						5,
						313
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.7240810161795445,
						0.5029063650755871
					],
					"Time": [
						21,
						11,
						20,
						248
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5228593771099556,
						0.11306955187941052
					],
					"Time": [
						21,
						11,
						36,
						766
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5133528429806836,
						0.13500842015452003
					],
					"Time": [
						21,
						11,
						39,
						691
					]
				},
				{
					"Player": "Ben Song",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.46423574997944533,
						0.11981997288713653
					],
					"Time": [
						21,
						11,
						42,
						293
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5688076254014365,
						0.5602849436412581
					],
					"Time": [
						21,
						13,
						11,
						320
					]
				},
				{
					"Player": "Jamie Z",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.4563136382050521,
						0.12150757813906803
					],
					"Time": [
						21,
						14,
						12,
						852
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5688076254014365,
						0.24639036678199905
					],
					"Time": [
						21,
						14,
						30,
						911
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5783141595307084,
						0.24470276153006754
					],
					"Time": [
						21,
						17,
						41,
						756
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.548210134788014,
						0.11138194662747902
					],
					"Time": [
						21,
						18,
						18,
						450
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6385222090160971,
						0.16538531468928702
					],
					"Time": [
						21,
						18,
						45,
						627
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.1822085708110451,
						0.16032249893349254
					],
					"Time": [
						21,
						19,
						4,
						627
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.2661829556196137,
						0.5062815755794501
					],
					"Time": [
						21,
						19,
						37,
						741
					]
				},
				{
					"Player": "Panda He",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6670418114039129,
						0.5366584701142171
					],
					"Time": [
						21,
						20,
						7,
						760
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.69397699143685,
						0.4944683388159296
					],
					"Time": [
						21,
						20,
						24,
						770
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.41987192404284307,
						0.5535345226335321
					],
					"Time": [
						21,
						20,
						41,
						94
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5545478242075286,
						0.12319518339099952
					],
					"Time": [
						21,
						22,
						7,
						236
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.621093563112432,
						0.3847739974403821
					],
					"Time": [
						21,
						22,
						29,
						350
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.38659905459039134,
						0.17382334094894453
					],
					"Time": [
						21,
						23,
						1,
						269
					]
				},
				{
					"Player": "Panda He",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5402880230136207,
						0.16369770943735554
					],
					"Time": [
						21,
						23,
						56,
						59
					]
				},
				{
					"Player": "",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5181061100453196,
						0.6294767589704496
					],
					"Time": [
						21,
						24,
						58,
						41
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.4388849923013869,
						0.30376894534767007
					],
					"Time": [
						21,
						25,
						4,
						361
					]
				},
				{
					"Player": "Hongyang Zhou",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5276126441745914,
						0.17044813044508153
					],
					"Time": [
						21,
						25,
						19,
						450
					]
				},
				{
					"Player": "Hongyang Zhou",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.621093563112432,
						0.4134632867232176
					],
					"Time": [
						21,
						25,
						42,
						614
					]
				},
				{
					"Player": "Ben Song",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.4341317252367509,
						0.18563657771246503
					],
					"Time": [
						21,
						26,
						6,
						391
					]
				},
				{
					"Player": "Panda He",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5006774641416544,
						0.41177568147128607
					],
					"Time": [
						21,
						26,
						37,
						574
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5594528558655437,
						0.13634686569915536
					],
					"Time": [
						1,
						22,
						1,
						169
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.46146958732412074,
						0.12119721395480476
					],
					"Time": [
						1,
						22,
						42,
						501
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6037033642390895,
						0.23902783863308716
					],
					"Time": [
						1,
						23,
						10,
						41
					]
				}
			]
		},
		{
			"Date": "2018-10-3",
			"Data": [
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5357472263797155,
						0.11446403540176005
					],
					"Time": [
						1,
						23,
						23,
						428
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.45672846142695517,
						0.12793039250784946
					],
					"Time": [
						1,
						23,
						26,
						70
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5515509793702676,
						0.16327957991133418
					],
					"Time": [
						1,
						23,
						28,
						163
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5152023474919979,
						0.16327957991133418
					],
					"Time": [
						1,
						25,
						4,
						380
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5183630980901083,
						0.16832946382611771
					],
					"Time": [
						1,
						25,
						33,
						948
					]
				},
				{
					"Player": "Ben Song",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5262649745853843,
						0.17506264237916244
					],
					"Time": [
						1,
						28,
						17,
						532
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.538907976977826,
						0.11614733004002123
					],
					"Time": [
						1,
						28,
						53,
						274
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.4504069602307343,
						0.11278074076349888
					],
					"Time": [
						1,
						29,
						9,
						165
					]
				},
				{
					"Player": "Hongyang Zhou",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.4108975777543541,
						0.15149651744350595
					],
					"Time": [
						1,
						29,
						39,
						509
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5436491028749916,
						0.11446403540176005
					],
					"Time": [
						1,
						29,
						43,
						896
					]
				},
				{
					"Player": "Panda He",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5341668510806603,
						0.1110974461252377
					],
					"Time": [
						1,
						30,
						9,
						351
					]
				},
				{
					"Player": "Hongyang Zhou",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.8344381579011498,
						0.40399071318268254
					],
					"Time": [
						1,
						30,
						29,
						178
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.7569997682474446,
						0.4864721504574802
					],
					"Time": [
						1,
						30,
						36,
						963
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.4172190789505749,
						0.26764384748352715
					],
					"Time": [
						1,
						30,
						49,
						995
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.43618358253923745,
						0.5184547485844426
					],
					"Time": [
						1,
						31,
						26,
						590
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.7190707610701197,
						0.503305096840092
					],
					"Time": [
						1,
						31,
						37,
						803
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.7585801435464999,
						0.16327957991133418
					],
					"Time": [
						1,
						31,
						46,
						777
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.463049962623176,
						0.12119721395480476
					],
					"Time": [
						1,
						31,
						53,
						161
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.055313135466932284,
						0.16832946382611771
					],
					"Time": [
						1,
						32,
						15,
						308
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.45356771082884473,
						0.13634686569915536
					],
					"Time": [
						1,
						32,
						30,
						750
					]
				},
				{
					"Player": "Jamie Z",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5483902287721573,
						0.12961368714611066
					],
					"Time": [
						1,
						32,
						36,
						325
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.36190594348364263,
						0.24576101718613189
					],
					"Time": [
						1,
						33,
						56,
						21
					]
				},
				{
					"Player": "Panda He",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.7633212694436655,
						0.4612227308835626
					],
					"Time": [
						1,
						34,
						2,
						278
					]
				},
				{
					"Player": "",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6716595020984635,
						0.26259396356874365
					],
					"Time": [
						1,
						34,
						14,
						349
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.554711729968378,
						0.14644663352872242
					],
					"Time": [
						1,
						34,
						16,
						353
					]
				},
				{
					"Player": "Jamie Z",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.6495342479116906,
						0.13971345497567772
					],
					"Time": [
						1,
						35,
						2,
						459
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.8059914025181562,
						0.4427064898626896
					],
					"Time": [
						1,
						35,
						20,
						25
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.630569744323028,
						0.14644663352872242
					],
					"Time": [
						1,
						36,
						23,
						252
					]
				},
				{
					"Player": "Zihan Ai",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.13117114982158226,
						0.41240718637398843
					],
					"Time": [
						1,
						36,
						30,
						573
					]
				},
				{
					"Player": "Panda He",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5910603618466478,
						0.1481299281669836
					],
					"Time": [
						1,
						36,
						40,
						211
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5436491028749916,
						0.1262470978695883
					],
					"Time": [
						1,
						37,
						3,
						59
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.45198733552978954,
						0.560537114540972
					],
					"Time": [
						1,
						37,
						6,
						146
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.7791250224342176,
						0.4578561416070402
					],
					"Time": [
						1,
						37,
						21,
						883
					]
				},
				{
					"Player": "Panda He",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5357472263797155,
						0.132980276422633
					],
					"Time": [
						1,
						37,
						28,
						547
					]
				},
				{
					"Player": "",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5436491028749916,
						0.17506264237916244
					],
					"Time": [
						1,
						37,
						35,
						818
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5562921052674332,
						0.13634686569915536
					],
					"Time": [
						1,
						37,
						49,
						556
					]
				},
				{
					"Player": "Jamie Z",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5420687275759364,
						0.12288050859306594
					],
					"Time": [
						1,
						38,
						48,
						396
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5294257251834947,
						0.12793039250784946
					],
					"Time": [
						1,
						39,
						6,
						614
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.2323151689611156,
						0.47132249871312965
					],
					"Time": [
						1,
						39,
						13,
						177
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.2702441761384406,
						0.5167714539461814
					],
					"Time": [
						1,
						39,
						28,
						151
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.20702916417623227,
						0.4645893201600849
					],
					"Time": [
						1,
						39,
						45,
						924
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.7190707610701197,
						0.5100382753931367
					],
					"Time": [
						1,
						41,
						44,
						625
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.45356771082884473,
						0.15149651744350595
					],
					"Time": [
						1,
						42,
						19,
						618
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.49623784390333536,
						0.5723201770088002
					],
					"Time": [
						1,
						44,
						40,
						64
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5136219721929426,
						0.12793039250784946
					],
					"Time": [
						1,
						44,
						45,
						299
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.546809853473102,
						0.1262470978695883
					],
					"Time": [
						1,
						44,
						59,
						279
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.7649016447427207,
						0.12793039250784946
					],
					"Time": [
						1,
						45,
						8,
						287
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.26708342554033015,
						0.503305096840092
					],
					"Time": [
						2,
						15,
						55,
						710
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.4472462096326239,
						0.15654640135828948
					],
					"Time": [
						2,
						16,
						4,
						805
					]
				},
				{
					"Player": "Hongyang Zhou",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.42037982954868536,
						0.16496287454959538
					],
					"Time": [
						2,
						16,
						42,
						373
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5167827227910531,
						0.4864721504574802
					],
					"Time": [
						2,
						16,
						58,
						45
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6574361244069665,
						0.31814268663136247
					],
					"Time": [
						2,
						18,
						7,
						38
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.45988921202506555,
						0.11783062467828241
					],
					"Time": [
						2,
						18,
						33,
						949
					]
				},
				{
					"Player": "Jamie Z",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.600542613640979,
						0.3770579989705037
					],
					"Time": [
						2,
						19,
						0,
						390
					]
				},
				{
					"Player": "Panda He",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5499706040712125,
						0.13971345497567772
					],
					"Time": [
						2,
						19,
						28,
						338
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.31923581040915205,
						0.34339210620528016
					],
					"Time": [
						2,
						19,
						34,
						486
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.7996699013219353,
						0.43765660594790606
					],
					"Time": [
						2,
						20,
						7,
						35
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.8012502766209905,
						0.43765660594790606
					],
					"Time": [
						2,
						21,
						39,
						655
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.2923694303252135,
						0.521821337860965
					],
					"Time": [
						2,
						22,
						1,
						807
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.30659280801671035,
						0.1700127584643789
					],
					"Time": [
						2,
						23,
						49,
						482
					]
				},
				{
					"Player": "Jamie Z",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5057200956976666,
						0.36527493650267545
					],
					"Time": [
						2,
						26,
						3,
						780
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.7791250224342176,
						0.4612227308835626
					],
					"Time": [
						2,
						26,
						46,
						591
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6195071172296416,
						0.32655915982266837
					],
					"Time": [
						2,
						29,
						36,
						741
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6321501196220832,
						0.12456380323132711
					],
					"Time": [
						2,
						32,
						4,
						482
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6274089937249177,
						0.34844199012006366
					],
					"Time": [
						2,
						32,
						16,
						395
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.9134569228539103,
						0.25417749037743775
					],
					"Time": [
						2,
						32,
						34,
						50
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.3476825657921458,
						0.3114095080783178
					],
					"Time": [
						2,
						33,
						18,
						87
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.35716481758647706,
						0.27942690995135544
					],
					"Time": [
						2,
						33,
						37,
						695
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.6100248654353103,
						0.30972621344005663
					],
					"Time": [
						2,
						34,
						26,
						441
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.20702916417623227,
						0.4696392040748684
					],
					"Time": [
						2,
						34,
						35,
						360
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.6258286184258625,
						0.23229466008004246
					],
					"Time": [
						2,
						34,
						56,
						398
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.14065340161591353,
						0.36022505258789195
					],
					"Time": [
						2,
						35,
						46,
						484
					]
				},
				{
					"Player": "Jamie Z",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.35874519288553225,
						0.13971345497567772
					],
					"Time": [
						2,
						36,
						30,
						85
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.45830883672601036,
						0.12119721395480476
					],
					"Time": [
						2,
						36,
						51,
						787
					]
				},
				{
					"Player": "Panda He",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.9482251794331249,
						0.09258120510436475
					],
					"Time": [
						2,
						36,
						54,
						73
					]
				},
				{
					"Player": "Jamie Z",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5420687275759364,
						0.11278074076349888
					],
					"Time": [
						2,
						38,
						15,
						500
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.17858240879323853,
						0.40399071318268254
					],
					"Time": [
						2,
						39,
						46,
						572
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.706427758677678,
						0.5066716861166144
					],
					"Time": [
						2,
						40,
						8,
						9
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.0979832685414229,
						0.30972621344005663
					],
					"Time": [
						2,
						40,
						26,
						235
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.7001062574814572,
						0.36022505258789195
					],
					"Time": [
						2,
						41,
						28,
						347
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.24495817135355727,
						0.49152203437226377
					],
					"Time": [
						2,
						42,
						3,
						643
					]
				}
			]
		}
	]
};

const data2 = {
	"Practices": [
		{
			"Date": "2018-9-26",
			"Data": [
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.7459501407158601,
						0.5080028932747223
					],
					"Time": [
						1,
						6,
						14,
						739
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.2908187683102768,
						0.5296859435974238
					],
					"Time": [
						1,
						7,
						9,
						856
					]
				},
				{
					"Player": "Liyan Ma",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6107194134515813,
						0.17811077050790566
					],
					"Time": [
						1,
						32,
						3,
						723
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.08579153665153166,
						0.2632941824899475
					],
					"Time": [
						1,
						32,
						18,
						941
					]
				},
				{
					"Player": "Hongyang Zhou",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.4565854662471346,
						0.13939103778879575
					],
					"Time": [
						1,
						32,
						49,
						958
					]
				},
				{
					"Player": "Hongyang Zhou",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.9218954955435775,
						0.1455861950238533
					],
					"Time": [
						1,
						33,
						15,
						97
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5278360644831525,
						0.13164709124497376
					],
					"Time": [
						1,
						33,
						32,
						268
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5554638474726288,
						0.2617453931811831
					],
					"Time": [
						1,
						34,
						8,
						354
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.3475284281307808,
						0.35467275170704693
					],
					"Time": [
						1,
						34,
						28,
						272
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.7168682638848324,
						0.5498202046113609
					],
					"Time": [
						1,
						34,
						49,
						612
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6819700116875992,
						0.5203932077448374
					],
					"Time": [
						1,
						35,
						2,
						117
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5787293489374509,
						0.18120834912543446
					],
					"Time": [
						1,
						35,
						25,
						52
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6936027624200102,
						0.5358811008324814
					],
					"Time": [
						1,
						35,
						49,
						612
					]
				},
				{
					"Player": "Panda He",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.6441635718072631,
						0.14248861640632451
					],
					"Time": [
						1,
						36,
						33,
						594
					]
				},
				{
					"Player": "Panda He",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.6572504163812256,
						0.1471349843326177
					],
					"Time": [
						1,
						36,
						37,
						302
					]
				},
				{
					"Player": "Hongyang Zhou",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.33589567739836973,
						0.22457444977083757
					],
					"Time": [
						1,
						36,
						49,
						628
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.620898070342441,
						0.24006234285848155
					],
					"Time": [
						1,
						37,
						1,
						516
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5511015659479745,
						0.2044401887569004
					],
					"Time": [
						1,
						37,
						53,
						907
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.46967231082109706,
						0.1471349843326177
					],
					"Time": [
						1,
						38,
						3,
						356
					]
				},
				{
					"Player": "Jeremy Dou",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6892404808953561,
						0.5296859435974238
					],
					"Time": [
						1,
						38,
						45,
						579
					]
				},
				{
					"Player": "Panda He",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5816375366205536,
						0.17965955981667006
					],
					"Time": [
						1,
						39,
						9,
						757
					]
				},
				{
					"Player": "Hongyang Zhou",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6368931025995063,
						0.12235435539238737
					],
					"Time": [
						1,
						39,
						22,
						268
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.3213547389828559,
						0.5296859435974238
					],
					"Time": [
						1,
						39,
						48,
						195
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.46531002929644294,
						0.2973675472827642
					],
					"Time": [
						1,
						40,
						16,
						703
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.21375179470805347,
						0.4661855819380835
					],
					"Time": [
						1,
						40,
						41,
						570
					]
				},
				{
					"Player": "Hongyang Zhou",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.08433744280998028,
						0.24161113216724595
					],
					"Time": [
						1,
						40,
						55,
						58
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.9233495893851289,
						0.22612323907960197
					],
					"Time": [
						1,
						41,
						18,
						20
					]
				},
				{
					"Player": "Jeremy Dou",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5976325688776188,
						0.11151283023103659
					],
					"Time": [
						1,
						41,
						35,
						749
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5627343166803856,
						0.18585471705172765
					],
					"Time": [
						1,
						42,
						1,
						993
					]
				},
				{
					"Player": "Jeremy Dou",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5889080058283106,
						0.3871973271910993
					],
					"Time": [
						1,
						42,
						22,
						30
					]
				},
				{
					"Player": "Jeremy Dou",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5380147213740121,
						0.1564277201852041
					],
					"Time": [
						1,
						42,
						40,
						874
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.4507690908809291,
						0.16262287742026169
					],
					"Time": [
						1,
						42,
						52,
						938
					]
				},
				{
					"Player": "Panda He",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.19775676245098825,
						0.4599904247030259
					],
					"Time": [
						1,
						43,
						47,
						56
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.12941435189807318,
						0.3825509592648061
					],
					"Time": [
						1,
						43,
						54,
						661
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.31553836361665033,
						0.5451738366850678
					],
					"Time": [
						1,
						44,
						4,
						60
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.10324066275014827,
						0.3113066510616438
					],
					"Time": [
						1,
						44,
						11,
						81
					]
				},
				{
					"Player": "Jeremy Dou",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.4376822463069666,
						0.22767202838836637
					],
					"Time": [
						1,
						44,
						19,
						433
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5394688152155636,
						0.21373292460948679
					],
					"Time": [
						1,
						44,
						35,
						346
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5394688152155636,
						0.3794533806472773
					],
					"Time": [
						1,
						45,
						0,
						918
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6368931025995063,
						0.5467226259938321
					],
					"Time": [
						1,
						45,
						26,
						529
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.1832158240354744,
						0.17811077050790566
					],
					"Time": [
						1,
						45,
						49,
						75
					]
				},
				{
					"Player": "Hongyang Zhou",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6427094779657118,
						0.5529177832288897
					],
					"Time": [
						1,
						46,
						5,
						995
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.45367727856403184,
						0.5699544656252981
					],
					"Time": [
						1,
						46,
						48,
						427
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.9335282462759886,
						0.17965955981667006
					],
					"Time": [
						1,
						46,
						57,
						287
					]
				},
				{
					"Player": "Liyan Ma",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.3547988973385377,
						0.542076258067539
					],
					"Time": [
						1,
						47,
						23,
						787
					]
				},
				{
					"Player": "Hongyang Zhou",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.42604949557455557,
						0.17811077050790566
					],
					"Time": [
						1,
						51,
						55,
						136
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.42459540173300414,
						0.19050108497802085
					],
					"Time": [
						1,
						52,
						5,
						351
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.658704510222777,
						0.22922081769713076
					],
					"Time": [
						1,
						52,
						25,
						820
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.3882430556942196,
						0.5544665725376542
					],
					"Time": [
						1,
						52,
						52,
						74
					]
				},
				{
					"Player": "Jeremy Dou",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.4551313724055832,
						0.2121841353007224
					],
					"Time": [
						1,
						53,
						14,
						620
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6368931025995063,
						0.542076258067539
					],
					"Time": [
						1,
						53,
						40,
						922
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.28791058062717406,
						0.18430592774296325
					],
					"Time": [
						1,
						53,
						53,
						0
					]
				},
				{
					"Player": "Hongyang Zhou",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.06543422286981228,
						0.19669624221307844
					],
					"Time": [
						1,
						54,
						1,
						389
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.4638559354548915,
						0.210635345991958
					],
					"Time": [
						1,
						54,
						25,
						870
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.08433744280998028,
						0.2880748114301778
					],
					"Time": [
						1,
						54,
						39,
						551
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.33444158355681836,
						0.22767202838836637
					],
					"Time": [
						1,
						54,
						51,
						237
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.20357313781719377,
						0.4615392140117903
					],
					"Time": [
						1,
						55,
						17,
						34
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.46240184161334014,
						0.202891399448136
					],
					"Time": [
						1,
						55,
						45,
						547
					]
				},
				{
					"Player": "Hongyang Zhou",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5511015659479745,
						0.1982450315218428
					],
					"Time": [
						1,
						55,
						51,
						671
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5729129735712454,
						0.19359866359554964
					],
					"Time": [
						1,
						56,
						2,
						810
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.23992548385597837,
						0.3655142768683977
					],
					"Time": [
						1,
						56,
						11,
						89
					]
				},
				{
					"Player": "Hongyang Zhou",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.8244712081596348,
						0.202891399448136
					],
					"Time": [
						1,
						56,
						20,
						998
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.44059043399006936,
						0.19514745290431404
					],
					"Time": [
						1,
						57,
						1,
						796
					]
				},
				{
					"Player": "Zihan Ai",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.2922728621518282,
						0.2121841353007224
					],
					"Time": [
						1,
						57,
						19,
						636
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.9306200585928859,
						0.18120834912543446
					],
					"Time": [
						1,
						57,
						31,
						737
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5772752550958995,
						0.21528171391825118
					],
					"Time": [
						1,
						58,
						7,
						375
					]
				},
				{
					"Player": "Jeremy Dou",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.44059043399006936,
						0.19204987428678524
					],
					"Time": [
						1,
						58,
						22,
						910
					]
				},
				{
					"Player": "Hongyang Zhou",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.571458879729694,
						0.18740350636049205
					],
					"Time": [
						1,
						58,
						39,
						173
					]
				},
				{
					"Player": "Jeremy Dou",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.41877902636679865,
						0.19514745290431404
					],
					"Time": [
						1,
						58,
						59,
						683
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.4478609031978263,
						0.5622105190814761
					],
					"Time": [
						2,
						0,
						12,
						848
					]
				},
				{
					"Player": "Hongyang Zhou",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.3998758064266306,
						0.3995876416612144
					],
					"Time": [
						2,
						14,
						6,
						866
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.32426292666595863,
						0.5389786794500102
					],
					"Time": [
						2,
						14,
						17,
						244
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.7401337653496545,
						0.4940637894958427
					],
					"Time": [
						2,
						14,
						33,
						580
					]
				},
				{
					"Player": "Liyan Ma",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.908808650969615,
						0.2787820755775915
					],
					"Time": [
						2,
						15,
						1,
						111
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.41877902636679865,
						0.3097578617528794
					],
					"Time": [
						2,
						15,
						24,
						175
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.9291659647513344,
						0.1502325629501465
					],
					"Time": [
						2,
						15,
						33,
						739
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5816375366205536,
						0.19514745290431404
					],
					"Time": [
						2,
						15,
						41,
						456
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.30681380056734203,
						0.5250395756711306
					],
					"Time": [
						2,
						15,
						50,
						65
					]
				},
				{
					"Player": "Panda He",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.42604949557455557,
						0.1997938208306072
					],
					"Time": [
						2,
						16,
						0,
						908
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.07706697360222335,
						0.210635345991958
					],
					"Time": [
						2,
						16,
						9,
						486
					]
				},
				{
					"Player": "Panda He",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.27046145452855747,
						0.3128554403704082
					],
					"Time": [
						2,
						16,
						50,
						597
					]
				},
				{
					"Player": "Hongyang Zhou",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.916079120177372,
						0.2555502359461255
					],
					"Time": [
						2,
						16,
						57,
						921
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6921486685784588,
						0.292721179356471
					],
					"Time": [
						2,
						17,
						7,
						14
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.295181049834931,
						0.5250395756711306
					],
					"Time": [
						2,
						17,
						19,
						452
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.4565854662471346,
						0.5699544656252981
					],
					"Time": [
						2,
						17,
						42,
						32
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.3678857419125002,
						0.2741357076512983
					],
					"Time": [
						2,
						17,
						52,
						906
					]
				},
				{
					"Player": "Panda He",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.7619451729729253,
						0.4956125788046071
					],
					"Time": [
						2,
						18,
						9,
						28
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.3766103049618085,
						0.49716136811337147
					],
					"Time": [
						2,
						18,
						43,
						422
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.46531002929644294,
						0.2772332862688271
					],
					"Time": [
						2,
						18,
						51,
						779
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.3998758064266306,
						0.18895229566925645
					],
					"Time": [
						2,
						19,
						9,
						815
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.41877902636679865,
						0.19050108497802085
					],
					"Time": [
						2,
						19,
						19,
						777
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5540097536310773,
						0.2013426101393716
					],
					"Time": [
						2,
						19,
						30,
						333
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.9102627448111664,
						0.2679405504162407
					],
					"Time": [
						2,
						19,
						42,
						353
					]
				},
				{
					"Player": "Panda He",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.43186587094076107,
						0.22147687115330877
					],
					"Time": [
						2,
						20,
						9,
						791
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.9015381817618582,
						0.2725869183425339
					],
					"Time": [
						2,
						20,
						24,
						366
					]
				},
				{
					"Player": "Panda He",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.9291659647513344,
						0.24625750009353914
					],
					"Time": [
						2,
						20,
						48,
						452
					]
				},
				{
					"Player": "Hongyang Zhou",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.4173249325252472,
						0.19514745290431404
					],
					"Time": [
						2,
						21,
						3,
						397
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.41587083868369584,
						0.17965955981667006
					],
					"Time": [
						2,
						21,
						25,
						119
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.44931499703937766,
						0.19050108497802085
					],
					"Time": [
						2,
						21,
						36,
						449
					]
				},
				{
					"Player": "Panda He",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.36352346038784605,
						0.24780628940230354
					],
					"Time": [
						2,
						22,
						2,
						789
					]
				},
				{
					"Player": "Hongyang Zhou",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.44931499703937766,
						0.19669624221307844
					],
					"Time": [
						2,
						22,
						8,
						582
					]
				},
				{
					"Player": "Hongyang Zhou",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.18757810556012855,
						0.43211221714526676
					],
					"Time": [
						2,
						22,
						35,
						956
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.9175332140189234,
						0.21528171391825118
					],
					"Time": [
						2,
						22,
						51,
						596
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.9073545571280637,
						0.28187965419512023
					],
					"Time": [
						2,
						22,
						58,
						624
					]
				},
				{
					"Player": "Hongyang Zhou",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.571458879729694,
						0.202891399448136
					],
					"Time": [
						2,
						23,
						3,
						971
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.44495271551472354,
						0.24780628940230354
					],
					"Time": [
						2,
						23,
						27,
						974
					]
				},
				{
					"Player": "Hongyang Zhou",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.3577070850216405,
						0.43985616368908875
					],
					"Time": [
						2,
						24,
						12,
						570
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.9131709324942692,
						0.22922081769713076
					],
					"Time": [
						2,
						24,
						31,
						99
					]
				},
				{
					"Player": "Liyan Ma",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.4304117770992097,
						0.19669624221307844
					],
					"Time": [
						2,
						24,
						48,
						773
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.13523072726427873,
						0.3670630661771621
					],
					"Time": [
						2,
						25,
						23,
						403
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.7503124222405142,
						0.34847759447198934
					],
					"Time": [
						2,
						25,
						33,
						824
					]
				},
				{
					"Player": "Liyan Ma",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.7357714838250003,
						0.5622105190814761
					],
					"Time": [
						2,
						26,
						5,
						401
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.3213547389828559,
						0.5467226259938321
					],
					"Time": [
						2,
						26,
						29,
						368
					]
				}
			]
		},
		{
			"Date": "2018-9-26",
			"Data": [
				{
					"Player": "Ben Song",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5801834427790022,
						0.19359866359554964
					],
					"Time": [
						2,
						39,
						24,
						783
					]
				},
				{
					"Player": "Hongyang Zhou",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.9335282462759886,
						0.1564277201852041
					],
					"Time": [
						2,
						39,
						36,
						141
					]
				},
				{
					"Player": "Jamie Z",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5467392844233204,
						0.1997938208306072
					],
					"Time": [
						2,
						39,
						59,
						910
					]
				},
				{
					"Player": "Jamie Z",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5467392844233204,
						0.19669624221307844
					],
					"Time": [
						2,
						40,
						6,
						761
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.3475284281307808,
						0.33608728000187416
					],
					"Time": [
						2,
						40,
						23,
						545
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.4173249325252472,
						0.18895229566925645
					],
					"Time": [
						2,
						40,
						37,
						259
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5278360644831525,
						0.405782798896272
					],
					"Time": [
						2,
						40,
						48,
						742
					]
				},
				{
					"Player": "Jeremy Dou",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5525556597895259,
						0.18740350636049205
					],
					"Time": [
						2,
						41,
						15,
						290
					]
				},
				{
					"Player": "Jamie Z",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.44495271551472354,
						0.1997938208306072
					],
					"Time": [
						2,
						41,
						19,
						619
					]
				},
				{
					"Player": "",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.2908187683102768,
						0.1997938208306072
					],
					"Time": [
						2,
						41,
						36,
						639
					]
				},
				{
					"Player": "Jamie Z",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5598261289972829,
						0.18430592774296325
					],
					"Time": [
						2,
						42,
						7,
						21
					]
				},
				{
					"Player": "Jamie Z",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5540097536310773,
						0.19669624221307844
					],
					"Time": [
						2,
						42,
						10,
						689
					]
				},
				{
					"Player": "Hongyang Zhou",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.4289576832576583,
						0.18740350636049205
					],
					"Time": [
						2,
						42,
						21,
						129
					]
				},
				{
					"Player": "Jeremy Dou",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5772752550958995,
						0.17501319189037687
					],
					"Time": [
						2,
						42,
						32,
						56
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.3475284281307808,
						0.542076258067539
					],
					"Time": [
						2,
						43,
						9,
						221
					]
				},
				{
					"Player": "Jeremy Dou",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.7386796715081031,
						0.49871015742213587
					],
					"Time": [
						2,
						43,
						34,
						641
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.9291659647513344,
						0.21528171391825118
					],
					"Time": [
						2,
						43,
						43,
						234
					]
				},
				{
					"Player": "Jamie Z",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.51474921990919,
						0.2075377673744292
					],
					"Time": [
						2,
						44,
						0,
						529
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.3678857419125002,
						0.5529177832288897
					],
					"Time": [
						2,
						44,
						18,
						391
					]
				},
				{
					"Player": "Hongyang Zhou",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.9306200585928859,
						0.18585471705172765
					],
					"Time": [
						2,
						44,
						26,
						537
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.658704510222777,
						0.12545193400991617
					],
					"Time": [
						2,
						44,
						41,
						733
					]
				},
				{
					"Player": "Jamie Z",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5394688152155636,
						0.2059889780656648
					],
					"Time": [
						2,
						44,
						54,
						464
					]
				},
				{
					"Player": "Hongyang Zhou",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.238471390014427,
						0.5049053146571935
					],
					"Time": [
						2,
						45,
						3,
						47
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5321983460078066,
						0.2059889780656648
					],
					"Time": [
						2,
						45,
						28,
						58
					]
				},
				{
					"Player": "",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.3547988973385377,
						0.2601966038724187
					],
					"Time": [
						2,
						45,
						45,
						50
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.7052355131524213,
						0.5281371542886594
					],
					"Time": [
						2,
						45,
						56,
						0
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.439136340148518,
						0.1997938208306072
					],
					"Time": [
						2,
						46,
						17,
						619
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.878272680297036,
						0.35467275170704693
					],
					"Time": [
						2,
						46,
						28,
						16
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.09015381817618581,
						0.2942699686652354
					],
					"Time": [
						2,
						47,
						56,
						376
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5656425043634884,
						0.17965955981667006
					],
					"Time": [
						2,
						48,
						13,
						958
					]
				},
				{
					"Player": "Jeremy Dou",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5685506920465911,
						0.3190505976054658
					],
					"Time": [
						2,
						48,
						42,
						375
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.4376822463069666,
						0.4011364309699788
					],
					"Time": [
						2,
						49,
						34,
						922
					]
				},
				{
					"Player": "Jeremy Dou",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5772752550958995,
						0.21373292460948679
					],
					"Time": [
						2,
						49,
						45,
						550
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.8622776480399708,
						0.3670630661771621
					],
					"Time": [
						2,
						49,
						55,
						141
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.8448285219413542,
						0.4150755347488584
					],
					"Time": [
						2,
						50,
						7,
						846
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.36352346038784605,
						0.16726924534655488
					],
					"Time": [
						2,
						50,
						20,
						387
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.3388038650814725,
						0.1502325629501465
					],
					"Time": [
						2,
						50,
						26,
						984
					]
				},
				{
					"Player": "Jamie Z",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5627343166803856,
						0.18585471705172765
					],
					"Time": [
						2,
						50,
						47,
						640
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.07125059823601781,
						0.24161113216724595
					],
					"Time": [
						3,
						3,
						57,
						300
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.734317389983449,
						0.5080028932747223
					],
					"Time": [
						3,
						4,
						32,
						548
					]
				},
				{
					"Player": "Jeremy Dou",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6499799471734687,
						0.2090865566831936
					],
					"Time": [
						3,
						6,
						31,
						278
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.07706697360222335,
						0.23386718562342396
					],
					"Time": [
						3,
						6,
						39,
						259
					]
				},
				{
					"Player": "Jeremy Dou",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.0639801290282609,
						0.22612323907960197
					],
					"Time": [
						3,
						6,
						54,
						744
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.3969676187435279,
						0.5451738366850678
					],
					"Time": [
						3,
						7,
						17,
						906
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.927711870909783,
						0.23696476424095275
					],
					"Time": [
						3,
						8,
						4,
						822
					]
				},
				{
					"Player": "Ben Song",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5612802228388343,
						0.1997938208306072
					],
					"Time": [
						3,
						8,
						27,
						239
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.571458879729694,
						0.2044401887569004
					],
					"Time": [
						3,
						8,
						44,
						156
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5525556597895259,
						0.22302566046207317
					],
					"Time": [
						3,
						8,
						54,
						974
					]
				},
				{
					"Player": "Jeremy Dou",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.715414170043281,
						0.5049053146571935
					],
					"Time": [
						3,
						9,
						29,
						849
					]
				},
				{
					"Player": "Panda He",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.07125059823601781,
						0.25245265732859673
					],
					"Time": [
						3,
						10,
						2,
						904
					]
				},
				{
					"Player": "Ben Song",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.9291659647513344,
						0.24315992147601034
					],
					"Time": [
						3,
						10,
						32,
						136
					]
				},
				{
					"Player": "Jeremy Dou",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6456176656488145,
						0.5467226259938321
					],
					"Time": [
						3,
						10,
						56,
						185
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6383471964410576,
						0.5482714153025966
					],
					"Time": [
						3,
						11,
						16,
						567
					]
				},
				{
					"Player": "Panda He",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5656425043634884,
						0.18895229566925645
					],
					"Time": [
						3,
						11,
						41,
						630
					]
				}
			]
		},
		{
			"Date": "2018-9-30",
			"Data": [
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.9189873078604748,
						0.2679405504162407
					],
					"Time": [
						20,
						53,
						20,
						416
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.9335282462759886,
						0.11615919815732978
					],
					"Time": [
						20,
						53,
						35,
						234
					]
				},
				{
					"Player": "Panda He",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.9306200585928859,
						0.1486837736413821
					],
					"Time": [
						20,
						53,
						44,
						422
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.07125059823601781,
						0.11770798746609418
					],
					"Time": [
						20,
						54,
						58,
						345
					]
				},
				{
					"Player": "Liyan Ma",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.3111760820919962,
						0.5312347329061882
					],
					"Time": [
						21,
						0,
						31,
						774
					]
				},
				{
					"Player": "Liyan Ma",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.6761536363213936,
						0.5389786794500102
					],
					"Time": [
						21,
						1,
						31,
						856
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.3998758064266306,
						0.19204987428678524
					],
					"Time": [
						21,
						2,
						8,
						140
					]
				},
				{
					"Player": "Liyan Ma",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.6238062580255438,
						0.5482714153025966
					],
					"Time": [
						21,
						3,
						27,
						909
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.590362099669862,
						0.17346440258161247
					],
					"Time": [
						21,
						7,
						5,
						656
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5932702873529647,
						0.18120834912543446
					],
					"Time": [
						21,
						7,
						22,
						796
					]
				},
				{
					"Player": "Liyan Ma",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.4100544633174903,
						0.1595252988027329
					],
					"Time": [
						21,
						7,
						40,
						701
					]
				},
				{
					"Player": "Liyan Ma",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5481933782648718,
						0.1564277201852041
					],
					"Time": [
						21,
						12,
						22,
						915
					]
				},
				{
					"Player": "Liyan Ma",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.4507690908809291,
						0.413526745440094
					],
					"Time": [
						21,
						12,
						46,
						740
					]
				},
				{
					"Player": "Liyan Ma",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.44059043399006936,
						0.4026852202787432
					],
					"Time": [
						21,
						13,
						36,
						2
					]
				},
				{
					"Player": "Liyan Ma",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.42604949557455557,
						0.4088803775138008
					],
					"Time": [
						21,
						14,
						27,
						357
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.3678857419125002,
						0.16417166672902608
					],
					"Time": [
						21,
						16,
						21,
						672
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.3388038650814725,
						0.2059889780656648
					],
					"Time": [
						21,
						16,
						47,
						909
					]
				},
				{
					"Player": "Jeremy Dou",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5409229090571149,
						0.1533301415676753
					],
					"Time": [
						21,
						16,
						56,
						368
					]
				},
				{
					"Player": "Liyan Ma",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.46531002929644294,
						0.1595252988027329
					],
					"Time": [
						21,
						17,
						38,
						240
					]
				},
				{
					"Player": "Liyan Ma",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5307442521662552,
						0.4088803775138008
					],
					"Time": [
						21,
						18,
						33,
						137
					]
				},
				{
					"Player": "Liyan Ma",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.27627782989476296,
						0.5064541039659578
					],
					"Time": [
						21,
						22,
						51,
						123
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.19775676245098825,
						0.45689284608549713
					],
					"Time": [
						21,
						25,
						0,
						591
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.7764861113884391,
						0.45689284608549713
					],
					"Time": [
						21,
						25,
						18,
						129
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5307442521662552,
						0.1440374057150889
					],
					"Time": [
						21,
						28,
						50,
						409
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5743670674127968,
						0.2013426101393716
					],
					"Time": [
						21,
						30,
						25,
						75
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.3460743342892294,
						0.22612323907960197
					],
					"Time": [
						21,
						31,
						4,
						75
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6572504163812256,
						0.2958187579739998
					],
					"Time": [
						21,
						31,
						33,
						737
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.3591611788631919,
						0.2013426101393716
					],
					"Time": [
						21,
						33,
						8,
						214
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6092653196100299,
						0.16881803465531928
					],
					"Time": [
						21,
						33,
						22,
						612
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.42750358941610694,
						0.1579765094939685
					],
					"Time": [
						21,
						33,
						40,
						205
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.6296226333917493,
						0.17811077050790566
					],
					"Time": [
						21,
						34,
						19,
						502
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.4289576832576583,
						0.18740350636049205
					],
					"Time": [
						21,
						34,
						24,
						648
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.6456176656488145,
						0.18585471705172765
					],
					"Time": [
						21,
						34,
						48,
						951
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.3417120527645753,
						0.300465125900293
					],
					"Time": [
						21,
						35,
						11,
						695
					]
				},
				{
					"Player": "Jeremy Dou",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5700047858881425,
						0.22302566046207317
					],
					"Time": [
						21,
						35,
						20,
						972
					]
				},
				{
					"Player": "Liyan Ma",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.06979650439446644,
						0.2059889780656648
					],
					"Time": [
						21,
						35,
						32,
						294
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.27191554837010884,
						0.5049053146571935
					],
					"Time": [
						21,
						35,
						43,
						361
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.533652439849358,
						0.4088803775138008
					],
					"Time": [
						21,
						36,
						44,
						595
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5191115014338441,
						0.5699544656252981
					],
					"Time": [
						21,
						48,
						33,
						809
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5845457243036564,
						0.5141980505097798
					],
					"Time": [
						21,
						52,
						55,
						264
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6179898826593383,
						0.5513689939201254
					],
					"Time": [
						21,
						58,
						22,
						496
					]
				},
				{
					"Player": "Panda He",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.590362099669862,
						0.5622105190814761
					],
					"Time": [
						21,
						58,
						31,
						440
					]
				},
				{
					"Player": "Panda He",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.3286252081906128,
						0.5327835222149526
					],
					"Time": [
						21,
						58,
						43,
						742
					]
				},
				{
					"Player": "Jamie Z",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5278360644831525,
						0.1548789308764397
					],
					"Time": [
						21,
						58,
						47,
						651
					]
				},
				{
					"Player": "Panda He",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5365606275324607,
						0.18430592774296325
					],
					"Time": [
						21,
						59,
						44,
						665
					]
				},
				{
					"Player": "Panda He",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5394688152155636,
						0.4088803775138008
					],
					"Time": [
						22,
						0,
						35,
						990
					]
				},
				{
					"Player": "Panda He",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5234737829584982,
						0.413526745440094
					],
					"Time": [
						22,
						0,
						46,
						707
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5525556597895259,
						0.24935507871106793
					],
					"Time": [
						22,
						2,
						16,
						246
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5307442521662552,
						0.24625750009353914
					],
					"Time": [
						22,
						2,
						22,
						595
					]
				},
				{
					"Player": "Hongyang Zhou",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.4565854662471346,
						0.16881803465531928
					],
					"Time": [
						22,
						3,
						46,
						269
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.9073545571280637,
						0.23851355354971715
					],
					"Time": [
						22,
						4,
						7,
						291
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.458039560088686,
						0.21683050322701558
					],
					"Time": [
						22,
						4,
						30,
						305
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.41441674484214447,
						0.17501319189037687
					],
					"Time": [
						22,
						6,
						3,
						522
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5511015659479745,
						0.21683050322701558
					],
					"Time": [
						22,
						6,
						6,
						280
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5394688152155636,
						0.21528171391825118
					],
					"Time": [
						22,
						6,
						12,
						959
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.533652439849358,
						0.21373292460948679
					],
					"Time": [
						22,
						6,
						17,
						949
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.4754886861873026,
						0.21992808184454438
					],
					"Time": [
						22,
						7,
						11,
						849
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.061071941345158136,
						0.14248861640632451
					],
					"Time": [
						22,
						8,
						8,
						132
					]
				},
				{
					"Player": "Jamie Z",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.476942780028854,
						0.17811077050790566
					],
					"Time": [
						22,
						8,
						40,
						46
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.25882870379614636,
						0.3871973271910993
					],
					"Time": [
						22,
						10,
						24,
						959
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.48130506155350816,
						0.21528171391825118
					],
					"Time": [
						22,
						10,
						36,
						309
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.1744912609861661,
						0.42901463852773797
					],
					"Time": [
						22,
						12,
						34,
						249
					]
				},
				{
					"Player": "Jamie Z",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.571458879729694,
						0.18740350636049205
					],
					"Time": [
						22,
						13,
						20,
						18
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5162033137507414,
						0.413526745440094
					],
					"Time": [
						22,
						13,
						52,
						248
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5132951260676386,
						0.4181731133663872
					],
					"Time": [
						22,
						14,
						2,
						838
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5874539119867592,
						0.2772332862688271
					],
					"Time": [
						22,
						14,
						53,
						841
					]
				},
				{
					"Player": "Jamie Z",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.583091630462105,
						0.19514745290431404
					],
					"Time": [
						22,
						15,
						20,
						725
					]
				},
				{
					"Player": "Jamie Z",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5205655952753955,
						0.4181731133663872
					],
					"Time": [
						22,
						15,
						44,
						697
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5132951260676386,
						0.413526745440094
					],
					"Time": [
						22,
						15,
						56,
						407
					]
				},
				{
					"Player": "Liyan Ma",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.07852106744377474,
						0.22457444977083757
					],
					"Time": [
						22,
						17,
						38,
						339
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.1279602580565218,
						0.3562215410158113
					],
					"Time": [
						22,
						26,
						6,
						483
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.3664316480709488,
						0.5498202046113609
					],
					"Time": [
						22,
						27,
						7,
						252
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6267144457086465,
						0.5529177832288897
					],
					"Time": [
						22,
						27,
						19,
						321
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.33444158355681836,
						0.5327835222149526
					],
					"Time": [
						22,
						27,
						49,
						517
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.6456176656488145,
						0.2617453931811831
					],
					"Time": [
						22,
						29,
						33,
						79
					]
				},
				{
					"Player": "Jamie Z",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5103869383845359,
						0.2075377673744292
					],
					"Time": [
						1,
						32,
						8,
						100
					]
				},
				{
					"Player": "Jamie Z",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.35625299118008913,
						0.17811077050790566
					],
					"Time": [
						1,
						32,
						28,
						709
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.6514340410150201,
						0.17346440258161247
					],
					"Time": [
						1,
						32,
						56,
						35
					]
				},
				{
					"Player": "Panda He",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.8695481172477277,
						0.3593191196333401
					],
					"Time": [
						1,
						34,
						20,
						61
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.1832158240354744,
						0.45069768885043954
					],
					"Time": [
						1,
						34,
						45,
						735
					]
				},
				{
					"Player": "Jamie Z",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.4420445278316208,
						0.2044401887569004
					],
					"Time": [
						1,
						35,
						15,
						487
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6703372609551881,
						0.34847759447198934
					],
					"Time": [
						1,
						36,
						7,
						734
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.21665998239115622,
						0.45069768885043954
					],
					"Time": [
						1,
						36,
						59,
						575
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.4100544633174903,
						0.2090865566831936
					],
					"Time": [
						1,
						57,
						5,
						868
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.9407987154837455,
						0.2121841353007224
					],
					"Time": [
						1,
						57,
						20,
						863
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5816375366205536,
						0.19204987428678524
					],
					"Time": [
						1,
						57,
						38,
						637
					]
				},
				{
					"Player": "Hongyang Zhou",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.1555880410459981,
						0.4599904247030259
					],
					"Time": [
						1,
						57,
						51,
						519
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.7226846392510379,
						0.1982450315218428
					],
					"Time": [
						1,
						58,
						7,
						641
					]
				},
				{
					"Player": "Ben Song",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.08288334896842889,
						0.22922081769713076
					],
					"Time": [
						1,
						58,
						50,
						227
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.08579153665153166,
						0.2756844969600627
					],
					"Time": [
						1,
						59,
						36,
						268
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.9320741524344373,
						0.1595252988027329
					],
					"Time": [
						2,
						0,
						18,
						723
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.9291659647513344,
						0.1517813522589109
					],
					"Time": [
						2,
						0,
						26,
						533
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.4507690908809291,
						0.2075377673744292
					],
					"Time": [
						2,
						1,
						54,
						335
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.42314130789145277,
						0.19359866359554964
					],
					"Time": [
						2,
						2,
						37,
						988
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.44495271551472354,
						0.2059889780656648
					],
					"Time": [
						2,
						3,
						44,
						133
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5423770028986663,
						0.2044401887569004
					],
					"Time": [
						2,
						4,
						7,
						960
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.4376822463069666,
						0.18585471705172765
					],
					"Time": [
						2,
						4,
						20,
						678
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.43186587094076107,
						0.19514745290431404
					],
					"Time": [
						2,
						5,
						2,
						488
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5845457243036564,
						0.19050108497802085
					],
					"Time": [
						2,
						5,
						21,
						28
					]
				},
				{
					"Player": "Roy Pan",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5816375366205536,
						0.18275713843419886
					],
					"Time": [
						2,
						5,
						32,
						809
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.2908187683102768,
						0.2570990252548899
					],
					"Time": [
						2,
						5,
						49,
						121
					]
				},
				{
					"Player": "Henry Wei",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.4304117770992097,
						0.18275713843419886
					],
					"Time": [
						2,
						6,
						11,
						173
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5772752550958995,
						0.18895229566925645
					],
					"Time": [
						2,
						6,
						17,
						134
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.41587083868369584,
						0.5653080976990049
					],
					"Time": [
						2,
						20,
						52,
						230
					]
				},
				{
					"Player": "Bryan Yao",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.7168682638848324,
						0.5002589467309002
					],
					"Time": [
						2,
						21,
						18,
						894
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.3591611788631919,
						0.19514745290431404
					],
					"Time": [
						2,
						21,
						51,
						80
					]
				},
				{
					"Player": "Roy Li",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.4304117770992097,
						0.18430592774296325
					],
					"Time": [
						2,
						21,
						59,
						694
					]
				},
				{
					"Player": "Rus Hu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6601586040643284,
						0.3933924844261569
					],
					"Time": [
						2,
						23,
						23,
						673
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.6703372609551881,
						0.315953018987937
					],
					"Time": [
						2,
						23,
						48,
						530
					]
				},
				{
					"Player": "Eddy Wu",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6630667917474311,
						0.4692831605556123
					],
					"Time": [
						2,
						24,
						3,
						32
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6412553841241604,
						0.18740350636049205
					],
					"Time": [
						2,
						24,
						8,
						833
					]
				},
				{
					"Player": "Steven Sun",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.07125059823601781,
						0.23231839631465956
					],
					"Time": [
						2,
						24,
						31,
						766
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.10324066275014827,
						0.3190505976054658
					],
					"Time": [
						2,
						26,
						40,
						263
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6877863870538047,
						0.5374298901412458
					],
					"Time": [
						2,
						27,
						0,
						982
					]
				},
				{
					"Player": "Zihan Ai",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.13959300878893288,
						0.3902949058086281
					],
					"Time": [
						2,
						27,
						9,
						418
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.7503124222405142,
						0.4940637894958427
					],
					"Time": [
						2,
						27,
						21,
						373
					]
				},
				{
					"Player": "Ben Song",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.22393045159891314,
						0.4692831605556123
					],
					"Time": [
						2,
						27,
						34,
						724
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.18757810556012855,
						0.44760011023291074
					],
					"Time": [
						2,
						27,
						47,
						688
					]
				},
				{
					"Player": "Zihan Ai",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.7386796715081031,
						0.5002589467309002
					],
					"Time": [
						2,
						28,
						11,
						170
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5918161935114133,
						0.18585471705172765
					],
					"Time": [
						2,
						29,
						4,
						588
					]
				},
				{
					"Player": "Zihan Ai",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.44059043399006936,
						0.21528171391825118
					],
					"Time": [
						2,
						29,
						20,
						649
					]
				},
				{
					"Player": "Liyan Ma",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.571458879729694,
						0.2075377673744292
					],
					"Time": [
						2,
						29,
						26,
						25
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5685506920465911,
						0.19204987428678524
					],
					"Time": [
						2,
						30,
						2,
						559
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.32571702050751006,
						0.5281371542886594
					],
					"Time": [
						2,
						30,
						34,
						279
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6601586040643284,
						0.5451738366850678
					],
					"Time": [
						2,
						31,
						13,
						654
					]
				},
				{
					"Player": "Ben Song",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5525556597895259,
						0.2044401887569004
					],
					"Time": [
						2,
						31,
						21,
						200
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.08869972433463442,
						0.2601966038724187
					],
					"Time": [
						2,
						31,
						41,
						855
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.43622815246541524,
						0.16417166672902608
					],
					"Time": [
						2,
						31,
						53,
						132
					]
				},
				{
					"Player": "Zihan Ai",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5816375366205536,
						0.5746008335515913
					],
					"Time": [
						2,
						32,
						24,
						374
					]
				},
				{
					"Player": "Zihan Ai",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.6921486685784588,
						0.518844418436073
					],
					"Time": [
						2,
						32,
						50,
						3
					]
				},
				{
					"Player": "Zihan Ai",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5918161935114133,
						0.17811077050790566
					],
					"Time": [
						2,
						33,
						9,
						383
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.6892404808953561,
						0.5405274687587746
					],
					"Time": [
						2,
						33,
						40,
						780
					]
				},
				{
					"Player": "Zihan Ai",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.7299551084587949,
						0.5018077360396647
					],
					"Time": [
						2,
						34,
						28,
						854
					]
				},
				{
					"Player": "Liyan Ma",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.7125059823601783,
						0.518844418436073
					],
					"Time": [
						2,
						34,
						35,
						173
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6572504163812256,
						0.2756844969600627
					],
					"Time": [
						2,
						34,
						56,
						305
					]
				},
				{
					"Player": "Liyan Ma",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.7430419530327573,
						0.5141980505097798
					],
					"Time": [
						2,
						35,
						4,
						885
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.639801290282609,
						0.323696965531759
					],
					"Time": [
						2,
						35,
						33,
						281
					]
				},
				{
					"Player": "Zihan Ai",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.658704510222777,
						0.5622105190814761
					],
					"Time": [
						2,
						35,
						57,
						815
					]
				},
				{
					"Player": "Liyan Ma",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.17885354251082025,
						0.4119779561313296
					],
					"Time": [
						2,
						36,
						8,
						776
					]
				},
				{
					"Player": "Ben Song",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5627343166803856,
						0.1997938208306072
					],
					"Time": [
						2,
						37,
						40,
						528
					]
				},
				{
					"Player": "Zihan Ai",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.7066896069939727,
						0.5203932077448374
					],
					"Time": [
						2,
						38,
						8,
						69
					]
				},
				{
					"Player": "Ben Song",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.332987489715267,
						0.3128554403704082
					],
					"Time": [
						2,
						38,
						15,
						949
					]
				},
				{
					"Player": "Liyan Ma",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5976325688776188,
						0.18120834912543446
					],
					"Time": [
						2,
						38,
						31,
						902
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6528881348565715,
						0.19359866359554964
					],
					"Time": [
						2,
						38,
						40,
						786
					]
				},
				{
					"Player": "Liyan Ma",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.3504366158138836,
						0.5544665725376542
					],
					"Time": [
						2,
						39,
						20,
						264
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.3620693665462946,
						0.1997938208306072
					],
					"Time": [
						2,
						39,
						57,
						263
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.22683863928201592,
						0.4677343712468479
					],
					"Time": [
						2,
						40,
						11,
						251
					]
				},
				{
					"Player": "Liyan Ma",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.6601586040643284,
						0.35467275170704693
					],
					"Time": [
						2,
						40,
						20,
						8
					]
				},
				{
					"Player": "Ben Song",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.2471959530637353,
						0.4677343712468479
					],
					"Time": [
						2,
						40,
						27,
						943
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.9117168386527178,
						0.2632941824899475
					],
					"Time": [
						2,
						40,
						50,
						616
					]
				},
				{
					"Player": "Liyan Ma",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.7401337653496545,
						0.5064541039659578
					],
					"Time": [
						2,
						41,
						15,
						997
					]
				},
				{
					"Player": "Zihan Ai",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.7430419530327573,
						0.503356525348429
					],
					"Time": [
						2,
						41,
						22,
						147
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.6601586040643284,
						0.5451738366850678
					],
					"Time": [
						2,
						42,
						23,
						239
					]
				},
				{
					"Player": "Ben Song",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.3577070850216405,
						0.24315992147601034
					],
					"Time": [
						2,
						42,
						49,
						794
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.1105111319579052,
						0.3144042296791726
					],
					"Time": [
						2,
						43,
						18,
						734
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.6470717594903659,
						0.24625750009353914
					],
					"Time": [
						2,
						43,
						28,
						964
					]
				},
				{
					"Player": "Ben Song",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.32571702050751006,
						0.2989163365915286
					],
					"Time": [
						2,
						43,
						46,
						77
					]
				},
				{
					"Player": "Ben Song",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.4507690908809291,
						0.210635345991958
					],
					"Time": [
						2,
						45,
						4,
						370
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.06543422286981228,
						0.21528171391825118
					],
					"Time": [
						2,
						45,
						22,
						478
					]
				},
				{
					"Player": "Zihan Ai",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.7575828914482711,
						0.4832222643344919
					],
					"Time": [
						2,
						45,
						36,
						758
					]
				},
				{
					"Player": "Ben Song",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.18757810556012855,
						0.22457444977083757
					],
					"Time": [
						2,
						45,
						47,
						990
					]
				},
				{
					"Player": "Liyan Ma",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.40714627563438754,
						0.23231839631465956
					],
					"Time": [
						2,
						47,
						24,
						478
					]
				},
				{
					"Player": "Sebastian Jin",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.7430419530327573,
						0.5157468398185442
					],
					"Time": [
						2,
						47,
						37,
						876
					]
				},
				{
					"Player": "Liyan Ma",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.2660991730039033,
						0.5080028932747223
					],
					"Time": [
						2,
						48,
						3,
						145
					]
				},
				{
					"Player": "Liyan Ma",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5787293489374509,
						0.19514745290431404
					],
					"Time": [
						2,
						48,
						15,
						686
					]
				},
				{
					"Player": "Liyan Ma",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5932702873529647,
						0.16726924534655488
					],
					"Time": [
						2,
						48,
						25,
						588
					]
				},
				{
					"Player": "Liyan Ma",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.2733696422116602,
						0.5234907863623662
					],
					"Time": [
						2,
						48,
						36,
						943
					]
				},
				{
					"Player": "Ben Song",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5351065336909093,
						0.4104291668225652
					],
					"Time": [
						2,
						48,
						57,
						139
					]
				},
				{
					"Player": "Ben Song",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.5598261289972829,
						0.1982450315218428
					],
					"Time": [
						2,
						51,
						4,
						440
					]
				},
				{
					"Player": "Ben Song",
					"Pressure": "Scrimmage",
					"Action": "Shot Made",
					"Location": [
						0.5380147213740121,
						0.2090865566831936
					],
					"Time": [
						2,
						51,
						8,
						220
					]
				},
				{
					"Player": "Ben Song",
					"Pressure": "Scrimmage",
					"Action": "Shot Missed",
					"Location": [
						0.20793541934184792,
						0.3810021699560417
					],
					"Time": [
						2,
						51,
						14,
						591
					]
				}
			]
		}
	]
};

var playerChosen = 'Whole Team';
var pressureChosen = "2018-9-26";

function sum(total, currentValue) {
	return [total[0]+currentValue[0], total[1] + currentValue[1]];
}

function findCentroid(raw) {
	return raw.reduce(sum).map(x => x/raw.length);
}

function findDistance(point1, point2) {
	const vector = [point2[0] - point1[0], point2[1] - point1[1]];
	return Math.sqrt(vector[0]**2 + vector[1]**2)
}

const findMax = (a, b) => Math.max(a,b);
const findMin = (a, b) => Math.min(a,b);

function getPoints(raw, r, x, y) {
	const center = [x, y];
	let group = [];
	for (let i = 0; i < raw.length; i++) {
		if (findDistance(raw[i].Location, center) < r) {
			group.push(raw[i]);
		}
	}
	return group;
}

// new version
function makeGroup(raw) {
	if (raw.length === 1) {
		return {
			group: {
				center: [],
				pts: []
			},
			nongroup: raw
		}
	} 
	else {
		let maxSoFar = [];
		let center = [0, 0];

<<<<<<< HEAD
		const r = 0.04;
=======
		const r = 0.05;
>>>>>>> 8eccb88331c249b21bd8c44f36030add5ce4d466
		const precision = 0.1;
		const threshold = 1;

		for (let x = 0; x < 1; x += precision) {
			for (let y = 0; y < 1; y += precision) {
				let temp = [];
				temp = getPoints(raw, r, x, y);
				if (temp.length > maxSoFar.length) {
					maxSoFar = temp;
					center[0] = x;
					center[1] = y;
				}

			}
		}

		if (maxSoFar.length > threshold) {
			return {
				group: {
					center: center,
					pts: maxSoFar
				},
				nongroup: raw.filter(function(val) {
					return maxSoFar.indexOf(val) === -1;
				})
			}
		}
		else {
			return {
				group: {
					center: [],
					pts: []
				},
				nongroup: raw
			}
		}	
	}
}

// // old version
// function makeGroup(raw) {
// 	if (raw.length === 1) {
// 		return {
// 			group: [],
// 			nongroup: raw
// 		}
// 	} else {
// 		const locData = raw.map(x => x.Location);
// 		const k = .2;
// 		const centroid = findCentroid(locData);
// 		const distances = locData.map(x => findDistance(centroid, x));
// 		const max = distances.reduce(findMax);
// 		const min = distances.reduce(findMin);

		 
// 		if (max < k) {
// 			return {
// 				group: raw,
// 				nongroup: []
// 			};
// 		} else if (min > k) {
// 			return {
// 				group: [],
// 				nongroup: raw
// 			};
// 		} else {
// 			const maxInd = distances.indexOf(max);
// 			const maxData = raw[maxInd];
// 			let pointsToGroup = raw;
// 			pointsToGroup.splice(maxInd, 1);
// 			const result = makeGroup(pointsToGroup);
// 			return {
// 				group: result.group,
// 				nongroup: [...result.nongroup, maxData]
// 			};
// 		}
// 	}
// }

function makeBuckets(raw) {
	const firstGroup = makeGroup(raw);
	// return {
	// 		groups: [firstGroup.group],
	// 		nongroup: firstGroup.nongroup
	// };
	if (firstGroup.nongroup.length === 0) {
		return {
			groups: [firstGroup.group],
			nongroup: []
		};
	} else if (firstGroup.group.pts.length === 0) {
		return {
			groups: [],
			nongroup: firstGroup.nongroup
		};
	} else {
		const newGroup = makeBuckets(firstGroup.nongroup);
		return {
			groups: [firstGroup.group, ...newGroup.groups],
			nongroup: newGroup.nongroup
		};
	}
}

ReactDOM.render(<PlayerDropdown options={roster.Roster} />, playerDiv, () => {
	const playerDropdown = document.getElementById('playerDropdown');
	const shotsGroup = document.getElementById('shotsgroup');

	function filterData() {
		const byDate = data2.Practices.filter(x => x.Date === pressureChosen)[0];

		if (playerChosen === 'Whole Team') return byDate.Data;
		const byPlayer = byDate.Data.filter(x => x.Player === playerChosen);
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
		const mapData = filterData();
		const result = mapData.map(x => x.Location);
		let groupedData = makeBuckets(mapData);
		// groupedData.groups = groupedData.groups.map(x => {
		// 	const locs = x.map(y => y.Location);
		// 	return {
		// 		data: x,
		// 		centroid: findCentroid(locs)
		// 	};
		// });

		ReactDOM.render(<HeatMap data={groupedData} />, shotsGroup)
	}

	makeMapButton.addEventListener('click', makeMap);
});