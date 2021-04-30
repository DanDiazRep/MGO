
//GET DATA
//var InitialData = getUmea;

//Menu building variables
var canvas = document.getElementById('magnusonCanvas');
var container = document.getElementById('magnusonRowContainer');

////**************************************************************************
//********************* BABYLON ENGINE INITIALIZATION *****************
////**************************************************************************

var engine = new BABYLON.Engine(canvas, true, { premultipliedAlpha: false, preserveDrawingBuffer: true, stencil: true });
var pdfCamera;
var modelCore;
var modelList = [];
var HDRhelper;
var GLTFExportOptions;
var spotLight;
var spotLight2;
//var modelList;
var index = 0;
var nReceptacles = 1;
var isDouble = false;
var cycle = false;
var nFeature = 0;
var receptacleWidth = 43;
var partNumberLong = ["SLP-01", "LW", "", "P", "AS", "L", "W", "W", "W", "WV"];
// BODY - BODY COLOR - GLIDES - "TOP" - "TOP COLOR" - "LINER" - "LABEL CENTER"- "LABEL LEFT"- "LABEL RIGHT"- "LABEL COLOR"
var partNumberShort = [partNumberLong[0], partNumberLong[5], ""];

//Prototypes
BABYLON.ArcRotateCamera.prototype.spinTo = function (whichprop, targetval, speed) {
    var ease = new BABYLON.CubicEase();
    ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
    BABYLON.Animation.CreateAndStartAnimation('at4', this, whichprop, speed, 120, this[whichprop], targetval, 0, ease);
}

