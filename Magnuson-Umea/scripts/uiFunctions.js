
//Features list building
var $featuresList = $("<div>", { "class": "list-group", "id": "featuresList" });
$("#featuresChoice").append($featuresList);
var $featuresHeader = $("<h1>", {
    "style": "position: relative; margin: 0 auto; padding: 0; border: 0; width: auto; clear: both; text-align: center; font-size: 18px; font-weight: 400; margin-bottom: 20px; display: inline-block; color: rgb(0,0,0); line-height: 26px; vertical-align: text-top; border-bottom: solid 2px rgb(240,240,240); text-decoration: none; text-transform: uppercase; letter-spacing: 1px; display: none;",
    "text": "Select Options"
});
$featuresList.append($featuresHeader);
var $optionsClass = $("<div class=\"options\">");
$featuresList.append($optionsClass);
var previousFeatureId = "";
var buildIt = true;


valutaJSON.FeaturesData.map(function (features, nFeatures) {
    if (nFeatures > 0) {  //Skip features with the same Id
        if (previousFeatureId == features.Id)
            buildIt = false;
    }
    if (buildIt) {

        var $feature = $("<div>", {
            "class": "option",
            "id": "feature-" + features.Code,
            "onClick": `optionsCreation("${nFeatures}","${features.Id}")`,
        });
        $optionsClass.append($feature);
        var $featureImageClass = $("<div>", {
            "class": "image"
        });
        $feature.append($featureImageClass);
        var $featureImage = $("<img>", {
            "src": features.Thumbnail,
            "border": "0", "alt": "Slope", "class": "fade-img", "style": "",
        });
        $featureImageClass.append($featureImage);
        var $featureText = $("<div>", {
            "text": features.Label,
            "class": "text"
        });
        $feature.append($featureText);
    }
    previousFeatureId = features.Id;
    buildIt = true;
});



