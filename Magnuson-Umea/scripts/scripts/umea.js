
//GET DATA
var InitialData = getUmea;

//Menu building variables
var canvas = document.getElementById('magnusonCanvas');
var container = document.getElementById('magnusonRowContainer');

var isStool = false;
var isArmless = false;
var feature = "";
var option = "";
var collection = "";
var materialSet = "";
var receptacleSelector = 1;
var size = "Single";
var pn = ["1", "0"];
var generator;

////**************************************************************************
//********************* BABYLON ENGINE INITIALIZATION *****************
////**************************************************************************

var engine = new BABYLON.Engine(canvas, true, { premultipliedAlpha: false, preserveDrawingBuffer: true, stencil: true });
var scene = new BABYLON.Scene(engine);
var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 0, new BABYLON.Vector3(0, 0, 0), scene);
camera.setTarget(BABYLON.Vector3.Zero());
var pdfCamera;
var baseUrl;
var asyncMesh;
var currentMesh;
var HDRhelper;
scene.clearColor = new BABYLON.Color3(1, 1, 1); //Background color


//Prototypes
BABYLON.ArcRotateCamera.prototype.spinTo = function (whichprop, targetval, speed) {
    var ease = new BABYLON.CubicEase();
    ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
    BABYLON.Animation.CreateAndStartAnimation('at4', this, whichprop, speed, 120, this[whichprop], targetval, 0, ease);
}

String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}


//Scene creation
var createScene = function () {


    // Model loader
    BABYLON.GLTFFileLoader.IncrementalLoading = true;
    baseUrl = "assets/models/";
    lowFile = "umea.glb";
    BABYLON.SceneLoader.ImportMesh("", baseUrl, lowFile, scene, function (syncMesh) {

        // Camera 
        scene.createDefaultCameraOrLight(true, true, true);
        scene.activeCamera.lowerRadiusLimit = 1600;
        scene.activeCamera.upperRadiusLimit = 5000;
        scene.activeCamera.panningSensibility = 20;
        scene.activeCamera.wheelPrecision = 0.1;
        scene.activeCamera.pinchDeltaPercentage = 0.008;
        scene.activeCamera.multiTouchPanning = true;
        scene.activeCamera.multiTouchPanAndZoom = true;
        //scene.activeCamera.pinchToPanMaxDistance = 70;
        scene.activeCamera.alpha = (0.4 * Math.PI);
        scene.activeCamera.beta = (6 * Math.PI / 16);
        //scene.activeCamera.beta = 7 * Math.PI / 16;
        scene.activeCamera.radius = 4500;
        pdfCamera = scene.activeCamera.clone();
        pdfCamera.alpha = 2.1183147127655677;
        pdfCamera.beta = 1.2234432855765227;

        //Lighting
        scene.lights[0].dispose();
        var lightH = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 1, 0.2), scene);
        lightH.intensity = 1;
        //lightH.diffuse = BABYLON.Color3.FromHexString("#C9C9C9");
        //lightH.groundColor = BABYLON.Color3.FromHexString("#4A4A4A");
        spotLight = new BABYLON.DirectionalLight("light1", new BABYLON.Vector3(-0.25, -0.95, -0.2), scene);
        spotLight.intensity = 2;
        spotLight.position.y = 3000;
        spotLight.position.x = 600;

        spotLight2 = new BABYLON.DirectionalLight("light2", new BABYLON.Vector3(-0.25, -0.95, -0.2), scene);
        spotLight2.intensity = 0;
        spotLight2.position.y = 3000;
        spotLight2.position.x = 600;


        //Shadow casting for desktop version only
        if (detectmob()) {
            var shadowGenerator = new BABYLON.ShadowGenerator(512, spotLight);
            shadowGenerator.usePoissonSampling = true;
            shadowGenerator.bias = 0.0002;

            var groundShadowGenerator = new BABYLON.ShadowGenerator(512, spotLight2);
            groundShadowGenerator.useBlurExponentialShadowMap = true;
            groundShadowGenerator.bias = 0.0002;
            groundShadowGenerator.blurBoxOffset = 8;
            groundShadowGenerator.depthScale = 8;
            groundShadowGenerator.blurScale = 2;
        }

        for (var i = 1; i < syncMesh.length; i++) {
            syncMesh[i].actionManager = new BABYLON.ActionManager(scene); // Pointer behavior on model hover                       
            syncMesh[i].actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function (ev) {
            }, false));
            if (detectmob()) {
                shadowGenerator.addShadowCaster(syncMesh[i]);
                groundShadowGenerator.addShadowCaster(syncMesh[i]);
                syncMesh[i].receiveShadows = true;
            }
            syncMesh[i].position.y = 0.2;
            //Material adjustment
            syncMesh[i].material.useRadianceOcclusion = false;
            syncMesh[i].material.metallic = 0.6;
            syncMesh[i].material.roughness = 1;
            syncMesh[i].material.metallicF0Factor = 0;
            syncMesh[i].material.directIntensity = 1
            //Show me the default
            syncMesh[i].isVisible = InitialData.DefaultLayers.includes(syncMesh[i].name);

        }

        //Env texture
        /*var hdrTexture = new BABYLON.CubeTexture.CreateFromPrefilteredData("assets/environment/default.dds", scene);

        hdrTexture.gammaSpace = true;
        scene.environmentTexture = hdrTexture;*/
        HDRhelper = scene.createDefaultEnvironment({
            cameraExposure: 1.2,
            cameraContrast: 1.2,
            createSkybox: false,
            //skyboxTexture: "assets/environment/studio" + "EnvHDR.dds",
            skyboxSize: 300,
            groundSize: 700,
            groundColor: new BABYLON.Color3(190/255, 190/255, 190/255),
            groundOpacity: 0.25,
            //environmentTexture: "assets/environment/studio" + "EnvHDR.dds"
        });
        spotLight.excludedMeshes.push(HDRhelper.ground);
        HDRhelper.ground.receiveShadows = true;
        scene.environmentIntensity = 0.7;

        //engine.hideLoadingUI();
        currentMesh = syncMesh;
        materialChange("6,Waste");
    }, function (evt) {
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

    window.addEventListener("resize", function () { engine.resize(); });
    return scene;
}


