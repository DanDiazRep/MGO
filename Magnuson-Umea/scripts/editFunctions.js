

function changeModel(selectedCode) {

    valuta[selector].map(function (model) {
        model.visibility(false);
        if (model.code == selectedCode) {
            model.visibility(true);
        }
    });
}

function changeColor(selectedFeature, selectedOption) {
    valutaJSON.FeaturesData.map(function (feature) {
        if (feature.Code == selectedFeature) {
            feature.Options.map(function (option) {
                option.Active = false;
                if (selectedOption == option.Code) {
                    //editSummary(feature.Code, option.Label, option.Thumbnail);
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
                    //editSummary(feature.Code, option.Label, option.Thumbnail);
                    if (option.hasOwnProperty('Layer')) {
                        valuta[selector].map(function (model) {
                            model.changeColor(feature.Layers, option.ColorCode);
                        });  
                    }
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
                    //editSummary(feature.Code, option.Label, option.Thumbnail);
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

        //property, layer, image

    });
}