//Scene creation
var createScene = function () {
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.ArcRotateCamera("Camera", (0.4 * Math.PI), (6 * Math.PI / 16), 250, new BABYLON.Vector3(0, 60, 0), scene);
    var lightH = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 1, 0.2), scene);
    lightH.intensity = 5;
    //lightH.diffuse = BABYLON.Color3.FromHexString("#C9C9C9");
    //lightH.groundColor = BABYLON.Color3.FromHexString("#4A4A4A");
    spotLight = new BABYLON.DirectionalLight("light1", new BABYLON.Vector3(-0.43, -0.85, -0.3), scene);
    spotLight.intensity = 10;
    spotLight.position.y = 150;

    spotLight2 = new BABYLON.DirectionalLight("light2", new BABYLON.Vector3(-0.43, -0.85, -0.3), scene);
    spotLight2.intensity = 0;
    spotLight2.position.y = 150;

    //Shadow casting for desktop version only
    if (detectmob()) {
        var shadowGenerator = new BABYLON.ShadowGenerator(512, spotLight);
        shadowGenerator.usePoissonSampling = true;
        shadowGenerator.bias = 0.0002;

        var groundShadowGenerator = new BABYLON.ShadowGenerator(512, spotLight2);
        groundShadowGenerator.useBlurExponentialShadowMap = true;
        groundShadowGenerator.blurBoxOffset = 19;
        groundShadowGenerator.depthScale = 3;
        groundShadowGenerator.blurScale = 2;
    }
    camera.wheelDeltaPercentage = 0.07;
    camera.attachControl(canvas, false);
    camera.lowerRadiusLimit = 80;
    camera.upperRadiusLimit = 350;
    camera.panningSensibility = 20;

    pdfCamera = camera.clone();
    pdfCamera.alpha = Math.PI / 2;
    pdfCamera.radius = 180;
    pdfCamera.beta = (7 * Math.PI / 16);

    scene.clearColor = new BABYLON.Color3(1, 1, 1); //Background color

    // The first parameter can be used to specify which mesh to import. Here we import all meshes
    BABYLON.SceneLoader.ImportMesh("", "assets/models/", "slope.glb", scene, function (slopeRoot) {
        //slopeRoot[0].setEnabled(false);         
        modelCore = slopeRoot;//[0]._children[0]._children[0];   
        modelCore.map(function (slopeMesh, nMesh) {
            if (nMesh > 0) {
                slopeMesh.actionManager = new BABYLON.ActionManager(scene); // Pointer behavior on model hover     
                slopeMesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function (ev) {
                }, false));
                //Show me the default
                slopeMesh.isVisible = slopeData.DefaultLayers.includes(slopeMesh.name);
            }
        });
        //modelCore.setEnabled(false);   
        //Create a 4 receptacle obj
        for (var i = 0; i < 4; i++) {
            modelList[i] = modelCore[0].clone("slope" + i);
            for (var n = 0; n < modelList[i]._children[0]._children.length; n++) {
                modelList[i]._children[0]._children[n]._children[0].material = modelCore[n + 1].material.clone(modelCore[n + 1].name + "_slope_" + i);
                modelList[i]._children[0]._children[n]._children[0].material._metallicTexture = null;
                if (modelList[i]._children[0]._children[n].name.includes("Top")) {
                    //modelList[i]._children[0]._children[n]._children[0].material.backFaceCulling = false;
                }
                else {
                    //modelList[i]._children[0]._children[n]._children[0].material.backFaceCulling = true;
                }
                modelList[i]._children[0]._children[n]._children[0].material.useRadianceOcclusion = false;
                modelList[i]._children[0]._children[n]._children[0].material._roughness = 0.11;
                modelList[i]._children[0]._children[n]._children[0].material._metallic = 0.4;
                modelList[i]._children[0]._children[n]._children[0].material.metallicF0Factor = 0;
                //modelList[i]._children[0]._children[n]._children[0].material.anisotropy.isEnabled = true;
                //modelList[i]._children[0]._children[n]._children[0].material.anisotropy.intensity = 0.77;
                modelList[i]._children[0]._children[n]._children[0].material.directIntensity = 0.5
                index = i;
                changeColor("opening-color", "anodizedSilver");
                if (detectmob()) {
                    shadowGenerator.addShadowCaster(modelList[i]._children[0]._children[n]._children[0]);
                    groundShadowGenerator.addShadowCaster(modelList[i]._children[0]._children[n]._children[0]);
                    modelList[i]._children[0]._children[n]._children[0].receiveShadows = true;
                }
            }
            //Default selection

            index = 0;
            modelList[i]._position.x = -i * receptacleWidth;
            modelList[i].setEnabled(false);
            modelList[i].PartNumberLong = partNumberLong.join(",");
            modelList[i].PartNumberShort = partNumberShort.join("");
        }
        modelCore.map(function (slopeMesh) {
            slopeMesh.isVisible = false;
        });
        modelList[0].setEnabled(true);
        //modelCore.dispose();
    },
        function (evt) {
            //On progress function    
            if (evt.lengthComputable) {
                var percentage = (evt.loaded * 100 / evt.total).toFixed();
                //console.log("Loading, please wait..." + percentage + "%");
                $(".progress-bar").css("width", percentage + "%");
                $("#loadingLabel").text(percentage + "%");
                if (percentage >= 100) {
                    $(".progress")[0].remove();
                    $("#loadingLabel").remove();
                }

            }
            else {
                dlCount = evt.loaded / (1024 * 1024);
            }


        }, function (error) {

        }
    );
    //Env texture
    //var hdrTexture = new BABYLON.CubeTexture.CreateFromPrefilteredData("assets/environment/cathedral" + "EnvHDR.dds", scene);
    //hdrTexture.gammaSpace = true;
    HDRhelper = scene.createDefaultEnvironment({
        cameraExposure: 1.2,
        cameraContrast: 1.2,
        createSkybox: false,
        //skyboxTexture: "assets/environment/studio" + "EnvHDR.dds",
        skyboxSize: 300,
        groundSize: 700,
        groundColor: new BABYLON.Color3(1, 1, 1),
        groundOpacity: 0.25,
        //environmentTexture: "assets/environment/studio" + "EnvHDR.dds"
    });
    spotLight.excludedMeshes.push(HDRhelper.ground);
    HDRhelper.ground.receiveShadows = true;
    scene.environmentIntensity = 0.25;
    ////HDRhelper.skybox = hdrTexture;
    window.addEventListener("resize", function () { engine.resize(); });

    return scene;
}
// call the createScene function
var scene = createScene();

// run the render loop
engine.runRenderLoop(function () {
    window.addEventListener("resize", function () { engine.resize(); });
    scene.render();
});




//is mobile?
function detectmob() {
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ) {
        return false;
    }
    else {
        return true;
    }
}

//UI Building

var featuresData = slopeData.FeaturesData;

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

for (nFeatures = 0; nFeatures < featuresData.length; nFeatures++) {
    if (nFeatures > 0) {  //Skip features with the same Id
        if (previousFeatureId == featuresData[nFeatures].Id)
            buildIt = false;
    }
    if (buildIt) {

        var $feature = $("<div>", {
            "class": "option",
            "id": "feature-" + featuresData[nFeatures].Code,
            "onClick": "optionsCreation(\"" + nFeatures + "," + featuresData[nFeatures].Id + "\")"
        });
        $optionsClass.append($feature);
        var $featureImageClass = $("<div>", {
            "class": "image"
        });
        $feature.append($featureImageClass);
        var $featureImage = $("<img>", {
            "src": featuresData[nFeatures].Thumbnail,
            "border": "0", "alt": "Slope", "class": "fade-img", "style": "",
        });
        $featureImageClass.append($featureImage);
        var $featureText = $("<div>", {
            "text": featuresData[nFeatures].Label,
            "class": "text"
        });
        $feature.append($featureText);

    }
    previousFeatureId = featuresData[nFeatures].Id;
    buildIt = true;
}