// call the createScene function
var scene = createScene();


// run the render loop
engine.runRenderLoop(function () {
    //window.addEventListener("resize", function () { engine.resize(); });
    scene.render();
});


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

var featuresData = getUmeaFeatures.FeaturesData;

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
var previousFeatureCode = "";
var buildIt = true;

for (nFeatures = 0; nFeatures < featuresData.length; nFeatures++) {
    if (nFeatures > 0) {
        if (previousFeatureCode == featuresData[nFeatures].Code)
            buildIt = false;
    }
    if (buildIt) {

        var $feature = $("<div>", {
            "class": "option",
            "id": "feature-" + featuresData[nFeatures].Code,
            "onClick": "optionsCreation(\"" + nFeatures + "," + featuresData[nFeatures].Code + "\")"
        });
        $optionsClass.append($feature);
        var $featureImageClass = $("<div>", {
            "class": "image"
        });
        $feature.append($featureImageClass);
        var $featureImage = $("<img>", {
            "src": featuresData[nFeatures].Thumbnail,
            "border": "0", "alt": "Umea", "class": "fade-img", "style": "",
        });
        $featureImageClass.append($featureImage);
        var $featureText = $("<div>", {
            "text": featuresData[nFeatures].Label,
            "class": "text"
        });
        $feature.append($featureText);

    }
    previousFeatureCode = featuresData[nFeatures].Code;
    buildIt = true;
}


