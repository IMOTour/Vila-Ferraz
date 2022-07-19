var APP_DATA = {
  "scenes": [
    {
      "id": "0-frt-door",
      "name": "Frt door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.2465502218475777,
        "pitch": -0.46547255424278333,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": -2.231142341338911,
          "pitch": -0.18133261183762706,
          "rotation": 0,
          "target": "1-hall"
        },
        {
          "yaw": -0.5190804550292842,
          "pitch": 0.07438602168789643,
          "rotation": 3.141592653589793,
          "target": "43-front---right---side"
        },
        {
          "yaw": 2.369020170861459,
          "pitch": 0.10290312958319525,
          "rotation": 3.141592653589793,
          "target": "44-front---left---side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.613038902151974,
        "pitch": -0.2700561831295438,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": 1.6381961905154423,
          "pitch": 0.08976731227682322,
          "rotation": 0,
          "target": "0-frt-door"
        },
        {
          "yaw": -0.4799051390827387,
          "pitch": -0.2663470254182112,
          "rotation": 0.7853981633974483,
          "target": "2-bedroom-1"
        },
        {
          "yaw": -2.841081143774959,
          "pitch": -0.15322278703188985,
          "rotation": 5.497787143782138,
          "target": "4-bedroom-2"
        },
        {
          "yaw": -1.601780224442317,
          "pitch": 0.43190215873449844,
          "rotation": 0,
          "target": "6-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bedroom-1",
      "name": "Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.6672084052547103,
        "pitch": 0.06667384083732486,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": -0.17747240309392254,
          "pitch": -0.18186059120192688,
          "rotation": 0.7853981633974483,
          "target": "3-wc1"
        },
        {
          "yaw": -2.08892764296748,
          "pitch": -0.2121487965700215,
          "rotation": 0.7853981633974483,
          "target": "1-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-wc1",
      "name": "Wc1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.85813020841457,
        "pitch": 0.11976718256349805,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": 2.8434699660971345,
          "pitch": -0.09773425330623198,
          "rotation": 0.7853981633974483,
          "target": "2-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.1413652046657994,
        "pitch": 0.04932637110157856,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": -2.848539831855165,
          "pitch": -0.011684500798020636,
          "rotation": 5.497787143782138,
          "target": "5-wc2"
        },
        {
          "yaw": -2.433041276464465,
          "pitch": -0.07179930647104982,
          "rotation": 0.7853981633974483,
          "target": "1-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-wc2",
      "name": "Wc2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.6673452715115378,
        "pitch": 0.4113703977452694,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": -1.3366155567901856,
          "pitch": -0.07092125086825263,
          "rotation": 0.7853981633974483,
          "target": "4-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-corridor-1",
      "name": "Corridor 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.333407426103708,
        "pitch": 0.18303826636187281,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": 0.9229073157027887,
          "pitch": -0.1403173725741489,
          "rotation": 4.71238898038469,
          "target": "1-hall"
        },
        {
          "yaw": 3.1324728336641128,
          "pitch": -0.1386627241464229,
          "rotation": 0.7853981633974483,
          "target": "7-bedroom-3"
        },
        {
          "yaw": 1.9998136674477616,
          "pitch": 0.5989389858248906,
          "rotation": 0,
          "target": "9-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom-3",
      "name": "Bedroom 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.136607854798946,
        "pitch": 0.11839441227913738,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": -1.0304439967277155,
          "pitch": -0.1838705812767678,
          "rotation": 5.497787143782138,
          "target": "8-wc3"
        },
        {
          "yaw": -0.2929582479943864,
          "pitch": -0.0557312714326077,
          "rotation": 0.7853981633974483,
          "target": "6-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-wc3",
      "name": "Wc3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.6150043774360228,
        "pitch": 0.3096152574420259,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": 0.5197074071897063,
          "pitch": -0.24659024203367963,
          "rotation": 0.7853981633974483,
          "target": "7-bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-corridor-2",
      "name": "Corridor 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.7578339685050963,
        "pitch": 0.21081022925516635,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": 2.6193108467567097,
          "pitch": 0.12195399850478772,
          "rotation": 0,
          "target": "10-service-entrandce"
        },
        {
          "yaw": 0.9079023538048219,
          "pitch": 0.656353660871785,
          "rotation": 0,
          "target": "18-corridor-3"
        },
        {
          "yaw": -2.0140656743817758,
          "pitch": 0.5214262824046347,
          "rotation": 0,
          "target": "6-corridor-1"
        },
        {
          "yaw": 0.9999879709893165,
          "pitch": 0.15338499266903227,
          "rotation": 0,
          "target": "20-dinning-room-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-service-entrandce",
      "name": "Service entrandce",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.4499396874705273,
        "pitch": 0.16539994021617233,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": -0.3376225265521846,
          "pitch": -0.04744740810623682,
          "rotation": 0.7853981633974483,
          "target": "9-corridor-2"
        },
        {
          "yaw": -1.9817463339426098,
          "pitch": 0.1308176883812333,
          "rotation": 5.497787143782138,
          "target": "11-service-entrance-out"
        },
        {
          "yaw": 0.7845701666578329,
          "pitch": 0.6783781038975185,
          "rotation": 5.497787143782138,
          "target": "12-basement-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-service-entrance-out",
      "name": "Service entrance out",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.3186450451203875,
        "pitch": -0.12384486949464346,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": -0.39615605816050525,
          "pitch": -0.15662816779732935,
          "rotation": 0,
          "target": "10-service-entrandce"
        },
        {
          "yaw": 2.3384053238830047,
          "pitch": 0.37381839220601876,
          "rotation": 0,
          "target": "61-rear-patio-far"
        },
        {
          "yaw": -2.4546868669969513,
          "pitch": 0.034679713827303615,
          "rotation": 0,
          "target": "60-rear-patio"
        },
        {
          "yaw": 1.2746257861003496,
          "pitch": 0.08979753507454546,
          "rotation": 0,
          "target": "64-rear-patio-end"
        },
        {
          "yaw": 2.2415285892160046,
          "pitch": 0.011062096461657234,
          "rotation": 0,
          "target": "62-worker-house"
        },
        {
          "yaw": 2.6843150989709095,
          "pitch": 0.026047670405789702,
          "rotation": 0,
          "target": "55-garage-2"
        },
        {
          "yaw": -1.9534872267986483,
          "pitch": 0.025616456576770474,
          "rotation": 0,
          "target": "52-side-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-basement-1",
      "name": "Basement 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.0330412573120906,
        "pitch": 0.0204915013077418,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": -0.05577325250665943,
          "pitch": -0.13596129692771086,
          "rotation": 0.7853981633974483,
          "target": "10-service-entrandce"
        },
        {
          "yaw": -1.2625889319920223,
          "pitch": 0.05532156926281928,
          "rotation": 0,
          "target": "13-basement-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-basement-2",
      "name": "Basement 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.3904869013380097,
        "pitch": 0.06624777255477454,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": -0.11582840548873108,
          "pitch": 0.10002229029512932,
          "rotation": 0,
          "target": "12-basement-1"
        },
        {
          "yaw": 1.1966978008687992,
          "pitch": 0.0875074600510608,
          "rotation": 0.7853981633974483,
          "target": "14-basemente-wc"
        },
        {
          "yaw": 3.01295650751958,
          "pitch": 0.15068332052326205,
          "rotation": 0,
          "target": "16-game-room"
        },
        {
          "yaw": -1.6782169389523798,
          "pitch": -0.036356631151015506,
          "rotation": 0,
          "target": "17-wine-cellar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-basemente-wc",
      "name": "Basemente wc",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.6909778821285517,
        "pitch": 0.20740824913277933,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": 3.082432511041258,
          "pitch": -0.11915388749436318,
          "rotation": 0.7853981633974483,
          "target": "15-basemente-wc-2"
        },
        {
          "yaw": 0.33653992417507617,
          "pitch": -0.010117332546576208,
          "rotation": 0.7853981633974483,
          "target": "13-basement-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-basemente-wc-2",
      "name": "Basemente wc 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.9623428227727953,
        "pitch": 0.7636136293168363,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": 0.06709386831499131,
          "pitch": -0.04366662890193673,
          "rotation": 0.7853981633974483,
          "target": "14-basemente-wc"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-game-room",
      "name": "Game room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.7403023887237836,
        "pitch": -0.04156948075967293,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": -0.626106941992731,
          "pitch": 0.04489634459595493,
          "rotation": 0,
          "target": "12-basement-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-wine-cellar",
      "name": "Wine cellar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.7007226430554567,
        "pitch": 0.1554462341863747,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": -0.1531337834481441,
          "pitch": 0.03618585715599565,
          "rotation": 0,
          "target": "13-basement-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-corridor-3",
      "name": "Corridor 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.22428237691201858,
        "pitch": 0.07900448571211527,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": 0.4126244448647238,
          "pitch": 0.5162828598872569,
          "rotation": 0,
          "target": "9-corridor-2"
        },
        {
          "yaw": -1.232761935410748,
          "pitch": 0.1593041952243901,
          "rotation": 0,
          "target": "19-wc-corridor"
        },
        {
          "yaw": -2.6908287516429663,
          "pitch": 0.2500060721858226,
          "rotation": 0,
          "target": "20-dinning-room-corridor"
        },
        {
          "yaw": -0.8798757793925738,
          "pitch": -0.17438181920705453,
          "rotation": 0,
          "target": "27-mid-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-wc-corridor",
      "name": "Wc corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.4516716173551032,
        "pitch": 0.03843461467075571,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": 2.231930238046491,
          "pitch": 0.14035384256135686,
          "rotation": 0,
          "target": "18-corridor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-dinning-room-corridor",
      "name": "Dinning room corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.2722404268989642,
        "pitch": 0.051246152894346864,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": 2.002963048462144,
          "pitch": 0.06257997971200169,
          "rotation": 0,
          "target": "18-corridor-3"
        },
        {
          "yaw": 0.4965912859101067,
          "pitch": 0.058594196123248565,
          "rotation": 0.7853981633974483,
          "target": "22-dinning-room-close"
        },
        {
          "yaw": -2.7181510643183593,
          "pitch": 0.1967995493282526,
          "rotation": 0,
          "target": "21-dinning-room-entrance"
        },
        {
          "yaw": -1.0825185091477127,
          "pitch": -0.0578747464988858,
          "rotation": 0,
          "target": "26-kitchen-far"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-dinning-room-entrance",
      "name": "Dinning room entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.778325317839112,
        "pitch": 7.105427357601002e-15,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": 1.8864938024785136,
          "pitch": -0.051093330789601765,
          "rotation": 0.7853981633974483,
          "target": "20-dinning-room-corridor"
        },
        {
          "yaw": -1.0224808452037752,
          "pitch": 0.05593723737017342,
          "rotation": 0,
          "target": "44-front---left---side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-dinning-room-close",
      "name": "Dinning room close",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.80415278318187,
        "pitch": 0.06307908253177175,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": 2.7118784045742306,
          "pitch": -0.011041325252516998,
          "rotation": 0,
          "target": "20-dinning-room-corridor"
        },
        {
          "yaw": -1.8750504868688704,
          "pitch": 0.28220167937849716,
          "rotation": 0,
          "target": "23-dinning-room-windows"
        },
        {
          "yaw": -2.4980875774470093,
          "pitch": 0.09326830816292997,
          "rotation": 0,
          "target": "24-dinning-room-far"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-dinning-room-windows",
      "name": "Dinning room windows",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.9320431175899593,
        "pitch": 0.19810434104988417,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": 2.1344124632352495,
          "pitch": 0.04777941216895698,
          "rotation": 0,
          "target": "22-dinning-room-close"
        },
        {
          "yaw": -2.5582606902507585,
          "pitch": 0.13080969350210125,
          "rotation": 0,
          "target": "24-dinning-room-far"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-dinning-room-far",
      "name": "Dinning room far",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.5522163870475367,
        "pitch": -0.05551666563553681,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": -0.22806147875566296,
          "pitch": 0.14637312718585882,
          "rotation": 0,
          "target": "23-dinning-room-windows"
        },
        {
          "yaw": 0.5547702097913465,
          "pitch": 0.010904058049110432,
          "rotation": 0,
          "target": "22-dinning-room-close"
        },
        {
          "yaw": 1.117477377329699,
          "pitch": 0.07534176505424561,
          "rotation": 0.7853981633974483,
          "target": "20-dinning-room-corridor"
        },
        {
          "yaw": -2.560351537762827,
          "pitch": 0.09337080282233856,
          "rotation": 0.7853981633974483,
          "target": "25-kitchen-close"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-kitchen-close",
      "name": "Kitchen close",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.992610943532167,
        "pitch": 0.11184346064853123,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": 2.6742570333109725,
          "pitch": 0.08685712060959361,
          "rotation": 0,
          "target": "24-dinning-room-far"
        },
        {
          "yaw": -2.2939999149251697,
          "pitch": 0.10845162239397865,
          "rotation": 0,
          "target": "26-kitchen-far"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-kitchen-far",
      "name": "Kitchen far",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.719137060231116,
        "pitch": 0.1251588734150353,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": 2.109455834278691,
          "pitch": 0.16318834322687437,
          "rotation": 0,
          "target": "25-kitchen-close"
        },
        {
          "yaw": -2.5991127852943325,
          "pitch": 0.11472617262160512,
          "rotation": 0,
          "target": "20-dinning-room-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-mid-stairs",
      "name": "Mid stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.581022529699256,
        "pitch": 0.31767869780334834,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": 1.6163269556337845,
          "pitch": 0.5702655380929365,
          "rotation": 0,
          "target": "18-corridor-3"
        },
        {
          "yaw": 1.1611403918650929,
          "pitch": -0.18552724847338808,
          "rotation": 0,
          "target": "28-1st-floor-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-1st-floor-landing",
      "name": "1st floor landing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.0149964330732804,
        "pitch": 0.22040590758725287,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": 1.8497182327574855,
          "pitch": 0.6033668479692107,
          "rotation": 0,
          "target": "27-mid-stairs"
        },
        {
          "yaw": -1.1067133943003071,
          "pitch": 0.07680174554260688,
          "rotation": 0,
          "target": "29-bedroom-4"
        },
        {
          "yaw": -2.9708327420581693,
          "pitch": 0.3996367376759604,
          "rotation": 0,
          "target": "31-corridor-bd5"
        },
        {
          "yaw": 1.4824352739988846,
          "pitch": -0.21990370950980243,
          "rotation": 0,
          "target": "38-steps-2nd-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-bedroom-4",
      "name": "Bedroom 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.637490198625473,
        "pitch": 0.04651052930551813,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": 1.206697965264313,
          "pitch": -0.12564601133485453,
          "rotation": 0,
          "target": "30-wc-4"
        },
        {
          "yaw": 0.6879633797081155,
          "pitch": 0.3624661041242643,
          "rotation": 0,
          "target": "28-1st-floor-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-wc-4",
      "name": "Wc 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.054863317953771,
        "pitch": 0.4286378254238912,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": -0.13748395214796716,
          "pitch": -0.00334311685960742,
          "rotation": 0.7853981633974483,
          "target": "29-bedroom-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-corridor-bd5",
      "name": "Corridor bd5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1032668339999674,
          "pitch": 0.45788356037486366,
          "rotation": 0,
          "target": "32-entrance-bd5"
        },
        {
          "yaw": -0.845238717069007,
          "pitch": -0.10917545342774737,
          "rotation": 4.71238898038469,
          "target": "35-bedroom-6"
        },
        {
          "yaw": 2.7691299195636354,
          "pitch": 0.4055920278086784,
          "rotation": 0,
          "target": "28-1st-floor-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-entrance-bd5",
      "name": "Entrance bd5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.3840454491147405,
        "pitch": 0.2779022255552519,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": -1.348912427708175,
          "pitch": 0.043791836592358635,
          "rotation": 0,
          "target": "31-corridor-bd5"
        },
        {
          "yaw": -0.03324940550165323,
          "pitch": -0.10095357463874244,
          "rotation": 0.7853981633974483,
          "target": "33-bedroom-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-bedroom-5",
      "name": "Bedroom 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.6734501285317975,
        "pitch": 0.1644493496597832,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": 0.2934297123332783,
          "pitch": -0.10974731895313283,
          "rotation": 0.7853981633974483,
          "target": "34-wc5"
        },
        {
          "yaw": -0.39935225326228974,
          "pitch": 0.004616766372718573,
          "rotation": 0.7853981633974483,
          "target": "32-entrance-bd5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-wc5",
      "name": "Wc5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.7074746630263107,
        "pitch": 0.38809566485692315,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": -1.9766950858642218,
          "pitch": -0.07597921838035404,
          "rotation": 0.7853981633974483,
          "target": "33-bedroom-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-bedroom-6",
      "name": "Bedroom 6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.9224919287919917,
        "pitch": 0.13696171063735108,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": 2.2348950771808163,
          "pitch": -0.03454251244003714,
          "rotation": 0.7853981633974483,
          "target": "36-wc6"
        },
        {
          "yaw": -2.208240169057241,
          "pitch": 0.055476611230881545,
          "rotation": 0,
          "target": "37-bedroom-7"
        },
        {
          "yaw": 2.978978835662935,
          "pitch": -0.051849825184238085,
          "rotation": 0.7853981633974483,
          "target": "31-corridor-bd5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-wc6",
      "name": "Wc6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0109632018929453,
          "pitch": -0.06120836323149703,
          "rotation": 0.7853981633974483,
          "target": "35-bedroom-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-bedroom-7",
      "name": "Bedroom 7",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5902480006771027,
          "pitch": 0.43147194581797876,
          "rotation": 0,
          "target": "35-bedroom-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-steps-2nd-floor",
      "name": "Steps 2nd floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.8413208996264459,
        "pitch": 0.43250804039992374,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": 1.7482318335103226,
          "pitch": 0.6323227696028457,
          "rotation": 3.9269908169872414,
          "target": "28-1st-floor-landing"
        },
        {
          "yaw": 1.356324966962596,
          "pitch": -0.3199468114601469,
          "rotation": 0,
          "target": "39-2nd-floor-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-2nd-floor-landing",
      "name": "2nd floor landing",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.6844575432928632,
        "pitch": 0.19640203812587842,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": -2.9023795349875456,
          "pitch": 0.6293516774705061,
          "rotation": 0.7853981633974483,
          "target": "38-steps-2nd-floor"
        },
        {
          "yaw": -1.0199319900904662,
          "pitch": 0.5628230521362099,
          "rotation": 0,
          "target": "40-2nd-floor-sitting--kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-2nd-floor-sitting--kitchen",
      "name": "2nd floor sitting / kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.09278541794868289,
        "pitch": 0.25643313265091905,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": -2.6372569571925304,
          "pitch": 0.26955327013964947,
          "rotation": 0,
          "target": "41-2nd-floor-bedroom"
        },
        {
          "yaw": -1.9580288416740252,
          "pitch": 0.14415953559798034,
          "rotation": 0.7853981633974483,
          "target": "39-2nd-floor-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-2nd-floor-bedroom",
      "name": "2nd floor bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.3949765232418407,
        "pitch": 0.4196020446221951,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": 2.8822432856184985,
          "pitch": 0.2999398951252079,
          "rotation": 0,
          "target": "40-2nd-floor-sitting--kitchen"
        },
        {
          "yaw": -2.9579902134039937,
          "pitch": 0.11261528646729602,
          "rotation": 0.7853981633974483,
          "target": "42-2nd-floor-wc"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "42-2nd-floor-wc",
      "name": "2nd floor wc",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.6160804859809694,
        "pitch": 0.5573019127259506,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": -3.0015988684288306,
          "pitch": 0.15060809803835262,
          "rotation": 13.351768777756625,
          "target": "41-2nd-floor-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "43-front---right---side",
      "name": "Front - right - side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.5104508004355672,
        "pitch": -0.20925512431856674,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": -0.679305838779273,
          "pitch": 0.11948431198052134,
          "rotation": 0,
          "target": "0-frt-door"
        },
        {
          "yaw": -1.3340564865647515,
          "pitch": 0.012951141727510773,
          "rotation": 0,
          "target": "44-front---left---side"
        },
        {
          "yaw": 2.891454626806399,
          "pitch": 0.05342538705602706,
          "rotation": 0,
          "target": "49-main-entrance"
        },
        {
          "yaw": 0.9738804996483914,
          "pitch": 0.07413163151652569,
          "rotation": 0,
          "target": "51-side-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "44-front---left---side",
      "name": "Front - left - side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1786021428843085,
          "pitch": 0.12800206485533394,
          "rotation": 0,
          "target": "0-frt-door"
        },
        {
          "yaw": -0.015349342058778248,
          "pitch": 0.12721515901259117,
          "rotation": 0,
          "target": "21-dinning-room-entrance"
        },
        {
          "yaw": -2.5549388601486704,
          "pitch": -0.07493067729142666,
          "rotation": 0,
          "target": "46-corner-bandstand"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "45-duck-pond",
      "name": "Duck pond",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.0433436999991237,
        "pitch": 0.1945211136715237,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": 2.517047679476166,
          "pitch": -0.010609839437252688,
          "rotation": 0,
          "target": "21-dinning-room-entrance"
        },
        {
          "yaw": -2.69842011833358,
          "pitch": -0.0181115595855168,
          "rotation": 0,
          "target": "49-main-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "46-corner-bandstand",
      "name": "Corner bandstand",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.085035162977114,
        "pitch": -0.006405769111779591,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": 0.25795085213674973,
          "pitch": 0.09172666817095276,
          "rotation": 0,
          "target": "45-duck-pond"
        },
        {
          "yaw": 1.5234943092507995,
          "pitch": 0.017120969499748284,
          "rotation": 0,
          "target": "48-main-gate"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "47-house---far-away",
      "name": "House - far away",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.9406000843511766,
        "pitch": 0.10077921448941396,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "48-main-gate",
      "name": "Main gate",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.3429176133123244,
        "pitch": 0.3563505631819375,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": 0.9781310926616982,
          "pitch": 0.04436521537394711,
          "rotation": 0,
          "target": "50-corner-bandstand-2"
        },
        {
          "yaw": -0.8293127107360458,
          "pitch": 0.16408704079394276,
          "rotation": 0,
          "target": "49-main-entrance"
        },
        {
          "yaw": -1.5503607499109346,
          "pitch": 0.01471818630165167,
          "rotation": 0,
          "target": "45-duck-pond"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "49-main-entrance",
      "name": "Main entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.1555093153803178,
        "pitch": 0.12598012586525442,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": 1.9648924151275136,
          "pitch": 0.08703203080241195,
          "rotation": 0,
          "target": "48-main-gate"
        },
        {
          "yaw": 3.06291884403395,
          "pitch": -0.017525962151671237,
          "rotation": 0,
          "target": "46-corner-bandstand"
        },
        {
          "yaw": -2.653502656064987,
          "pitch": 0.028261941238801214,
          "rotation": 0,
          "target": "45-duck-pond"
        },
        {
          "yaw": -1.4959047210729004,
          "pitch": -0.0023306273517640363,
          "rotation": 0,
          "target": "21-dinning-room-entrance"
        },
        {
          "yaw": -0.49292924390658754,
          "pitch": 0.08241194536727292,
          "rotation": 0,
          "target": "43-front---right---side"
        },
        {
          "yaw": 1.047146151046853,
          "pitch": 0.027418457402891505,
          "rotation": 0,
          "target": "50-corner-bandstand-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "50-corner-bandstand-2",
      "name": "Corner bandstand 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.980750561637394,
        "pitch": 0.11963601283297365,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": 0.2339673439715213,
          "pitch": 0.014335984348889497,
          "rotation": 0,
          "target": "49-main-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "51-side-view",
      "name": "Side view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.7297814134248704,
        "pitch": -0.14306217683002487,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": 2.9101446693007462,
          "pitch": -0.02297040813535034,
          "rotation": 0,
          "target": "0-frt-door"
        },
        {
          "yaw": -2.0738379853223456,
          "pitch": -0.011170206841741859,
          "rotation": 0,
          "target": "60-rear-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "52-side-entrance",
      "name": "Side entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.2229828016970625,
        "pitch": 0.12045138439345848,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": -1.270829074271429,
          "pitch": -0.064113147535382,
          "rotation": 0,
          "target": "60-rear-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "53-laundry",
      "name": "Laundry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.3685757948082191,
        "pitch": 0.13313154005882488,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": 1.6845183844388139,
          "pitch": 0.03994789111927233,
          "rotation": 6.283185307179586,
          "target": "60-rear-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "54-garage-1",
      "name": "Garage 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.2397951612680398,
        "pitch": 0.0142748995556925,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": -1.7771781979741235,
          "pitch": 0.23720346825966132,
          "rotation": 0,
          "target": "55-garage-2"
        },
        {
          "yaw": -2.172393860092143,
          "pitch": -0.051348786281899095,
          "rotation": 4.71238898038469,
          "target": "61-rear-patio-far"
        },
        {
          "yaw": 2.6087750382844828,
          "pitch": -0.010971650065773275,
          "rotation": 5.497787143782138,
          "target": "60-rear-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "55-garage-2",
      "name": "Garage 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.022772915380081,
          "pitch": 0.1885413518856609,
          "rotation": 0,
          "target": "54-garage-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "56-swimming-pool-wc",
      "name": "Swimming pool wc",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": 0.6174357657054959,
          "pitch": 0.0359220424917126,
          "rotation": 0,
          "target": "58-swimming-pool-shower"
        },
        {
          "yaw": 2.567055676124829,
          "pitch": 0.01101788215148325,
          "rotation": 4.71238898038469,
          "target": "57-swimming-pool-wc-2"
        },
        {
          "yaw": -1.129394363340145,
          "pitch": 0.005188562774337768,
          "rotation": 11.780972450961727,
          "target": "59-swimming-pool"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "57-swimming-pool-wc-2",
      "name": "Swimming pool wc 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.6941365395131776,
        "pitch": 0.867989589017073,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": -1.8446090727758175,
          "pitch": 0.16557319790531366,
          "rotation": 0.7853981633974483,
          "target": "56-swimming-pool-wc"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "58-swimming-pool-shower",
      "name": "Swimming pool shower",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.7054001833525856,
        "pitch": 0.4571682113627702,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": -2.5764762088715933,
          "pitch": 0.16025673797306972,
          "rotation": 0.7853981633974483,
          "target": "56-swimming-pool-wc"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "59-swimming-pool",
      "name": "Swimming pool",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.5785048400384767,
        "pitch": 0.3266953890697373,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": -3.137830609357229,
          "pitch": 0.02000850956631517,
          "rotation": 0,
          "target": "60-rear-patio"
        },
        {
          "yaw": -2.0358160964681,
          "pitch": -0.04637667556839986,
          "rotation": 0,
          "target": "56-swimming-pool-wc"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "60-rear-patio",
      "name": "Rear patio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.0233716568263542,
        "pitch": 0.15018848371244609,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": 1.2927467288357875,
          "pitch": 0.1109729055066424,
          "rotation": 0,
          "target": "52-side-entrance"
        },
        {
          "yaw": 2.1284147434580802,
          "pitch": 0.04494757968450713,
          "rotation": 0,
          "target": "51-side-view"
        },
        {
          "yaw": -2.596783213744068,
          "pitch": 0.08855783953977081,
          "rotation": 4.71238898038469,
          "target": "11-service-entrance-out"
        },
        {
          "yaw": -2.101676640739276,
          "pitch": 0.10629361249875657,
          "rotation": 3.141592653589793,
          "target": "61-rear-patio-far"
        },
        {
          "yaw": -0.7477923729440246,
          "pitch": -0.008875078061450381,
          "rotation": 0,
          "target": "54-garage-1"
        },
        {
          "yaw": -0.41046564235943706,
          "pitch": 0.004805547553418776,
          "rotation": 0,
          "target": "53-laundry"
        },
        {
          "yaw": 0.40238093906853223,
          "pitch": 0.18603559924036617,
          "rotation": 0,
          "target": "59-swimming-pool"
        },
        {
          "yaw": -3.1334491738218446,
          "pitch": -0.9261618663949562,
          "rotation": 0.7853981633974483,
          "target": "40-2nd-floor-sitting--kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "61-rear-patio-far",
      "name": "Rear patio far",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.787648677329587,
        "pitch": 0.08541025482389841,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": -2.336631226194619,
          "pitch": 0.10375732531491977,
          "rotation": 0,
          "target": "60-rear-patio"
        },
        {
          "yaw": -1.2104840489067428,
          "pitch": 0.15292651606925212,
          "rotation": 0,
          "target": "11-service-entrance-out"
        },
        {
          "yaw": 0.4584635572479563,
          "pitch": 0.025450934145567317,
          "rotation": 0,
          "target": "64-rear-patio-end"
        },
        {
          "yaw": 2.1662631968274777,
          "pitch": 0.05871284974850255,
          "rotation": 0,
          "target": "62-worker-house"
        },
        {
          "yaw": 3.1397904844897333,
          "pitch": -0.056607723606015625,
          "rotation": 0,
          "target": "55-garage-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "62-worker-house",
      "name": "Worker house",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.9086504942415523,
        "pitch": 0.2529507402605482,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": -2.637976344916023,
          "pitch": 0.08522836464479511,
          "rotation": 0.7853981633974483,
          "target": "61-rear-patio-far"
        },
        {
          "yaw": -0.06141129703180148,
          "pitch": 0.14646175828519503,
          "rotation": 0,
          "target": "63-worker-wc"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "63-worker-wc",
      "name": "Worker wc",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.544023269915975,
        "pitch": 0.5682164968090859,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": -1.903455820625517,
          "pitch": -0.1873033554564696,
          "rotation": 0.7853981633974483,
          "target": "62-worker-house"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "64-rear-patio-end",
      "name": "Rear patio end",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.5293794258344349,
        "pitch": 0.0012800645677160105,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": 1.9963119340574522,
          "pitch": 0.14409412026638435,
          "rotation": 0,
          "target": "61-rear-patio-far"
        },
        {
          "yaw": 0.7189342546768547,
          "pitch": -0.05899159419803368,
          "rotation": 0.7853981633974483,
          "target": "65-exterior-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "65-exterior-kitchen",
      "name": "Exterior kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.8401822148559486,
        "pitch": 0.2011886002518608,
        "fov": 1.3857813845177995
      },
      "linkHotspots": [
        {
          "yaw": -0.5037911638003578,
          "pitch": 0.03850932237595117,
          "rotation": 0.7853981633974483,
          "target": "64-rear-patio-end"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