function optionsCreation(args) {
    var res = args.split(",");
    var nFeatures = res[0];
    var selectedId = res[1];
    switch (selectedId) {
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
    }

    //Clean the previous selection
    $("#optionsDescription").empty();
    $("#optionsList").empty();
    $("#optionsCheckbox").empty();
    $("#receptacleChoice").empty();
    nFeature = 0;
    //Options building
    featuresData.map(function (feature) {
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
                        if (modelList[nReps].PartNumberShort.includes("DBL")) {
                            var $replicateCol = $("<div>", { "class": "col", "id": "replicateColDivider" });
                            $("#receptacleChoice").append($replicateCol);

                            var $replicateElementA = $("<div>", {
                                "class": "receptacleSelector",
                                "id": "replicatedOptionL" + nReps,
                                "text": "Unit " + (nReps + 1) + " Left",
                                "onClick": `receptacleSelectorFunction("${(nReps + 1)}", "${"Label_L"}")`
                            });

                            var $replicateElementB = $("<div>", {
                                "class": "receptacleSelector",
                                "id": "replicatedOptionR" + nReps,
                                "text": "Unit " + (nReps + 1) + " Right",
                                "onClick": `receptacleSelectorFunction("${(nReps + 1)}", "${"Label_R"}")`
                            });

                            $replicateCol.append($replicateElementA);
                            $replicateCol.append($replicateElementB);
                            receptacleSelectorFunction(index + 1, "Label_L");

                        }
                        else if (nReceptacles > 1) {
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

                    if (modelList[index].PartNumberLong.split(",")[3].length == 1) {
                        $(`#replicatedOption${(index)}`).css("background-color", "rgb(150,150,150)");
                        receptacleSelectorFunction(index + 1, "Label_C");

                    }
                    else {
                        $(`#replicatedOptionL${(index)}`).css("background-color", "rgb(150,150,150)");
                        receptacleSelectorFunction(index + 1, "Label_L");
                    }

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
                    $("#replicatedOption" + (index)).css("background-color", "rgb(150,150,150)");
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
                else if (feature.Code == "liner") {
                    $featureOptions.attr("onClick", `linerFunction()`);
                }

                $imageClass.append($featureOptions);
                if (feature.Code == "liner") {
                    if (modelList[index])
                        var $featureCheckbox = $(`<div class="wrapper"><input id="${feature.Code}-option" type="checkbox" ${(modelList[index].PartNumberShort.includes("1L") || modelList[index].PartNumberShort.includes("2L")) ? "checked" : ""}><label for="${feature.Code}-option"></label></div>`);
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

optionsCreation("0,1");
function changeMaterial(selectedFeature, selectedOption) {
    slopeData.FeaturesData.map(function (feature) {
        if (feature.Code == selectedFeature)
            feature.Options.map(function (option) {
                option.Active = false;
                if (selectedOption == option.Code) {
                    option.Active = true;
                    if (option.hasOwnProperty('Material')) {
                        modelList[index]._children[0]._children.map(function (meshes) {
                            if (feature.Layers.includes(meshes._children[0].name.split(".")[3])) {
                                if (option.Material[0].AlbedoTexture) {

                                    if (feature.Code == "label") {
                                        editSummary(feature.Code, option.Label, option.Thumbnail, feature.Layers[0]);

                                        meshes._children[0].material._albedoTexture.updateURL("/assets/materials/" + option.Code + "_Base_Color.png");
                                        if (option.Code == "no-label") {
                                            if (feature.Layers[0] == "Label_C") {
                                                $(`#label-colorCText${index + 1}`).css("display", "none");
                                                $(`#label-colorCImage${index + 1}`).css("display", "none");
                                            }
                                            else if (feature.Layers[0] == "Label_R") {
                                                $(`#label-colorRText${index + 1}`).css("display", "none");
                                                $(`#label-colorRImage${index + 1}`).css("display", "none");
                                            }
                                            else if (feature.Layers[0] == "Label_L") {
                                                $(`#label-colorLText${index + 1}`).css("display", "none");
                                                $(`#label-colorLImage${index + 1}`).css("display", "none");
                                            }
                                        }
                                        else {
                                            if (feature.Layers[0] == "Label_C") {
                                                $(`#label-colorCText${index + 1}`).css("display", "inline-block");
                                                $(`#label-colorCImage${index + 1}`).css("display", "inline-block");
                                            }
                                            else if (feature.Layers[0] == "Label_R") {
                                                $(`#label-colorRText${index + 1}`).css("display", "inline-block");
                                                $(`#label-colorRImage${index + 1}`).css("display", "inline-block");
                                            }
                                            else if (feature.Layers[0] == "Label_L") {
                                                $(`#label-colorLText${index + 1}`).css("display", "inline-block");
                                                $(`#label-colorLImage${index + 1}`).css("display", "inline-block");
                                            }
                                        }
                                    }
                                    else {
                                        editSummary(feature.Code, option.Label, option.Thumbnail);
                                        meshes._children[0].material._albedoColor = new BABYLON.Color3.FromHexString("#FFFFFF");
                                        meshes._children[0].material._albedoTexture.updateURL("/assets/materials/" + meshes._children[0].name.split(".")[3] + "_" + option.Code + "_Base_Color.png", scene);
                                        if (option.Code.includes("polishedSS")) {
                                            meshes._children[0].material.metallic = 0.8;
                                            meshes._children[0].material.roughness = 0.1;
                                            meshes._children[0].material.bumpTexture.level = 0.1;
                                        }
                                        else if (option.Code.includes("brushedSS")) {
                                            meshes._children[0].material.metallic = 0.6;
                                            meshes._children[0].material.roughness = 0.15;
                                            meshes._children[0].material.bumpTexture.level = 0.5;
                                        }
                                        else {
                                            meshes._children[0].material.metallic = 0.4;
                                            meshes._children[0].material.roughness = 0.13;
                                            meshes._children[0].material.bumpTexture.level = 1;
                                        }

                                    }
                                }
                                if (option.Material[0].NormalTexture == true) {
                                    meshes._children[0].material._bumpTexture.updateURL("/assets/materials/" + meshes._children[0].name.split(".")[3] + "_" + option.Code + "_Normal.png");
                                    /*meshes._children[0].material._bumpTexture.vAng = -Math.PI;
                                    meshes._children[0].material._bumpTexture.wAng = -Math.PI;*/
                                }
                                else if (option.Material[0].NormalTexture == false) {
                                    meshes._children[0].material._bumpTexture = null;
                                }
                            }
                        });
                    }
                    return;
                }
            });
    });
}
function changeColor(selectedFeature, selectedOption) {
    slopeData.FeaturesData.map(function (feature) {
        if (feature.Code == selectedFeature) {
            feature.Options.map(function (option) {
                option.Active = false;
                if (selectedOption == option.Code) {
                    editSummary(feature.Code, option.Label, option.Thumbnail);
                    option.Active = true;
                    if (selectedOption == "lunarWhite" && selectedFeature == "opening-color") {
                        changeColor("label-color", "darkGreyVinyl");
                    }
                    if (option.hasOwnProperty('ColorCode')) {
                        if (modelList[index].PartNumberShort) {
                            modelList[index].PartNumberShort, modelList[index].PartNumberLong = changePN(feature.Code, option.PartNumber, null, index);
                            if (modelList[index].PartNumberLong.split(",")[4] == "LW" && modelList[index].PartNumberLong.split(",")[9] == "WV") {
                                modelList[index]._children[0]._children.map(function (meshes) {
                                    if (meshes._children[0].name.split(".")[3].includes("Label")) {
                                        meshes._children[0].isVisible = false;
                                    }
                                });
                            }
                            else if (modelList[index].PartNumberLong.split(",")[3].length > 1) {
                                modelList[index]._children[0]._children.map(function (meshes) {
                                    if (meshes._children[0].name.split(".")[3] == "Label_R" || meshes._children[0].name.split(".")[3] == "Label_L") {
                                        meshes._children[0].isVisible = true;
                                    }
                                });
                            }
                            else if (modelList[index].PartNumberLong.split(",")[3].length <= 1) {
                                modelList[index]._children[0]._children.map(function (meshes) {
                                    if (meshes._children[0].name.split(".")[3].includes("Label_C")) {
                                        meshes._children[0].isVisible = true;
                                    }
                                });
                            }
                        }
                        modelList[index]._children[0]._children.map(function (meshes, n) {
                            if (feature.Layers.includes(meshes._children[0].name.split(".")[3])) {
                                meshes._children[0].material.metallic = 0.4;
                                meshes._children[0].material.roughness = 0.13;
                                meshes._children[0].material.bumpTexture.level = 1;

                                if (feature.Code == "body-color" || feature.Code == "opening-color") {
                                    meshes._children[0].material._albedoTexture.updateURL("/assets/materials/White_Base_Color.png");
                                }

                                meshes._children[0].material._albedoColor = new BABYLON.Color3.FromHexString(option.ColorCode);
                                meshes._children[0].material._bumpTexture.updateURL("/assets/materials/White_Normal.png");
                            }
                        });
                    }
                    return;
                }
            });
        }
    });
}

function changeGeometry(selectedFeature, selectedOption) {
    slopeData.FeaturesData.map(function (feature) {
        if (feature.Code == selectedFeature)
            feature.Options.map(function (option) {
                option.Active = false;
                if (selectedOption == option.Code) {
                    option.Active = true;
                    modelList[index].PartNumberShort, modelList[index].PartNumberLong = changePN(feature.Code, option.PartNumber, null, index);
                    editSummary(feature.Code, option.Label, option.Thumbnail);
                    if (option.hasOwnProperty('Layers')) {
                        modelList[index]._children[0]._children.map(function (meshes) {                            
                            if (feature.Layers.includes(meshes._children[0].name.split(".")[2]) && option.Layers.includes(meshes._children[0].name.split(".")[2])) {
                                meshes._children[0].isVisible = true;
                                //For liners resize condition                               
                            }
                            else if (modelList[index].PartNumberLong.split(",")[5] != "L" && meshes._children[0].name.split(".")[2].includes("Liner") ) {
                                meshes._children[0].isVisible = false;
                            }
                            
                            else if (feature.Layers.includes(meshes._children[0].name.split(".")[2])) {
                                meshes._children[0].isVisible = false;

                                if (feature.Code == "opening-single" || feature.Code == "opening-double") {
                                    if (modelList[index].PartNumberLong.split(",")[5] == "L" && meshes.name.includes(`Liner${modelList[index].PartNumberLong.split(",")[3].length > 1 ? "D" : "S"}_${modelList[index].PartNumberLong.split(",")[0] == "SLP-01" ? "Standard" : "Junior"}`)) {
                                        meshes._children[0].isVisible = true;
                                    }
                                }
                                if (feature.Code == "opening-single") {
                                    slopeData.FeaturesData[8].Layers[0] = "Label_C";
                                    $(`#labelCenterSelection${(index + 1)}`).css("display", "inline-block");
                                    $(`#labelRightSelection${(index + 1)}`).css("display", "none");
                                    $(`#labelLeftSelection${(index + 1)}`).css("display", "none");
                                }
                                if (feature.Code == "opening-double") {
                                    $(`#labelCenterSelection${(index + 1)}`).css("display", "none");
                                    $(`#labelRightSelection${(index + 1)}`).css("display", "inline-block");
                                    $(`#labelLeftSelection${(index + 1)}`).css("display", "inline-block");

                                    if (modelList[index].PartNumberLong.split(",")[5] != "L") {
                                        $("#liner-option").click();
                                    }
                                }
                            }
                            else {
                                if (option.Code == "jr") {                                    
                                    if (!meshes.name.includes("Glides") && !meshes.name.includes("Liner"))
                                        meshes._children[0].position.y = - 0.3;

                                    if (meshes.name.includes("Junior") && meshes.name.includes(`Liner${modelList[index].PartNumberLong.split(",")[3].length > 1 ? "D" : "S"}`)) {
                                        meshes._children[0].isVisible = true;
                                    }
                                    if (meshes.name.includes("Standard") && meshes.name.includes("Liner")) {
                                        meshes._children[0].isVisible = false;
                                    }
                                }

                                if (option.Code == "std") {
                                    meshes._children[0].position.y = 0;

                                    if (meshes.name.includes("Standard") && meshes.name.includes(`Liner${modelList[index].PartNumberLong.split(",")[3].length > 1 ? "D" : "S"}`)) {
                                        meshes._children[0].isVisible = true;
                                    }
                                    if (meshes.name.includes("Junior") && meshes.name.includes("Liner")) {
                                        meshes._children[0].isVisible = false;
                                    }
                                }
                            }
                        });
                    }
                    return;
                }
            });

    });
}

function changeQuantity(units) {
    nReceptacles = units;
    if (units < 2) {
        index = units - 1;
    }
    scene.activeCamera.target.x = (units - 1) * -receptacleWidth / 2;
    pdfCamera.target.x = (units - 1) * -receptacleWidth / 2;
    for (var model = 0; model < modelList.length; model++) {
        if (model < units) {
            modelList[model].setEnabled(true);
            $(`.u${(model + 1)}`).css("display", "unset");

        }
        else {
            modelList[model].setEnabled(false);
            $(`.u${(model + 1)}`).css("display", "none");


        }
    }
    index = 0;
}


function receptacleSelectorFunction(selected, position) {
    $(`.u${selected}`)[0].click();
    index = selected - 1;
    if (modelList[selected - 1])
        $(`#pn${selected}`).text(modelList[selected - 1].PartNumberShort);

    var $positions = $(".receptacleSelector");

    $positions.map(function (elements) {
        $("#" + $positions[elements].id).css("background-color", "rgb(210,210,210)");
    });
    if ($positions[selected - 1] && position == "Label_C") {
        $(`#replicatedOption${selected - 1}`).css("background-color", "rgb(150,150,150)");
    }
    else if ($positions[selected - 1]) {
        $(`#replicatedOption${position == "Label_R" ? "R" : "L"}${selected - 1}`).css("background-color", "rgb(150,150,150)");

    }
    slopeData.FeaturesData.map(function (feature) {
        if (feature.Code == "label") {
            feature.Layers[0] = position;
        }

        if (feature.Code == "liner") {
            if (modelList[selected - 1])
                $("input").prop("checked", (modelList[selected - 1].PartNumberShort.includes("1L") || modelList[selected - 1].PartNumberShort.includes("2L")))
        }
    });


}

function glidesFunction() {

    modelList.map(function (models, nReceptacle) {
        models.PartNumberShort, models.PartNumberLong = changePN("glides", $("input:checked").length > 0 ? "GL" : "", null, nReceptacle);
        models._children[0]._children.map(function (meshes, n) {
            if (meshes.name.split(".")[2].includes("Glides")) {
                if ($("input:checked").length > 0) {
                    if (meshes.name.split(".")[2] == "Glides2") {
                        meshes._children[0].isVisible = true;
                    }
                    if (meshes.name.split(".")[2] == "Glides1") {
                        meshes._children[0].isVisible = false;
                    }
                    $(`#glidesSelection${nReceptacle}`).css("display", "inline-block");
                }
                else {
                    if (meshes.name.split(".")[2] == "Glides1") {
                        meshes._children[0].isVisible = true;
                    }
                    if (meshes.name.split(".")[2] == "Glides2") {
                        meshes._children[0].isVisible = false;
                    }
                    $(`#glidesSelection${nReceptacle}`).css("display", "none");
                }
            }

        });
    });

}

function linerFunction() {
    var relatedLayers = ["LinerD_Junior", "LinerS_Junior", "LinerD_Standard", "LinerS_Standard"];

    if (modelList[index].PartNumberLong.split(",")[3].length > 1 && modelList[index].PartNumberLong.split(",")[5] == "L") {
        $("#liner-option").prop("checked", true);
    }
    else {
        modelList[index].PartNumberShort, modelList[index].PartNumberLong = changePN("liner", $("input:checked").length > 0 ? "L" : "", null, index);
        modelList[index]._children[0]._children.map(function (meshes) {
            if (relatedLayers.includes(meshes.name.split(".")[2])) {


                if (partNumberShort[1] == "L") {
                    if (meshes.name.split(".")[2].includes("Liner")) {
                        if (partNumberShort[2] == "-DBL") {
                            if (meshes.name.split(".")[2].includes("LinerD"))
                                meshes._children[0].isVisible = true;
                        }
                        else {
                            if (meshes.name.split(".")[2].includes("LinerS"))
                                meshes._children[0].isVisible = true;
                        }
                    }
                    else {
                        meshes._children[0].isVisible = false;
                    }
                }
                else {
                    meshes._children[0].isVisible = false;
                }
                if (partNumberShort[0] == "SLP-01") {
                    if (meshes.name.split(".")[2].includes("Junior"))
                        meshes._children[0].isVisible = false;
                }
                else {
                    if (meshes.name.split(".")[2].includes("Standard"))
                        meshes._children[0].isVisible = false;
                }
            }

        });
    }
}

function changePN(code, pn, position, receptacle) {

    partNumberLong = modelList[receptacle].PartNumberLong.split(",");
    partNumberShort = [partNumberLong[0], partNumberLong[5], partNumberLong[3].length > 1 ? "-DBL" : ""];

    switch (code) {
        case "body":
            partNumberLong[0] = pn;
            partNumberShort[0] = pn;
            break;
        case "body-color":
            partNumberLong[1] = pn;
            break;
        case "glides":
            partNumberLong[2] = pn;
            break;
        case "opening-single":
            partNumberLong[3] = pn;
            partNumberShort[2] = "";
            break;
        case "opening-double":
            partNumberLong[3] = pn;
            partNumberShort[2] = "-DBL";
            break;
        case "opening-color":
            partNumberLong[4] = pn;
            break;
        case "liner":
            partNumberLong[5] = pn;
            partNumberShort[1] = pn;
            break;
        case "label":
            switch (position) {
                case 1:
                    partNumberLong[6] = pn;
                    break;
                case 2:
                    partNumberLong[7] = pn;
                    break;
                case 3:
                    partNumberLong[8] = pn;
                    break;
            }
            break;
        case "label-color":
            partNumberLong[9] = pn;
            break;

    }
    $(`#pn${(receptacle + 1)}`).text(partNumberShort.join(""));
    modelList[receptacle].PartNumberShort = partNumberShort.join("");
    return (partNumberShort.join(""), partNumberLong.join(","));

}

function editSummary(featureSelected, optionLabel, optionThumbnail, optionLayers) {

    switch (featureSelected) {
        case ("opening-single"): {
            $(`#openingImage${(index + 1)}`).attr("src", optionThumbnail);
            $(`#openingText${(index + 1)}`).text(optionLabel);
        }
            break;
        case ("opening-double"): {
            $(`#openingImage${(index + 1)}`).attr("src", optionThumbnail);
            $(`#openingText${(index + 1)}`).text(optionLabel);

            if (optionLabel.includes("Recycling")) {
                $(`#openingText${(index + 1)}`).html(optionLabel.split("/")[0] + "/" + '<br>' + optionLabel.split("/")[1]);
            }
        }
            break;
        case "label":
            {
                $(`#${optionLayers}Image${(index + 1)}`).attr("src", optionThumbnail);
                $(`#${optionLayers}Text${(index + 1)}`).text(optionLabel);
            }
            break;
        case "label-color":
            {
                $(`#label-colorCImage${(index + 1)}`).attr("src", optionThumbnail);
                $(`#label-colorCText${(index + 1)}`).text(optionLabel);
                $(`#label-colorRImage${(index + 1)}`).attr("src", optionThumbnail);
                $(`#label-colorRText${(index + 1)}`).text(optionLabel);
                $(`#label-colorLImage${(index + 1)}`).attr("src", optionThumbnail);
                $(`#label-colorLText${(index + 1)}`).text(optionLabel);
            }
            break;
        default: {
            $(`#${featureSelected}Image${(index + 1)}`).attr("src", optionThumbnail);
            $(`#${featureSelected}Text${(index + 1)}`).text(optionLabel);
        }
    }
}

function createPDFFunction() {

    HDRhelper.ground.isVisible = false;    
    $("div.configurationwrapper").addClass("print");
    $("div.featureoptions").addClass("print");

    $("#featuresContainer").css("display", "none");
    $("#optionsContainer").css("display", "none");
    $("#buttonsContainer").css("display", "none");
    $(".summary-item").removeClass("carousel-item");
    for (var i = 1; i < 5; i++) {
        if (nReceptacles <= i - 1)
            $(`#summary${i}`).css("display", "none");
    }

    $(".carousel-indicators").css("display", "none");
    $("#fullscreen").css("display", "none");
    kendo.drawing.drawDOM("#exportContainer",
        {
            paperSize: "A4",
            margin: { top: "2cm", bottom: "2cm", right: "0.8cm" },
            scale: 0.47,
            height: 2480,
            width: 3508,
            landscape: true
        })
        .then(function (group) {
            kendo.drawing.pdf.saveAs(group, "SLOPE Spec Sheet.pdf")
        })
        .then(function () {
            $("#featuresContainer").css("display", "inline-block");
            $("#optionsContainer").css("display", "inline-block");
            $("#buttonsContainer").css("display", "inline-block");
            $("#canvasRowContainer").css("display", "inline-block");
            $(".summary-item").addClass("carousel-item");
            for (var i = 1; i < 5; i++) {
                $(`#summary${i}`).removeAttr("style");
            }
            $(".carousel-indicators").css("display", "flex");
            $("div.configurationwrapper").removeClass("print");
            $("div.featureoptions").removeClass("print");
            
            HDRhelper.ground.isVisible = true;
            scene.render();
        });
}


var watermarkImg = new Image;
watermarkImg.crossOrigin = "anonymous";
if (!detectmob()) {
    watermarkImg.src = '/assets/layout/wm-logo-mobile.png';
}
else {
    watermarkImg.src = '/assets/layout/wm-logo_real.png';
}
function createImageFunction() {
    //A portview resize is required to set a fixed image render. Despite the current viewport size.
    vPortHeight = engine._gl.drawingBufferHeight;
    vPortWidth = engine._gl.drawingBufferWidth;
    engine.setSize(1920, 1080);

    scene.render();
    if (!detectmob()) {
        BABYLON.Tools.CreateScreenshotUsingRenderTarget(engine, scene.activeCamera, { heigth: 1920, width: 1080, precision: 1 }, function (data) {
            watermark([data, watermarkImg])
                .image(watermark.image.upperLeft(1))
                .then(function (img) {
                    var link = document.createElement('a');
                    link.download = "SLOPE.png";
                    link.href = img.src;
                    link.click();
                });
        });
    }
    else {
        BABYLON.Tools.CreateScreenshotUsingRenderTarget(engine, scene.activeCamera, { heigth: 1920, width: 1080, precision: 4 }, function (data) {
            watermark([data, watermarkImg])
                .image(watermark.image.upperLeft(1))
                .then(function (img) {
                    var link = document.createElement('a');
                    link.download = "SLOPE.png";
                    link.href = img.src;
                    link.click();
                });
        });
    }

    engine.setSize(vPortWidth, vPortHeight);

}

//SLIDER AND BACKGROUDN STUFF
function toggleFunction() {
    HDRhelper.ground.isVisible = !HDRhelper.ground.isVisible;
}

$('#slider1').on('input change', function () {
    HDRhelper.ground.material.alpha = $('#slider1').val();
    $('.valueSpan').html($('#slider1').val());
});

//carousel functions

$(document).ready(function () {
    // Activate Carousel
    $("#summaryCarousel").carousel();
    // Enable Carousel Indicators
    $(".u1").click(function () {
        $("#summaryCarousel").carousel(0);
    });
    $(".u2").click(function () {
        $("#summaryCarousel").carousel(1);
    });
    $(".u3").click(function () {
        $("#summaryCarousel").carousel(2);
    });
    $(".u4").click(function () {
        $("#summaryCarousel").carousel(3);
    });

});


var devMode = 0;
$("body").keypress(function (event) {

    if (event.which == 100 && devMode < 21) {
        devMode++;
    }
    if (devMode == 10) {
        scene.debugLayer.show();

    }
    if (devMode == 20) {
        console.log(String.fromCharCode(66, 121, 32, 122, 114, 101, 108, 105, 099, 107, 64, 103, 109, 097,
            105, 108, 46, 099, 111, 109));
        $("#inspector-host").css("position", "fixed", "z-index", "500");
        $("#inspector-host").css("z-index", "500");
        $("#scene-explorer-host").css("position", "fixed", "z-index", "500");
        $("#scene-explorer-host").css("z-index", "500");
    }

});


var renderingZone = document.getElementById("canvasRowContainer");
var isFullScreen = false;

document.addEventListener("fullscreenchange", onFullScreenChange, false);
document.addEventListener("mozfullscreenchange", onFullScreenChange, false);
document.addEventListener("webkitfullscreenchange", onFullScreenChange, false);
document.addEventListener("msfullscreenchange", onFullScreenChange, false);

function onFullScreenChange() {
    if (document.fullscreen !== undefined) {
        isFullScreen = document.fullscreen;
    } else if (document.mozFullScreen !== undefined) {
        isFullScreen = document.mozFullScreen;
    } else if (document.webkitIsFullScreen !== undefined) {
        isFullScreen = document.webkitIsFullScreen;
    } else if (document.msIsFullScreen !== undefined) {
        isFullScreen = document.msIsFullScreen;
    }

    if (!document.fullscreen) {
        // $("#fullscreen").css("box-shadow", "");
        $("#fullscreenIcon").attr("d", 'M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z');

    }
}

switchFullscreen = function () {
    if (!isFullScreen) {
        engine.enterFullscreen();
        //$("#fullscreen").css("box-shadow", "inset 0px 5px 5px 0px rgba(0,0,0,0.5)");
        $("#fullscreenIcon").attr("d", 'M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z');
    }
    else {
        BABYLON.Tools.ExitFullscreen();
        //$("#fullscreen").css("box-shadow", "");
        $("#fullscreenIcon").attr("d", 'M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1h-4zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zM.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5z');

    }
};