function optionsCreation(args) {
    var res = args.split(",");
    var nFeatures = res[0];
    var selectedCode = res[1];
    var isReplicate = true;
    var sizeEnum = 0;
    switch (size) {
        case "Single": sizeEnum = 1; break;
        case "Double": sizeEnum = 2; break;
        case "Triple": sizeEnum = 3; break;
    }

    //camera animation
    switch (selectedCode) {
        case "Body":
            scene.activeCamera.spinTo("beta", (6 * Math.PI / 16), 50);
            scene.activeCamera.spinTo("alpha", (0.4 * Math.PI), 50);
            scene.activeCamera.spinTo("radius", 4500, 50);
            break;
        case "Top":
            scene.activeCamera.spinTo("beta", 0.777399579032958, 80);
            scene.activeCamera.spinTo("alpha", 1.5683436741847987, 80);
            scene.activeCamera.spinTo("radius", 4500, 50);
            break;
        case "Hood":
            scene.activeCamera.spinTo("beta", 0.941071256142524, 80);
            scene.activeCamera.spinTo("alpha", 1.096076517046126, 80);
            scene.activeCamera.spinTo("radius", 4500, 50);
            break;
        case "Label":
            scene.activeCamera.spinTo("beta", 1.2237130900548276, 80);
            scene.activeCamera.spinTo("alpha", 1.5771634663162961, 80);
            scene.activeCamera.spinTo("radius", 3000, 50);
            break;
        case "SidePanel":
            scene.activeCamera.spinTo("beta", 1.3242257812809324, 80);
            scene.activeCamera.spinTo("alpha", 0.6265464971290147, 80);
            scene.activeCamera.spinTo("radius", 4500, 50);
            break;
    }

    //Options building
    $("#geometryList").empty();
    $("#colorList").empty();
    $("#materialList").empty();
    for (nFeatures = 0; nFeatures < featuresData.length; nFeatures++) {

        if (featuresData[nFeatures].Code == selectedCode) {

            for (var nOptions = 0; nOptions < featuresData[nFeatures].Options.length; nOptions++) {
                //Append button when needed 
                if (featuresData[nFeatures].Options[nOptions].Replicate == true && isReplicate) {
                    receptacleSelector = 1;
                    $("#receptacleChoice").empty();
                    for (var nReps = 0; nReps < sizeEnum; nReps++) {
                        var $replicateCol = $("<div>", { "class": "col", "id": "replicateColDivider" });
                        $("#receptacleChoice").append($replicateCol);

                        var $replicateElement = $("<div>", {
                            "class": "receptacleSelector",
                            "id": "replicatedOption" + nReps,
                            "text": featuresData[0].Options[sizeEnum - 1].ReplicateSize[nReps],
                            "onClick": "receptacleSelectorFunction(\"" + (nReps + 1) + "\")"
                        });
                        $replicateCol.append($replicateElement);
                    }
                    if (sizeEnum == 1) {
                        $("#receptacleChoice").empty();
                    }
                    isReplicate = false;
                    $("#replicatedOption0").css("background-color", "rgb(150,150,150)");
                }
                //Append to the geometry list
                if (featuresData[nFeatures].GeometryChange == true) {
                    if (!featuresData[nFeatures].Options[nOptions].Replicate) { $("#receptacleChoice").empty(); }
                    var $optionClass = $("<div class=\"option\">");
                    $("#geometryList").append($optionClass);
                    var $imageClass = $("<div class=\"image\">");
                    $optionClass.append($imageClass);
                    var $featureOptions = $("<a>", {
                        "class": "list-group-list list-group-item-action",
                        "id": "featureOption-" + featuresData[nFeatures].Options[nOptions].Code,
                        "onClick": "geometryChange(\"" + featuresData[nFeatures].Options[nOptions].Label + "\")"
                    });
                    $imageClass.append($featureOptions);


                    var $featureImage = $("<img>", {
                        "src": featuresData[nFeatures].Options[nOptions].Thumbnail,
                        "border": "0", "alt": "Umea", "class": "fade-img", "style": "",
                    });
                    $featureOptions.append($featureImage);
                    var $textClass = $("<div>", {
                        "class": "text", "text": featuresData[nFeatures].Options[nOptions].Label
                    });
                    $optionClass.append($textClass);
                }

                //Append to the color list
                if (featuresData[nFeatures].ColorChange == true) {
                    var $optionClass = $("<div class=\"option\">");
                    $("#colorList").append($optionClass);
                    var $imageClass = $("<div class=\"image\">", {
                        "onClick": "colorChange(\"" + nFeatures + "," + featuresData[nFeatures].Options[nOptions].Label + "\")"
                    });
                    $optionClass.append($imageClass);
                    var $featureOptions = $("<div>", {
                        "class": "color-item",
                        "id": "featureOption-" + featuresData[nFeatures].Options[nOptions].Code,
                        "onClick": "colorChange(\"" + nFeatures + "," + featuresData[nFeatures].Options[nOptions].Label + "\")"
                    });
                    $imageClass.append($featureOptions);

                    var $featureImage = $("<img>", {
                        "src": featuresData[nFeatures].Options[nOptions].Thumbnail,
                        "border": "0", "alt": "Umea", "class": "fade-img", "style": "",
                    });
                    $featureOptions.append($featureImage);
                    var $textClass = $("<div>", {
                        "class": "text", "text": featuresData[nFeatures].Options[nOptions].Label
                    });
                    $optionClass.append($textClass);
                }

                //Append to material list
                if (featuresData[nFeatures].MaterialChange == true) {

                    if (!featuresData[nFeatures].Options[nOptions].Replicate) { $("#receptacleChoice").empty(); }
                    var $optionClass = $("<div class=\"option\">");
                    $("#materialList").append($optionClass);
                    var $imageClass = $("<div class=\"image\">", {
                        "onClick": "colorChange(\"" + nFeatures + "," + featuresData[nFeatures].Options[nOptions].Label + "\")"
                    });
                    $optionClass.append($imageClass);
                    var $featureOptions = $("<a>", {
                        "class": "material-item",
                        "id": "featureOption-" + featuresData[nFeatures].Options[nOptions].Code,
                        "onClick": "materialChange(\"" + nFeatures + "," + featuresData[nFeatures].Options[nOptions].Label + "\")"
                    });
                    $imageClass.append($featureOptions);
                    var $featureImage = $("<img>", {
                        "src": featuresData[nFeatures].Options[nOptions].Thumbnail,
                        "border": "0", "alt": "Umea", "class": "fade-img", "style": "",
                    });
                    $featureOptions.append($featureImage);
                    var $textClass = $("<div>", {
                        "class": "text", "text": featuresData[nFeatures].Options[nOptions].Label
                    });
                    $optionClass.append($textClass);

                }
            }
        }
    }


}

