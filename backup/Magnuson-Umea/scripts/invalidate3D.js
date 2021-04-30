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
                //Typical exceptions
                if (typical == "typical6" || typical == "typical17") dis[0] = 0;
            }            
            valutaUnit.setPosition("x", 0);
            valutaUnit.setPosition("z", 0);
        });
        var lastDisplacement = 0;
        if (nGroup > 0) {
            lastDisplacement = dis[0] + dis[dis.length - 1];
            for (var i = 1; i < (dis.length - 1); i++) {                
                lastDisplacement += dis[i] * 2;
            }
            valutaGroup.map(function (valutaUnit, nUnit) {
                valutaUnit.move("X", lastDisplacement);
            });

        }
        totalWidth = dis.reduce((a, b) => a + b);
        totalWidth = totalWidth - dis[0];
        if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
            scene.activeCamera.target.x = -9;
            scene.activeCamera.target.z = 9;
        }
        else {
            scene.activeCamera.target.x = totalWidth;
            scene.activeCamera.target.z = 0;
        }        
        valutaGroup.map(function (valutaUnit) {
            //has an active label or signage?
            valutaUnit.model3D._children.map(function (layer) {
                layer._children.map(function (child) {
                    if (child.id.includes("Signage") && child.isVisible) {
                        if (valutaUnit.code == "VA1809L-JR" || valutaUnit.code == "VA1809L") {                            
                            if (eulerRotation == 0) {
                                valutaUnit.changeGeometry("Signage1", true);
                                valutaUnit.changeGeometry("Signage2", false);
                                valutaUnit.changeGeometry("Signage3", false);
                                valutaUnit.changeGeometry("Signage4", false);
                                if (nGroup == 0) {
                                    if (typical == "typical6" || typical == "typical17") {                                        
                                        valutaUnit.changeGeometry("Signage1", false);
                                        valutaUnit.changeGeometry("Signage4", true);
                                    }
                                }
                                if (nGroup == 3) {
                                    if (typical == "typical16") {                                        
                                        valutaUnit.changeGeometry("Signage1", false);
                                        valutaUnit.changeGeometry("Signage3", true);
                                    }
                                }
                            }
                            if (eulerRotation == -90) {
                                valutaUnit.changeGeometry("Signage1", false);
                                valutaUnit.changeGeometry("Signage2", false);
                                valutaUnit.changeGeometry("Signage3", true);
                                valutaUnit.changeGeometry("Signage4", false);
                                if (nGroup == 0) {
                                    if (typical == "typical6" || typical == "typical17") {
                                        valutaUnit.changeGeometry("Signage3", false);
                                        valutaUnit.changeGeometry("Signage1", true);
                                    }
                                }
                                if (nGroup == 3) {
                                    if (typical == "typical16") {
                                        valutaUnit.changeGeometry("Signage3", false);
                                        valutaUnit.changeGeometry("Signage2", true);
                                    }
                                }
                            }
                            if (eulerRotation == 90) {
                                valutaUnit.changeGeometry("Signage1", false);
                                valutaUnit.changeGeometry("Signage2", false);
                                valutaUnit.changeGeometry("Signage3", false);
                                valutaUnit.changeGeometry("Signage4", true);
                                if (nGroup == 0) {
                                    if (typical == "typical6" || typical == "typical17") {
                                        valutaUnit.changeGeometry("Signage4", false);
                                        valutaUnit.changeGeometry("Signage2", true);
                                    }
                                }
                                if (nGroup == 3) {
                                    if (typical == "typical16") {
                                        valutaUnit.changeGeometry("Signage4", false);
                                        valutaUnit.changeGeometry("Signage1", true);
                                    }
                                }
                            }
                            if (Math.abs(eulerRotation) == 180) {
                                valutaUnit.changeGeometry("Signage1", false);
                                valutaUnit.changeGeometry("Signage2", true);
                                valutaUnit.changeGeometry("Signage3", false);
                                valutaUnit.changeGeometry("Signage4", false);
                                if (nGroup == 0) {
                                    if (typical == "typical6" || typical == "typical17") {
                                        valutaUnit.changeGeometry("Signage2", false);
                                        valutaUnit.changeGeometry("Signage3", true);
                                    }
                                }
                                if (nGroup == 3) {
                                    if (typical == "typical16") {
                                        valutaUnit.changeGeometry("Signage2", false);
                                        valutaUnit.changeGeometry("Signage4", true);
                                    }
                                }
                            }
                        }
                        if (valutaUnit.code == "VA1814L" || valutaUnit.code == "VA1818L") {
                            if (eulerRotation == 0) {
                                valutaUnit.changeGeometry("Signage1", true);
                                valutaUnit.changeGeometry("Signage2", false);
                                valutaUnit.changeGeometry("Signage3", false);
                                valutaUnit.changeGeometry("Signage4", false);
                                if (nGroup == 0) {
                                    if (typical == "typical6" || typical == "typical17") {                                        
                                        valutaUnit.changeGeometry("Signage1", false);
                                        valutaUnit.changeGeometry("Signage2", true);
                                    }
                                }
                                if (nGroup == 3) {
                                    if (typical == "typical16") {
                                        valutaUnit.changeGeometry("Signage1", false);
                                        valutaUnit.changeGeometry("Signage4", true);
                                    }
                                }
                            }
                            if (eulerRotation == -90) {
                                valutaUnit.changeGeometry("Signage1", false);
                                valutaUnit.changeGeometry("Signage2", false);
                                valutaUnit.changeGeometry("Signage3", false);
                                valutaUnit.changeGeometry("Signage4", true);
                                if (nGroup == 0) {
                                    if (typical == "typical6" || typical == "typical17") {
                                        valutaUnit.changeGeometry("Signage4", false);
                                        valutaUnit.changeGeometry("Signage1", true);
                                    }
                                }
                                if (nGroup == 3) {
                                    if (typical == "typical16") {
                                        valutaUnit.changeGeometry("Signage4", false);
                                        valutaUnit.changeGeometry("Signage3", true);
                                    }
                                }
                            }
                            if (eulerRotation == 90) {
                                valutaUnit.changeGeometry("Signage1", false);
                                valutaUnit.changeGeometry("Signage2", true);
                                valutaUnit.changeGeometry("Signage3", false);
                                valutaUnit.changeGeometry("Signage4", false);
                                if (nGroup == 0) {
                                    if (typical == "typical6" || typical == "typical17") {
                                        valutaUnit.changeGeometry("Signage2", false);
                                        valutaUnit.changeGeometry("Signage3", true);
                                    }
                                }
                                if (nGroup == 3) {
                                    if (typical == "typical16") {
                                        valutaUnit.changeGeometry("Signage2", false);
                                        valutaUnit.changeGeometry("Signage1", true);
                                    }
                                }
                            }
                            if (Math.abs(eulerRotation) == 180) {
                                valutaUnit.changeGeometry("Signage1", false);
                                valutaUnit.changeGeometry("Signage2", false);
                                valutaUnit.changeGeometry("Signage3", true);
                                valutaUnit.changeGeometry("Signage4", false);
                                if (nGroup == 0) {
                                    if (typical == "typical6" || typical == "typical17") {
                                        valutaUnit.changeGeometry("Signage3", false);
                                        valutaUnit.changeGeometry("Signage4", true);
                                    }
                                }
                                if (nGroup == 3) {
                                    if (typical == "typical16") {
                                        valutaUnit.changeGeometry("Signage3", false);
                                        valutaUnit.changeGeometry("Signage2", true);
                                    }
                                }
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
                                if (nGroup == 0) {
                                    if (typical == "typical6" || typical == "typical17") {    
                                        valutaUnit.setPosition("z", 18);
                                        valutaUnit.setPosition("x", -4.5);
                                        valutaUnit.changeGeometry("Label3", false);
                                        valutaUnit.changeGeometry("Label4", true);
                                    }
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("x", -4.5);
                                        valutaUnit.changeGeometry("Label3", false);
                                        valutaUnit.changeGeometry("Label1", true);
                                        valutaUnit.changeGeometry("Label2", true);
                                    }
                                }
                                if (nGroup == 1) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("x", -13.5);
                                        valutaUnit.changeGeometry("Label3", false);
                                        valutaUnit.changeGeometry("Label1", true);
                                        valutaUnit.changeGeometry("Label4", true);
                                    }
                                }
                                if (nGroup == 2) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("z", 18.4);
                                        valutaUnit.setPosition("x", -4.5);                                        
                                        valutaUnit.changeGeometry("Label2", true);
                                    }
                                }
                                if (nGroup == 3) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("z", 18.4);
                                        valutaUnit.setPosition("x", -13.5);
                                        valutaUnit.changeGeometry("Label4", true);
                                    }
                                    if (typical == "typical16") {
                                        valutaUnit.setPosition("z", 17.9);
                                        valutaUnit.setPosition("x", lastDisplacement + 8.95);
                                        valutaUnit.changeGeometry("Label3", false);
                                        valutaUnit.changeGeometry("Label2", true);
                                    }
                                }
                            }
                            if (eulerRotation == -90) {
                                valutaUnit.changeGeometry("Label1", false);
                                valutaUnit.changeGeometry("Label2", true);
                                valutaUnit.changeGeometry("Label3", false);
                                valutaUnit.changeGeometry("Label4", false);
                                valutaUnit.setPosition("z", -4.5);
                                if (nGroup == 0) {
                                    if (typical == "typical6" || typical == "typical17") {
                                        valutaUnit.setPosition("z", 13.4);
                                        valutaUnit.setPosition("x", -9);
                                        valutaUnit.changeGeometry("Label2", false);
                                        valutaUnit.changeGeometry("Label3", true);
                                    }
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("z", 4.8);
                                        valutaUnit.changeGeometry("Label2", false);
                                        valutaUnit.changeGeometry("Label1", true);
                                        valutaUnit.changeGeometry("Label4", true);
                                    }
                                }
                                if (nGroup == 1) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("z", 4.8);
                                        valutaUnit.setPosition("x", -18);
                                        valutaUnit.changeGeometry("Label2", false);
                                        valutaUnit.changeGeometry("Label3", true);
                                        valutaUnit.changeGeometry("Label4", true);
                                    }
                                }
                                if (nGroup == 2) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("z", 13.85);
                                        valutaUnit.setPosition("x", 0);
                                        valutaUnit.changeGeometry("Label1", true);
                                    }
                                }
                                if (nGroup == 3) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("z", 13.85);
                                        valutaUnit.setPosition("x", -18);
                                        valutaUnit.changeGeometry("Label3", true);
                                    }
                                    if (typical == "typical16") {
                                        valutaUnit.setPosition("z", 13.4);
                                        valutaUnit.setPosition("x", lastDisplacement + 17.95);
                                        valutaUnit.changeGeometry("Label2", false);
                                        valutaUnit.changeGeometry("Label1", true);
                                    }
                                }
                                
                            }
                            if (eulerRotation == 90) {
                                valutaUnit.changeGeometry("Label1", false);
                                valutaUnit.changeGeometry("Label2", false);
                                valutaUnit.changeGeometry("Label3", false);
                                valutaUnit.changeGeometry("Label4", true);                                
                                valutaUnit.setPosition("z", -4.5);
                                if (nGroup == 0) {
                                    if (typical == "typical6" || typical == "typical17") {
                                        valutaUnit.setPosition("z", 13.4);
                                        valutaUnit.setPosition("x", -9);
                                        valutaUnit.changeGeometry("Label4", false);
                                        valutaUnit.changeGeometry("Label1", true);
                                    }
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("z", 4.8);
                                        valutaUnit.changeGeometry("Label4", false);
                                        valutaUnit.changeGeometry("Label2", true);
                                        valutaUnit.changeGeometry("Label3", true);
                                    }
                                }
                                if (nGroup == 1) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("z", 4.8);
                                        valutaUnit.setPosition("x", -18);
                                        valutaUnit.changeGeometry("Label4", false);
                                        valutaUnit.changeGeometry("Label1", true);
                                        valutaUnit.changeGeometry("Label2", true);
                                    }
                                }
                                if (nGroup == 2) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("z", 13.85);
                                        valutaUnit.setPosition("x", 0);
                                        valutaUnit.changeGeometry("Label3", true);
                                    }
                                }
                                if (nGroup == 3) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("z", 13.85);
                                        valutaUnit.setPosition("x", -18);
                                        valutaUnit.changeGeometry("Label1", true);
                                    }
                                    if (typical == "typical16") {
                                        valutaUnit.setPosition("z", 13.4);
                                        valutaUnit.setPosition("x", lastDisplacement + 17.95);
                                        valutaUnit.changeGeometry("Label4", false);
                                        valutaUnit.changeGeometry("Label3", true);
                                    }
                                }
                            }
                            if (Math.abs(eulerRotation) == 180) {
                                valutaUnit.changeGeometry("Label1", true);
                                valutaUnit.changeGeometry("Label2", false);
                                valutaUnit.changeGeometry("Label3", false);
                                valutaUnit.changeGeometry("Label4", false);  
                                if (nGroup == 0) {
                                    if (typical == "typical6" || typical == "typical17") {   
                                        valutaUnit.setPosition("z", 18);
                                        valutaUnit.setPosition("x", -4.5);
                                        valutaUnit.changeGeometry("Label1", false);
                                        valutaUnit.changeGeometry("Label2", true);
                                    }
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("x", -4.5);
                                        valutaUnit.changeGeometry("Label1", false);
                                        valutaUnit.changeGeometry("Label3", true);
                                        valutaUnit.changeGeometry("Label4", true);
                                    }
                                }
                                if (nGroup == 1) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("x", -13.5);
                                        valutaUnit.changeGeometry("Label1", false);
                                        valutaUnit.changeGeometry("Label2", true);
                                        valutaUnit.changeGeometry("Label3", true);
                                    }
                                }
                                if (nGroup == 2) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("z", 18.4);
                                        valutaUnit.setPosition("x", -4.5);                                        
                                        valutaUnit.changeGeometry("Label4", true);
                                    }
                                }
                                if (nGroup == 3) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("z", 18.4);
                                        valutaUnit.setPosition("x", -13.5);
                                        valutaUnit.changeGeometry("Label2", true);
                                    }
                                    if (typical == "typical16") {
                                        valutaUnit.setPosition("z", 17.9);
                                        valutaUnit.setPosition("x", lastDisplacement + 8.95);
                                        valutaUnit.changeGeometry("Label1", false);
                                        valutaUnit.changeGeometry("Label4", true);
                                    }
                                }
                            }
                        }
                        if (valutaUnit.code == "VA1814L") {
                            if (eulerRotation == 0) {
                                valutaUnit.changeGeometry("Label1", false);
                                valutaUnit.changeGeometry("Label2", false);
                                valutaUnit.changeGeometry("Label3", true);
                                valutaUnit.changeGeometry("Label4", false);                              
                               
                                if (nGroup == 0) {
                                    if (typical == "typical6" || typical == "typical17") {
                                        valutaUnit.setPosition("x", -6.8);
                                        valutaUnit.setPosition("z", 17.7);
                                        valutaUnit.changeGeometry("Label3", false);
                                        valutaUnit.changeGeometry("Label4", true);
                                    }
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("x", -2.2);
                                        valutaUnit.setPosition("z", 0.6);
                                        valutaUnit.changeGeometry("Label3", false);
                                        valutaUnit.changeGeometry("Label1", true);
                                        valutaUnit.changeGeometry("Label2", true);
                                    }
                                }
                                if (nGroup == 1) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("x", -15.85);
                                        valutaUnit.setPosition("z", 0.6);
                                        valutaUnit.changeGeometry("Label3", false);
                                        valutaUnit.changeGeometry("Label1", true);
                                        valutaUnit.changeGeometry("Label4", true);
                                    }
                                }
                                if (nGroup == 2) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("z", 18.2);
                                        valutaUnit.setPosition("x", -2.2);
                                        valutaUnit.changeGeometry("Label2", true);
                                    }
                                }
                                if (nGroup == 3) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("z", 18.2);
                                        valutaUnit.setPosition("x", -15.85);
                                        valutaUnit.changeGeometry("Label4", true);
                                    }

                                    if (typical == "typical16") {
                                        valutaUnit.setPosition("z", 17.8);
                                        valutaUnit.setPosition("x", lastDisplacement + 13.6);
                                        valutaUnit.changeGeometry("Label3", false);
                                        valutaUnit.changeGeometry("Label4", true);
                                    }
                                }
                            }
                            if (eulerRotation == -90) {
                                valutaUnit.changeGeometry("Label1", false);
                                valutaUnit.changeGeometry("Label2", true);
                                valutaUnit.changeGeometry("Label3", false);
                                valutaUnit.changeGeometry("Label4", false);
                                valutaUnit.setPosition("z", -2.150);
                                if (nGroup == 0) {
                                    if (typical == "typical6" || typical == "typical17") {
                                        valutaUnit.setPosition("x", -8.75);
                                        valutaUnit.setPosition("z", 15.8);
                                        valutaUnit.changeGeometry("Label2", false);
                                        valutaUnit.changeGeometry("Label3", true);
                                    }
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("x", -0.2);
                                        valutaUnit.setPosition("z", 2.5);
                                        valutaUnit.changeGeometry("Label2", false);
                                        valutaUnit.changeGeometry("Label1", true);
                                        valutaUnit.changeGeometry("Label4", true);
                                    }
                                }
                                if (nGroup == 1) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("x", -17.8);
                                        valutaUnit.setPosition("z", 2.5);
                                        valutaUnit.changeGeometry("Label2", false);
                                        valutaUnit.changeGeometry("Label3", true);
                                        valutaUnit.changeGeometry("Label4", true);
                                    }
                                }
                                if (nGroup == 2) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("z", 16.2);
                                        valutaUnit.setPosition("x", -0.2);
                                        valutaUnit.changeGeometry("Label1", true);
                                    }
                                }
                                if (nGroup == 3) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("z", 16.2);
                                        valutaUnit.setPosition("x", -17.8);
                                        valutaUnit.changeGeometry("Label3", true);
                                    }
                                    if (typical == "typical16") {
                                        valutaUnit.setPosition("z", 15.7);
                                        valutaUnit.setPosition("x", lastDisplacement + 17.6);
                                        valutaUnit.changeGeometry("Label2", false);
                                        valutaUnit.changeGeometry("Label1", true);
                                    }
                                }
                            }
                            if (eulerRotation == 90) {
                                valutaUnit.changeGeometry("Label1", false);
                                valutaUnit.changeGeometry("Label2", false);
                                valutaUnit.changeGeometry("Label3", false);
                                valutaUnit.changeGeometry("Label4", true);
                                valutaUnit.setPosition("z", -2.150);
                                if (nGroup == 0) {
                                    if (typical == "typical6" || typical == "typical17") {
                                        valutaUnit.setPosition("x", -8.75);
                                        valutaUnit.setPosition("z", 15.8);
                                        valutaUnit.changeGeometry("Label4", false);
                                        valutaUnit.changeGeometry("Label1", true);
                                    }
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("x", -0.2);
                                        valutaUnit.setPosition("z", 2.5);
                                        valutaUnit.changeGeometry("Label4", false);
                                        valutaUnit.changeGeometry("Label3", true);
                                        valutaUnit.changeGeometry("Label2", true);
                                    }
                                }
                                if (nGroup == 1) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("x", -17.8);
                                        valutaUnit.setPosition("z", 2.5);
                                        valutaUnit.changeGeometry("Label4", false);
                                        valutaUnit.changeGeometry("Label2", true);
                                        valutaUnit.changeGeometry("Label1", true);
                                    }
                                }
                                if (nGroup == 2) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("z", 16.2);
                                        valutaUnit.setPosition("x", -0.2);
                                        valutaUnit.changeGeometry("Label3", true);
                                    }
                                }
                                if (nGroup == 3) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("z", 16.2);
                                        valutaUnit.setPosition("x", -17.8);
                                        valutaUnit.changeGeometry("Label1", true);
                                    }
                                    if (typical == "typical16") {
                                        valutaUnit.setPosition("z", 15.7);
                                        valutaUnit.setPosition("x", lastDisplacement + 17.6);
                                        valutaUnit.changeGeometry("Label4", false);
                                        valutaUnit.changeGeometry("Label3", true);
                                    }
                                }
                            }
                            if (Math.abs(eulerRotation) == 180) {
                                valutaUnit.changeGeometry("Label1", true);
                                valutaUnit.changeGeometry("Label2", false);
                                valutaUnit.changeGeometry("Label3", false);
                                valutaUnit.changeGeometry("Label4", false);
                                if (nGroup == 0) {
                                    if (typical == "typical6" || typical == "typical17") {
                                        valutaUnit.setPosition("x", -6.8);
                                        valutaUnit.setPosition("z", 17.7);
                                        valutaUnit.changeGeometry("Label1", false);
                                        valutaUnit.changeGeometry("Label2", true);
                                    }
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("x", -2.2);
                                        valutaUnit.setPosition("z", 0.6);
                                        valutaUnit.changeGeometry("Label1", false);
                                        valutaUnit.changeGeometry("Label3", true);
                                        valutaUnit.changeGeometry("Label4", true);
                                    }
                                }
                                if (nGroup == 1) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("x", -15.85);
                                        valutaUnit.setPosition("z", 0.6);
                                        valutaUnit.changeGeometry("Label1", false);
                                        valutaUnit.changeGeometry("Label2", true);
                                        valutaUnit.changeGeometry("Label3", true);
                                    }
                                }
                                if (nGroup == 2) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("z", 18.2);
                                        valutaUnit.setPosition("x", -2.2);
                                        valutaUnit.changeGeometry("Label4", true);
                                    }
                                }
                                if (nGroup == 3) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("z", 18.2);
                                        valutaUnit.setPosition("x", -15.85);
                                        valutaUnit.changeGeometry("Label2", true);
                                    }
                                    if (typical == "typical16") {
                                        valutaUnit.setPosition("z", 17.8);
                                        valutaUnit.setPosition("x", lastDisplacement + 13.6);
                                        valutaUnit.changeGeometry("Label1", false);
                                        valutaUnit.changeGeometry("Label4", true);
                                    }
                                }
                            }
                        }
                        if (valutaUnit.code == "VA1818L") {
                            if (eulerRotation == 0) {
                                valutaUnit.changeGeometry("Label1", false);
                                valutaUnit.changeGeometry("Label2", false);
                                valutaUnit.changeGeometry("Label3", true);
                                valutaUnit.changeGeometry("Label4", false);
                                if (nGroup == 0) {
                                    if (typical == "typical6" || typical == "typical17") {
                                        valutaUnit.setPosition("x", -8.9);
                                        valutaUnit.setPosition("z", 17.9);
                                        valutaUnit.changeGeometry("Label3", false);
                                        valutaUnit.changeGeometry("Label4", true);
                                    }
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("x", 0);
                                        valutaUnit.setPosition("z", 0.45);
                                        valutaUnit.changeGeometry("Label3", false);
                                        valutaUnit.changeGeometry("Label1", true);
                                        valutaUnit.changeGeometry("Label2", true);
                                    }
                                }
                                if (nGroup == 1) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("x", -18);
                                        valutaUnit.setPosition("z", 0.45);
                                        valutaUnit.changeGeometry("Label3", false);
                                        valutaUnit.changeGeometry("Label1", true);
                                        valutaUnit.changeGeometry("Label4", true);
                                    }
                                }
                                if (nGroup == 2) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("z", 18.4);
                                        valutaUnit.setPosition("x", 0);
                                        valutaUnit.changeGeometry("Label2", true);
                                    }
                                }
                                if (nGroup == 3) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("z", 18.4);
                                        valutaUnit.setPosition("x", -18);
                                        valutaUnit.changeGeometry("Label4", true);
                                    }
                                    if (typical == "typical16") {
                                        valutaUnit.setPosition("z", 17.9);
                                        valutaUnit.setPosition("x", lastDisplacement + 17.9);
                                        valutaUnit.changeGeometry("Label3", false);
                                        valutaUnit.changeGeometry("Label2", true);
                                    }
                                }
                            }
                            if (eulerRotation == -90) {
                                valutaUnit.changeGeometry("Label1", false);
                                valutaUnit.changeGeometry("Label2", true);
                                valutaUnit.changeGeometry("Label3", false);
                                valutaUnit.changeGeometry("Label4", false);
                                if (nGroup == 0) {
                                    if (typical == "typical6" || typical == "typical17") {
                                        valutaUnit.setPosition("x", -8.9);
                                        valutaUnit.setPosition("z", 17.9);
                                        valutaUnit.changeGeometry("Label2", false);
                                        valutaUnit.changeGeometry("Label3", true);
                                    }

                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("x", 0);
                                        valutaUnit.setPosition("z", 0.45);
                                        valutaUnit.changeGeometry("Label2", false);
                                        valutaUnit.changeGeometry("Label1", true);
                                        valutaUnit.changeGeometry("Label4", true);
                                    }
                                }
                                if (nGroup == 1) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("x", -18);
                                        valutaUnit.setPosition("z", 0.45);
                                        valutaUnit.changeGeometry("Label2", false);
                                        valutaUnit.changeGeometry("Label3", true);
                                        valutaUnit.changeGeometry("Label4", true);
                                    }
                                }
                                if (nGroup == 2) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("z", 18.4);
                                        valutaUnit.setPosition("x", 0);
                                        valutaUnit.changeGeometry("Label1", true);
                                    }
                                }
                                if (nGroup == 3) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("z", 18.4);
                                        valutaUnit.setPosition("x", -18);
                                        valutaUnit.changeGeometry("Label3", true);
                                    }
                                    if (typical == "typical16") {
                                        valutaUnit.setPosition("z", 17.9);
                                        valutaUnit.setPosition("x", lastDisplacement + 17.9);
                                        valutaUnit.changeGeometry("Label2", false);
                                        valutaUnit.changeGeometry("Label1", true);
                                    }
                                }
                            }
                            if (eulerRotation == 90) {
                                valutaUnit.changeGeometry("Label1", false);
                                valutaUnit.changeGeometry("Label2", false);
                                valutaUnit.changeGeometry("Label3", false);
                                valutaUnit.changeGeometry("Label4", true);
                                if (nGroup == 0) {
                                    if (typical == "typical6" || typical == "typical17") {
                                        valutaUnit.setPosition("x", -8.9);
                                        valutaUnit.setPosition("z", 17.9);
                                        valutaUnit.changeGeometry("Label4", false);
                                        valutaUnit.changeGeometry("Label1", true);
                                    }

                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("x", 0);
                                        valutaUnit.setPosition("z", 0.45);
                                        valutaUnit.changeGeometry("Label4", false);
                                        valutaUnit.changeGeometry("Label3", true);
                                        valutaUnit.changeGeometry("Label2", true);
                                    }
                                }
                                if (nGroup == 1) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("x", -18);
                                        valutaUnit.setPosition("z", 0.45);
                                        valutaUnit.changeGeometry("Label4", false);
                                        valutaUnit.changeGeometry("Label1", true);
                                        valutaUnit.changeGeometry("Label2", true);
                                    }
                                }
                                if (nGroup == 2) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("z", 18.4);
                                        valutaUnit.setPosition("x", 0);
                                        valutaUnit.changeGeometry("Label3", true);
                                    }
                                }
                                if (nGroup == 3) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("z", 18.4);
                                        valutaUnit.setPosition("x", -18);
                                        valutaUnit.changeGeometry("Label1", true);
                                    }
                                    if (typical == "typical16") {
                                        valutaUnit.setPosition("z", 17.9);
                                        valutaUnit.setPosition("x", lastDisplacement + 17.9);
                                        valutaUnit.changeGeometry("Label4", false);
                                        valutaUnit.changeGeometry("Label3", true);
                                    }
                                }
                            }
                            if (Math.abs(eulerRotation) == 180) {
                                valutaUnit.changeGeometry("Label1", true);
                                valutaUnit.changeGeometry("Label2", false);
                                valutaUnit.changeGeometry("Label3", false);
                                valutaUnit.changeGeometry("Label4", false);
                                if (nGroup == 0) {
                                    if (typical == "typical6" || typical == "typical17") {
                                        valutaUnit.setPosition("x", -8.9);
                                        valutaUnit.setPosition("z", 17.9);
                                        valutaUnit.changeGeometry("Label1", false);
                                        valutaUnit.changeGeometry("Label2", true);
                                    }

                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("x", 0);
                                        valutaUnit.setPosition("z", 0.45);
                                        valutaUnit.changeGeometry("Label1", false);
                                        valutaUnit.changeGeometry("Label3", true);
                                        valutaUnit.changeGeometry("Label4", true);
                                    }
                                }
                                if (nGroup == 1) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("x", -18);
                                        valutaUnit.setPosition("z", 0.45);
                                        valutaUnit.changeGeometry("Label1", false);
                                        valutaUnit.changeGeometry("Label2", true);
                                        valutaUnit.changeGeometry("Label3", true);
                                    }
                                }
                                if (nGroup == 2) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("z", 18.4);
                                        valutaUnit.setPosition("x", 0);
                                        valutaUnit.changeGeometry("Label4", true);
                                    }
                                }
                                if (nGroup == 3) {
                                    if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                        valutaUnit.setPosition("z", 18.4);
                                        valutaUnit.setPosition("x", -18);
                                        valutaUnit.changeGeometry("Label2", true);
                                    }
                                    if (typical == "typical16") {
                                        valutaUnit.setPosition("z", 17.9);
                                        valutaUnit.setPosition("x", lastDisplacement + 17.9);
                                        valutaUnit.changeGeometry("Label1", false);
                                        valutaUnit.changeGeometry("Label4", true);
                                    }
                                }
                            }
                        }
                        if (valutaUnit.code == "VA18SCL") {
                            valutaUnit.changeGeometry("Label1", true);                            
                            if (nGroup == 0) {
                                if (typical == "typical6" || typical == "typical17") {
                                    valutaUnit.setPosition("x", -8.9);
                                    valutaUnit.setPosition("z", 17.9);
                                }

                                if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                    valutaUnit.setPosition("x", 0);
                                    valutaUnit.setPosition("z", 0.45);
                                   
                                }
                            }
                            if (nGroup == 1) {
                                if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                    valutaUnit.setPosition("x", -18);
                                    valutaUnit.setPosition("z", 0.45);
                                    
                                }
                            }
                            if (nGroup == 2) {
                                if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                    valutaUnit.setPosition("z", 18.4);
                                    valutaUnit.setPosition("x", 0);
                                }
                            }
                            if (nGroup == 3) {
                                if (typical == "typical13" || typical == "typical14" || typical == "typical15") {
                                    valutaUnit.setPosition("z", 18.4);
                                    valutaUnit.setPosition("x", -18);
                                    valutaUnit.changeGeometry("Label4", true);
                                }
                                if (typical == "typical16") {
                                    valutaUnit.setPosition("z", 17.9);
                                    valutaUnit.setPosition("x", lastDisplacement + 17.9);                                   
                                }
                            }
                        }
                    }
                });
            });
        });
    });
}  