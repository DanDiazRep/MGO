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
var nReceptacles = 1;
var initialXValues = [];
var typical = "";
var isTypical = false;
var valuta = [];
var isSignage = false;
var totalWidth = -4.5;
 
var sModel = function (code, model3D, width, depth,isVisible = false) {
    this.code = code;
    this.model3D = model3D;
    this.width = width;
    this.depth = depth;
    this.model3D.setEnabled(isVisible);
}

//Prototypes
sModel.prototype.visibility = function (visibility) {
    this.model3D.setEnabled(visibility);
}

sModel.prototype.changeColor = function (selectedLayers, colorCode) {    
    this.model3D._children.map(function (layer) {
        layer._children.map(function (child) {
            selectedLayers.map(function (selectedLayer) {       
                if (child.id.includes(selectedLayer) && !(child.id.includes("Signage") && child.id.includes("Label"))) {
                    child._material._albedoColor = new BABYLON.Color3.FromHexString(colorCode);
                }
            }); 
        });        
    });
}

sModel.prototype.changeMaterial = function (materialChannel, selectedLayers, Url) {
    this.model3D._children.map(function (layer) {
        selectedLayers.map(function (selectedLayer) {
            layer._children.map(function (child) {
                if (child.id.includes(selectedLayer)) {
                    if (materialChannel == "emissiveColor") {
                        child._material[materialChannel] = new BABYLON.Color3.FromHexString("#FFFFFF");
                    } 
                    else if (child._material[materialChannel]) {
                        child._material[materialChannel].updateURL(Url);
                    }
                    else {
                        child._material[materialChannel] = new BABYLON.Texture(Url, scene);
                        child._material[materialChannel].vScale = -1;
                    }
                                       
                }
            });
        });
        layer._children[0]._material.transparencyMode = 2;
        layer._children[0]._material.backFaceCulling = false;
    });    
}

sModel.prototype.changeGeometry = function (selectedLayer, visibility) {
    this.model3D._children.map(function (layer) {
        layer._children.map(function (child) {
            if (child.id.includes(selectedLayer)) {
                child.isVisible = visibility;                
            }            
        });
    });
}

sModel.prototype.move = function (direction, distance) {
    this.model3D.parent.translate(BABYLON.Axis[direction], distance, BABYLON.Space.WORLD);
}

sModel.prototype.rotate = function (angle) {
    this.model3D.parent.rotate(new BABYLON.Vector3(0, 1, 0), angle, BABYLON.Space.LOCAL);    
}
sModel.prototype.setRotation = function (x, y, z, w) {
    this.model3D.parent._rotationQuaternion = new BABYLON.Quaternion.RotationAxis(new BABYLON.Vector3(x, y, z),w);
}

sModel.prototype.setPosition = function (direction, distance) {
    this.model3D.parent._position[direction] = distance;    
}



