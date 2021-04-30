

var getUmea =
{
    "Code": "umea",
    "Label": "UMEA",
    "PartNumber": "UMEA-",
    "LowFile": "3a6bc6fd-6309-4a59-b749-6e9ba4c5c8eb.glb",
    "MedFile": null,
    "HighFile": null,
    "Price": 0,
    "DefaultLayers": [
        "Single_Door1",
        "Single_General1",
        "Single_Panel1",
        "Single_Label1",
        "Single_SidePanel1",
        "Single_Top1_2",
        "Single_Key",
        "Single_SidePanel1Back",
        "Single_Hood0"
    ],
}

var getUmeaFeatures = {
    "ImageName": "umea.png",
    "FeaturesData":
        [
            {
                "Code": "Body",
                "Label": "Body",
                "AllRelatedLayers": [
                ],
                "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-Body.jpg",                
                "GeometryChange": true,
                "ColorChange": false,
                "MaterialChange": false,
                "Options": [
                    {
                        "Code": "Single",
                        "Label": "Single",
                        "PartNumber": "1",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-Body-1.jpg",
                        "Selected": true,
                        //geometry
                        "DisplayedLayers": [
                            "Single_Door1",
                            "Single_General1",
                            "Single_Label1",
                            "Single_SidePanel1",
                            "Single_Top1_2",
                            "Single_Key",
                            "Single_SidePanel1Back",
                            "Single_Hood0"

                        ],
                        "HiddenLayers": [],
                        //Color 
                        "ColorCode": null,
                        "ColorLayer": null,
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "ReplicateSize": []

                    },
                    {
                        "Code": "Double",
                        "Label": "Double",
                        "PartNumber": "2",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-Body-2.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": [
                            "Double_Door",
                            "Double_Top2_1",
                            "Double_General",
                            "Double_Top2_1",
                            "Double_General",
                            "Double_Top1_1",
                            "Double_SidePanel1",
                            "Double_Label1",
                            "Double_Label2",
                            "Double_Key",
                            "Double_SidePanel1Back",
                            "Double_Hood0"
                        ],
                        "HiddenLayers": [],
                        //Color 
                        "ColorCode": null,
                        "ColorLayer": null,
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "ReplicateSize": ["Left", "Right"]
                    },
                    {
                        "Code": "Triple",
                        "Label": "Triple",
                        "PartNumber": "3",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-Body-3.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": [
                            "Triple_General",
                            "Triple_Top1_1",
                            "Triple_Top2_2",
                            "Triple_Top3_3",
                            "Triple_SidePanel1",
                            "Triple_Label1",
                            "Triple_Label2",
                            "Triple_Label3",
                            "Triple_Key",
                            "Triple_SidePanel1Back",
                            "Triple_Hood0"

                        ],
                        "HiddenLayers": [],
                        //Color 
                        "ColorCode": null,
                        "ColorLayer": null,
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "ReplicateSize": ["Left", "Center", "Right"]
                    }
                ]
            }, //BODY
            {
                "Code": "Body",
                "Label": "Body Color",
                "AllRelatedLayers": [
                    "Single_Door1",
                    "Single_General1",
                    "Double_Door",
                    "Double_General",
                    "Triple_General",
                    "Single_SidePanel1Back",
                    "Double_SidePanel1Back",
                    "Triple_SidePanel1Back",
                    "Single_SidePanel2Back",
                    "Double_SidePanel2Back",
                    "Triple_SidePanel2Back",
                    "Single_SidePanel3Back",
                    "Double_SidePanel3Back",
                    "Triple_SidePanel3Back",
                    "Single_SidePanel4Back1",
                    "Double_SidePanel4Back1",
                    "Triple_SidePanel4Back1"
                ],
                "GeometryChange": false,
                "ColorChange": true,
                "MaterialChange": false,
                "Options": [
                    {
                        "Code": "skyWhite",
                        "Label": "White",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-SkyWhite.jpg",
                        "Selected": true,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": "#FFFFFF",
                        "ColorLayer": [
                            "Single_Door1",
                            "Single_General1",
                            "Double_Door",
                            "Double_General",
                            "Triple_General",
                            "Single_SidePanel1Back",
                            "Double_SidePanel1Back",
                            "Triple_SidePanel1Back",
                            "Single_SidePanel2Back",
                            "Double_SidePanel2Back",
                            "Triple_SidePanel2Back",
                            "Single_SidePanel3Back",
                            "Double_SidePanel3Back",
                            "Triple_SidePanel3Back",
                            "Single_SidePanel4Back",
                            "Double_SidePanel4Back",
                            "Triple_SidePanel4Back"
                        ],
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    },
                    {
                        "Code": "brightbondSilver",
                        "Label": "Brightbond Silver",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-BrightbondSilver.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": "#838482",
                        "ColorLayer": [
                            "Single_Door1",
                            "Single_General1",
                            "Double_Door",
                            "Double_General",
                            "Triple_General",
                            "Single_SidePanel1Back",
                            "Double_SidePanel1Back",
                            "Triple_SidePanel1Back",
                            "Single_SidePanel2Back",
                            "Double_SidePanel2Back",
                            "Triple_SidePanel2Back",
                            "Single_SidePanel3Back",
                            "Double_SidePanel3Back",
                            "Triple_SidePanel3Back",
                            "Single_SidePanel4Back",
                            "Double_SidePanel4Back",
                            "Triple_SidePanel4Back"
                        ],
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    },
                    {
                        "Code": "mineralBronze",
                        "Label": "Mineral Bronze",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-MineralBronze.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": [],
                        "HiddenLayers": [],
                        //Color 
                        "ColorCode": "#3d372b",
                        "ColorLayer": [
                            "Single_Door1",
                            "Single_General1",
                            "Double_Door",
                            "Double_General",
                            "Triple_General",
                            "Single_SidePanel1Back",
                            "Double_SidePanel1Back",
                            "Triple_SidePanel1Back",
                            "Single_SidePanel2Back",
                            "Double_SidePanel2Back",
                            "Triple_SidePanel2Back",
                            "Single_SidePanel3Back",
                            "Double_SidePanel3Back",
                            "Triple_SidePanel3Back"
                        ],
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    },
                ]
            }, //BODY COLOR
            {
                "Code": "Top",
                "Label": "Opening",
                "AllRelatedLayers": [
                    "Single_Top1_1",
                    "Single_Top1_2",
                    "Single_Top1_3",
                    "Double_Top1_1",
                    "Double_Top1_2",
                    "Double_Top1_3",
                    "Double_Top2_1",
                    "Double_Top2_2",
                    "Double_Top2_3",

                    "Triple_Top1_1",
                    "Triple_Top1_2",
                    "Triple_Top1_3",
                    "Triple_Top2_1",
                    "Triple_Top2_2",
                    "Triple_Top2_3",
                    "Triple_Top3_1",
                    "Triple_Top3_2",
                    "Triple_Top3_3"
                ],
                "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-Top-Opening.jpg",
                "GeometryChange": true,
                "ColorChange": false,
                "MaterialChange": false,

                "Options": [
                    {
                        "Id": 1,
                        "Code": "_1",
                        "Label": "Waste Opening",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-Top-Opening-Waste.jpg",
                        "Selected": true,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": null,
                        "ColorLayer": null,
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": true,
                    },
                    {
                        "Id": 2,
                        "Code": "_2",
                        "Label": "Paper Opening",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-Top-Opening-Paper.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": null,
                        "ColorLayer": null,
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": true
                    },
                    {
                        "Id": 3,
                        "Code": "_3",
                        "Label": "Circle Opening",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-Top-Opening-Cans.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": null,
                        "ColorLayer": null,
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": true
                    }
                ],
                "MultipleSelection":
                    [
                        {
                            "Id": 1,
                            "Label": "Waste Opening",
                            "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-Top-Opening-Waste.jpg"
                        },
                        {
                            "Id": 2,
                            "Label": "Paper Opening",
                            "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-Top-Opening-Paper.jpg"
                        },
                        {
                            "Id": 3,
                            "Label": "Circle Opening",
                            "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-Top-Opening-Cans.jpg"
                        }
                    ]
            }, //TOP OPENINGS
            {
                "Code": "Top",
                "Label": "Top Color",
                "AllRelatedLayers": [
                    "Single_Top1_1",
                    "Single_Top1_2",
                    "Single_Top1_3",
                    "Double_Top1_1",
                    "Double_Top1_2",
                    "Double_Top1_3",
                    "Double_Top2_1",
                    "Double_Top2_2",
                    "Double_Top2_3",

                    "Triple_Top1_1",
                    "Triple_Top1_2",
                    "Triple_Top1_3",
                    "Triple_Top2_1",
                    "Triple_Top2_2",
                    "Triple_Top2_3",
                    "Triple_Top3_1",
                    "Triple_Top3_2",
                    "Triple_Top3_3"
                ],
                "GeometryChange": false,
                "ColorChange": true,
                "MaterialChange": false,

                "Options": [
                    {
                        "Code": "skyWhite",
                        "Label": "Sky White",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-SkyWhite.jpg",
                        "Selected": true,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": "#FFFFFF",
                        "ColorLayer": [
                            "Single_Top1",
                            "Double_Top1",
                            "Double_Top2",
                            "Double_Top3",
                            "Triple_Top1",
                            "Triple_Top2",
                            "Triple_Top3"
                        ],
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    },
                    {
                        "Code": "seaGreen",
                        "Label": "Sea Green",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-SeaGreen.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": "#004c10",//"#0e793d",
                        "ColorLayer": [
                            "Single_Top1",
                            "Double_Top1",
                            "Double_Top2",
                            "Double_Top3",
                            "Triple_Top1",
                            "Triple_Top2",
                            "Triple_Top3"
                        ],
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    },
                    {
                        "Code": "brightbondSilver",
                        "Label": "Brightbond Silver",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-BrightbondSilver.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": "#838482",//"#b0b1af",
                        "ColorLayer": [
                            "Single_Top1",
                            "Double_Top1",
                            "Double_Top2",
                            "Double_Top3",
                            "Triple_Top1",
                            "Triple_Top2",
                            "Triple_Top3"
                        ],
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    },
                    {
                        "Code": "mineralBronze",
                        "Label": "Mineral Bronze",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-MineralBronze.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": "#332d21",//"#3d372b",
                        "ColorLayer": [
                            "Single_Top1",
                            "Double_Top1",
                            "Double_Top2",
                            "Double_Top3",
                            "Triple_Top1",
                            "Triple_Top2",
                            "Triple_Top3"
                        ],
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    },
                    {
                        "Code": "marigoldYellow",
                        "Label": "Marigold Yellow",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-MarigoldYellow.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": "#ceaa00",//"#fbd712",
                        "ColorLayer": [
                            "Single_Top1",
                            "Double_Top1",
                            "Double_Top2",
                            "Double_Top3",
                            "Triple_Top1",
                            "Triple_Top2",
                            "Triple_Top3"
                        ],
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    },
                    {
                        "Code": "marineBlue",
                        "Label": "Marine Blue",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-MarineBlue.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": "#000e43",//"#1c3b70",
                        "ColorLayer": [
                            "Single_Top1",
                            "Double_Top1",
                            "Double_Top2",
                            "Double_Top3",
                            "Triple_Top1",
                            "Triple_Top2",
                            "Triple_Top3"
                        ],
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    },
                    {
                        "Code": "clementineOrange",
                        "Label": "Clemenetine Orange",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-ClementineOrange.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": "#b02702",//"#c43b0e",
                        "ColorLayer": [
                            "Single_Top1",
                            "Double_Top1",
                            "Double_Top2",
                            "Double_Top3",
                            "Triple_Top1",
                            "Triple_Top2",
                            "Triple_Top3"
                        ],
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    },

                ],
                "MultipleSelection":
                    [
                        {
                            "Id": 1,
                            "Label": "Sky White",
                            "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-SkyWhite.jpg"
                        },
                        {
                            "Id": 2,
                            "Label": "Sky White",
                            "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-SkyWhite.jpg"
                        },
                        {
                            "Id": 3,
                            "Label": "Sky White",
                            "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-SkyWhite.jpg"
                        }
                    ]
            }, //TOP OPENINGS COLORS
            {
                "Code": "Hood",
                "Label": "Hood",
                "AllRelatedLayers": [
                    "Single_Hood1",
                    "Single_Hood2",
                    "Double_Hood1",
                    "Double_Hood2",
                    "Triple_Hood1",
                    "Triple_Hood2"
                ],
                "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-Hood.jpg",
                "GeometryChange": true,
                "ColorChange": false,
                "MaterialChange": false,

                "Options": [
                    {
                        "Id": 0,
                        "Code": "Hood0",
                        "Label": "None",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-None.jpg",
                        "Selected": true,
                        "PartNumber": "0",
                        //geometry
                        "DisplayedLayers": [],
                        "HiddenLayers": [
                            "Single_Hood1",
                            "Single_Hood2",
                            "Double_Hood1",
                            "Double_Hood2",
                            "Triple_Hood1",
                            "Triple_Hood2"
                        ],
                        //Color 
                        "ColorCode": null,
                        "ColorLayer": null,
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    },
                    {
                        "Id": 1,
                        "Code": "Hood1",
                        "Label": "Flat Hood",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-Hood-Flat.jpg",
                        "Selected": false,
                        "PartNumber": "1",
                        //geometry
                        "DisplayedLayers": [
                            "Single_Hood1",
                            "Double_Hood1",
                            "Triple_Hood1",
                        ],
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": null,
                        "ColorLayer": null,
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    },
                    {
                        "Id": 2,
                        "Code": "Hood2",
                        "Label": "Angled Hood",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-Hood-Angled.jpg",
                        "Selected": false,
                        "PartNumber": "2",
                        //geometry
                        "DisplayedLayers": [
                            "Single_Hood2",
                            "Double_Hood2",
                            "Triple_Hood2"
                        ],
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": null,
                        "ColorLayer": null,
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    }
                ]
            }, //HOOD
            {
                "Code": "Hood",
                "Label": "Hood Color",
                "AllRelatedLayers": [
                    "Single_Hood1",
                    "Single_Hood2",
                    "Double_Hood1",
                    "Double_Hood2",
                    "Triple_Hood1",
                    "Triple_Hood2"
                ],
                "GeometryChange": false,
                "ColorChange": true,
                "MaterialChange": false,

                "Options": [
                    {
                        "Code": "skyWhite",
                        "Label": "White",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-SkyWhite.jpg",
                        "Selected": true,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": "#FFFFFF",
                        "ColorLayer": [
                            "Single_Hood1",
                            "Single_Hood2",
                            "Double_Hood1",
                            "Double_Hood2",
                            "Triple_Hood1",
                            "Triple_Hood2",
                            "Single_SidePanel4Back",
                            "Single_SidePanel1",
                            "Single_SidePanel2",
                            "Single_SidePanel3",
                            "Double_SidePanel4Back",
                            "Double_SidePanel1",
                            "Double_SidePanel2",
                            "Double_SidePanel3",
                            "Triple_SidePanel4Back",
                            "Triple_SidePanel1",
                            "Triple_SidePanel2",
                            "Triple_SidePanel3"

                        ],
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    },
                    {
                        "Code": "seaGreen",
                        "Label": "Sea Green",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-SeaGreen.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": "#004c10",//"#0e793d",
                        "ColorLayer": [
                            "Single_Hood1",
                            "Single_Hood2",
                            "Double_Hood1",
                            "Double_Hood2",
                            "Triple_Hood1",
                            "Triple_Hood2",
                            "Single_RightPanel",
                            "Single_SidePanel1",
                            "Single_SidePanel2",
                            "Single_SidePanel3",
                            "Double_RightPanel",
                            "Double_SidePanel1",
                            "Double_SidePanel2",
                            "Double_SidePanel3",
                            "Triple_RightPanel",
                            "Triple_SidePanel1",
                            "Triple_SidePanel2",
                            "Triple_SidePanel3"
                        ],
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null
                    },
                    {
                        "Code": "brightbondSilver",
                        "Label": "Brightbond Silver",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-BrightbondSilver.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": "#838482",//"#b0b1af",
                        "ColorLayer": [
                            "Single_Hood1",
                            "Single_Hood2",
                            "Double_Hood1",
                            "Double_Hood2",
                            "Triple_Hood1",
                            "Triple_Hood2",
                            "Single_RightPanel",
                            "Single_SidePanel1",
                            "Single_SidePanel2",
                            "Single_SidePanel3",
                            "Double_RightPanel",
                            "Double_SidePanel1",
                            "Double_SidePanel2",
                            "Double_SidePanel3",
                            "Triple_RightPanel",
                            "Triple_SidePanel1",
                            "Triple_SidePanel2",
                            "Triple_SidePanel3"
                        ],
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    },
                    {
                        "Code": "mineralBronze",
                        "Label": "Mineral Bronze",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-MineralBronze.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": "#332d21",//"#3d372b",
                        "ColorLayer": [
                            "Single_Hood1",
                            "Single_Hood2",
                            "Double_Hood1",
                            "Double_Hood2",
                            "Triple_Hood1",
                            "Triple_Hood2",
                            "Single_RightPanel",
                            "Single_SidePanel1",
                            "Single_SidePanel2",
                            "Single_SidePanel3",
                            "Double_RightPanel",
                            "Double_SidePanel1",
                            "Double_SidePanel2",
                            "Double_SidePanel3",
                            "Triple_RightPanel",
                            "Triple_SidePanel1",
                            "Triple_SidePanel2",
                            "Triple_SidePanel3"
                        ],
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    },
                    {
                        "Code": "marigoldYellow",
                        "Label": "Marigold Yellow",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-MarigoldYellow.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": "#ceaa00",//"#fbd712",
                        "ColorLayer": [
                            "Single_Hood1",
                            "Single_Hood2",
                            "Double_Hood1",
                            "Double_Hood2",
                            "Triple_Hood1",
                            "Triple_Hood2",
                            "Single_RightPanel",
                            "Single_SidePanel1",
                            "Single_SidePanel2",
                            "Single_SidePanel3",
                            "Double_RightPanel",
                            "Double_SidePanel1",
                            "Double_SidePanel2",
                            "Double_SidePanel3",
                            "Triple_RightPanel",
                            "Triple_SidePanel1",
                            "Triple_SidePanel2",
                            "Triple_SidePanel3"
                        ],
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    },
                    {
                        "Code": "marineBlue",
                        "Label": "Marine Blue",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-MarineBlue.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": "#000e43",//"#1c3b70",
                        "ColorLayer": [
                            "Single_Hood1",
                            "Single_Hood2",
                            "Double_Hood1",
                            "Double_Hood2",
                            "Triple_Hood1",
                            "Triple_Hood2",
                            "Single_RightPanel",
                            "Single_SidePanel1",
                            "Single_SidePanel2",
                            "Single_SidePanel3",
                            "Double_RightPanel",
                            "Double_SidePanel1",
                            "Double_SidePanel2",
                            "Double_SidePanel3",
                            "Triple_RightPanel",
                            "Triple_SidePanel1",
                            "Triple_SidePanel2",
                            "Triple_SidePanel3"
                        ],
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    },
                    {
                        "Code": "clementineOrange",
                        "Label": "Clemenetine Orange",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-ClementineOrange.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": "#b02702",//"#c43b0e",
                        "ColorLayer": [
                            "Single_Hood1",
                            "Single_Hood2",
                            "Double_Hood1",
                            "Double_Hood2",
                            "Triple_Hood1",
                            "Triple_Hood2",
                            "Single_RightPanel",
                            "Single_SidePanel1",
                            "Single_SidePanel2",
                            "Single_SidePanel3",
                            "Double_RightPanel",
                            "Double_SidePanel1",
                            "Double_SidePanel2",
                            "Double_SidePanel3",
                            "Triple_RightPanel",
                            "Triple_SidePanel1",
                            "Triple_SidePanel2",
                            "Triple_SidePanel3"
                        ],
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    },

                ]
            }, //HOOD COLOR
            {
                "Code": "Label",
                "Label": "Label",
                "AllRelatedLayers": [
                    "Single_Label1",
                    "Double_Label1",
                    "Double_Label2",
                    "Triple_Label1",
                    "Triple_Label2",
                    "Triple_Label3",

                ],
                "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-Label.jpg",
                "GeometryChange": false,
                "ColorChange": false,
                "MaterialChange": true,
                "Options": [
                    {
                        "Id": 1,
                        "Code": "Waste",
                        "Label": "Waste",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/umea-multi_lingual_pictogram_label-waste.jpg",
                        "Selected": true,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": null,
                        "ColorLayer": null,
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": true,
                    },
                    {
                        "Id": 2,
                        "Code": "RecyclingArrows",
                        "Label": "Recycling Arrows",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/umea-multi_lingual_pictogram_label-recycling2.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": null,
                        "ColorLayer": null,
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": true
                    },
                    {
                        "Id": 3,
                        "Code": "Paper",
                        "Label": "Paper",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/umea-multi_lingual_pictogram_label-paper.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": null,
                        "ColorLayer": null,
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": true,

                    },
                    {
                        "Id": 4,
                        "Code": "Cans",
                        "Label": "Cans",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/umea-multi_lingual_pictogram_label-cans.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": null,
                        "ColorLayer": null,
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": true
                    },
                    {
                        "Id": 5,
                        "Code": "Recycling",
                        "Label": "Recycling Bottles",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/umea-multi_lingual_pictogram_label-recycling.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": null,
                        "ColorLayer": null,
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": true
                    },
                    {
                        "Id": 6,
                        "Code": "Landfill",
                        "Label": "Landfill",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/umea-multi_lingual_pictogram_label-landfill.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": null,
                        "ColorLayer": null,
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": true
                    },
                    {
                        "Id": 7,
                        "Code": "Plastic",
                        "Label": "Plastic",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/umea-multi_lingual_pictogram_label-plastic.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": null,
                        "ColorLayer": null,
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": true
                    },
                    {
                        "Id": 8,
                        "Code": "Glass",
                        "Label": "Glass",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/umea-multi_lingual_pictogram_label-glass.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": null,
                        "ColorLayer": null,
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": true
                    },
                    {
                        "Id": 9,
                        "Code": "Organics",
                        "Label": "Organics",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/umea-multi_lingual_pictogram_label-organics.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": null,
                        "ColorLayer": null,
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": true
                    },                    
                    {
                        "Id": 10,
                        "Code": "Compost",
                        "Label": "Compost",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/umea-multi_lingual_pictogram_label-compost.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": null,
                        "ColorLayer": null,
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": true
                    },
                    {
                        "Id": 11,
                        "Code": "No Label",
                        "Label": "No Label",
                        "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/Umea-None.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": null,
                        "ColorLayer": null,
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": true
                    }
                ],
                "MultipleSelection":
                    [
                        {
                            "Id": 1,
                            "Label": "Waste",
                            "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/umea-multi_lingual_pictogram_label-waste.jpg",
                        },
                        {
                            "Id": 2,
                            "Label": "Recycling Arrows",
                            "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/umea-multi_lingual_pictogram_label-recycling2.jpg",
                        },
                        {
                            "Id": 3,
                            "Label": "Recycling",
                            "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/umea-multi_lingual_pictogram_label-recycling.jpg",
                        }
                    ]

            }, //LABELS
            {
                "Code": "Label",
                "Label": "Label Color",
                "AllRelatedLayers": [
                    "Single_Label1",
                    "Double_Label1",
                    "Double_Label2",
                    "Triple_Label1",
                    "Triple_Label2",
                    "Triple_Label3"
                ],
                "GeometryChange": false,
                "ColorChange": true,
                "MaterialChange": false,
                "Options": [
                    {
                        "Code": "whiteVinyl",
                        "Label": "White Vinyl",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-SkyWhite.jpg",
                        "Selected": true,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": "#FFFFFF",
                        "ColorLayer": [
                            "Single_Label1",
                            "Double_Label1",
                            "Double_Label2",
                            "Triple_Label1",
                            "Triple_Label2",
                            "Triple_Label3",
                        ],
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    }, //white
                    {
                        "Code": "darkGreyVinyl",
                        "Label": "Dark Grey Vinyl",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-DarkGrey.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": "#3c3c3c",//"#b0b1af",
                        "ColorLayer": [
                            "Single_Label1",
                            "Double_Label1",
                            "Double_Label2",
                            "Triple_Label1",
                            "Triple_Label2",
                            "Triple_Label3",
                        ],
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    }, //darkGrey
                    {
                        "Code": "seaGreen",
                        "Label": "Cactus Green Vinyl",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-SeaGreen.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": "#004c10",//"#0e793d",
                        "ColorLayer": [
                            "Single_Label1",
                            "Double_Label1",
                            "Double_Label2",
                            "Triple_Label1",
                            "Triple_Label2",
                            "Triple_Label3",
                        ],
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    }, //green
                    {
                        "Code": "marineBlue",
                        "Label": "Vivid Blue Vinyl",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-MarineBlue.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": "#000e43",//"#1c3b70",
                        "ColorLayer": [
                            "Single_Label1",
                            "Double_Label1",
                            "Double_Label2",
                            "Triple_Label1",
                            "Triple_Label2",
                            "Triple_Label3",
                        ],
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    }, //blue
                    {
                        "Code": "marigoldYellow",
                        "Label": "Sunflower Vinyl",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-MarigoldYellow.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": "#ceaa00",//"#fbd712",
                        "ColorLayer": [
                            "Single_Label1",
                            "Double_Label1",
                            "Double_Label2",
                            "Triple_Label1",
                            "Triple_Label2",
                            "Triple_Label3",
                        ],
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    }, //yellow
                    {
                        "Code": "clementineOrange",
                        "Label": "Bright Orange Vinyl",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-ClementineOrange.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": "#b02702",//"#c43b0e",
                        "ColorLayer": [
                            "Single_Label1",
                            "Double_Label1",
                            "Double_Label2",
                            "Triple_Label1",
                            "Triple_Label2",
                            "Triple_Label3",
                        ],
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    }, //orange
                    {
                        "Code": "blackVinyl",
                        "Label": "Black Vinyl",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-Black.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": "#000000",//"#3d372b",
                        "ColorLayer": [
                            "Single_Label1",
                            "Double_Label1",
                            "Double_Label2",
                            "Triple_Label1",
                            "Triple_Label2",
                            "Triple_Label3",
                        ],
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    }, //black

                ],
                "MultipleSelection":
                    [
                        {
                            "Id": 1,
                            "Label": "White Vinyl",
                            "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-SkyWhite.jpg"
                        },
                        {
                            "Id": 2,
                            "Label": "White Vinyl",
                            "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-SkyWhite.jpg"
                        },
                        {
                            "Id": 3,
                            "Label": "White Vinyl",
                            "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-SkyWhite.jpg"
                        }
                    ]
            }, //LABELS COLORS
            {
                "Code": "SidePanel",
                "Label": "Side Panels",
                "AllRelatedLayers": [
                    "Single_SidePanel1",
                    "Single_SidePanel2",
                    "Single_SidePanel3",
                    "Single_SidePanel4",
                    "Double_SidePanel1",
                    "Double_SidePanel2",
                    "Double_SidePanel3",
                    "Double_SidePanel4",
                    "Triple_SidePanel1",
                    "Triple_SidePanel2",
                    "Triple_SidePanel3",
                    "Triple_SidePanel4",

                ],
                "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-Side-Panel-Cutout.jpg",
                "GeometryChange": true,
                "ColorChange": false,
                "MaterialChange": false,

                "Options": [
                    {
                        "Id": 1,
                        "Code": "SidePanel1",
                        "Label": "No Cutout",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-None.jpg",
                        "Selected": true,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": null,
                        "ColorLayer": null,
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    },
                    {
                        "Id": 2,
                        "Code": "SidePanel2",
                        "Label": "Waste Cutout",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-Side-Panel-Cutout-Waste.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": null,
                        "ColorLayer": null,
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    },
                    {
                        "Id": 3,
                        "Code": "SidePanel3",
                        "Label": "Recycling Cutout",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-Side-Panel-Cutout-Recycling.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": null,
                        "ColorLayer": null,
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    },
                    {
                        "Id": 4,
                        "Code": "SidePanel4",
                        "Label": "Advertising Panel",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-Side-Panel-Cutout-Ad.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": null,
                        "ColorLayer": null,
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    }
                ]
            }, //CUTOUTS
            {
                "Code": "SidePanel",
                "Label": "Side Panels Color",
                "AllRelatedLayers": [
                    "Single_SidePanel1",
                    "Single_SidePanel2",
                    "Single_SidePanel3",
                    "Single_SidePanel4Back2",
                    "Double_SidePanel1",
                    "Double_SidePanel2",
                    "Double_SidePanel3",
                    "Double_SidePanel4Back2",
                    "Triple_SidePanel1",
                    "Triple_SidePanel2",
                    "Triple_SidePanel3",
                    "Triple_SidePanel4Back2",

                ],
                "GeometryChange": false,
                "ColorChange": true,
                "MaterialChange": false,

                "Options": [
                    {
                        "Code": "skyWhite",
                        "Label": "White",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-SkyWhite.jpg",
                        "Selected": true,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": "#FFFFFF",
                        "ColorLayer": [
                            "Single_SidePanel4Back1",
                            "Single_SidePanel4Back2",
                            "Single_SidePanel1",
                            "Single_SidePanel2",
                            "Single_SidePanel3",
                            "Double_SidePanel4Back1",
                            "Double_SidePanel4Back2",
                            "Double_SidePanel1",
                            "Double_SidePanel2",
                            "Double_SidePanel3",
                            "Triple_SidePanel4Back1",
                            "Triple_SidePanel4Back2",
                            "Triple_SidePanel1",
                            "Triple_SidePanel2",
                            "Triple_SidePanel3"

                        ],
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    },
                    {
                        "Code": "seaGreen",
                        "Label": "Sea Green",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-SeaGreen.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": "#004c10",//"#0e793d",
                        "ColorLayer": [
                            "Single_SidePanel4Back2",
                            "Single_SidePanel1",
                            "Single_SidePanel2",
                            "Single_SidePanel3",
                            "Double_SidePanel4Back2",
                            "Double_SidePanel1",
                            "Double_SidePanel2",
                            "Double_SidePanel3",
                            "Triple_SidePanel4Back2",
                            "Triple_SidePanel1",
                            "Triple_SidePanel2",
                            "Triple_SidePanel3"

                        ],
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null
                    },
                    {
                        "Code": "brightbondSilver",
                        "Label": "Brightbond Silver",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-BrightbondSilver.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": "#838482",//"#b0b1af",
                        "ColorLayer": [
                            "Single_RightPanel",
                            "Single_SidePanel1",
                            "Single_SidePanel2",
                            "Single_SidePanel3",
                            "Double_RightPanel",
                            "Double_SidePanel1",
                            "Double_SidePanel2",
                            "Double_SidePanel3",
                            "Triple_RightPanel",
                            "Triple_SidePanel1",
                            "Triple_SidePanel2",
                            "Triple_SidePanel3"
                        ],
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    },
                    {
                        "Code": "mineralBronze",
                        "Label": "Mineral Bronze",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-MineralBronze.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": "#332d21",//"#3d372b",
                        "ColorLayer": [

                            "Single_RightPanel",
                            "Single_SidePanel1",
                            "Single_SidePanel2",
                            "Single_SidePanel3",
                            "Double_RightPanel",
                            "Double_SidePanel1",
                            "Double_SidePanel2",
                            "Double_SidePanel3",
                            "Triple_RightPanel",
                            "Triple_SidePanel1",
                            "Triple_SidePanel2",
                            "Triple_SidePanel3"
                        ],
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    },
                    {
                        "Code": "marigoldYellow",
                        "Label": "Marigold Yellow",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-MarigoldYellow.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": "#ceaa00",//"#fbd712",
                        "ColorLayer": [

                            "Single_RightPanel",
                            "Single_SidePanel1",
                            "Single_SidePanel2",
                            "Single_SidePanel3",
                            "Double_RightPanel",
                            "Double_SidePanel1",
                            "Double_SidePanel2",
                            "Double_SidePanel3",
                            "Triple_RightPanel",
                            "Triple_SidePanel1",
                            "Triple_SidePanel2",
                            "Triple_SidePanel3"
                        ],
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    },
                    {
                        "Code": "marineBlue",
                        "Label": "Marine Blue",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-MarineBlue.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": "#000e43",//"#1c3b70",
                        "ColorLayer": [

                            "Single_RightPanel",
                            "Single_SidePanel1",
                            "Single_SidePanel2",
                            "Single_SidePanel3",
                            "Double_RightPanel",
                            "Double_SidePanel1",
                            "Double_SidePanel2",
                            "Double_SidePanel3",
                            "Triple_RightPanel",
                            "Triple_SidePanel1",
                            "Triple_SidePanel2",
                            "Triple_SidePanel3"
                        ],
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    },
                    {
                        "Code": "clementineOrange",
                        "Label": "Clemenetine Orange",
                        "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Color-ClementineOrange.jpg",
                        "Selected": false,
                        //geometry
                        "DisplayedLayers": null,
                        "HiddenLayers": null,
                        //Color 
                        "ColorCode": "#b02702",//"#c43b0e",
                        "ColorLayer": [

                            "Single_RightPanel",
                            "Single_SidePanel1",
                            "Single_SidePanel2",
                            "Single_SidePanel3",
                            "Double_RightPanel",
                            "Double_SidePanel1",
                            "Double_SidePanel2",
                            "Double_SidePanel3",
                            "Triple_RightPanel",
                            "Triple_SidePanel1",
                            "Triple_SidePanel2",
                            "Triple_SidePanel3"
                        ],
                        //Material
                        "MaterialName": null,
                        "MaterialCode": null,
                        "MaterialLayers": null,
                        "Replicate": null
                    },

                ]
            }, //SIDEPANEL COLOR
        ]
};
