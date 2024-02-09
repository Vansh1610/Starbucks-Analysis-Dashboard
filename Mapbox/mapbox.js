mapboxgl.accessToken = 'pk.eyJ1Ijoia3BhcmFiIiwiYSI6ImNscDk0ODFheTAxemoybXA2cmtwdHlwZmkifQ.hc3Av67wsoGNsJc-AkjxHg';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v11',
  center: [-117.9179, 33.7783],
  zoom: 6,
  scrollZoom: true
});
const csvData = `
0,10036,11th & Grand Los Angeles,2137491751,1111 South Grand Avenue - 900152176,900152176,"34.041593,-118.262377",Los Angeles,California,34.041593,-118.262377
1,17033,12th & Hill Los Angeles(AT&T Bldg),213-749-0487,1149 S. Hill Street - 900152212,900152212,"34.03948,-118.261337",Los Angeles,California,34.03948,-118.261337
2,11138,1875 Century Park E.,(310) 553-8226,1875 Century Park East - 900672501,900672501,"34.061043,-118.414938",Los Angeles,California,34.061043,-118.414938
3,11947,1999 Ave. of the Stars,(310) 557-0785,1999 Avenue of the Stars - 900676022,900676022,"34.058748,-118.416168",Los Angeles,California,34.058748,-118.416168
4,11946,2049 Century Park E.,(310) 286-3023,2049 Century Park East - 900673101,900673101,"34.0593,-118.412792",Los Angeles,California,34.0593,-118.412792
5,16579,2950 Beverly Glen Circle - Los Ange,(310) 470-8121,2952 Beverly Glen Circle - 900771724,900771724,"34.127492,-118.444054",Los Angeles,California,34.127492,-118.444054
6,11382,2nd & Alameda Los Angeles,213-613-0393,138 S. Central Avenue - 900123913,900123913,"34.047996,-118.23902",Los Angeles,California,34.047996,-118.23902
7,18553,330 South Hope St.,(213) 620-1945,330 South Hope Street - 900713115,900713115,"34.0534,-118.253473",Los Angeles,California,34.0534,-118.253473
8,9948,3rd & Gage Los Angeles,323-265-4124,3853 E. 3rd Street - 900632403,900632403,"34.033606,-118.18422",Los Angeles,California,34.033606,-118.18422
9,15990,444 S. Flower - D.T. L.A.,(213) 622-4493,444 South Flower Street - 90071,90071,"34.051303,-118.25516",Los Angeles,California,34.051303,-118.25516
10,12124,445 S. Figueroa Street Union Bank,(213) 623-9191,445 S. Figueroa Street - 900711600,900711600,"34.052829,-118.256962",Los Angeles,California,34.052829,-118.256962
11,15892,6th & Flower - City National Plaza,(213) 488-9049,505 S. Flower Street - 90071,90071,"34.051238,-118.25743",Los Angeles,California,34.051238,-118.25743
12,17753,6th & Grand Los Angeles,213-327-0208,523 West 6th Street - 900141217,900141217,"34.048734,-118.254406",Los Angeles,California,34.048734,-118.254406
13,91231,6th & Spring,213-623-2751,603 S. Spring Street - 90014,90014,"34.0458831787109,-118.251289367676",Los Angeles,California,34.0458831787109,-118.251289367676
14,8888,7th & Figueroa Los Angeles (RAD),213-488-9902,735 S. Figueroa Street - 900172563,900172563,"34.049213,-118.260526",Los Angeles,California,34.049213,-118.260526
15,1010155,8241 Foothill Blvd.,8189533616,8241 Foothill Blvd. - 91040,91040,"34.2599182128906,-118.313056945801",Los Angeles,California,34.2599182128906,-118.313056945801
16,89075,9th & Flower,213-239-9713,600 West 9th Street - 900154300,900154300,"34.045153,-118.260353",Los Angeles,California,34.045153,-118.260353
17,11795,9th & Santee Los Angeles,213-489-0913,300 E. 9th Street - 900151802,900151802,"34.039857,-118.253353",Los Angeles,California,34.039857,-118.253353
18,9266,Albertsons - San Pedro #6164,310-831-1323,28090 S Western Ave - 907321246,907321246,"33.765006,-118.310126",Los Angeles,California,33.765006,-118.310126
19,16799,Albertsons - Tujunga #6397,818-248-6945,6240 Foothill Bl - 910422724,910422724,"34.241008,-118.267555",Los Angeles,California,34.241008,-118.267555
20,18135,Balboa & Knollwood Granada Hills,818-360-9659,11850 Balboa Boulevard - 913442753,913442753,"34.285458,-118.50194",Los Angeles,California,34.285458,-118.50194
21,10894,BARNES AND NOBLE @ CAL STATE UNIV L,323-343-5370,5151 State University Drive - 900324226,900324226,"34.080524,-118.152199",Los Angeles,California,34.080524,-118.152199
22,13336,Beverly & Detroit,(323) 939-1793,7122 Beverly Boulevard - 900362569,900362569,"34.07597,-118.344996",Los Angeles,California,34.07597,-118.344996
23,15639,Beverly & Robertson W. Hollywood,310-659-7370,164 N. Robertson - 900483109,900483109,"34.076993,-118.383543",Los Angeles,California,34.076993,-118.383543
24,15249,Brentwood,(310) 207-4202,11707 San Vicente Blvd - 900496628,900496628,"34.053728,-118.466123",Los Angeles,California,34.053728,-118.466123
25,14830,Brentwood Village Court,(310) 472-7119,11700 Barrington Court - 900492930,900492930,"34.064485,-118.4694",Los Angeles,California,34.064485,-118.4694
26,13351,Broxton & Weyburn - Westwood,310-209-1626,10955 West Weyburn - 900242811,900242811,"34.062525,-118.447325",Los Angeles,California,34.062525,-118.447325
27,17685,Burbank & Van Nuys Van Nuys,818-779-0347,14431 Burbank Blvd - 914014825,914014825,"34.17252,-118.447483",Los Angeles,California,34.17252,-118.447483
28,6941,Cahuenga & Barham Los Angeles,323-876-8032,3242 West Cahuenga Blvd. - 900681302,900681302,"34.129638,-118.348506",Los Angeles,California,34.129638,-118.348506
29,7376,Canoga & Oxnard Woodland Hills,(818) 887-6451,5960 N. Canoga Ave - 913675076,913675076,"34.178939,-118.596746",Los Angeles,California,34.178939,-118.596746
30,10209,Canoga & Sherman Canoga Park,818-887-5152,7258 Canoga Ave. - 913031627,913031627,"34.202798,-118.597512",Los Angeles,California,34.202798,-118.597512
31,9620,Cedars-Sinai Medical Center,310-423-6664,8700 Beverly Blvd. - 900481804,900481804,"34.076241,-118.380725",Los Angeles,California,34.076241,-118.380725
32,1006808,Central & Slauson,323-521-1535,5857 S. Central Ave. - 90001,90001,"33.9883270263672,-118.257118225098",Los Angeles,California,33.9883270263672,-118.257118225098
33,1007141,Cesar Chavez & Broadway,213-680-7825,639 N Broadway - 90012,90012,"34.0587959289551,-118.240348815918",Los Angeles,California,34.0587959289551,-118.240348815918
34,1009982,Chatsworth & Zelzah,818-363-5973,17901 Chatsworth Street - 91344,91344,"34.2652206420898,-118.523864746094",Los Angeles,California,34.2652206420898,-118.523864746094
35,12073,Chatsworth Plaza,(818) 700-9937,20516 Devonshire Street - 913113207,913113207,"34.25674,-118.580383",Los Angeles,California,34.25674,-118.580383
36,15819,Colorado & Eagle Rock Eagle Rock,323-349-0671,2218 W. Colorado Blvd. - 900411143,900411143,"34.139093,-118.215373",Los Angeles,California,34.139093,-118.215373
37,7925,Crenshaw & Coliseum Los Angeles,323-292-7911,3722 Crenshaw Blvd. - 900165804,900165804,"34.019273,-118.334759",Los Angeles,California,34.019273,-118.334759
38,7663,Crenshaw & Washington Los Angeles,323-734-0281,4177 W. Washington Blvd. - 900181055,900181055,"34.039615,-118.33089",Los Angeles,California,34.039615,-118.33089
39,87402,DeSoto & Knapp,818-717-8593,9157 De Soto Avenue - 91311,91311,"34.237201,-118.588539",Los Angeles,California,34.237201,-118.588539
40,15451,Devonshire & The 405 Fwy Mission H,818-830-5085,15501 Devonshire Blvd - 913452620,913452620,"34.257689,-118.469819",Los Angeles,California,34.257689,-118.469819
41,7693,Eagle Rock & York Eagle Rock,323-340-8059,4430 York Blvd. - 900413328,900413328,"34.123976,-118.219269",Los Angeles,California,34.123976,-118.219269
42,16036,Encino,(818) 986-9621,17308 Ventura Blvd. - 913163904,913163904,"34.160776,-118.510383",Los Angeles,California,34.160776,-118.510383
43,15108,Encino Market Place (B&N),(818) 906-3961,16461A Ventura Blvd - 914364370,914364370,"34.157727,-118.491662",Los Angeles,California,34.157727,-118.491662
44,14753,Fairfax & Olympic - Los Angeles,(323) 634-7845,6066 West Olympic Boulevard - 900364402,900364402,"34.057977,-118.363745",Los Angeles,California,34.057977,-118.363745
45,9304,Fallbrook & Victory Canoga Park,818-883-0567,22815 Victory Blvd. - 913073953,913073953,"34.186874,-118.624358",Los Angeles,California,34.186874,-118.624358
46,8832,Farmers Market,(323) 965-9594,6333 W. 3rd Street - 900363109,900363109,"34.071758,-118.360775",Los Angeles,California,34.071758,-118.360775
47,1005762,Fashion Square,8189077516,14006 Riverside Drive #24C - 914231945,914231945,"34.1566963195801,-118.437400817871",Los Angeles,California,34.1566963195801,-118.437400817871
48,91220,Figueroa & Exposition,213-749-9302,3584 S. Figueroa St. - 90007,90007,"34.0185890197754,-118.281768798828",Los Angeles,California,34.0185890197754,-118.281768798828
49,1006975,Figueroa & York,323-478-7365,6240 York Ave. - 90042,90042,"34.1148719787598,-118.18334197998",Los Angeles,California,34.1148719787598,-118.18334197998
50,94436,Forever 21 Corporate Headquarters,213-741-8899,3880 N Mission Rd - 900313138,900313138,"34.0723266601563,-118.197601318359",Los Angeles,California,34.0723266601563,-118.197601318359
51,7009,Gaffey & 5th San Pedro,310-519-3496,438 S. Gaffey Ave - 907312436,907312436,"33.739891,-118.292107",Los Angeles,California,33.739891,-118.292107
52,8822,Gage & Compton Huntington Park,323-585-1928,1437 E. Gage Avenue - 900011789,900011789,"33.982333,-118.248954",Los Angeles,California,33.982333,-118.248954
53,12222,Galpin Motors - Jaguar Showroom,818-892-3800,15430 Roscoe Blvd. - 91343,91343,"34.221031,-118.469056",Los Angeles,California,34.221031,-118.469056
54,12246,Glendale & Fletcher,323-913-3506,2560 Glendale Blvd. - 900393220,900393220,"34.104119,-118.258942",Los Angeles,California,34.104119,-118.258942
55,10228,Glendale & Glenfeliz Los Angeles,3236671457,3111 Glendale Blvd - 900391841,900391841,"34.116528,-118.262856",Los Angeles,California,34.116528,-118.262856
56,12176,Granada Hills,(818) 360-9004,16850 Devonshire Blvd - 913447404,913447404,"34.257362,-118.49916",Los Angeles,California,34.257362,-118.49916
57,9035,Hancock Park,323-469-1081,206 North Larchmont - 900043707,900043707,"34.074908,-118.323461",Los Angeles,California,34.074908,-118.323461
58,19140,Health Science Campus - USC,323-442-1943,1969 Zonal Ave - 900335422,900335422,"34.060375,-118.206808",Los Angeles,California,34.060375,-118.206808
59,9159,Highland & Franklin,323-850-7360,1900 N Highland - 900682998,900682998,"34.105349,-118.336826",Los Angeles,California,34.105349,-118.336826
60,16800,Highway 4 & Balfour - Brentwood,925-516-4581,8610 Brentwood Blvd. - 945135686,945135686,"37.92705,-121.691939",Los Angeles,California,37.92705,-121.691939
61,16456,Hollywood & Highland Hollywood,323-962-7414,6801 Hollywood Blvd - 900286136,900286136,"34.10133,-118.338908",Los Angeles,California,34.10133,-118.338908
62,9009,Hollywood & McCadden Hollywood,323-467-5534,6745 Hollywood Blvd. - 900284604,900284604,"34.101702,-118.3373",Los Angeles,California,34.101702,-118.3373
63,20071,Hollywood & Orange Hollywood,(323) 462-1602,6933 Hollywood Blvd. - 900286149,900286149,"34.101547,-118.341444",Los Angeles,California,34.101547,-118.341444
64,90032,Hollywood & Vine - Los Angeles,323-464-4601,6290 West Hollywood Blvd - 90028,90028,"34.1014518737793,-118.326469421387",Los Angeles,California,34.1014518737793,-118.326469421387
65,16180,Hollywood & Western Hollywood,323-462-5506,5453 Hollywood Boulevard - 900273467,900273467,"34.101916,-118.309025",Los Angeles,California,34.101916,-118.309025
66,11211,Howard Hughes Ent. Center,310-645-5012,6081 Center Drive - 900451576,900451576,"33.977804,-118.391965",Los Angeles,California,33.977804,-118.391965
67,7956,Hwy 12 & Hwy 26 - Valley Springs,209-772-2645,200 E. Hwy 12 - 952529494,952529494,"38.19177,-120.824835",Los Angeles,California,38.19177,-120.824835
68,17776,Hyatt Regency Century Plaza,310-228-1234,2025 Avenue of the Stars - 900674701,900674701,"34.057471,-118.415748",Los Angeles,California,34.057471,-118.415748
69,6747,Jefferson & Centinela Los Angeles,310-823-3479,12313 Jefferson Blvd - 902306225,902306225,"33.981541,-118.409088",Los Angeles,California,33.981541,-118.409088
70,9504,Kyoto Grand,213-687-9849,120 S. Los Angeles Street - 900123724,900123724,"34.050522,-118.242725",Los Angeles,California,34.050522,-118.242725
71,18674,La Cienega & Jefferson Los Angeles,323-938-0821,3344 S. La Cienega Blvd - 900163115,900163115,"34.026772,-118.371795",Los Angeles,California,34.026772,-118.371795
72,8970,LaBrea&SanVicente-LosAngeles,323-934-2408,1258 South La Brea Ave - 900191628,900191628,"34.050985,-118.344036",Los Angeles,California,34.050985,-118.344036
73,13350,Ladera Center,(310) 338-1297,5301 Centinella Ave - 900452003,900452003,"33.977549,-118.371929",Los Angeles,California,33.977549,-118.371929
74,15922,Lankershim & Magnolia - N. Hollywoo,818-487-9226,5166 A Lankershim Blvd - 916013799,916013799,"34.164676,-118.374123",Los Angeles,California,34.164676,-118.374123
75,8889,Laurel Canyon & Riverside North Ho,818-754-8123,4800 Laurel Canyon Blvd - 916073717,916073717,"34.157797,-118.396241",Los Angeles,California,34.157797,-118.396241
76,1006384,LAX - Great Hall,925-516-4582,1 World Way - 90045,90045,"33.9453086853027,-118.399490356445",Los Angeles,California,33.9453086853027,-118.399490356445
77,1006012,LAX - Terminal Evenings,310-948-5066,1 World Way - 90045,90045,"33.9453086853027,-118.399490356445",Los Angeles,California,33.9453086853027,-118.399490356445
78,87657,LAX T4-Baggage Claim,310-665-9445,1 World Way - 900455807,900455807,"33.945215,-118.401876",Los Angeles,California,33.945215,-118.401876
79,13147,LAX Terminal - 2,301-646-3472,201 World Way - 900455807,900455807,"33.946326,-118.40389",Los Angeles,California,33.946326,-118.40389
80,13133,LAX Terminal 1 Food Court,310-646-3472,201 World Way - 900455807,900455807,"33.94708,-118.401194",Los Angeles,California,33.94708,-118.401194
81,14338,LAX Terminal 1 North End,213-687-9856,201 World Way - 900455807,900455807,"33.946958,-118.401166",Los Angeles,California,33.946958,-118.401166
82,13132,LAX Terminal 2 Lower Level,310-646-3472,201 World Way - 900455807,900455807,"33.946512,-118.403856",Los Angeles,California,33.946512,-118.403856
83,13146,LAX Terminal- 3,310-646-3472,201 World Way - 900455807,900455807,"33.946189,-118.407245",Los Angeles,California,33.946189,-118.407245
84,15047,Los Feliz & Seneca-Atwater,323-665-1347,2919 Los Feliz Blvd. - 900391544,900391544,"34.126474,-118.263433",Los Angeles,California,34.126474,-118.263433
85,12628,Marriott Los Angeles Int'l Airport,310-641-5700,5855 W. Century Blvd - 900455614,900455614,"33.946481,-118.384511",Los Angeles,California,33.946481,-118.384511
86,14240,Marriott Warner Center Lobby,310-534-1954,21850 Oxnard St - 913673631,913673631,"34.178498,-118.603603",Los Angeles,California,34.178498,-118.603603
87,11488,Melrose,323-852-9690,7624 Melrose Avenue - 900467420,900467420,"34.083427,-118.356145",Los Angeles,California,34.083427,-118.356145
88,115369,Mulholland & Calabasas,818-591-1380,23335 Mulholland Drive - 91364,91364,"34.1578636169434,-118.634773254395",Los Angeles,California,34.1578636169434,-118.634773254395
89,14843,National & Barrington,(310) 914-4585,11705 National Blvd. - 900643644,900643644,"34.022668,-118.439009",Los Angeles,California,34.022668,-118.439009
90,9247,National & Castle Heights Los Ange,310-839-1483,9824 National Blvd - 900342713,900342713,"34.03105,-118.400976",Los Angeles,California,34.03105,-118.400976
91,69543,NEC Grand & 1st (Grand Park),(213) 625-2205,217 N. Hill Street - 900122705,900122705,"34.055609,-118.245436",Los Angeles,California,34.055609,-118.245436
92,11447,Nordhoff & Woodley,818-895-4877,16222 Nordhoff Street - 913433806,913433806,"34.235319,-118.485898",Los Angeles,California,34.235319,-118.485898
93,16552,Northridge,(818) 709-6934,10235 Reseda Blvd - 913241460,913241460,"34.256423,-118.536089",Los Angeles,California,34.256423,-118.536089
94,90552,Northridge Fashion Center,818-773-4628,9301 Tampa Avenue - 913242503,913242503,"34.2387351989746,-118.556053161621",Los Angeles,California,34.2387351989746,-118.556053161621
95,18659,Olympic & Figueroa- LA Live,213-748-1009,800 W. Olympic Blvd. - 900151360,900151360,"34.045022,-118.263944",Los Angeles,California,34.045022,-118.263944
96,1007345,Olympic & Soto Los Angeles,323-265-3457,2675 E Olympic Blvd - 90023,90023,"34.0246086120605,-118.220031738281",Los Angeles,California,34.0246086120605,-118.220031738281
97,12148,Olympic & Westwood - Los Angeles,310-441-9002,2215 Westwood Blvd. - 900642098,900642098,"34.04316,-118.431672",Los Angeles,California,34.04316,-118.431672
98,13331,One Westside Place - L.A.,(310) 478-0045,11280 Olympic Blvd. - 900641719,900641719,"34.038106,-118.440928",Los Angeles,California,34.038106,-118.440928
99,15800,Pacific Palisades,(310) 573-0177,15300 Sunset Boulevard - 902723613,902723613,"34.047223,-118.526011",Los Angeles,California,34.047223,-118.526011
100,15453,Palos Verdes & Western Harbor City,310-534-1961,26650 Western Ave - 907103655,907103655,"33.780001,-118.309538",Los Angeles,California,33.780001,-118.309538
101,14736,Pavilions-West Hills #2225,818-999-5939,6534 Platt Ave - 913073218,913073218,"34.189144,-118.64134",Los Angeles,California,34.189144,-118.64134
102,16379,Pico & Robertson - Los Angeles,310-860-9364,8783 West Pico Blvd - 900352212,900352212,"34.054929,-118.38354",Los Angeles,California,34.054929,-118.38354
103,17873,Pico & San Vicente,323-936-5032,4700 West Pico Blvd - 900194267,900194267,"34.048562,-118.338679",Los Angeles,California,34.048562,-118.338679
104,1007389,Ralph's - Los Angeles #198,310-271-2672,9616 W. Pico Blvd - 90035,90035,"34.055118560791,-118.398178100586",Los Angeles,California,34.055118560791,-118.398178100586
105,1006878,Ralph's - Los Angeles #44,310-477-8746,12057 Wilshire Blvd - 90025,90025,"34.0447731018066,-118.466659545898",Los Angeles,California,34.0447731018066,-118.466659545898
106,1006804,Ralphs - Los Angeles #283,323-292-0633,5080 Rodeo Road - 90016,90016,"34.0215263366699,-118.35514831543",Los Angeles,California,34.0215263366699,-118.35514831543
107,1007291,Ralphs Encino #6,818-345-6882,17840 Ventura Blvd - 91316,91316,"34.1631813049316,-118.521072387695",Los Angeles,California,34.1631813049316,-118.521072387695
108,1007284,Ralphs Granada Hills #646,818-831-6556,18010 Chatsworth St. - 91344,91344,"34.2647361755371,-118.525550842285",Los Angeles,California,34.2647361755371,-118.525550842285
109,1005502,Ralphs Los Angeles #210,310-473-5238,11727 W Olympic Blvd - 90064,90064,"34.0339965820313,-118.44832611084",Los Angeles,California,34.0339965820313,-118.44832611084
110,113823,Ralphs Van Nuys #702,818-989-5640,14440 Burbank Blvd - 91401,91401,"34.1715545654297,-118.447357177734",Los Angeles,California,34.1715545654297,-118.447357177734
111,1007469,Ralphs-Sherman Oaks #222,310-473-5238,14049 Ventura Blvd - 91403,91403,"34.1509208679199,-118.448753356934",Los Angeles,California,34.1509208679199,-118.448753356934
112,12476,Reseda & Plummer Northridge,818-998-7001,9420 Reseda Blvd. - 913246001,913246001,"34.24168,-118.535476",Los Angeles,California,34.24168,-118.535476
113,11246,Reseda & Vanowen Reseda,818-609-9022,6840 Reseda Blvd - 913354204,913354204,"34.195004,-118.535624",Los Angeles,California,34.195004,-118.535624
114,11851,Rinaldi & Corbin Porter Ranch,818-363-3384,19759 Rinaldi St - 913264143,913264143,"34.274848,-118.564311",Los Angeles,California,34.274848,-118.564311
115,16471,Riverside & Fulton Sherman Oaks,818-789-1541,13351 Riverside Dr - 914232542,914232542,"34.15739,-118.424415",Los Angeles,California,34.15739,-118.424415
116,116630,Roscoe & Balboa,8188818053,16926 Roscoe Blvd - 91406,91406,"34.2209892272949,-118.502151489258",Los Angeles,California,34.2209892272949,-118.502151489258
117,15426,Safeway-Brentwood #2621,925-626-6020,3110 Balfour Road - 945135500,945135500,"37.924041,-121.721634",Los Angeles,California,37.924041,-121.721634
118,12119,San Vicente & 26th,(310) 395-8212,13050 San Vicente Blvd. - 90049,90049,"34.048222,-118.49122",Los Angeles,California,34.048222,-118.49122
119,15200,Santa Monica & Fairfax Los Angeles,323-822-9733,7901 Santa Monica Blvd - 900465178,900465178,"34.091007,-118.361711",Los Angeles,California,34.091007,-118.361711
120,12058,Santa Monica & La Brea West Hollyw,323-874-2135,7100 Santa Monica Blvd - 900466174,900466174,"34.090396,-118.344296",Los Angeles,California,34.090396,-118.344296
121,15441,Santa Monica & Pontius,3103122903,11155 Santa Monica Blvd. - 900253313,900253313,"34.047554,-118.445226",Los Angeles,California,34.047554,-118.445226
122,13311,Santa Monica at Bundy,(310) 571-9262,12100 Santa Monica Blvd. - 900252516,900252516,"34.040344,-118.463325",Los Angeles,California,34.040344,-118.463325
123,8261,Saticoy & Louise West Van Nuys,818-757-3142,17272 Saticoy Street - 914062103,914062103,"34.207734,-118.509609",Los Angeles,California,34.207734,-118.509609
124,6559,Sepulveda & 89th Westchester,310-645-0416,8844 S. Sepulveda Blvd - 900454833,900454833,"33.956091,-118.395951",Los Angeles,California,33.956091,-118.395951
125,9729,Sepulveda & Nordhoff,818-221-6907,9002 Sepulveda Blvd. - 913434308,913434308,"34.234621,-118.467262",Los Angeles,California,34.234621,-118.467262
126,15788,Sepulveda & Ventura Sherman Oaks,818-728-1589,15301 Ventura Blvd - 914035891,914035891,"34.153629,-118.465792",Los Angeles,California,34.153629,-118.465792
127,15167,Sepulveda & Vermont Harbor City,310-891-1915,898 Sepulveda Blvd. - 907101605,907101605,"33.809793,-118.290023",Los Angeles,California,33.809793,-118.290023
128,9805,Sheraton Gateway Hotel,310-642-4803,6101 W Century Blvd - 900455310,900455310,"33.946424,-118.39094",Los Angeles,California,33.946424,-118.39094
129,10725,Sherman & Whitsett North Hollywood,818-392-7641,12520 Sherman Way - 916055236,916055236,"34.201057,-118.406906",Los Angeles,California,34.201057,-118.406906
130,15794,Sherman Oaks,(818) 501-6535,14622 Ventura Blvd. - 914033662,914033662,"34.15097,-118.452183",Los Angeles,California,34.15097,-118.452183
131,14071,Sherman Way & Sepulveda Van Nuys,818-787-0135,15355 Sherman Way - 914064200,914064200,"34.201435,-118.46818",Los Angeles,California,34.201435,-118.46818
132,12060,Shirley & Plummer - Northridge,818-576-1073,19500 Plummer St. - 913242144,913242144,"34.241742,-118.559086",Los Angeles,California,34.241742,-118.559086
133,15060,Slauson & I-5 Commerce,323-725-8774,7724 Telegraph Road - 900403235,900403235,"33.975382,-118.124311",Los Angeles,California,33.975382,-118.124311
134,15259,Studio City,(818) 762-9368,12170 Ventura Blvd - 916042514,916042514,"34.143206,-118.397337",Los Angeles,California,34.143206,-118.397337
135,18591,Sunset & Crescent Heights Hollywoo,323-656-1812,8000 Sunset Blvd. - 900462439,900462439,"34.09777,-118.365224",Los Angeles,California,34.09777,-118.365224
136,9353,Sunset & Gower - Hollywood,(323) 467-6404,6102 W. Sunset Blvd. - 900286424,900286424,"34.097411,-118.322485",Los Angeles,California,34.097411,-118.322485
137,11568,Sunset & La Brea - Hollywood,(323) 469-6994,7055 SUNSET BLVD - 900287509,900287509,"34.09815,-118.343507",Los Angeles,California,34.09815,-118.343507
138,11156,Sunset & Mohawk (Lucy's),213-413-9612,2134 Sunset Blvd - 900261695,900261695,"34.077148,-118.264722",Los Angeles,California,34.077148,-118.264722
139,1007094,Sunset & Palisades,310 5734138,514 Palisades Drive - 90272,90272,"34.044864654541,-118.551605224609",Los Angeles,California,34.044864654541,-118.551605224609
140,1007064,Sunset & Vine Hollywood,323-464-1859,6290 Sunset Blvd. - 90028,90028,"34.0978355407715,-118.326438903809",Los Angeles,California,34.0978355407715,-118.326438903809
141,9649,Sunset Blvd & St. Andrews Place Ho,323-962-4525,5545 W. Sunset Blvd. - 900288521,900288521,"34.098113,-118.310712",Los Angeles,California,34.098113,-118.310712
142,13332,Sunset Strip,(323) 848-8663,8363 N.E. Sunset Blvd. - 900691515,900691515,"34.0957,-118.372111",Los Angeles,California,34.0957,-118.372111
143,89974,SWC 3rd & Hope - Bank of America,(213)6214191,333 South Hope Street - 90071,90071,"34.0533790588379,-118.253479003906",Los Angeles,California,34.0533790588379,-118.253479003906
144,9168,Taft Plaza - Woodland Hills,(818) 883-1498,20054 Ventura Blvd. - 913642637,913642637,"34.170689,-118.569989",Los Angeles,California,34.170689,-118.569989
145,12475,Tampa & Victory Reseda,818-342-7130,19313 Victory Boulevard - 913356302,913356302,"34.187712,-118.553726",Los Angeles,California,34.187712,-118.553726
146,1006169,Target @ West Hollywood T-1884,323-603-0004,7100 Santa Monca Blvd - Suite 201 - 90046,90046,"34.0906944274902,-118.344078063965",Los Angeles,California,34.0906944274902,-118.344078063965
147,18210,Target Granada Hills T-2329,818-360-2999,17055 San Fernando Mission Blvd - 913444199,913444199,"34.272224,-118.50414",Los Angeles,California,34.272224,-118.50414
148,114059,Target LA Beverly T-2775,323-602-0637,8480 Beverly Blvd - 900483414,900483414,"34.0752601623535,-118.37557220459",Los Angeles,California,34.0752601623535,-118.37557220459
149,91889,Target LA Central T-2776,213-330-4543,735 S Figueroa St - 900172571,900172571,"34.0488891601563,-118.260314941406",Los Angeles,California,34.0488891601563,-118.260314941406
150,89774,Target LA Westwood T-2774,310-893-2360,10861 Weyburn Ave - 900242957,900242957,"34.0630187988281,-118.443962097168",Los Angeles,California,34.0630187988281,-118.443962097168
151,68321,Target Los Angeles Eagle T-1408,323-258-1355,2626 Colorado Blvd - 900411070,900411070,"34.142155,-118.22339",Los Angeles,California,34.142155,-118.22339
152,7848,Target Los Angeles T-1306,(310) 895-1131,3535 S La Cienega Blvd - 900164407,900164407,"34.023407,-118.373792",Los Angeles,California,34.023407,-118.373792
153,7040,Target North Hollywood T-294,818-761-3083,11051 Victory Blvd - 916063719,916063719,"34.188116,-118.371356",Los Angeles,California,34.188116,-118.371356
154,9480,Target Northridge T-2020,818-924-9001,8999 Balboa Ave - 913252608,913252608,"34.233912,-118.502537",Los Angeles,California,34.233912,-118.502537
155,10682,Target San Pedro T-2470,310-214-1561,1701 N Gaffey St - 90731,90731,"33.760448,-118.293303",Los Angeles,California,33.760448,-118.293303
156,68742,Target Van Nuys T-1307,818-779-0163,5711 Sepulveda Blvd - 914112918,914112918,"34.17416,-118.46633",Los Angeles,California,34.17416,-118.46633
157,1006180,Target Van Nuys T-1309,818-922-1001,14920 Raymer Street - 91405,91405,"34.2132377624512,-118.459106445313",Los Angeles,California,34.2132377624512,-118.459106445313
158,1006427,Target West Hills T-228,818-999-2390,6636 Fallbrook Avenue - 91307,91307,"34.1912498474121,-118.62336730957",Los Angeles,California,34.1912498474121,-118.62336730957
159,14344,Target Woodland Hills T-288,818-713-2707,20801 Ventura Blvd - 913642363,913642363,"34.167251,-118.584929",Los Angeles,California,34.167251,-118.584929
160,9977,Target Woodland Hills/TopangaT-2143,818-746-9922,6700 Topanga Canyon Blvd - 913032624,913032624,"34.191951873752,-118.60379556296",Los Angeles,California,34.191951873752,-118.60379556296
161,13320,The Beverly Center,(310) 358-0161,8500 Beverly Center - 90048,90048,"34.074577,-118.376269",Los Angeles,California,34.074577,-118.376269
162,16846,The Gas Co. Tower,(213) 892-0306,555 West 5th Street - 900131007,900131007,"34.050095,-118.253138",Los Angeles,California,34.050095,-118.253138
163,18669,Topanga Cyn & Dumetz Woodland Hill,818-704-1730,4900 Topanga Canyon Blvd - 913643112,913643112,"34.157158,-118.605497",Los Angeles,California,34.157158,-118.605497
164,14850,Topanga Cyn./Lassen,(818) 701-5823,9935 Topanga Canyon Boulevard - 913113602,913113602,"34.250758,-118.606281",Los Angeles,California,34.250758,-118.606281
165,16032,Topanga Plaza,(818) 999-2653,6600 Topanga Canyon Blvd. - 913032609,913032609,"34.192450079559,-118.60333438455",Los Angeles,California,34.192450079559,-118.60333438455
166,90182,Torrey Pines & Hershel,858-454-2801,1055 Torrey Pines Road - 920375022,920375022,"32.8425636291504,-117.272277832031",Los Angeles,California,32.8425636291504,-117.272277832031
167,90142,Trojan Grounds @ USC,213-740-6285,642 W 34th St - 90007,90007,"34.0217971801758,-118.281936645508",Los Angeles,California,34.0217971801758,-118.281936645508
168,17264,Tujunga & CamarilloNorth Hollywood,818-761-0164,11331 Camarillo Street - 916021216,916021216,"34.157886,-118.378736",Los Angeles,California,34.157886,-118.378736
169,20070,Union Station (DTLA),213-621-2862,800 N. Alameda Street - 900122177,900122177,"34.05507,-118.232759",Los Angeles,California,34.05507,-118.232759
170,8858,Universal City Walk,818-622-2233,100 Universal City Plaza - 916081085,916081085,"34.136296,-118.353108",Los Angeles,California,34.136296,-118.353108
171,1009000,Universal Studios Hollywood Studio,818-777-8002,100 Universal City Plaza - 91608,91608,"34.1407623291016,-118.356750488281",Los Angeles,California,34.1407623291016,-118.356750488281
172,7779,Van Nuys & Michaels Van Nuys,(818) 787-0904,7902 VAN NUYS BLVD - 914026084,914026084,"34.214563,-118.448472",Los Angeles,California,34.214563,-118.448472
173,13312,Venice Crossroads,(310) 558-0407,8985 Venice Blvd - 900343344,900343344,"34.027136,-118.392767",Los Angeles,California,34.027136,-118.392767
174,12156,Ventura & Alcove - Studio City,(818) 753-8886,12824 Ventura Blvd. - 916042367,916042367,"34.14468,-118.412371",Los Angeles,California,34.14468,-118.412371
175,11096,Ventura & Allott Sherman Oaks,818-981-2843,13535 Ventura Blvd. - 914233876,914233876,"34.147821,-118.42818",Los Angeles,California,34.147821,-118.42818
176,1006924,Ventura & De Soto,818-610-8637,20903 Ventura Blvd. - 91367,91367,"34.1668128967285,-118.588470458984",Los Angeles,California,34.1668128967285,-118.588470458984
177,9164,Ventura & Noble - Sherman Oaks,(818) 783-3380,15030 Ventura Blvd. - 914035470,914035470,"34.152714,-118.460494",Los Angeles,California,34.152714,-118.460494
178,10212,Ventura & Shoup Woodland Hills,8189921730,22435 Ventura Blvd - 913641544,913641544,"34.168607,-118.615841",Los Angeles,California,34.168607,-118.615841
179,18502,Ventura & Vineland Studio City,818-762-9121,10965 Ventura Blvd - 916043341,916043341,"34.140206,-118.368408",Los Angeles,California,34.140206,-118.368408
180,65807,Ventura & Yolanda Tarzana,818-881-1639,18700 Ventura Blvd. - 913563303,913563303,"34.17055,-118.54045",Los Angeles,California,34.17055,-118.54045
181,6360,Ventura Blvd & Shirley,818-774-9660,19439 Ventura Blvd - 913563030,913563030,"34.17288,-118.556496",Los Angeles,California,34.17288,-118.556496
182,15113,Vermont & Prospect Los Angeles,323-662-7705,1700 N. Vermont Avenue - 900274306,900274306,"34.10194,-118.291464",Los Angeles,California,34.10194,-118.291464
183,1007346,Vermont & Wilshire,213-384-3578,3150 Wilshire Blvd - 90010,90010,"34.061695098877,-118.291381835938",Los Angeles,California,34.061695098877,-118.291381835938
184,14702,Victory & Canoga - Woodland Hills,(818) 884-9418,21504 Victory Blvd. - 913672423,913672423,"34.187879,-118.599373",Los Angeles,California,34.187879,-118.599373
185,16915,Victory & Coldwater N. Hollywood,818-762-7450,12848 Victory Blvd. - 916063013,916063013,"34.186449,-118.413449",Los Angeles,California,34.186449,-118.413449
186,9991,Von's-West Hollywood #2739,(310) 595-1737,8969 Santa Monica Blvd. - 900694934,900694934,"34.083722,-118.386627",Los Angeles,California,34.083722,-118.386627
187,10964,Vons - Canoga Park #1673,(818) 703-5959,8201 TOPANGA CANYON BLVD - 913043800,913043800,"34.218145,-118.607022",Los Angeles,California,34.218145,-118.607022
188,8637,Vons - San Pedro #2283,310-832-7063,1221 GAFFEY ST. - 90731,90731,"33.732889232613,-118.29325723041",Los Angeles,California,33.732889232613,-118.29325723041
189,14639,Vons - Tujunga #2124,818-353-4917,7789 Foothill Blvd - 910422137,910422137,"34.259272,-118.301617",Los Angeles,California,34.259272,-118.301617
190,17741,Vons- Los Angeles #2655,323-254-5716,7311 N Figueroa St - 900412512,900412512,"34.13639,-118.189348",Los Angeles,California,34.13639,-118.189348
191,9651,Vons-Granada Hills #2250,818-831-8511,16830 San Fernando Mission B - 913444247,913444247,"34.271866,-118.49975",Los Angeles,California,34.271866,-118.49975
192,9398,Vons-Los Angeles #2077,310-477-8717,3118 S Sepulveda Blvd - 900344204,900344204,"34.026617,-118.427083",Los Angeles,California,34.026617,-118.427083
193,16222,Vons-Los Angeles #2229,323-461-4167,727 N Vine St - 900383713,900383713,"34.084362,-118.326967",Los Angeles,California,34.084362,-118.326967
194,8885,Vons-Los Angeles #2261,(323) 936-2997,3461 W 3rd St - 900201604,900201604,"34.069621,-118.290523",Los Angeles,California,34.069621,-118.290523
195,11845,Vons-Los Angeles #2665,323-662-8107,4520 Sunset Blvd - 90028,90028,"34.097044,-118.288006",Los Angeles,California,34.097044,-118.288006
196,20223,Vons-Pacific Palisades #2266,310-454-2502,17380 Sunset Blvd - 902724102,902724102,"34.039577,-118.55437",Los Angeles,California,34.039577,-118.55437
197,14128,Vons-San Pedro #2162,310-832-8459,1440 W 25th St - 907324418,907324418,"33.721737,-118.30995",Los Angeles,California,33.721737,-118.30995
198,17690,Vons-Studio City #1674,818-985-5401,4033 Laurel Canyon Blvd - 916042016,916042016,"34.144375,-118.395744",Los Angeles,California,34.144375,-118.395744
199,12746,Vons-Tarzana #2066,818-881-5527,18439 Ventura Blvd - 913564201,913564201,"34.168978,-118.534406",Los Angeles,California,34.168978,-118.534406
200,9811,Vons-Woodland Hills #2031,818-223-3221,23381 Mulholland Dr - 913642734,913642734,"34.158234,-118.63571",Los Angeles,California,34.158234,-118.63571
201,9028,West Hills,(818) 346-3085,6516 Platt Avenue - 913073218,913073218,"34.188858,-118.642647",Los Angeles,California,34.188858,-118.642647
202,14828,West Hollywood - #633,(310) 659-1856,8595 Santa Monica Blvd. - 900694120,900694120,"34.088283,-118.379078",Los Angeles,California,34.088283,-118.379078
203,14858,West Hollywood II,(310) 274-1074,8949 Santa Monica Blvd. - 900694912,900694912,"34.084156,-118.385525",Los Angeles,California,34.084156,-118.385525
204,11710,West Pico Boulevard,(310) 470-8863,10911 W Pico Boulevard - 900642111,900642111,"34.039601,-118.429978",Los Angeles,California,34.039601,-118.429978
205,8827,Westchester,(310) 342-0152,8817 South Sepulveda Blvd. - 900454809,900454809,"33.956135,-118.395906",Los Angeles,California,33.956135,-118.395906
206,8969,Western & 25th,310-514-0047,2470 S Western Ave - 907324359,907324359,"33.72334,-118.312054",Los Angeles,California,33.72334,-118.312054
207,1005782,Western & Lomita,3105344907,1680 W. Lomita Blvd. - 90710,90710,"33.797534942627,-118.307159423828",Los Angeles,California,33.797534942627,-118.307159423828
208,14352,Western & Slauson,323-292-4429,1850 W. Slauson Avenue - 900471126,900471126,"33.98901,-118.309936",Los Angeles,California,33.98901,-118.309936
209,13417,Western & Westmont San Pedro,310-514-2550,28166 S. Western Ave. - 907321248,907321248,"33.761986,-118.31082",Los Angeles,California,33.761986,-118.31082
210,9205,Westwood,(310) 208-5505,1161 Westwood Blvd. - 900243419,900243419,"34.059427,-118.444728",Los Angeles,California,34.059427,-118.444728
211,12149,Westwood & Missouri - Westwood,(310) 470-8494,1898 Westwood Blvd. - 900254612,900254612,"34.048356,-118.435384",Los Angeles,California,34.048356,-118.435384
212,14637,Wilshire & Bixel Los Angeles,213-250-8291,1090 Wilshire Blvd. - 900172416,900172416,"34.05211,-118.26323",Los Angeles,California,34.05211,-118.26323
213,19370,Wilshire & Curson Los Angeles,323-931-1013,5757 Wilshire Blvd - 900363684,900363684,"34.062508,-118.354609",Los Angeles,California,34.062508,-118.354609
214,7232,Wilshire & Detroit Los Angeles,(323) 939-2071,5353 Wilshire Blvd. - 900364284,900364284,"34.062443,-118.345269",Los Angeles,California,34.062443,-118.345269
215,8668,Wilshire & Highland,(323) 936-2989,5020 Wilshire Blvd. - 900364315,900364315,"34.061907,-118.33892",Los Angeles,California,34.061907,-118.33892
216,91227,Wilshire & Normandie Los Angeles,(213) 382-3351,3450 Wilshire Blvd. - 90010,90010,"34.061450958252,-118.299522399902",Los Angeles,California,34.061450958252,-118.299522399902
217,15618,Wilshire & Serrano Los Angeles,213-383-5370,3680 Wilshire Blvd. - 900102707,900102707,"34.06073,-118.306143",Los Angeles,California,34.06073,-118.306143
218,11305,Wilshire & Union Los Angeles,213-484-0958,1601 Wilshire Blvd - 900171610,900171610,"34.055928,-118.270336",Los Angeles,California,34.055928,-118.270336

`;