BABYLON.ArcRotateCamera.prototype.spinTo = function (whichprop, targetval, speed) {
    var ease = new BABYLON.CubicEase();
    ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
    BABYLON.Animation.CreateAndStartAnimation('at4', this, whichprop, speed, 120, this[whichprop], targetval, 0, ease);
}
engine.loadingUIBackgroundColor = "white";
//Scene creation
var createScene = function () {
    
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.ArcRotateCamera("Camera", (0.4 * Math.PI), (6 * Math.PI / 16), 60, new BABYLON.Vector3(0, 20, 0), scene);
    var lightH = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 1, 0.2), scene);
    lightH.intensity = 2;
    //lightH.diffuse = BABYLON.Color3.FromHexString("#C9C9C9");
    //lightH.groundColor = BABYLON.Color3.FromHexString("#4A4A4A");
    spotLight = new BABYLON.DirectionalLight("light1", new BABYLON.Vector3(-0.43, -0.85, -0.3), scene);
    spotLight.intensity = 1;
    spotLight.position.y = 10;

    spotLight2 = new BABYLON.DirectionalLight("light2", new BABYLON.Vector3(-0.43, -0.85, -0.3), scene);
    spotLight2.intensity = 0;
    spotLight2.position.y = 10;

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
    camera.lowerRadiusLimit = 25;
    camera.upperRadiusLimit = 120;
    camera.panningSensibility = 200;

    pdfCamera = camera.clone();
    pdfCamera.alpha = Math.PI / 2;
    pdfCamera.radius = 180;
    pdfCamera.beta = (7 * Math.PI / 16);

    scene.clearColor = new BABYLON.Color3(1, 1, 1); //Background color

    /*************
    **  Models
    **************/
    BABYLON.SceneLoader.Append(data.Path, "valuta.glb", scene, function (valuta3D) {

        //Hardcoded Offsets
        valuta3D.rootNodes[6]._children[0]._children[4].position.x = 0;
        valuta3D.rootNodes[6]._children[0]._children[4].position.y = 19;
        valuta3D.rootNodes[6]._children[0]._children[3].position.x = 0;
        valuta3D.rootNodes[6]._children[0]._children[3].position.y = 1.2;
        for (var layer = 0; layer < 7; layer+=2) {
            valuta3D.rootNodes[6]._children[0]._children[1]._children[layer].position.x = -104.77;
            valuta3D.rootNodes[6]._children[0]._children[1]._children[layer].position.y = 179.6;
        }


        valuta3D.rootNodes[6]._children[0]._children.map(function (receptacles, nReceptacles) {
            receptacles._children.map(function (mesh, nMesh) {
                if (nMesh > 0) {
                    mesh._children[0].actionManager = new BABYLON.ActionManager(scene); // Pointer behavior on model hover     
                    mesh._children[0].actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function (env) {
                    }, false));
                    //Show me the default
                    mesh._children.map(function (child) { 
                        child.isVisible = data.DefaultLayers.includes(child._material.id);
                        if (child._material.id.includes("Label1") || child._material.id.includes("Label2") || child._material.id.includes("Label3") || child._material.id.includes("Label4") || child._material.id.includes("Back")) {                            
                            child._material.albedoColor = new BABYLON.Color3.FromHexString("#000000");
                        }
                    });
                    
                }
            }); 
        });

        for (var i = 0; i < 4; i++) { //4 different positions
            valuta[i] = new Array();
            var valutaNames = [{ "Name": "VA1809L-JR", "Ref": 4, "Width": 8.9, "Depth": 17.8 }, { "Name": "VA1809L", "Ref": 2, "Width": 8.9, "Depth": 17.8 }, { "Name": "VA1814L", "Ref": 3, "Width": 13.6, "Depth": 17.7 }, { "Name": "VA18SCL", "Ref": 1, "Width": 17.9, "Depth": 17.9 }, { "Name": "VA1818L", "Ref": 0, "Width": 17.9, "Depth": 17.9 }];
            valutaNames.map(function (receptacle, nName) {
                var pivot = new BABYLON.TransformNode("Root" + i);
                receptacle[nName] = valuta3D.rootNodes[6]._children[0]._children[receptacle.Ref].clone(receptacle.Name + i);
                receptacle[nName].parent = pivot;
                receptacle[nName]._children.map(function (nodes) {
                    if (nodes.name.includes("Label") || nodes.name.includes("Signage"))
                        nodes._scaling.x *= -1;
                });
                valuta[i][nName] = new sModel(receptacle.Name, receptacle[nName], receptacle.Width, receptacle.Depth);
            });

            for (var j = 0; j < 5; j++) { //5 different receptacles
                addShadows(valuta[i][j]);
                valuta[i][j].model3D._children.map(function (mesh, nMesh) {
                    mesh._children.map(function (child) {                        
                        child._material = child._material.clone(child._material.id + "_pos" + i + "_rec" + j);
                    });
                });
            }           
        }

        for (var i = 0; i < 5; i++) {
            initialXValues[i] = valuta[0][i].model3D._position.x;
        }
        

        //Initial unit
        valuta[0][0].visibility(true);
        //Core model is disabled
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


//Default setup
optionsCreation("0", "1");




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
            kendo.drawing.pdf.saveAs(group, "VALUTA Spec Sheet.pdf")
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
                    link.download = "VALUTA.png";
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
                    link.download = "VALUTA.png";
                    link.href = img.src;
                    link.click();
                });
        });
    }

    engine.setSize(vPortWidth, vPortHeight);

}

//SLIDER AND BACKGROUND STUFF
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


