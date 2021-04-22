
function changeModel(selectedCode) {
    valuta[selector].map(function (model) {
        model.visibility(false);
        if (model.code == selectedCode) {
            model.visibility(true);
        }
    });
    invalidate3D();

    //Setting summary
    valutaJSON.FeaturesData.map(function (feature) {
        if (feature.Code == "body") {
            feature.Options.map(function (option) {
                option.Active = false;
                if (selectedCode == option.Code) {
                    editSummary(feature.Code, option.Label, option.Thumbnail);
                    option.Active = true;
                }
            });
        }
    });
}

function changeColor(selectedFeature, selectedOption) {
    valutaJSON.FeaturesData.map(function (feature) {
        if (feature.Code == selectedFeature) {
            feature.Options.map(function (option) {
                option.Active = false;
                if (selectedOption == option.Code) {
                    editSummary(feature.Code, option.Label, option.Thumbnail);
                    option.Active = true;

                    if (option.hasOwnProperty('ColorCode')) {
                        valuta[selector].map(function (model) {
                            model.changeColor(feature.Layers, option.ColorCode);
                        });                        
                    }
                    return;
                }
            });
        }
    });
}

function changeGeometry(selectedFeature, selectedOption) {
    valutaJSON.FeaturesData.map(function (feature) {
        if (feature.Code == selectedFeature)
            feature.Options.map(function (option) {
                option.Active = false;
                if (selectedOption == option.Code) {
                    option.Active = true;
                    editSummary(feature.Code, option.Label, option.Thumbnail);
                    feature.Layers.map(function (layer) {
                        valuta[selector].map(function (model) {
                            model.changeGeometry(layer, false);
                        });
                    });
                    if (option.hasOwnProperty('Layer')) {
                        valuta[selector].map(function (model) {
                            
                            model.changeGeometry(option.Layer, true);
                        });
                    }
                    invalidate3D();
                    return;
                }                
            });

    });
    
}

function changeMaterial(selectedFeature, selectedOption) {
    valutaJSON.FeaturesData.map(function (feature) {
        if (feature.Code == selectedFeature)
            feature.Options.map(function (option) {
                option.Active = false;
                if (selectedOption == option.Code) {
                    option.Active = true;
                    editSummary(feature.Code, option.Label, option.Thumbnail);
                    if (option.hasOwnProperty('Material')) {
                        valuta[selector].map(function (model) {
                            option.Material.map(function (material) {
                                model.changeMaterial(material.Channel, material.Layers, material.Url);
                            });
                        });
                    }
                    return;
                }
            });
    });
}

function rotateModel(direction) {
    if (direction == "clockwise") {
        valuta[selector].map(function (model) {
            model.rotate(Math.PI / 2);
        });
    }
    else {
        valuta[selector].map(function (model) {
            model.rotate(-Math.PI / 2);
        });
    }
    invalidate3D();
}

function changeQuantity(units) {
    units++;
    nReceptacles = units;
    var activeModel = 0;
    selector = 0;
    //scene.activeCamera.target.x = (units - 1) * -receptacleWidth / 2;
    valuta.map(function (valutaGroup, nGroup) {
        valutaGroup.map(function (valutaUnit, nUnit) {
            if (valutaUnit.model3D._isEnabled) {
                activeModel = nUnit;
            }
        });
        if (nGroup < units) {
            valutaGroup[activeModel].visibility(true);
            $(`.u${(nGroup + 1)}`).css("display", "unset");
        }
        else {
            valutaGroup[activeModel].visibility(false);
            $(`.u${(nGroup + 1)}`).css("display", "none");
        }
    });
    invalidate3D();
}


function receptacleSelectorFunction(selected, feature) {
    $(`.u${selected}`)[0].click();
    selector = selected - 1;    

    var $positions = $(".receptacleSelector");

    $positions.map(function (elements) {
        $("#" + $positions[elements].id).css("background-color", "rgb(210,210,210)");
    });
    if ($positions[selected - 1]) {
        $(`#replicatedOption${selected - 1}`).css("background-color", "rgb(150,150,150)");
    }
    if (feature == "opening") {
        optionsCreation("3", "3");
    }

}