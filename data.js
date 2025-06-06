var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "Living Room",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.031216113681337,
        "pitch": 0.022211330925035355,
        "fov": 1.3900591270580378
      },
      "linkHotspots": [
        {
          "yaw": 0.21957342954569548,
          "pitch": -0.03712989887992535,
          "rotation": 0.7853981633974483,
          "target": "1-stairs"
        },
        {
          "yaw": 0.10420539467870604,
          "pitch": 0.0827514069388009,
          "rotation": 0,
          "target": "0-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-stairs",
      "name": "Stairs",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.066354000968605,
        "pitch": 0.04524645815940076,
        "fov": 1.3900591270580378
      },
      "linkHotspots": [
        {
          "yaw": 2.923742922870481,
          "pitch": 0.19074050975925871,
          "rotation": 0.7853981633974483,
          "target": "0-living-room"
        },
        {
          "yaw": 0.6376774671697447,
          "pitch": 0.31154520737541347,
          "rotation": 4.71238898038469,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining",
      "name": "Dining",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3900591270580378
      },
      "linkHotspots": [
        {
          "yaw": -1.908079147203594,
          "pitch": 0.19293916236021502,
          "rotation": 4.71238898038469,
          "target": "1-stairs"
        },
        {
          "yaw": -1.6830930496161223,
          "pitch": 0.12311305827603825,
          "rotation": 5.497787143782138,
          "target": "0-living-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