function geometryChange(selectedOption) {
    var nFeature = -1;
    var nOptions = -1;

    for (var i = 0; i < featuresData.length; i++)
        for (var j = 0; j < featuresData[i].Options.length; j++) {
            if (featuresData[i].Options[j].Label == selectedOption) {
                nFeature = i;
                nOptions = j;
                break;
            }
        }

    for (var j = 0; j < featuresData[nFeature].Options.length; j++) {
        featuresData[nFeature].Options[j].Selected = false;
    }
    featuresData[nFeature].Options[nOptions].Selected = true;

    if (featuresData[nFeature].Label == "Opening") {
        for (var i = 0; i < featuresData[nFeature].MultipleSelection.length; i++) {
            if (featuresData[nFeature].MultipleSelection[i].Id == receptacleSelector) {
                featuresData[nFeature].MultipleSelection[i].Label = selectedOption;
                featuresData[nFeature].MultipleSelection[i].Thumbnail = featuresData[nFeature].Options[nOptions].Thumbnail;
            }
        }
    }

    if (featuresData[nFeature].Code == "Body") {

        for (var i = 1; i < currentMesh.length; i++) {
            //Show me the default
            currentMesh[i].isVisible = featuresData[nFeature].Options[nOptions].DisplayedLayers.includes(currentMesh[i].name);
        }
        size = featuresData[nFeature].Options[nOptions].Code;
        var currentSelector = receptacleSelector;
        receptacleSelector = 1;
        for (var i = 2; i < featuresData.length; i++) {
            if (featuresData[i].Label == "Opening") {
                for (var j = 0; j < featuresData[i].MultipleSelection.length; j++) {
                    geometryChange(featuresData[i].MultipleSelection[j].Label);
                    receptacleSelector++;
                }
                receptacleSelector = 1;
            }
            if (featuresData[i].Label == "Label") {
                for (var j = 0; j < featuresData[i].MultipleSelection.length; j++) {

                    materialChange("6," + featuresData[i].MultipleSelection[j].Label);
                    receptacleSelector++;
                }
                receptacleSelector = 1;
            }
            if (featuresData[i].Label == "Top Color" || featuresData[i].Label == "Label Color") {
                for (var j = 0; j < featuresData[i].MultipleSelection.length; j++) {
                    colorChange(i + "," + featuresData[i].MultipleSelection[j].Label);
                    receptacleSelector++;
                }
                receptacleSelector = 1;
            }
        }
        receptacleSelector = currentSelector;

    }

    if (featuresData[nFeature].Code == "Top" || featuresData[nFeature].Code == "Label") {
        function selectionAdder(sizeString) {
            if (featuresData[0].Options[i].Code == sizeString)
                for (var nLayers = 0; nLayers < featuresData[0].Options[i].DisplayedLayers.length; nLayers++) {

                    if (featuresData[0].Options[i].DisplayedLayers[nLayers].includes(featuresData[nFeature].Code + receptacleSelector)) {

                        featuresData[0].Options[i].DisplayedLayers[nLayers] = featuresData[0].Options[i].DisplayedLayers[nLayers].substring(0, featuresData[0].Options[i].DisplayedLayers[nLayers].length - 3);
                        featuresData[0].Options[i].DisplayedLayers[nLayers] += receptacleSelector + "_" + featuresData[nFeature].Options[nOptions].Id;
                    }
                }

        }
        for (var i = 0; i < featuresData[0].Options.length; i++) {
            selectionAdder("Single");
            selectionAdder("Double");
            selectionAdder("Triple");
        }

        for (var nMeshes = 1; nMeshes < currentMesh.length; nMeshes++) {
            var wildcard = currentMesh[nMeshes].name.substring(0, currentMesh[nMeshes].name.length - 1);
            if (wildcard == size + "_" + featuresData[nFeature].Code + receptacleSelector + "_")
                currentMesh[nMeshes].isVisible = false;

            if ((currentMesh[nMeshes].name) == size + "_" + featuresData[nFeature].Code + receptacleSelector + featuresData[nFeature].Options[nOptions].Code)
                currentMesh[nMeshes].isVisible = true;
        }



    }

    else {


        //Add selection to the default layers
        function selectionAdder(sizeString) {
            if (featuresData[0].Options[i].Code == sizeString)
                for (var nLayers = 0; nLayers < featuresData[0].Options[i].DisplayedLayers.length; nLayers++) {

                    if (featuresData[0].Options[i].DisplayedLayers[nLayers].includes(featuresData[nFeature].Code)) {
                        if (featuresData[0].Options[i].DisplayedLayers[nLayers].indexOf("Back") >= 0) {

                            featuresData[0].Options[i].DisplayedLayers[nLayers] = sizeString + "_" + featuresData[nFeature].Code + featuresData[nFeature].Options[nOptions].Id + "Back";

                        }
                        else {
                            featuresData[0].Options[i].DisplayedLayers[nLayers] = featuresData[0].Options[i].DisplayedLayers[nLayers].substring(0, featuresData[0].Options[i].DisplayedLayers[nLayers].length - 1);
                            featuresData[0].Options[i].DisplayedLayers[nLayers] += featuresData[nFeature].Options[nOptions].Id;
                        }
                    }
                }

        }

        for (var i = 0; i < featuresData[0].Options.length; i++) {
            selectionAdder("Single");
            selectionAdder("Double");
            selectionAdder("Triple");
        }
        for (var nMeshes = 1; nMeshes < currentMesh.length; nMeshes++) {
            if (featuresData[nFeature].AllRelatedLayers.includes(currentMesh[nMeshes].name))
                currentMesh[nMeshes].isVisible = false;

            if ((currentMesh[nMeshes].name) == size + "_" + featuresData[nFeature].Options[nOptions].Code) {
                currentMesh[nMeshes].isVisible = true;
            }
        }



    }

    //Summary edition

    if (featuresData[nFeature].Label == "Body") {
        $("#bodyText").text(featuresData[nFeature].Options[nOptions].Label);
        $("#bodyImage").attr("src", featuresData[nFeature].Options[nOptions].Thumbnail);
        //Change Part Number to Umea - _#
        pn[0] = featuresData[nFeature].Options[nOptions].PartNumber;
        $("#modelText").text("UMEA-" + pn[0] + pn[1]);
        switch (featuresData[nFeature].Options[nOptions].Label) {
            case "Single":
                $("#leftTopFeatureText").text("Opening");
                $("#leftLabelFeatureText").text("Label");
                $(".center").css("display", "none");
                $(".right").css("display", "none");
                break;
            case "Double":
                $("#leftTopFeatureText").text("Opening (Left)");
                $("#centerTopFeatureText").text("Opening (Right)");
                $("#leftLabelFeatureText").text("Label (Left)");
                $("#centerLabelFeatureText").text("Label (Right)");
                $(".center").css("display", "inline-block");
                $(".right").css("display", "none");
                break;
            case "Triple":
                $("#leftTopFeatureText").text("Opening (Left)");
                $("#centerTopFeatureText").text("Opening (Center)");
                $("#leftLabelFeatureText").text("Label (Left)");
                $("#centerLabelFeatureText").text("Label (Center)");
                $(".center").css("display", "inline-block");
                $(".right").css("display", "inline-block");
                break;

        }
    }
    if (featuresData[nFeature].Label == "Opening") {

        $("#topLeftText").text(featuresData[nFeature].MultipleSelection[0].Label);
        $("#topLeftImage").attr("src", featuresData[nFeature].MultipleSelection[0].Thumbnail);

        $("#topCenterText").text(featuresData[nFeature].MultipleSelection[1].Label);
        $("#topCenterImage").attr("src", featuresData[nFeature].MultipleSelection[1].Thumbnail);

        $("#topRightText").text(featuresData[nFeature].MultipleSelection[2].Label);
        $("#topRightImage").attr("src", featuresData[nFeature].MultipleSelection[2].Thumbnail);
    }
    if (featuresData[nFeature].Label == "Hood") {
        $("#hoodText").text(featuresData[nFeature].Options[nOptions].Label);
        $("#hoodImage").attr("src", featuresData[nFeature].Options[nOptions].Thumbnail);
        //Change Part Number to Umea - _#
        pn[1] = featuresData[nFeature].Options[nOptions].PartNumber;
        $("#modelText").text("UMEA-" + pn[0] + pn[1]);

        if (featuresData[nFeature].Options[nOptions].Label == "None") {
            $("#hoodColorImage").css("display", "none");
            $("#hoodColorText").css("display", "none");
        }
        else {
            $("#hoodColorImage").css("display", "inline-block");
            $("#hoodColorText").css("display", "inline-block");
        }
    }
    if (featuresData[nFeature].Label == "Side Panels") {
        $("#sidepanelText").text(featuresData[nFeature].Options[nOptions].Label);
        $("#sidepanelImage").attr("src", featuresData[nFeature].Options[nOptions].Thumbnail);
    }

}



