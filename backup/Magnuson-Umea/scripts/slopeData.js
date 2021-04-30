var slopeData = {
    "Id" : 1,
    "Code" : "Slope",
    "PartNumber" : "SLP-01",
    "DefaultLayers" : [
        "Standard",
        "Top_W",
        "Label_C",
        "LinerS_Standard",
        "Glides1"
    ],
    "FeaturesData" :[
        {
            "Id": 1,
            "Code": "quantity",
            "Label": "Quantity",
            "Description": "Please select the number of SLOPE units you would like to configure.",
            "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/plusminus.jpg",
            "Options": [
                {
                    "Id": 1,
                    "Code": "1",
                    "Label": "1 Unit",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/slope-1.jpg",
                    "Active": true,
                },
                {
                    "Id": 2,
                    "Code": "2",
                    "Label": "2 Units",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/slope-2.jpg",
                    "Active": false,
                },
                {
                    "Id": 3,
                    "Code": "3",
                    "Label": "3 Units",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/slope-3.jpg",
                    "Active": false,
                },
                {
                    "Id": 4,
                    "Code": "4",
                    "Label": "4 Units",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/slope-4.jpg",
                    "Active": false,
                }
            ],
        }, //quantity
        {
            "Id": 1,
            "Code": "glides",
            "Label": "Add a set of 4 adjustable glides to all my SLOPE units",
            "Description": null,
            "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-None.jpg",
            "Options": [
                {
                    "Id": 1,
                    "Code": "glides",
                    "Label": null,
                    "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-None.jpg",
                    "PartNumber": "GL",
                    "Active": false,
                },
                {
                    "Id": 2,
                    "Code": "no-glides",
                    "Label": null,
                    "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-None.jpg",
                    "PartNumber": "",
                    "Active": true,
                }                
            ],
        }, //quantity-option
        {
            "Id": 2,
            "Code": "body",
            "Label": "Body",
            "Description": "Please select the body type & finish of your SLOPE configuration.",
            "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/slope-1.jpg",
            "Layers": ["Junior", "Standard"],
            "Options": [
                {
                    "Id": 1,
                    "Code": "std",
                    "Label": "Standard Height",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/slope-1.jpg",
                    "PartNumber": "SLP-01",
                    "Layers": ["Standard"],
                    "Active": true,
                },
                {
                    "Id": 2,
                    "Code": "jr",
                    "Label": "Junior Height",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/slope-1s.jpg",
                    "PartNumber": "SLP-02",
                    "Layers": ["Junior"],
                    "Active": false,
                }                
            ],
        }, //Body
        {
            "Id": 2,
            "Code": "body-color",
            "Label": "",
            "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-None.jpg",
            "Layers": ["Junior", "JuniorL", "Standard", "StandardL"],
            "Options": [                
                {
                    "Id": 1,
                    "Code": "anodizedSilver",
                    "Label": "Anodized Silver",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/anodized-silver-slope-body_color.jpg",
                    "PartNumber": "AS",
                    "ColorCode": "#404040",
                    "Active": false,
                },
                {
                    "Id": 2,
                    "Code": "darkAnthracite",
                    "Label": "Dark Anthracite",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/dark-anthracite-slope-top_body_color.jpg",
                    "PartNumber": "DA",
                    "ColorCode": "#191A1A",
                    "Active": false,
                },
                {
                    "Id": 3,
                    "Code": "lunarWhite",
                    "Label": "Lunar White",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/lunar-white-slope-body_color.jpg",
                    "PartNumber": "LW",
                    "ColorCode": "#FFFFFF",
                    "Active": false,
                },   
                {
                    "Id": 4,
                    "Code": "brushedSS",
                    "Label": "Brushed Stainless Steel",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/brushed-stainless-steal-slope-color_body_color.jpg",
                    "PartNumber": "BSS",
                    "Material": [
                        {
                            "AlbedoTexture": true,
                            "NormalTexture": true,
                        }
                    ],
                    "Active": true,
                },
            ],
        }, //Body-Color
        {
            "Id": 3,
            "Code": "opening-single",
            "Label": "Opening",
            "Description": "Please select a single or double top opening, top finish color and internal rigid liner.",
            "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/opening.jpg",
            "Layers": ["Top_P", "Top_R", "Top_W", "Top_RP", "Top_RR", "Top_WP", "Top_WR", "Top_WW", "Label_L", "Label_R", "Label_C", "LinerD_Standard", "LinerD_Junior", "LinerS_Standard", "LinerS_Junior"],
            "Options": [
                {
                    "Id": 1,
                    "Code": "opening-waste",
                    "Label": "Waste",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/opening-square.jpg",
                    "PartNumber": "W",
                    "Layers": ["Top_W", "Label_C"],
                    "Active": true,
                },
                {
                    "Id": 2,
                    "Code": "opening-paper",
                    "Label": "Paper",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/opening-paper.jpg",
                    "PartNumber": "P",
                    "Layers": ["Top_P", "Label_C"],
                    "Active": false,
                },
                {
                    "Id": 3,
                    "Code": "opening-recycling",
                    "Label": "Recycling",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/opening-oval.jpg",
                    "PartNumber": "R",
                    "Layers": ["Top_R", "Label_C"],
                    "Active": false,
                },
               
            ],
        }, //Opening-Single
        {
            "Id": 3,
            "Code": "opening-double",
            "Label": "Opening",
            "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-None.jpg",
            "Layers": ["Top_P", "Top_R", "Top_W", "Top_RP", "Top_RR", "To_WP", "Top_WR", "Top_WW", "Top_WP", "Label_C", "Label_R", "Label_L", "LinerS_Standard", "LinerS_Junior", "LinerD_Standard", "LinerD_Junior"],
            "Options": [
                {
                    "Id": 1,
                    "Code": "opening-waste-waste",
                    "Label": "Waste / Waste",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/opening-double-square.jpg",
                    "PartNumber": "WW",
                    "Layers": ["Top_WW", "Label_L", "Label_R"],
                    "Active": false,
                },
                {
                    "Id": 2,
                    "Code": "opening-waste-recycling",
                    "Label": "Waste / Recycling",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/opening-double-square-oval.jpg",
                    "PartNumber": "WR",
                    "Layers": ["Top_WR", "Label_L", "Label_R"],
                    "Active": false,
                },
                {
                    "Id": 3,
                    "Code": "opening-waste-paper",
                    "Label": "Waste / Paper",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/opening-double-square-paper.jpg",
                    "PartNumber": "WP",
                    "Layers": ["Top_WP", "Label_L", "Label_R"],
                    "Active": false,
                },
                {
                    "Id": 4,
                    "Code": "opening-recycling-recycling",
                    "Label": "Recycling / Recycling",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/opening-double-oval.jpg",
                    "PartNumber": "RR",
                    "Layers": ["Top_RR", "Label_L", "Label_R"],
                    "Active": false,
                },
                {
                    "Id": 5,
                    "Code": "opening-recycling-paper",
                    "Label": "Recycling / Paper",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/opening-double-oval-paper.jpg",
                    "PartNumber": "RP",
                    "Layers": ["Top_RP", "Label_L", "Label_R"],
                    "Active": false,
                },

            ],
        }, //Opening-Double
        {
            "Id": 3,
            "Code": "opening-color",
            "Label": "",
            "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-None.jpg",
            "Layers": ["Top_P", "Top_R", "Top_W", "Top_RP", "Top_RR", "Top_WP", "Top_WR", "Top_WW"],
            "Options": [                
                {
                    "Id": 1,
                    "Code": "anodizedSilver",
                    "Label": "Anodized Silver",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/anodized-silver-slope-body_color.jpg",
                    "PartNumber": "AS",
                    "ColorCode": "#2E2E2E",
                    "Active": false,
                },
                {
                    "Id": 2,
                    "Code": "darkAnthracite",
                    "Label": "Dark Anthracite",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/dark-anthracite-slope-top_body_color.jpg",
                    "PartNumber": "DA",
                    "ColorCode": "#141515",
                    "Active": false,
                },
                {
                    "Id": 3,
                    "Code": "lunarWhite",
                    "Label": "Lunar White",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/lunar-white-slope-body_color.jpg",
                    "PartNumber": "LW",
                    "ColorCode": "#FFFFFF",
                    "Active": false,
                },
                {
                    "Id": 4,
                    "Code": "capriBlue",
                    "Label": "Capri Blue",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/capri-blue-slope-color-top_color_finish.jpg",
                    "PartNumber": "CB",
                    "ColorCode": "#000F24",
                    "Active": false,
                },
                {
                    "Id": 5,
                    "Code": "copperBrown",
                    "Label": "Copper Brown",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/copper-brown-slope-top_color_finish.jpg",
                    "PartNumber": "CB",
                    "ColorCode": "#190500",
                    "Active": false,
                },
                {
                    "Id": 6,
                    "Code": "fernGreen",
                    "Label": "Fern Green",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/fern-green-ral-6025-slope-color_options_large.jpg",
                    "PartNumber": "FG",
                    "ColorCode": "#081703",
                    "Active": false,
                },   
                {
                    "Id": 7,
                    "Code": "polishedSS",
                    "Label": "Polished Stainless Steel",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/polished-stainless-steal-slope-color-options.jpg",
                    "PartNumber": "SS",
                    "Material": [
                        {
                            "AlbedoTexture": true,
                            "NormalTexture": true,
                        }
                    ],
                    "Active": true,
                },
            ],
        }, //Opening-Color
        {
            "Id": 3,
            "Code": "liner",
            "Label": "Include internal rigid liner for this unit.<br>*Note SLOPE double top opening units require internal rigid liners.",
            "Description": null,
            "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-None.jpg",
            "Options": [
                {
                    "Id": 1,
                    "Code": "liner",
                    "Label": null,
                    "PartNumber": "L",
                    "Active": false,
                },
                {
                    "Id": 2,
                    "Code": "no-liner",
                    "Label": null,
                    "PartNumber": "",
                    "Active": true,
                }
            ],
        }, //liner-option
        {
            "Id": 4,
            "Code": "label",
            "Label": "Label",
            "Description": "Please select vinyl label design & finish color for each unit.",
            "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/slope-label-recycling.jpg",
            "Layers": ["Label_C"],
            "Options": [
                {
                    "Id": 1,
                    "Code": "label-waste",
                    "Label": "Waste",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/slope-label-waste.jpg",
                    "PartNumber": "W",
                    "Material": [
                        {
                            "AlbedoTexture": true,
                        }
                    ],
                    "Active": true,
                },
                {
                    "Id": 2,
                    "Code": "label-paper",
                    "Label": "Paper",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/slope-label-paper.jpg",
                    "PartNumber": "P",
                    "Material": [
                        {
                            "AlbedoTexture": true,
                        }
                    ],
                    "Active": false,
                },
                {
                    "Id": 3,
                    "Code": "label-recycling",
                    "Label": "Recycling",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/slope-label-recycling.jpg",
                    "PartNumber": "R",
                    "Material": [
                        {
                            "AlbedoTexture": true,
                        }
                    ],
                    "Active": false,
                },
                {
                    "Id": 4,
                    "Code": "label-cans",
                    "Label": "Cans",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/slope-label-cans.jpg",
                    "PartNumber": "C",
                    "Material": [
                        {
                            "AlbedoTexture": true,
                        }
                    ],
                    "Active": false,
                },
                {
                    "Id": 5,
                    "Code": "label-plastic",
                    "Label": "Plastic",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/slope-label-plastic.jpg",
                    "PartNumber": "PL",
                    "Material": [
                        {
                            "AlbedoTexture": true,
                        }
                    ],
                    "Active": false,
                },
                {
                    "Id": 6,
                    "Code": "label-glass",
                    "Label": "Glass",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/slope-label-glass.jpg",
                    "PartNumber": "G",
                    "Material": [
                        {
                            "AlbedoTexture": true,
                        }
                    ],
                    "Active": false,
                },
                {
                    "Id": 7,
                    "Code": "label-organics",
                    "Label": "Organics",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/slope-label-organics.jpg",
                    "PartNumber": "O",
                    "Material": [
                        {
                            "AlbedoTexture": true,
                        }
                    ],
                    "Active": false,
                },
                {
                    "Id": 8,
                    "Code": "label-landfill",
                    "Label": "Landfill",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/slope-label-landfill.jpg",
                    "PartNumber": "L",
                    "Material": [
                        {
                            "AlbedoTexture": true,
                        }
                    ],
                    "Active": false,
                },
                {
                    "Id": 9,
                    "Code": "label-compost",
                    "Label": "Compost",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/slope-label-compost.jpg",
                    "PartNumber": "C",
                    "Material": [
                        {
                            "AlbedoTexture": true,
                        }
                    ],
                    "Active": false,
                },
                {
                    "Id": 10,
                    "Code": "no-label",
                    "Label": "No Label",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/white-vinyl-label-color.jpg",
                    "PartNumber": "N",
                    "Material": [
                        {
                            "AlbedoTexture": true,
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
            "Thumbnail": "http://files.magnusongroup.com/sitedocs/configurator/Umea-None.jpg",
            "Layers": ["Label_C", "Label_R", "Label_L"],
            "Options": [
                {
                    "Id": 1,
                    "Code": "darkGreyVinyl",
                    "Label": "Dark Grey Vinyl",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/dark-grey-vinyl-label-color.jpg",
                    "PartNumber": "DGV",
                    "ColorCode": "#080808",
                    "Layers": ["Label_C", "Label_R", "Label_L"],
                    "Active": true,
                },
                {
                    "Id": 2,
                    "Code": "whiteVinyl",
                    "Label": "White Vinyl",
                    "Thumbnail": "https://magnuson.blob.core.windows.net/sitedocs/configurator/slope/white-vinyl-label-color.jpg",
                    "PartNumber": "WV",
                    "ColorCode": "#F5F5F5",
                    "Layers": ["Label_C", "Label_R", "Label_L"],
                    "Active": false,
                },
            ],
        }, //Label-Color - Center



    ]
}