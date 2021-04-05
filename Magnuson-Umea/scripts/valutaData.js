var valutaJSON = {
    "Code" : "Valuta",
    "FeaturesData" :[
        {
            "Id": 1,
            "Code": "quantity",
            "Label": "Quantity",
            "Description": "Please select the number of VALUTA units you would like to configure.",
            "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/main-plusminus.jpg",
            "Options": [
                {
                    "Id": 1,
                    "Code": "1",
                    "Label": "1 Unit",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/valuta-1.jpg",
                    "Active": true,
                },
                {
                    "Id": 2,
                    "Code": "2",
                    "Label": "2 Units",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/valuta-2.jpg",
                    "Active": false,
                },
                {
                    "Id": 3,
                    "Code": "3",
                    "Label": "3 Units",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/valuta-3.jpg",
                    "Active": false,
                },
                {
                    "Id": 4,
                    "Code": "4",
                    "Label": "4 Units",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/valuta-4.jpg",
                    "Active": false,
                }
            ],
        }, //quantity
        {
            "Id": 2,
            "Code": "body",
            "Label": "Body",
            "Description": "Please select body type, finish color and rotation for each VALUTA unit.",
            "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/main-receptacle.jpg",
            "Options": [
                {
                    "Id": 1,
                    "Code": "VA1809L-JR",
                    "Label": "VA1809L-JR",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/valuta-receptacle-14-gallon.jpg",
                    "PartNumber": "VA1809L-JR",
                    "Active": true,
                },
                {
                    "Id": 2,
                    "Code": "VA1809L",
                    "Label": "VA1809L",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/valuta-receptacle-20-gallon.jpg",
                    "PartNumber": "VA1809L",
                    "Active": false,
                },
                {
                    "Id": 3,
                    "Code": "VA1814L",
                    "Label": "VA1814L",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/valuta-receptacle-32-gallon.jpg",
                    "PartNumber": "VA1814L",                    
                    "Active": false,
                },
                {
                    "Id": 4,
                    "Code": "VA18SCL",
                    "Label": "VA18SCL",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/valuta-receptacle-35-gallon.jpg",
                    "PartNumber": "VA18SCL",
                    "Active": false,
                },
                {
                    "Id": 5,
                    "Code": "VA1818L",
                    "Label": "VA1818L",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/valuta-receptacle-40-gallon.jpg",
                    "PartNumber": "VA1818L",
                    "Active": false,
                },
            ],
        }, //Models
        {
            "Id": 2,
            "Code": "body-color",
            "Label": "",
            "Layers": ["Can", "Body"],
            "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-None.jpg",
            "Options": [                
                {
                    "Id": 1,
                    "Code": "anodizedSilver",
                    "Label": "Anodized Silver",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/anodized-silver-ral-9006-valuta-color-body_color.jpg",
                    "PartNumber": "AS",
                    "ColorCode": "#404040",
                    "Active": true,
                },
                {
                    "Id": 2,
                    "Code": "darkAnthracite",
                    "Label": "Dark Anthracite",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/dark-anthracite-ral-7026-valuta-body_color.jpg",
                    "PartNumber": "DA",
                    "ColorCode": "#111111",
                    "Active": false,
                },
                {
                    "Id": 3,
                    "Code": "lunarWhite",
                    "Label": "Lunar White",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/lunar-white-ral-9003-valuta-body_color.jpg",
                    "PartNumber": "LW",
                    "ColorCode": "#FFFFFF",
                    "Active": false,
                },   
                {
                    "Id": 4,
                    "Code": "bronzeMetallic",
                    "Label": "Bronze Metallic",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/bronze-metallic-ral-6006-valuta-color-body_color.jpg",
                    "PartNumber": "BM",   
                    "ColorCode": "#191A1A", 
                    "Active": false,
                }
            ],
        }, //Body-Color
        {
            "Id": 3,
            "Code": "openings",
            "Label": "Opening",
            "Layers": ["Top1", "Top2", "Top3", "Top4"],
            "Description": "Please select the top opening and finish color for each VALUTA unit.",
            "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/main-top-opening.jpg",
            "Options": [
                {
                    "Id": 1,
                    "Code": "opening-waste",
                    "Label": "Waste",
                    "Layer": "Top1",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/valuta-1809-top-opening-waste.jpg",
                    "PartNumber": "W",
                    "Active": true,
                },
                {
                    "Id": 2,
                    "Code": "opening-paper",
                    "Label": "Paper",
                    "Layer": "Top2",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/valuta-1809-top-opening-paper.jpg",
                    "PartNumber": "P",
                    "Active": false,
                },
                {
                    "Id": 3,
                    "Code": "opening-circle",
                    "Label": "Circle",
                    "Layer": "Top3",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/valuta-1809-top-opening-cansplasticglass.jpg",
                    "PartNumber": "C",
                    "Active": false,
                },
                {
                    "Id": 4,
                    "Code": "opening-paper-circle",
                    "Label": "Paer/Circle",
                    "Layer": "Top4",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/valuta-1809-top-opening-comingle.jpg",
                    "PartNumber": "PC",
                    "Active": false,
                },
               
            ],
        }, //Opening-Single       
        {
            "Id": 3,
            "Code": "opening-color",
            "Label": "",
            "Layers": ["Top"],
            "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-None.jpg",
            "Options": [                
                {
                    "Id": 1,
                    "Code": "anodizedSilver",
                    "Label": "Anodized Silver",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/anodized-silver-ral-9006-valuta-color-body_color.jpg",
                    "PartNumber": "AS",
                    "ColorCode": "#404040",
                    "Active": true,
                },
                {
                    "Id": 2,
                    "Code": "darkAnthracite",
                    "Label": "Dark Anthracite",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/dark-anthracite-ral-7026-valuta-body_color.jpg",
                    "PartNumber": "DA",
                    "ColorCode":  "#111111",
                    "Active": false,
                },
                {
                    "Id": 3,
                    "Code": "lunarWhite",
                    "Label": "Lunar White",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/lunar-white-ral-9003-valuta-body_color.jpg",
                    "PartNumber": "LW",
                    "ColorCode": "#FFFFFF",
                    "Active": false,
                },
                {
                    "Id": 4,
                    "Code": "bronzeMetallic",
                    "Label": "Bronze Metallic",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/bronze-metallic-ral-6006-valuta-color-body_color.jpg",
                    "PartNumber": "BM",
                    "ColorCode": "#191A1A",
                    "Active": false,
                },
            ],
        }, //Opening-Color       
        {
            "Id": 4,
            "Code": "label",
            "Label": "Label",
            "Description": "Please select vinyl label design & finish color for each VALUTA unit.",
            "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/main-label.jpg",
            "Options": [
                {
                    "Id": 1,
                    "Code": "label-cans",
                    "Label": "Cans",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/valuta-multi_lingual_pictogram_label-cans.jpg",
                    "PartNumber": "C",
                    "Material": [
                        {
                            "Channel": "albedoTexture",
                            "Url": "/assets/materials/label-cans.png",
                            "Layers": ["Label1", "Label2", "Label3", "Label4"]
                        },
                        {
                            "Channel": "opacityTexture",
                            "Url": "/assets/materials/label-cans.png",
                            "Layers": ["Label1", "Label2", "Label3", "Label4"]
                        }
                    ],
                    "Active": true,
                },
                {
                    "Id": 2,
                    "Code": "label-compost",
                    "Label": "Compost",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/valuta-multi_lingual_pictogram_label-compost.jpg",
                    "PartNumber": "CP",
                    "Material": [
                        {
                            "Channel": "albedoTexture",
                            "Url": "/assets/materials/label-cans.png",
                            "Layers": ["Label1", "Label2", "Label3", "Label4"]
                        }
                    ],
                    "Active": false,
                },
                {
                    "Id": 3,
                    "Code": "label-glass",
                    "Label": "Glass",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/valuta-multi_lingual_pictogram_label-glass.jpg",
                    "PartNumber": "G",
                    "Material": [
                        {
                            "Channel": "albedoTexture",
                            "Url": "/assets/materials/label-cans.png",
                            "Layers": ["Label1", "Label2", "Label3", "Label4"]
                        }
                    ],
                    "Active": false,
                },
                {
                    "Id": 4,
                    "Code": "label-Landfill",
                    "Label": "Landfill",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/valuta-multi_lingual_pictogram_label-landfill.jpg",
                    "PartNumber": "L",
                    "Material": [
                        {
                            "Channel": "albedoTexture",
                            "Url": "/assets/materials/label-cans.png",
                            "Layers": ["Label1", "Label2", "Label3", "Label4"]
                        }
                    ],
                    "Active": false,
                },
                {
                    "Id": 5,
                    "Code": "label-Organics",
                    "Label": "Organics",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/valuta-multi_lingual_pictogram_label-organics.jpg",
                    "PartNumber": "O",
                    "Material": [
                        {
                            "Channel": "albedoTexture",
                            "Url": "/assets/materials/label-cans.png",
                            "Layers": ["Label1", "Label2", "Label3", "Label4"]
                        }
                    ],
                    "Active": false,
                },
                {
                    "Id": 6,
                    "Code": "label-paper",
                    "Label": "Paper",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/valuta-multi_lingual_pictogram_label-paper.jpg",
                    "PartNumber": "P",
                    "Material": [
                        {
                            "Channel": "albedoTexture",
                            "Url": "/assets/materials/label-cans.png",
                            "Layers": ["Label1", "Label2", "Label3", "Label4"]
                        }
                    ],
                    "Active": false,
                },
                {
                    "Id": 7,
                    "Code": "label-plastic",
                    "Label": "Plastic",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/valuta-multi_lingual_pictogram_label-plastic.jpg",
                    "PartNumber": "PL",
                    "Material": [
                        {
                            "Channel": "albedoTexture",
                            "Url": "/assets/materials/label-cans.png",
                            "Layers": ["Label1", "Label2", "Label3", "Label4"]
                        }
                    ],
                    "Active": false,
                },
                {
                    "Id": 8,
                    "Code": "label-recyclingA",
                    "Label": "Recycling (Arrows)",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/valuta-multi_lingual_pictogram_label-recycling.jpg",
                    "PartNumber": "RA",
                    "Material": [
                        {
                            "Channel": "albedoTexture",
                            "Url": "/assets/materials/label-cans.png",
                            "Layers": ["Label1", "Label2", "Label3", "Label4"]
                        }
                    ],
                    "Active": false,
                },
                {
                    "Id": 9,
                    "Code": "label-RecyclingBC",
                    "Label": "Recycling (Bottles & Cans)",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/valuta-multi_lingual_pictogram_label-recycling2.jpg",
                    "PartNumber": "RBC",
                    "Material": [
                        {
                            "Channel": "albedoTexture",
                            "Url": "/assets/materials/label-cans.png",
                            "Layers": ["Label1", "Label2", "Label3", "Label4"]
                        }
                    ],
                    "Active": false,
                },
                {
                    "Id": 10,
                    "Code": "label-waste",
                    "Label": "Waste",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/valuta-multi_lingual_pictogram_label-waste.jpg",
                    "PartNumber": "W",
                    "Material": [
                        {
                            "Channel": "albedoTexture",
                            "Url": "/assets/materials/label-cans.png",
                            "Layers": ["Label1", "Label2", "Label3", "Label4"]
                        }
                    ],
                    "Active": false,
                },
                {
                    "Id": 11,
                    "Code": "no-label",
                    "Label": "No Label",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/white-vinyl-label-color.jpg",
                    "PartNumber": "N",
                    "Material": [
                        {
                            "Channel": "albedoTexture",
                            "Url": "/assets/materials/label-cans.png",
                            "Layers": ["Label1", "Label2", "Label3", "Label4"]
                        }
                    ],
                    "Active": false,
                }     
            ],
        }, //Label
        {
            "Id": 4,
            "Code": "label-color",
            "Label": "",
            "Layers": ["Label1", "Label2", "Label3", "Label4"],
            "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-None.jpg",
            "Options": [
                {
                    "Id": 1,
                    "Code": "blackVinyl",
                    "Label": "Black Vinyl",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/color-black-vinyl.jpg",
                    "PartNumber": "BV",
                    "ColorCode": "#000000",
                    "Active": true,
                },
                {
                    "Id": 2,
                    "Code": "cactusGreenVinyl",
                    "Label": "Cactus Green Vinyl",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/color-cactus-vinyl.jpg",
                    "PartNumber": "CGV",
                    "ColorCode": "#004C10",
                    "Active": false,
                },
                {
                    "Id": 3,
                    "Code": "darkGreyVinyl",
                    "Label": "Dark Grey Vinyl",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/color-dark-grey-vinyl.jpg",
                    "PartNumber": "DGV",
                    "ColorCode": "#080808",
                    "Active": false,
                },
                {
                    "Id": 4,
                    "Code": "sunflowerVinyl",
                    "Label": "Sunflower Vinyl",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/color-sunflower-vinyl.jpg",
                    "PartNumber": "SV",
                    "ColorCode": "#CEAA00",
                    "Active": false,
                },
                {
                    "Id": 5,
                    "Code": "vividBlueVinyl",
                    "Label": "Vivid Blue Vinyl",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/color-vivid-blue-vinyl.jpg",
                    "PartNumber": "VBV",
                    "ColorCode": "#000F24",
                    "Active": false,
                },
                {
                    "Id": 6,
                    "Code": "whiteVinyl",
                    "Label": "White Vinyl",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/color-white-vinyl.jpg",
                    "PartNumber": "WV",
                    "ColorCode": "#F5F5F5",
                    "Active": false,
                },
            ],
        }, //Label-Color
        {
            "Id": 5,
            "Code": "signage",
            "Label": "Signage",
            "Description": "Please select signage and finish color for each VALUTA unit.",
            "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/main-signage.jpg",
            "Options": [
                {
                    "Id": 1,
                    "Code": "no-signage",
                    "Label": "No Signage",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/valuta-signage-none.jpg",
                    "PartNumber": "NS",
                    "Active": true,
                },
                {
                    "Id": 2,
                    "Code": "signage-mg",
                    "Label": "MG Signage",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/valuta-signage-custom.jpg",
                    "PartNumber": "MG",
                    "Material": [
                        {
                            "albedoTexture": true,
                        }
                    ],
                    "Active": false,
                },
                {
                    "Id": 3,
                    "Code": "sinage-customer",
                    "Label": "Customer Signage",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/valuta-signage-mg.jpg",
                    "PartNumber": "CS",
                    "Material": [
                        {
                            "albedoTexture": true,
                        }
                    ],
                    "Active": false,
                }
            ],
        }, //Signage
        {
            "Id": 5,
            "Code": "signage-extra", 
            "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/slope-label-recycling.jpg",
            "Options": [
                {
                    "Id": 1,
                    "Code": "signage-cans",
                    "Label": "Cans",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/signage-cans.jpg",
                    "PartNumber": "SC",
                    "Material": [
                        {
                            "albedoTexture": true,
                        }
                    ],
                    "Active": true,
                },
                {
                    "Id": 2,
                    "Code": "signage-compost",
                    "Label": "Compost",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/signage-compost.jpg",
                    "PartNumber": "SCP",
                    "Material": [
                        {
                            "albedoTexture": true,
                        }
                    ],
                    "Active": false,
                },
                {
                    "Id": 3,
                    "Code": "signage-glass",
                    "Label": "Glass",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/signage-glass.jpg",
                    "PartNumber": "SG",
                    "Material": [
                        {
                            "albedoTexture": true,
                        }
                    ],
                    "Active": false,
                },
                {
                    "Id": 4,
                    "Code": "signage-landfill",
                    "Label": "Landfill",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/signage-landfill.jpg",
                    "PartNumber": "SL",
                    "Material": [
                        {
                            "albedoTexture": true,
                        }
                    ],
                    "Active": false,
                },
                {
                    "Id": 5,
                    "Code": "signage-organics",
                    "Label": "Organics",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/signage-organics.jpg",
                    "PartNumber": "SO",
                    "Material": [
                        {
                            "albedoTexture": true,
                        }
                    ],
                    "Active": false,
                },
                {
                    "Id": 6,
                    "Code": "signage-paper",
                    "Label": "Paper",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/signage-paper.jpg",
                    "PartNumber": "SP",
                    "Material": [
                        {
                            "albedoTexture": true,
                        }
                    ],
                    "Active": false,
                },
                {
                    "Id": 7,
                    "Code": "signage-plastic",
                    "Label": "Plastic",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/signage-plastic.jpg",
                    "PartNumber": "SPL",
                    "Material": [
                        {
                            "albedoTexture": true,
                        }
                    ],
                    "Active": false,
                },
                {
                    "Id": 8,
                    "Code": "signage-recycling",
                    "Label": "Recycling",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/signage-recycling.jpg",
                    "PartNumber": "SR",
                    "Material": [
                        {
                            "albedoTexture": true,
                        }
                    ],
                    "Active": false,
                },
                {
                    "Id": 9,
                    "Code": "signage-Waste",
                    "Label": "Waste",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/signage-waste.jpg",
                    "PartNumber": "SW",
                    "Material": [
                        {
                            "albedoTexture": true,
                        }
                    ],
                    "Active": false,
                },
            ],
        }, //Signage Options
        {
            "Id": 5,
            "Code": "label-extra-color",
            "Label": "",
            "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-None.jpg",
            "Options": [
                {
                    "Id": 1,
                    "Code": "blackFoil",
                    "Label": "Black Foil",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/color-black-vinyl.jpg",
                    "PartNumber": "BF",
                    "ColorCode": "#080808",
                    "Active": true,
                },
                {
                    "Id": 2,
                    "Code": "cactusGreenFoil",
                    "Label": "Cactus Green Foil",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/color-cactus-vinyl.jpg",
                    "PartNumber": "CGF",
                    "ColorCode": "#F5F5F5",
                    "Active": false,
                },
                {
                    "Id": 3,
                    "Code": "sunflowerFoil",
                    "Label": "Sunflower Foil",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/color-sunflower-vinyl.jpg",
                    "PartNumber": "SF",
                    "ColorCode": "#F5F5F5",
                    "Active": false,
                },
                {
                    "Id": 4,
                    "Code": "vividBlueFoil",
                    "Label": "Vivid Blue Foil",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/valuta/color-vivid-blue-vinyl.jpg",
                    "PartNumber": "VBF",
                    "ColorCode": "#F5F5F5",
                    "Active": false,
                }
            ],
        }, //Signage-Color
        {
            "Id": 5,
            "Code": "label-extra-color",
            "Label": "",
            "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-None.jpg",
            "Options": [
                {
                    "Id": 1,
                    "Code": "magneticApp",
                    "Label": "Magentic Application",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/white-vinyl-label-color.jpg",
                    "PartNumber": "MA",
                    "Active": true,
                },
                {
                    "Id": 2,
                    "Code": "permanentApp",
                    "Label": "Permanent Application",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/white-vinyl-label-color.jpg",
                    "PartNumber": "PA",
                    "Active": false,
                }  
            ],
        }, //Signage-magentic Application

    ]
}