function colorChange(args) {
    var res = args.split(",");
    var nFeature = res[0];
    var selectedOption = res[1];
    var nOptions = 0;


    for (var j = 0; j < featuresData[nFeature].Options.length; j++) {
        if (featuresData[nFeature].Options[j].Label == selectedOption) {
            featuresData[nFeature].Options[j].Selected = true;
            nOptions = j;
        }
        else {
            featuresData[nFeature].Options[j].Selected = false;
        }
    }
    if (featuresData[nFeature].Label == "Top Color" || featuresData[nFeature].Label == "Label Color") {
        for (var i = 0; i < featuresData[nFeature].MultipleSelection.length; i++) {
            if (featuresData[nFeature].MultipleSelection[i].Id == receptacleSelector) {
                featuresData[nFeature].MultipleSelection[i].Label = selectedOption;
                featuresData[nFeature].MultipleSelection[i].Thumbnail = featuresData[nFeature].Options[nOptions].Thumbnail;
            }
        }
    }
    var colorCode = featuresData[nFeature].Options[nOptions].ColorCode;
    for (var i = 1; i < currentMesh.length; i++) {
        if (featuresData[nFeature].AllRelatedLayers.includes(currentMesh[i]._material.name) && featuresData[nFeature].Code != "Top" && featuresData[nFeature].Code != "Label")
            currentMesh[i]._material._albedoColor = new BABYLON.Color3.FromHexString(colorCode);

        if (featuresData[nFeature].Code == "Top" || featuresData[nFeature].Code == "Label") {
            var wildcard = size + "_" + featuresData[nFeature].Code + receptacleSelector;
            if (currentMesh[i]._material.name.substring(0, currentMesh[i]._material.name.length - 2) == (wildcard)) {
                currentMesh[i]._material._albedoColor = new BABYLON.Color3.FromHexString(colorCode);


            }
        }

        if (featuresData[nFeature].Code == "Label") {
            var wildcard = size + "_" + featuresData[nFeature].Code + receptacleSelector;
            if (currentMesh[i]._material.name == (wildcard)) {
                currentMesh[i]._material._albedoColor = new BABYLON.Color3.FromHexString(colorCode);


            }
        }
    }

    //Summary edition

    if (featuresData[nFeature].Label == "Body Color") {
        $("#bodyColorText").text(featuresData[nFeature].Options[nOptions].Label);
        $("#bodyColorImage").attr("src", featuresData[nFeature].Options[nOptions].Thumbnail);
    }
    if (featuresData[nFeature].Label == "Top Color") {

        $("#topLeftColorText").text(featuresData[nFeature].MultipleSelection[0].Label);
        $("#topLeftColorImage").attr("src", featuresData[nFeature].MultipleSelection[0].Thumbnail);

        $("#topCenterColorText").text(featuresData[nFeature].MultipleSelection[1].Label);
        $("#topCenterColorImage").attr("src", featuresData[nFeature].MultipleSelection[1].Thumbnail);

        $("#topRightColorText").text(featuresData[nFeature].MultipleSelection[2].Label);
        $("#topRightColorImage").attr("src", featuresData[nFeature].MultipleSelection[2].Thumbnail);
    }
    if (featuresData[nFeature].Label == "Hood Color") {
        $("#hoodColorText").text(featuresData[nFeature].Options[nOptions].Label);
        $("#hoodColorImage").attr("src", featuresData[nFeature].Options[nOptions].Thumbnail);
    }
    if (featuresData[nFeature].Label == "Label Color") {
        $("#labelLeftColorText").text(featuresData[nFeature].MultipleSelection[0].Label);
        $("#labelLeftColorImage").attr("src", featuresData[nFeature].MultipleSelection[0].Thumbnail);

        $("#labelCenterColorText").text(featuresData[nFeature].MultipleSelection[1].Label);
        $("#labelCenterColorImage").attr("src", featuresData[nFeature].MultipleSelection[1].Thumbnail);

        $("#labelRightColorText").text(featuresData[nFeature].MultipleSelection[2].Label);
        $("#labelRightColorImage").attr("src", featuresData[nFeature].MultipleSelection[2].Thumbnail);
    }
    if (featuresData[nFeature].Label == "Side Panels Color") {
        $("#sidepanelColorText").text(featuresData[nFeature].Options[nOptions].Label);
        $("#sidepanelColorImage").attr("src", featuresData[nFeature].Options[nOptions].Thumbnail);
    }

}

