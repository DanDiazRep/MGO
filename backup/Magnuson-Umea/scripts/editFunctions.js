
function changeModel(selectedCode) {
    valuta[selector].map(function (model) {
        model.visibility(false);
        if (model.code == selectedCode) {
            model.visibility(true);
        }
    });
    if (!isTypical) invalidate3D();

    //Setting summary
    data.FeaturesData.map(function (feature) {
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
    data.FeaturesData.map(function (feature) {
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
    data.FeaturesData.map(function (feature) {
        if (feature.Code == selectedFeature)
            feature.Options.map(function (option) {
                option.Active = false;
                if (selectedOption == option.Code) {
                    option.Active = true;                    
                    if (option.Code == "signage-mg" && $(`#signage-selectionText${selector + 1}`)[0].innerHTML == "Customer Signage") {
                        changeMaterial("signage-selection", "signage-cans");
                    }
                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                        return;
                    }
                    
                    editSummary(feature.Code, option.Label, option.Thumbnail);
                    feature.Layers.map(function (layer) {
                        valuta[selector].map(function (model) {
                            model.changeGeometry(layer, false);
                        });
                    });
                    if (option.hasOwnProperty('Layer')) {
                        valuta[selector].map(function (model) {
                            if (option.Code == "signage-customer") {
                                model.changeMaterial("albedoTexture", ["Signage1Label", "Signage2Label", "Signage3Label", "Signage4Label"], "/assets/valuta/materials/signages/Custom.png");                               
                                changeColor("signage-color", "blackFoil");
                                console.log("asdf");
                            }
                            model.changeGeometry(option.Layer, true);
                        });
                    }
                    if (!isTypical) invalidate3D();
                    return;
                }                
            });
    });
    
}

function changeMaterial(selectedFeature, selectedOption) {
    data.FeaturesData.map(function (feature) {
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
    if (!isTypical) invalidate3D();
}

function setRotation(x, y, z, w) {
    valuta[selector].map(function (model) {
        model.setRotation(x, y, z, w);
    });
}

function setPosition(direction, distance) {
    valuta[selector].map(function (model) {
        model.setPosition(direction, distance);
    });
}

function changeQuantity(units) {    
    units++;
    nReceptacles = units;
    var activeModel = 0;
    console.log(isTypical);
    if (!isTypical) {
        typical = "";
        selector = 0;
        //Body
        changeModel("VA1809L-JR");
        setRotation(0, 0, 0, 0);
       
        selector = 1;
        //Body
        changeModel("VA1809L-JR");      
        setRotation(0, 0, 0, 0);

        selector = 2;
        //Body
        changeModel("VA1809L-JR");      
        setRotation(0, 0, 0, 0);

        selector = 3;
        //Body
        changeModel("VA1809L-JR");
        setRotation(0, 0, 0, 0);
        
    }
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
    if (!isTypical) invalidate3D();
    selector = 0;
    $(`.u1`)[0].click();
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
    if (feature == "signage") {
        if ($(`#signageSelection${selector + 1}`)[0].style.cssText.includes("none")) {
            $(`#signage-selection`).css("display", "none");
            $(`#signage-color`).css("display", "none");
            $(`#signage-extra`).css("display", "none");
        }
        else {
            $(`#signage-selection`).css("display", "inline-block");
            $(`#signage-color`).css("display", "inline-block");
            $(`#signage-extra`).css("display", "inline-block");
        }
    }
    
    if ($(`#signage-applicationText${selector + 1}`)[0].innerHTML == "MagneticApplication") {
        $(`#magneticApp-option`).click();
    }
    else {
        $(`#permanentApp-option`).click();
    }

}

function typicalSelection(selected) {
    isTypical = true;
    typical = selected;
    switch (selected) {
        case ("typical1"): {
            //Quantity
            changeQuantity("1");
            selector = 0;
            //Body
            changeModel("VA1809L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            rotateModel("clockwise");
            //Opening
            changeGeometry("opening", "opening-paper");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-paper");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 1;
            //Body
            changeModel("VA1809L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            rotateModel("counterclockwise");
            //Opening
            changeGeometry("opening", "opening-paper");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-paper");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");
        }
            break;
        case ("typical2"): {
            //Quantity
            changeQuantity("1");
            selector = 0;
            //Body
            changeModel("VA18SCL");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            rotateModel("clockwise");
            //Opening
            changeGeometry("opening", "opening-waste");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-compost");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 1;
            //Body
            changeModel("VA18SCL");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            //Opening
            changeGeometry("opening", "opening-waste");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-compost");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");
        }
            break;
        case ("typical3"): {
            //Quantity
            changeQuantity("1");
            selector = 0;
            //Body
            changeModel("VA18SCL");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            //Opening
            changeGeometry("opening", "opening-waste");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-waste");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 1;
            //Body
            changeModel("VA1809L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            rotateModel("counterclockwise");
            //Opening
            changeGeometry("opening", "opening-paper");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-paper");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");
        }
            break;
        case ("typical4"): {
            //Quantity
            changeQuantity("2");
            selector = 0;
            //Body
            changeModel("VA1809L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            //Opening
            changeGeometry("opening", "opening-paper");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-paper");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 1;
            //Body
            changeModel("VA1818L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            //Opening
            changeGeometry("opening", "opening-waste");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-waste");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 2;
            //Body
            changeModel("VA1809L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            //Opening
            changeGeometry("opening", "opening-circle");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-cans");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");
        }
            break;
        case ("typical5"): {
            //Quantity
            changeQuantity("2");
            selector = 0;
            //Body
            changeModel("VA18SCL");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            rotateModel("clockwise");
            //Opening
            changeGeometry("opening", "opening-waste");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-waste");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 1;
            //Body
            changeModel("VA1809L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            //Opening
            changeGeometry("opening", "opening-paper");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-paper");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 2;
            //Body
            changeModel("VA18SCL");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            //Opening
            changeGeometry("opening", "opening-waste");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-waste");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");
        }
            break;
        case ("typical6"): {
            //Animation
            scene.activeCamera.spinTo("beta", 1.14, 50);
            scene.activeCamera.spinTo("alpha", 2.179, 50);
            scene.activeCamera.spinTo("radius", 250, 50);
            //Quantity
            changeQuantity("2");
            selector = 0;
            //Body
            changeModel("VA1809L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            setPosition("x", -9.5);
            setPosition("z", 18.4);
            //Opening
            changeGeometry("opening", "opening-paper");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-paper");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 1;
            //Body
            changeModel("VA18SCL");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            //Opening
            changeGeometry("opening", "opening-waste");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-waste");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 2;
            //Body
            changeModel("VA1809L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            rotateModel("clockwise");
            //Opening
            changeGeometry("opening", "opening-circle");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-cans");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");
        }
            break;
        case ("typical7"): {
            //Quantity
            changeQuantity("2");
            selector = 0;
            //Body
            changeModel("VA18SCL");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            rotateModel("clockwise");
            //Opening
            changeGeometry("opening", "opening-waste");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-waste");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 1;
            //Body
            changeModel("VA1818L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            //Opening
            changeGeometry("opening", "opening-waste");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-waste");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 2;
            //Body
            changeModel("VA18SCL");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            //Opening
            changeGeometry("opening", "opening-paper-circle");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-recyclingA");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");
        }
            break;
        case ("typical8"): {
            //Quantity
            changeQuantity("2");
            selector = 0;
            //Body
            changeModel("VA1814L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            //Opening
            changeGeometry("opening", "opening-paper");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-paper");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 1;
            //Body
            changeModel("VA1814L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            //Opening
            changeGeometry("opening", "opening-circle");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-cans");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 2;
            //Body
            changeModel("VA1814L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            //Opening
            changeGeometry("opening", "opening-waste");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-waste");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");
        }
            break;
        case ("typical9"): {
            //Quantity
            changeQuantity("2");
            selector = 0;
            //Body
            changeModel("VA1809L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            rotateModel("clockwise");
            //Opening
            changeGeometry("opening", "opening-waste");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-waste");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 1;
            //Body
            changeModel("VA1809L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            rotateModel("clockwise");
            //Opening
            changeGeometry("opening", "opening-circle");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-cans");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 2;
            //Body
            changeModel("VA1809L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            rotateModel("clockwise");
            //Opening
            changeGeometry("opening", "opening-paper");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-paper");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");
        }
            break;
        case ("typical10"): {
            //Quantity
            changeQuantity("3");
            selector = 0;
            //Body
            changeModel("VA1809L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            //Opening
            changeGeometry("opening", "opening-paper");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-paper");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 1;
            //Body
            changeModel("VA1814L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            //Opening
            changeGeometry("opening", "opening-waste");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-waste");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 2;
            //Body
            changeModel("VA1814L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            //Opening
            changeGeometry("opening", "opening-waste");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-waste");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 3;
            //Body
            changeModel("VA1809L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            //Opening
            changeGeometry("opening", "opening-circle");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-cans");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");
        }
            break;
        case ("typical11"): {
            //Quantity
            changeQuantity("3");
            selector = 0;
            //Body
            changeModel("VA18SCL");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            rotateModel("clockwise");
            //Opening
            changeGeometry("opening", "opening-waste");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-waste");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 1;
            //Body
            changeModel("VA1809L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            //Opening
            changeGeometry("opening", "opening-circle");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-cans");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 2;
            //Body
            changeModel("VA1809L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            //Opening
            changeGeometry("opening", "opening-paper");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-paper");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 3;
            //Body
            changeModel("VA18SCL");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            //Opening
            changeGeometry("opening", "opening-waste");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-waste");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");
        }
            break;
        case ("typical12"): {
            //Quantity
            changeQuantity("2");
            selector = 0;
            //Body
            changeModel("VA1809L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            rotateModel("clockwise");
            //Opening
            changeGeometry("opening", "opening-paper");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-paper");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 1;
            //Body
            changeModel("VA1809L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            rotateModel("clockwise");
            //Opening
            changeGeometry("opening", "opening-circle");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-cans");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 2;
            //Body
            changeModel("VA1809L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            rotateModel("clockwise");
            //Opening
            changeGeometry("opening", "opening-waste");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-waste");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

        }
            break;
        case ("typical13"): {
            //Quantity
            changeQuantity("3");
            selector = 0;
            //Body
            changeModel("VA1818L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            //Opening
            changeGeometry("opening", "opening-waste");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-waste");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 1;
            //Body
            changeModel("VA18SCL");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            rotateModel("counterclockwise");
            //Opening
            changeGeometry("opening", "opening-waste");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-waste");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 2;
            //Body
            changeModel("VA18SCL");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            rotateModel("clockwise");
            //Opening
            changeGeometry("opening", "opening-waste");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-waste");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 3;
            //Body
            changeModel("VA1818L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            //Opening
            changeGeometry("opening", "opening-waste");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-waste");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

        }
            break;
        case ("typical14"): {
            //Quantity
            changeQuantity("3");
            selector = 0;
            //Body
            changeModel("VA1818L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            //Opening
            changeGeometry("opening", "opening-waste");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-waste");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 1;
            //Body
            changeModel("VA1818L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            //Opening
            changeGeometry("opening", "opening-paper");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-paper");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 2;
            //Body
            changeModel("VA1818L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            //Opening
            changeGeometry("opening", "opening-circle");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-cans");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 3;
            //Body
            changeModel("VA1818L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            //Opening
            changeGeometry("opening", "opening-waste");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-waste");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");
        }
            break;
        case ("typical15"): {
            //Quantity
            changeQuantity("2");
            selector = 0;
            //Body
            changeModel("VA1818L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            //Opening
            changeGeometry("opening", "opening-waste");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-waste");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 1;
            //Body
            changeModel("VA1818L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            //Opening
            changeGeometry("opening", "opening-waste");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-waste");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 2;
            //Body
            changeModel("VA1818L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            //Opening
            changeGeometry("opening", "opening-waste");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-waste");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");
        }
            break;
        case ("typical16"): {
            //Animation
            scene.activeCamera.spinTo("beta", 1.14, 50);
            scene.activeCamera.spinTo("alpha", 1, 50);
            scene.activeCamera.spinTo("radius", 250, 50);
            //Quantity
            changeQuantity("3");
            selector = 0;
            //Body
            changeModel("VA1809L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            rotateModel("clockwise");
            //Opening
            changeGeometry("opening", "opening-paper");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-paper");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 1;
            //Body
            changeModel("VA1809L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            rotateModel("clockwise");
            //Opening
            changeGeometry("opening", "opening-paper");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-paper");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 2;
            //Body
            changeModel("VA18SCL");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            rotateModel("clockwise");
            //Opening
            changeGeometry("opening", "opening-waste");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-waste");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 3;
            //Body
            changeModel("VA1809L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);            
            //Opening
            changeGeometry("opening", "opening-paper");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-paper");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");
        }
            break;
        case ("typical17"): {
            //Animation
            scene.activeCamera.spinTo("beta", 1.14, 50);
            scene.activeCamera.spinTo("alpha", 2.179, 50);
            scene.activeCamera.spinTo("radius", 250, 50);
            //Quantity
            changeQuantity("3");
            selector = 0;
            //Body
            changeModel("VA1809L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            //Opening
            changeGeometry("opening", "opening-paper");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-paper");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 1;
            //Body
            changeModel("VA18SCL");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            //Opening
            changeGeometry("opening", "opening-waste");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-waste");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 2;
            //Body
            changeModel("VA1809L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            rotateModel("clockwise");
            //Opening
            changeGeometry("opening", "opening-paper");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-paper");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 3;
            //Body
            changeModel("VA1809L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            rotateModel("clockwise");
            //Opening
            changeGeometry("opening", "opening-paper");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-paper");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

        }
            break;
        case ("typical18"): {
            //Quantity
            changeQuantity("2");
            selector = 0;
            //Body
            changeModel("VA1809L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            rotateModel("clockwise");
            //Opening
            changeGeometry("opening", "opening-waste");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-waste");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 1;
            //Body
            changeModel("VA1809L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            //Opening
            changeGeometry("opening", "opening-waste");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-waste");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

            selector = 2;
            //Body
            changeModel("VA1809L");
            changeColor("body-color", "lunarWhite");
            setRotation(0, 0, 0, 0);
            rotateModel("clockwise");
            //Opening
            changeGeometry("opening", "opening-waste");
            changeColor("opening-color", "lunarWhite");
            //Label
            changeMaterial("label", "label-waste");
            changeColor("label-color", "blackVinyl");
            //Signage
            changeGeometry("signage", "no-signage");
            changeColor("label-extra-color", "blackFoil");

        }

        default:
    }
    selector = 0;
    isTypical = false;
    invalidate3D();
}

function editSummary(featureSelected, optionLabel, optionThumbnail) {
    var currentModel = $(`#bodyText${(selector + 1)}`)[0].innerHTML;
    switch (featureSelected) {
        case ("body"): {
            $(`#${featureSelected}Image${(selector + 1)}`).attr("src", optionThumbnail);
            $(`#${featureSelected}Text${(selector + 1)}`).text(optionLabel);

            var currentOpening = $(`#openingText${(selector + 1)}`)[0].innerHTML;
            var currentOpeningOption = "";
            if (currentOpening == "Waste") {
                currentOpeningOption = "opening-waste";
            }
            if (currentOpening == "Paper") {
                currentOpeningOption = "opening-paper";
            }
            if (currentOpening == "Circle") {
                currentOpeningOption = "opening-circle";
            }
            if (currentOpening == "Paper/Circle") {
                currentOpeningOption = "opening-paper-circle";
            }
            changeGeometry("opening", currentOpeningOption);
        }
            break;
        case ("opening"): {
            if (currentModel == "VA1814L") {
                var auxThumbnail = optionThumbnail;
                if (optionLabel == "Circle") {
                    auxThumbnail = optionThumbnail.replace("cansplasticglass", "circle");
                }
                if (optionLabel == "Paper/Circle") {
                    auxThumbnail = optionThumbnail.replace("opening-comingle", "cans-plastic-glass");
                }
                auxThumbnail = auxThumbnail.replace("1809", "32");
                $(`#openingImage${(selector + 1)}`).attr("src", auxThumbnail);

            }
            else if (currentModel == "VA1818L") {
                $(`#openingImage${(selector + 1)}`).attr("src", optionThumbnail.replace("1809", "1818"));
            }
            else if (currentModel == "VA18SCL") {
                $(`#openingImage${(selector + 1)}`).attr("src", optionThumbnail.replace("1809", "1818scl"));
            }
            else {
                $(`#openingImage${(selector + 1)}`).attr("src", optionThumbnail);
            }
            $(`#openingText${(selector + 1)}`).text(optionLabel);
        }
            break;
        case ("label-color"):
            {
                $(`#label-colorImage${(selector + 1)}`).attr("src", optionThumbnail);
                $(`#label-colorText${(selector + 1)}`).text(optionLabel);
            }
            break;
        case ("signage"): {
            if (optionLabel == "MG Signage") {
                $(`#${featureSelected}Selection${(selector + 1)}`).css("display", "inline-block");
                $(`#${featureSelected}Application${(selector + 1)}`).css("display", "inline-block");
                $(`#signage-colorImage${(selector + 1)}`).css("display", "inline-block");
                $(`#signage-colorText${(selector + 1)}`).css("display", "inline-block");
                $(`#signage-selection`).css("display", "inline-block");
                $(`#signage-color`).css("display", "inline-block");
                $(`#signage-extra`).css("display", "inline-block");
                $(`#${featureSelected}Image${(selector + 1)}`).attr("src", optionThumbnail);
                $(`#${featureSelected}Text${(selector + 1)}`).text(optionLabel);
            }
            else if (optionLabel == "Customer Signage") {
                $(`#${featureSelected}Selection${(selector + 1)}`).css("display", "inline-block");
                $(`#${featureSelected}Application${(selector + 1)}`).css("display", "none");
                $(`#signage-colorImage${(selector + 1)}`).css("display", "none");
                $(`#signage-colorText${(selector + 1)}`).css("display", "none");
                $(`#signage-selection`).css("display", "none");
                $(`#signage-color`).css("display", "none");
                $(`#signage-extra`).css("display", "none");

                $(`#signage-selectionImage${(selector + 1)}`).attr("src", optionThumbnail);
                $(`#signage-selectionText${(selector + 1)}`).text(optionLabel);
            }
            else {
                $(`#${featureSelected}Selection${(selector + 1)}`).css("display", "none");
                $(`#${featureSelected}Application${(selector + 1)}`).css("display", "none");
                $(`#signage-selection`).css("display", "none");
                $(`#signage-color`).css("display", "none");
                $(`#signage-extra`).css("display", "none");
            }

        }
            break;
        default: {
            $(`#${featureSelected}Image${(selector + 1)}`).attr("src", optionThumbnail);
            $(`#${featureSelected}Text${(selector + 1)}`).text(optionLabel);
        }
    }
}


function signageRadio(selectedOption) {
    $(`#signage-applicationText${selector + 1}`)[0].innerHTML = selectedOption;
}