function invalidate3D() {
    var dis = [];
    valuta.map(function (valutaGroup, nGroup) {
        var eulerRotation = 0;
        valutaGroup.map(function (valutaUnit, nUnit) {
            if (valutaUnit.model3D._isEnabled) {
                if (valutaUnit.model3D.parent.rotationQuaternion)
                    eulerRotation = Math.round(valutaUnit.model3D.parent.rotationQuaternion.toEulerAngles().y * 180 / Math.PI);
                else
                    eulerRotation = 0;

                if (Math.abs(eulerRotation) == 90) {
                    dis[nGroup] = -valutaUnit.depth / 2;
                }
                else {
                    dis[nGroup] = -valutaUnit.width / 2;
                }
            }
            valutaUnit.setPosition("x", 0);
        });
        var lastDispalcement = 0;
        if (nGroup > 0) {
            lastDispalcement = dis[0] + dis[dis.length - 1];
            for (var i = 1; i < (dis.length - 1); i++) {
                lastDispalcement += dis[i] * 2;
            }
            valutaGroup.map(function (valutaUnit, nUnit) {
                valutaUnit.move("X", lastDispalcement);
            });
        }
        valutaGroup.map(function (valutaUnit) {
            //has an active label or signage?
            valutaUnit.model3D._children.map(function (layer) {
                layer._children.map(function (child) {
                    if (child.id.includes("Signage") && child.isVisible) {
                        if (valutaUnit.code == "VA1809L-JR" || valutaUnit.code == "VA1809L") {
                            if (eulerRotation == 0) {
                                valutaUnit.changeGeometry("Signage2", false);
                                valutaUnit.changeGeometry("Signage1", true);
                            }
                            if (eulerRotation == -90) {
                                valutaUnit.changeGeometry("Signage2", false);
                                valutaUnit.changeGeometry("Signage1", true);
                            }
                            if (eulerRotation == 90) {
                                valutaUnit.changeGeometry("Signage2", false);
                                valutaUnit.changeGeometry("Signage1", true);
                            }
                            if (Math.abs(eulerRotation) == 180) {
                                valutaUnit.changeGeometry("Signage1", false);
                                valutaUnit.changeGeometry("Signage2", true);
                            }
                        }
                        if (valutaUnit.code == "VA1814L" || valutaUnit.code == "VA1818L") {
                            if (eulerRotation == 0) {
                                valutaUnit.changeGeometry("Signage1", true);
                                valutaUnit.changeGeometry("Signage2", false);
                                valutaUnit.changeGeometry("Signage3", false);
                                valutaUnit.changeGeometry("Signage4", false);
                            }
                            if (eulerRotation == -90) {
                                valutaUnit.changeGeometry("Signage1", false);
                                valutaUnit.changeGeometry("Signage2", false);
                                valutaUnit.changeGeometry("Signage3", false);
                                valutaUnit.changeGeometry("Signage4", true);
                            }
                            if (eulerRotation == 90) {
                                valutaUnit.changeGeometry("Signage1", false);
                                valutaUnit.changeGeometry("Signage2", true);
                                valutaUnit.changeGeometry("Signage3", false);
                                valutaUnit.changeGeometry("Signage4", false);
                            }
                            if (Math.abs(eulerRotation) == 180) {
                                valutaUnit.changeGeometry("Signage1", false);
                                valutaUnit.changeGeometry("Signage2", false);
                                valutaUnit.changeGeometry("Signage3", true);
                                valutaUnit.changeGeometry("Signage4", false);
                            }
                        }
                        if (valutaUnit.code == "VA18SCL") {
                            if (eulerRotation == 0) {
                                valutaUnit.changeGeometry("Signage1", true);
                                valutaUnit.changeGeometry("Signage2", false);
                               
                            }
                            if (eulerRotation == -90) {
                                valutaUnit.changeGeometry("Signage1", true);
                                valutaUnit.changeGeometry("Signage2", false);
                                
                            }
                            if (eulerRotation == 90) {
                                valutaUnit.changeGeometry("Signage1", false);
                                valutaUnit.changeGeometry("Signage2", true);                                
                            }
                            if (Math.abs(eulerRotation) == 180) {
                                valutaUnit.changeGeometry("Signage1", false);
                                valutaUnit.changeGeometry("Signage2", true);                                
                            }
                        }
                    
                    }
                    if (child.id.includes("Label") && child.isVisible) {
                        if (valutaUnit.code == "VA1809L-JR" || valutaUnit.code == "VA1809L") {
                            if (eulerRotation == 0) {
                                valutaUnit.changeGeometry("Label1", false);
                                valutaUnit.changeGeometry("Label2", false);
                                valutaUnit.changeGeometry("Label3", true);
                                valutaUnit.changeGeometry("Label4", false);
                                valutaUnit.setPosition("z", 0);
                            }
                            if (eulerRotation == -90) {
                                valutaUnit.changeGeometry("Label1", false);
                                valutaUnit.changeGeometry("Label2", true);
                                valutaUnit.changeGeometry("Label3", false);
                                valutaUnit.changeGeometry("Label4", false);

                                valutaUnit.setPosition("z", -4.5);
                            }
                            if (eulerRotation == 90) {
                                valutaUnit.changeGeometry("Label1", false);
                                valutaUnit.changeGeometry("Label2", false);
                                valutaUnit.changeGeometry("Label3", false);
                                valutaUnit.changeGeometry("Label4", true);
                                valutaUnit.setPosition("z", -4.5);
                            }
                            if (Math.abs(eulerRotation) == 180) {
                                valutaUnit.changeGeometry("Label1", true);
                                valutaUnit.changeGeometry("Label2", false);
                                valutaUnit.changeGeometry("Label3", false);
                                valutaUnit.changeGeometry("Label4", false);
                                valutaUnit.setPosition("z", 0);
                            }
                        }
                        if (valutaUnit.code == "VA1814L" || valutaUnit.code == "VA1818L") {
                            if (eulerRotation == 0) {
                                valutaUnit.changeGeometry("Label1", false);
                                valutaUnit.changeGeometry("Label2", false);
                                valutaUnit.changeGeometry("Label3", true);
                                valutaUnit.changeGeometry("Label4", false);
                                valutaUnit.setPosition("z", 0);
                            }
                            if (eulerRotation == -90) {
                                valutaUnit.changeGeometry("Label1", false);
                                valutaUnit.changeGeometry("Label2", true);
                                valutaUnit.changeGeometry("Label3", false);
                                valutaUnit.changeGeometry("Label4", false);
                            }
                            if (eulerRotation == 90) {
                                valutaUnit.changeGeometry("Label1", false);
                                valutaUnit.changeGeometry("Label2", false);
                                valutaUnit.changeGeometry("Label3", false);
                                valutaUnit.changeGeometry("Label4", true);
                            }
                            if (Math.abs(eulerRotation) == 180) {
                                valutaUnit.changeGeometry("Label1", true);
                                valutaUnit.changeGeometry("Label2", false);
                                valutaUnit.changeGeometry("Label3", false);
                                valutaUnit.changeGeometry("Label4", false);
                            }
                        }
                        if (valutaUnit.code == "VA18SCL") {
                            valutaUnit.changeGeometry("Label1", true);
                        }
                    }
                });
            });
            //labelsAndSignage.forEach(function (layer) { valutaUnit.changeGeometry(layer, false)}); //Hide all signages and labels
            //console.log(eulerRotation);
            //console.log(valutaGroup, eulerRotation);
        });
    });
}  