function materialChange(args) {
    var args = args.split(",");
    var nFeature = args[0];
    var selectedOption = args[1];
    var nOptions = 0;
    
    for (var j = 0; j < featuresData[nFeature].Options.length; j++) {
        if (featuresData[nFeature].Options[j].Label == selectedOption) {
            featuresData[nFeature].Options[j].Selected = true;
            nOptions = j;
        }
        else {
            featuresData[nFeature].Options[j].Selected = false;
        }
    }

    if (featuresData[nFeature].Label == "Label") {
        for (var i = 0; i < featuresData[nFeature].MultipleSelection.length; i++) {
            if (featuresData[nFeature].MultipleSelection[i].Id == receptacleSelector) {
                featuresData[nFeature].MultipleSelection[i].Label = selectedOption;
                featuresData[nFeature].MultipleSelection[i].Thumbnail = featuresData[nFeature].Options[nOptions].Thumbnail;
            }

        }
    }
    var path = "assets/materials/labels/";
    for (var i = 1; i < currentMesh.length; i++) {
        if (featuresData[nFeature].Code == "Label") {
            var wildcard = size + "_" + featuresData[nFeature].Code + receptacleSelector;
            if (currentMesh[i].name == wildcard) {
                currentMesh[i]._material._albedoTexture = new BABYLON.Texture(path + featuresData[nFeature].Options[nOptions].Code + ".png", scene);
                currentMesh[i]._material._opacityTexture = new BABYLON.Texture(path + featuresData[nFeature].Options[nOptions].Code + ".png", scene);
                currentMesh[i]._material._albedoTexture.vAng = -Math.PI;
                currentMesh[i]._material._albedoTexture.wAng = -Math.PI;
                currentMesh[i]._material._opacityTexture.vAng = -Math.PI;
                currentMesh[i]._material._opacityTexture.wAng = -Math.PI;
                currentMesh[i]._material.alpha = 1;
                if (selectedOption == "No Label") {
                    currentMesh[i]._material._albedoTexture = null;
                    currentMesh[i]._material._opacityTexture = null;
                    currentMesh[i]._material.alpha = 0;
                }
            }
        }
        
    }


    //Summary edition
    if (featuresData[nFeature].Label == "Label") {
        $("#labelLeftText").text(featuresData[nFeature].MultipleSelection[0].Label);
        $("#labelLeftImage").attr("src", featuresData[nFeature].MultipleSelection[0].Thumbnail);
        $("#labelLeftColorImage").css("display", "inline-block");
        $("#labelLeftColorText").css("display", "inline-block");
        if (featuresData[nFeature].MultipleSelection[0].Label == "No Label") {
            $("#labelLeftColorImage").css("display", "none");
            $("#labelLeftColorText").css("display", "none");
        }

        $("#labelCenterText").text(featuresData[nFeature].MultipleSelection[1].Label);
        $("#labelCenterImage").attr("src", featuresData[nFeature].MultipleSelection[1].Thumbnail);
        $("#labelCenterColorImage").css("display", "inline-block");
        $("#labelCenterColorText").css("display", "inline-block");
        if (featuresData[nFeature].MultipleSelection[1].Label == "No Label") {
            $("#labelCenterColorImage").css("display", "none");
            $("#labelCenterColorText").css("display", "none");
        }

        $("#labelRightText").text(featuresData[nFeature].MultipleSelection[2].Label);
        $("#labelRightImage").attr("src", featuresData[nFeature].MultipleSelection[2].Thumbnail);
        $("#labelRightColorImage").css("display", "inline-block");
        $("#labelRightColorText").css("display", "inline-block");
        if (featuresData[nFeature].MultipleSelection[2].Label == "No Label") {
            $("#labelRightColorImage").css("display", "none");
            $("#labelRightColorText").css("display", "none");
        }
    }

}