valutaModels = {
    "Path": "assets/valuta/models/",
    "DefaultLayers": [
        "1_Can",
        "1_Label1",
        "1_patas",
        "1_Top3",
        "1_Waste1",
        "2_Can",
        "2_Label1",
        "2_Patas",
        "2_Top1",
        "3_Can",
        "3_Label1",
        "3_Patas",
        "3_Top1",
        "4_Body",
        "4_Label1",
        "4_Patas",
        "4_Top1",
        "5_Can",
        "5_Label4",
        "5_Patas",
        "5_Top1"
    ],
    "ModelsList":
        [
            {
                "Name": "VA1809L-JR",
                "Path": "assets/valuta/models/",
                "Model": "VA1809L-JR.glb",
                "DefaultLayers":
                    [
                        "Body",
                        "Label1",
                        "Patas",
                        "Top1",
                    ],
                "Width": 18,
            },
            {
                "Name": "VA1809L",
                "Path": "assets/valuta/models/",
                "Model": "VA1809L.glb",
                "DefaultLayers":
                    [
                        "Body",
                        "Label1",
                        "Patas",
                        "Top1",
                    ],
                "Width": 18,
            },
            {
                "Name": "VA1814L",
                "Path": "assets/valuta/models/",
                "Model": "VA1814L.glb",
                "DefaultLayers":
                    [
                        "Body",
                        "Label1",
                        "Patas",
                        "Top1",
                    ],
                "Width": 18,
            },
            {
                "Name": "VA18SCL",
                "Path": "assets/valuta/models/",
                "Model": "VA18SCL.glb",
                "DefaultLayers":
                    [
                        "Body",
                        "Label1",
                        "Patas",
                        "Top1",
                    ],
                "Width": 18,
            },
            {
                "Name": "VA1818L",
                "Path": "assets/valuta/models/",
                "Model": "VA1818L.glb",
                "DefaultLayers":
                    [
                        "Body",
                        "Label1",
                        "Patas",
                        "Top1",
                    ],
                "Width": 18,
            },


        ]
}