const rows = csvData.trim().split('\n');

const stores = {
type: 'FeatureCollection',
features: rows.map(row => {
const columns = row.split(',');
return {
type: 'Feature',
geometry: {
  type: 'Point',
  coordinates: JSON.parse('['+columns[11]+','+columns[10]+']').map(coord => parseFloat(coord))
},
properties: {
  phoneFormatted: columns[3],
  phone: columns[3],
  address: columns[4].replace(/"/g, ''),
  city: 'Los Angeles',
  country: 'United States',
  postalCode: columns[5],
  state: 'California'
}
};
})
};

console.log(JSON.stringify(stores, null, 2));

stores.features.forEach((store, i) => {
  store.properties.id = i;
});


map.on('load', () => {

  map.addSource('places', {
    'type': 'geojson',
    'data': stores
  });


  buildLocationList(stores);
  addMarkers();
});


function addMarkers() {

  for (const marker of stores.features) {

    const el = document.createElement('div');

    el.id = `marker-${marker.properties.id}`;
 
    el.className = 'marker';
    const lngLat = new mapboxgl.LngLat(marker.geometry.coordinates[0], marker.geometry.coordinates[1]);

    console.log('LngLat:', lngLat);

    new mapboxgl.Marker(el, { offset: [0, -23] })

      .setLngLat(new mapboxgl.LngLat(marker.geometry.coordinates[0], marker.geometry.coordinates[1]))
      .addTo(map);


    el.addEventListener('click', (e) => {

      flyToStore(marker);
    
      createPopUp(marker);

      const activeItem = document.getElementsByClassName('active');
      e.stopPropagation();
      if (activeItem[0]) {
        activeItem[0].classList.remove('active');
      }
      const listing = document.getElementById(
        `listing-${marker.properties.id}`
      );
      listing.classList.add('active');
    });
  }
}


function buildLocationList(stores) {
  for (const store of stores.features) {
   
    const listings = document.getElementById('listings');
    const listing = listings.appendChild(document.createElement('div'));

    listing.id = `listing-${store.properties.id}`;

    listing.className = 'item';


    const link = listing.appendChild(document.createElement('a'));
    link.href = '#';
    link.className = 'title';
    link.id = `link-${store.properties.id}`;
    link.innerHTML = `${store.properties.address}`;


    const details = listing.appendChild(document.createElement('div'));
    details.innerHTML = `${store.properties.city}`;
    if (store.properties.phone) {
      details.innerHTML += ` &middot; ${store.properties.phoneFormatted}`;
    }


    link.addEventListener('click', function () {
      for (const feature of stores.features) {
        if (this.id === `link-${feature.properties.id}`) {
          flyToStore(feature);
          createPopUp(feature);
        }
      }
      const activeItem = document.getElementsByClassName('active');
      if (activeItem[0]) {
        activeItem[0].classList.remove('active');
      }
      this.parentNode.classList.add('active');
    });
  }
}

function flyToStore(currentFeature) {
  map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 15
  });
}


function createPopUp(currentFeature) {
  const popUps = document.getElementsByClassName('mapboxgl-popup');
  if (popUps[0]) popUps[0].remove();
  const popup = new mapboxgl.Popup({ closeOnClick: false })
    .setLngLat(currentFeature.geometry.coordinates)
    .setHTML(
      `<h3>Starbucks Coffee</h3><h4>${currentFeature.properties.address}</h4>`
    )
    .addTo(map);
}