function receptacleSelectorFunction(selection) {
    receptacleSelector = parseInt(selection);
    var $positions = $(".receptacleSelector");
    $positions.map(function (elements) {
        $("#" + $positions[elements].id).css("background-color", "rgb(210,210,210)");
    });
    $("#" + $positions[receptacleSelector - 1].id).css("background-color", "rgb(150,150,150)");

}

function createPDFFunction() {
    HDRhelper.ground.isVisible = false;    
    $("div.configurationwrapper").addClass("print");
    $("div.featureoptions").addClass("print");

    $("#featuresContainer").css("display", "none");
    $("#optionsContainer").css("display", "none");
    $("#buttonsContainer").css("display", "none");


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
            kendo.drawing.pdf.saveAs(group, "UMEA-" + pn[0] + pn[1] + " Spec Sheet.pdf")
        })
        .then(function () {
            $("#featuresContainer").css("display", "inline-block");
            $("#optionsContainer").css("display", "inline-block");
            $("#buttonsContainer").css("display", "inline-block");
            $("#canvasRowContainer").css("display", "inline-block");
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
                    link.download = "UMEA-" + pn[0] + pn[1] + ".png";
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
                    link.download = "UMEA-" + pn[0] + pn[1] + ".png";
                    link.href = img.src;
                    link.click();
                });
        });
    }
    engine.setSize(vPortWidth, vPortHeight);

    for (var i = 0; i < featuresData.length; i++)
        for (var j = 0; j < featuresData[i].Options.length; j++) {
            if (featuresData[i].Options[j].Selected) {
            }
        }


}

optionsCreation("0,Body");



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

//SLIDER AND BACKGROUDN STUFF
function toggleFunction() {
    HDRhelper.ground.isVisible = !HDRhelper.ground.isVisible;
}

$('#slider1').on('input change', function () {
    HDRhelper.ground.material.alpha = $('#slider1').val();
    $('.valueSpan').html($('#slider1').val());
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