function optionsCreation(nFeatures, selectedId) {

    /*switch (selectedId) {
        case "1":
            scene.activeCamera.spinTo("beta", (6 * Math.PI / 16), 50);
            scene.activeCamera.spinTo("alpha", (0.4 * Math.PI), 50);
            scene.activeCamera.spinTo("radius", 250, 50);
            scene.activeCamera.spinTo("tarjet.x", (nReceptacles - 1) * -receptacleWidth / 2, 50);
            break;
        case "2":
            scene.activeCamera.spinTo("beta", (6 * Math.PI / 16), 50);
            scene.activeCamera.spinTo("alpha", (0.4 * Math.PI), 50);
            scene.activeCamera.spinTo("radius", 250, 50);
            scene.activeCamera.spinTo("tarjet.x", (nReceptacles - 1) * -receptacleWidth / 2, 50);
            break;
        case "3":
            scene.activeCamera.spinTo("beta", 0.83, 80);
            scene.activeCamera.spinTo("alpha", Math.PI / 2, 80);
            scene.activeCamera.spinTo("radius", 170, 50);
            scene.activeCamera.spinTo("tarjet.x", (nReceptacles - 1) * -receptacleWidth / 2, 50);
            break;
        case "4":
            scene.activeCamera.spinTo("beta", 0.83, 80);
            scene.activeCamera.spinTo("alpha", Math.PI / 2, 80);
            scene.activeCamera.spinTo("radius", 170, 50);
            scene.activeCamera.spinTo("tarjet.x", (nReceptacles - 1) * -receptacleWidth / 2, 50);
            break;
    }*/

    //Clean the previous selection
    $("#optionsDescription").empty();
    $("#optionsList").empty();
    $("#optionsCheckbox").empty();
    $("#receptacleChoice").empty();
    nFeature = 0;
    //Options building
    valutaJSON.FeaturesData.map(function (feature) {
        if (feature.Id == selectedId) {
            if (feature.Id == 1 && nReceptacles == 4) {
                $("#summaryCarousel").carousel({ interval: 5000 });
            }
            else if (feature.Id < 1 && nReceptacles == 4) {
                $("#summaryCarousel").carousel({ interval: 0 });
            }
            nFeature++;
            if (nFeature == 1 && feature.Code != "quantity") {
                if (feature.Code.includes("label")) {
                    for (var nReps = 0; nReps < nReceptacles; nReps++) {
                        if (nReceptacles > 1) {
                            var $replicateCol = $("<div>", { "class": "col", "id": "replicateColDivider" });
                            $("#receptacleChoice").append($replicateCol);

                            var $replicateElement = $("<div>", {
                                "class": "receptacleSelector",
                                "id": "replicatedOption" + nReps,
                                "text": "Unit " + (nReps + 1),
                                "onClick": `receptacleSelectorFunction("${(nReps + 1)}", "${"Label_C"}")`
                            });
                            $replicateCol.append($replicateElement);
                        }

                    }
                    $(`#replicatedOptionL${(selector)}`).css("background-color", "rgb(150,150,150)");
                    //receptacleSelectorFunction(selector + 1, "Label_L");
                }
                else if (nReceptacles > 1) {
                    for (var nReps = 0; nReps < nReceptacles; nReps++) {
                        var $replicateCol = $("<div>", { "class": "col", "id": "replicateColDivider" });
                        $("#receptacleChoice").append($replicateCol);

                        var $replicateElement = $("<div>", {
                            "class": "receptacleSelector",
                            "id": "replicatedOption" + nReps,
                            "text": "Unit " + (nReps + 1),
                            "onClick": `receptacleSelectorFunction("${(nReps + 1)}", "${"Label_C"}")`
                        });
                        $replicateCol.append($replicateElement);
                    }
                    $("#replicatedOption" + (selector)).css("background-color", "rgb(150,150,150)");
                }
            }
            isUnique = false;
            //Generate description based on the first feature
            if (feature.Description) {
                var $description = $(`<div class="text">${feature.Description}</div>`);
                $("#optionsDescription").append($description);
            }
            //Generate a new row for each feature
            var $optionsContainer = $("<div class=\"options\">");
            $("#optionsList").append($optionsContainer);

            if (feature.Code == "glides" || feature.Code == "liner") {
                var $optionClass = $(`<div class="option" for="${feature.Code}-option" style= "display: inline-flex;">`);
                $optionsContainer.append($optionClass);
                var $imageClass = $("<div class=\"image\">");
                $optionClass.append($imageClass);
                var $featureOptions = $("<a>", {
                    "class": "list-group-list list-group-item-action",
                    "id": "featureOption-" + feature.Code,
                });
                if (feature.Code == "glides") {
                    $featureOptions.attr("onClick", `glidesFunction()`);
                }

                $imageClass.append($featureOptions);
                if (feature.Code == "liner") {
                    if (modelList[selector])
                        var $featureCheckbox = $(`<div class="wrapper"><input id="${feature.Code}-option" type="checkbox" ${(modelList[selector].PartNumberShort.includes("1L") || modelList[selector].PartNumberShort.includes("2L")) ? "checked" : ""}><label for="${feature.Code}-option"></label></div>`);
                }
                else
                    var $featureCheckbox = $(`<div class="wrapper"><input id="${feature.Code}-option" type="checkbox" ${partNumberLong[2] == "GL" ? "checked" : ""}><label for="${feature.Code}-option"></label></div>`);
                $featureOptions.append($featureCheckbox);
                var $textClass = $(`<label for="${feature.Code}-option" class="text" 
                style="align-self: center; padding-left: 15px; font-size: 12px; width: auto; margin:0; line-height: 15px;">${feature.Label}</label>`);
                $optionClass.append($textClass);

            }
            else {
                feature.Options.map(function (option) {
                    //Generate the option 
                    var $optionClass = $("<div class=\"option\">");
                    $optionsContainer.append($optionClass);
                    var $imageClass = $("<div class=\"image\">");
                    $optionClass.append($imageClass);
                    var $featureOptions = $("<a>", {
                        "class": "list-group-list list-group-item-action",
                        "id": "featureOption-" + option.Code,
                        //"onClick": "geometryChange(\"" + option.Code + "\")"
                    });
                    if (option.hasOwnProperty('ColorCode')) {
                        $featureOptions.attr("onClick", `changeColor("${feature.Code}", "${option.Code}")`);
                    }
                    else if (option.hasOwnProperty('Material')) {
                        $featureOptions.attr("onClick", `changeMaterial("${feature.Code}", "${option.Code}")`);
                    }
                    else if (feature.Code == "quantity") {
                        $featureOptions.attr("onClick", `changeQuantity("${option.Code}")`);
                    }
                    else if (feature.Code == "body") {
                        $featureOptions.attr("onClick", `changeModel("${option.Code}")`);
                    }
                    else {
                        $featureOptions.attr("onClick", `changeGeometry("${feature.Code}", "${option.Code}")`);
                    }
                    $imageClass.append($featureOptions);

                    var $featureImage = $("<img>", {
                        "src": option.Thumbnail,
                        "border": "0", "alt": "Slope", "class": "fade-img",
                    });
                    $featureOptions.append($featureImage);
                    var $textClass = $("<div>", {
                        "class": "text", "text": option.Label
                    });
                    $optionClass.append($textClass);

                });
            }
        }

    });
}