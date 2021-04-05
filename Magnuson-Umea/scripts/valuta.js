
//GET DATA
var InitialData = valutaJSON;

//Menu building variables
var canvas = document.getElementById('magnusonCanvas');
var container = document.getElementById('magnusonRowContainer');

////**************************************************************************
//********************* BABYLON ENGINE INITIALIZATION *****************
////**************************************************************************

var engine = new BABYLON.Engine(canvas, true, { premultipliedAlpha: false, preserveDrawingBuffer: true, stencil: true });
var pdfCamera;
var HDRhelper;
var GLTFExportOptions;
var spotLight;
var spotLight2;
var nFeature = 0;
var shadowGenerator;
var groundShadowGenerator;
var nReceptacles;
var selector = 0;

var valuta = [];
 
var sModel = function (code, model3D, width, isVisible = false) {
    this.code = code;
    this.model3D = model3D;
    this.width = width;    
    this.model3D.setEnabled(isVisible);
}

sModel.prototype.visibility = function (visibility) {
    this.model3D.setEnabled(visibility);
}

sModel.prototype.changeColor = function (selectedLayers, colorCode) {
    
    this.model3D._children.map(function (layer) {
        selectedLayers.map(function (selectedLayer) {
            if (layer.id.includes(selectedLayer)) {
                layer._children[0]._material._albedoColor = new BABYLON.Color3.FromHexString(colorCode);
            }
        });
        
    });
}

sModel.prototype.changeMaterial = function (materialChannel, selectedLayers, Url) {

    this.model3D._children.map(function (layer) {
        selectedLayers.map(function (selectedLayer) {
            if (layer.id.includes(selectedLayer)) {
                if (layer._children[0]._material[materialChannel]) {
                    layer._children[0]._material[materialChannel].updateURL(Url);
                    layer._children[0]._material[materialChannel].uScale = -1;                    
                }
                else {
                    layer._children[0]._material[materialChannel] = new BABYLON.Texture(Url, scene);
                    layer._children[0]._material[materialChannel].uScale = -1;
                    layer._children[0]._material[materialChannel].vScale = -1;
                }
            }
        });

    });
}
    

//Prototypes
BABYLON.ArcRotateCamera.prototype.spinTo = function (whichprop, targetval, speed) {
    var ease = new BABYLON.CubicEase();
    ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
    BABYLON.Animation.CreateAndStartAnimation('at4', this, whichprop, speed, 120, this[whichprop], targetval, 0, ease);
}

//Scene creation
var createScene = function () {
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.ArcRotateCamera("Camera", (0.4 * Math.PI), (6 * Math.PI / 16), 60, new BABYLON.Vector3(0, 20, 0), scene);
    var lightH = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 1, 0.2), scene);
    lightH.intensity = 1;
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
        shadowGenerator = new BABYLON.ShadowGenerator(512, spotLight);
        shadowGenerator.usePoissonSampling = true;
        shadowGenerator.bias = 0.0002;

        groundShadowGenerator = new BABYLON.ShadowGenerator(512, spotLight2);
        groundShadowGenerator.useBlurExponentialShadowMap = true;
        groundShadowGenerator.blurBoxOffset = 19;
        groundShadowGenerator.depthScale = 3;
        groundShadowGenerator.blurScale = 2;
    }
    camera.wheelDeltaPercentage = 0.007;
    camera.attachControl(canvas, false);
    camera.lowerRadiusLimit = 10;
    camera.upperRadiusLimit = 90;
    camera.panningSensibility = 200;

    pdfCamera = camera.clone();
    pdfCamera.alpha = Math.PI / 2;
    pdfCamera.radius = 180;
    pdfCamera.beta = (7 * Math.PI / 16);

    scene.clearColor = new BABYLON.Color3(1, 1, 1); //Background color

    /*************
    **  Models
    **************/
    BABYLON.SceneLoader.Append(valutaModels.Path, "1.glb", scene, function (valuta3D) {

        //Offset
        valuta3D.rootNodes[6]._children[0]._children[4].position.x = 0;
        valuta3D.rootNodes[6]._children[0]._children[4].position.y = 19;

        valuta3D.rootNodes[6]._children[0]._children.map(function (receptacles, nReceptacles) {
            receptacles._children.map(function (mesh, nMesh) {
                if (nMesh > 0) {
                    mesh._children[0].actionManager = new BABYLON.ActionManager(scene); // Pointer behavior on model hover     
                    mesh._children[0].actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function (env) {
                    }, false));
                    //Show me the default
                    mesh._children[0].isVisible = valutaModels.DefaultLayers.includes(mesh.id);
                }
            });            
        });

        for (var i = 0; i < 4; i++) {
            valuta[i] = new Array();

            valuta[i][0] = new sModel("VA1809L-JR", valuta3D.rootNodes[6]._children[0]._children[4].clone("va1809ljr" + i), 9);
            valuta[i][1] = new sModel("VA1809L", valuta3D.rootNodes[6]._children[0]._children[2].clone("va1809l" + i), 9);
            valuta[i][2] = new sModel("VA1814L", valuta3D.rootNodes[6]._children[0]._children[3].clone("va1814l" + i), 14);
            valuta[i][3] = new sModel("VA18SCL", valuta3D.rootNodes[6]._children[0]._children[1].clone("va18scl" + i), 18);
            valuta[i][4] = new sModel("VA1818L", valuta3D.rootNodes[6]._children[0]._children[0].clone("va1818l" + i), 18);

            //valuta3D.rootNodes[6]._children[0]._children[4].position.x = 0;

            for (var j = 0; j < 5; j++) {
                addShadows(valuta[i][j]);
            }           
        }
        valuta[0][0].visibility(true);
        valuta3D.rootNodes[6].setEnabled(false);
    },
        function (evt) {
            //On progress function
            var percentage = (evt.loaded * 100 / evt.total).toFixed();
            console.log("Loading, please wait..." + percentage + "%");
            $(".progress-bar").css("width", percentage + "%");
            $("#loadingLabel").text(percentage + "%");
            if (percentage >= 100) {
                setTimeout(function () {
                    $(".progress")[0].remove();
                    $("#loadingLabel").remove();
                }, 1000);
            }
            else {
                dlCount = evt.loaded / (1024 * 1024);
            }


        }, function (error) {
        });

    //Env texture
    //var hdrTexture = new BABYLON.CubeTexture.CreateFromPrefilteredData("assets/environment/cathedral" + "EnvHDR.dds", scene);
    //hdrTexture.gammaSpace = true;
    HDRhelper = scene.createDefaultEnvironment({
        cameraExposure: 1,
        cameraContrast: 1,
        createSkybox: false,
        //skyboxTexture: "assets/environment/studio" + "EnvHDR.dds",
        skyboxSize: 300,
        groundSize: 700,
        groundColor: new BABYLON.Color3(1, 1, 1),
        groundOpacity: 0.25,
        environmentTexture: "assets/environment/studio" + "EnvHDR.dds"
    });
    spotLight.excludedMeshes.push(HDRhelper.ground);
    HDRhelper.ground.receiveShadows = true;
    scene.environmentIntensity = 0.25;

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

//Add shadows to the mesh
function addShadows(meshNode) {
    meshNode.model3D._children.map(function (mesh) {
        shadowGenerator.addShadowCaster(mesh._children[0]);
        groundShadowGenerator.addShadowCaster(mesh._children[0]);
        mesh._children[0].receiveShadows = true;
    });
}




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

//init
//optionsCreation("0,1");

/*
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
*/


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


