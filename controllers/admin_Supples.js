const mongoose = require("mongoose");

const File = require("../models/supple_File");

exports.getAddFile = (req, res, next) => {
    res.render("admin/Supplements", {
        pageTitle: "기술문서 생성",
        editing: false,
    });
};

exports.postAddFile = (req, res, next) => {
    const file = new File({
        Filename: req.body.Filename,
        _id: req.body.Filename + '_' + Date.now(),
        at_12__Dipper_ETC: req.body.at_12__Dipper_ETC,
        at_12_2_Safety_Lock: req.body.at_12_2_Safety_Lock,
        at_12_3_Exca_Boom_ARM: req.body.at_12_3_Exca_Boom_ARM,
        at_12_4_Lateral_Stability: req.body.at_12_4_Lateral_Stability,
        at_12_5_Bucket_Creep: req.body.at_12_5_Bucket_Creep,
        at_12_6_Operator_Protection: req.body.at_12_6_Operator_Protection,
        at_12_7_Swing_Brake: req.body.at_12_7_Swing_Brake,
        at_12_8_Center_Joint: req.body.at_12_8_Center_Joint,
        at_12_9_Quick_Coupler: req.body.at_12_9_Quick_Coupler,
        at_127__General_Strucure: req.body.at_127__General_Strucure,
        at_128__Cooler: req.body.at_128__Cooler,
        at_129__Elec_harness: req.body.at_129__Elec_harness,
        at_129_2_Elec_Machine: req.body.at_129_2_Elec_Machine,
        at_129_3_Elec_Grounding: req.body.at_129_3_Elec_Grounding,
        at_130__Battery: req.body.at_130__Battery,
        at_131__Lubrication: req.body.at_131__Lubrication,
        at_132__Fuel_System: req.body.at_132__Fuel_System,
        at_133__Gas_Fuel_System: req.body.at_133__Gas_Fuel_System,
        at_134__Frame_Chassis: req.body.at_134__Frame_Chassis,
        at_134_2_Frame_Structure: req.body.at_134_2_Frame_Structure,
        at_137__Suspension: req.body.at_137__Suspension,
        at_138__Transmission: req.body.at_138__Transmission,
        at_139__Service_Brake: req.body.at_139__Service_Brake,
        at_140__Parking_Brake: req.body.at_140__Parking_Brake,
        at_142__Parking_Wedge: req.body.at_142__Parking_Wedge,
        at_143__Steering_Wheel: req.body.at_143__Steering_Wheel,
        at_144__Steering_Crawler: req.body.at_144__Steering_Crawler,
        at_147__Traveler_Crawler: req.body.at_147__Traveler_Crawler,
        at_148__Pressure_Equipment: req.body.at_148__Pressure_Equipment,
        at_148_2_Hydraulic_Filter: req.body.at_148_2_Hydraulic_Filter,
        at_148_3_Outligger: req.body.at_148_3_Outligger,
        at_149__Operator_Station: req.body.at_149__Operator_Station,
        at_149_2_Remote_Control: req.body.at_149_2_Remote_Control,
        at_149_3_Min_Space: req.body.at_149_3_Min_Space,
        at_149_4_HVAC: req.body.at_149_4_HVAC,
        at_149_5_ROPS_OPG: req.body.at_149_5_ROPS_OPG,
        at_149_7_Fire_Retardant: req.body.at_149_7_Fire_Retardant,
        at_149_9_Operator_Access: req.body.at_149_9_Operator_Access,
        at_149_10_Remote_Controler: req.body.at_149_10_Remote_Controler,
        at_149_11_Control_indicator: req.body.at_149_11_Control_indicator,
        at_149__: req.body.at_149__,
        at_150__Seat_belt: req.body.at_150__Seat_belt,
        at_151__Rear_mirror: req.body.at_151__Rear_mirror,
        at_151_2_Rear_Viewer: req.body.at_151_2_Rear_Viewer,
        at_152__Pedal_Lever: req.body.at_152__Pedal_Lever,
        at_153__Window: req.body.at_153__Window,
        at_154__Decals: req.body.at_154__Decals,
        at_155__Lighting: req.body.at_155__Lighting,
        at_156__Main_Beam: req.body.at_156__Main_Beam,
        at_157__Side_Lamp: req.body.at_157__Side_Lamp,
        at_158__Number_Lamp: req.body.at_158__Number_Lamp,
        at_159__Stop_Lamp: req.body.at_159__Stop_Lamp,
        at_160__Direction_indication: req.body.at_160__Direction_indication,
        at_160_2_Rear_Lap: req.body.at_160_2_Rear_Lap,
        at_160_3_Reversing_Lamp: req.body.at_160_3_Reversing_Lamp,
        at_160_4_Hazard_Warning_Lamp: req.body.at_160_4_Hazard_Warning_Lamp,
        at_160_5_Dipped_Beam: req.body.at_160_5_Dipped_Beam,
        at_160_6_Parking_Lamp: req.body.at_160_6_Parking_Lamp,
        at_160_7_Working_Lamp: req.body.at_160_7_Working_Lamp,
        at_160_8_Upper_Beam: req.body.at_160_8_Upper_Beam,
        at_161__Rear_Reflector: req.body.at_161__Rear_Reflector,
        at_162__Interlock: req.body.at_162__Interlock,
        at_165__Exhaust_Pipe: req.body.at_165__Exhaust_Pipe,
        at_166__Extinguisher: req.body.at_166__Extinguisher,
        at_167__Noise: req.body.at_167__Noise,
        at_167_2_ETC: req.body.at_167_2_ETC,
        at_168__outsized_Decal: req.body.at_168__outsized_Decal,
        at_169__Warning_Painting: req.body.at_169__Warning_Painting,
        at_170__Warning_Plate: req.body.at_170__Warning_Plate,
    });
    file
        .save()
        .then((result) => {
            console.log(result);
            console.log("Created File");
            res.redirect("/SuppleFiles");
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.getEditFile = (req, res, next) => {
    const editMode = req.query.edit;

    if (!editMode) {
        return res.redirect("/");
    }
    const prodId = req.params.Id;
    File.findById(prodId)
        .then((file) => {
            if (!file) {
                return res.redirect("/SuppleFiles");
            }
            res.render("admin/Supplements", {
                pageTitle: "Edit File",
                path: "/admin/edit-File",
                editing: editMode,
                file: file,
            });
        })
        .catch((err) => console.log(err));
};

exports.postEditFile = (req, res, next) => {
    console.log(req.body);
    const prodId = req.body.fileId;

    File.findById(prodId)
        .then((file) => {
            file.Filename = req.body.Filename;
            file.at_12__Dipper_ETC = req.body.at_12__Dipper_ETC;
            file.at_12_2_Safety_Lock = req.body.at_12_2_Safety_Lock;
            file.at_12_3_Exca_Boom_ARM = req.body.at_12_3_Exca_Boom_ARM;
            file.at_12_4_Lateral_Stability = req.body.at_12_4_Lateral_Stability;
            file.at_12_5_Bucket_Creep = req.body.at_12_5_Bucket_Creep;
            file.at_12_6_Operator_Protection = req.body.at_12_6_Operator_Protection;
            file.at_12_7_Swing_Brake = req.body.at_12_7_Swing_Brake;
            file.at_12_8_Center_Joint = req.body.at_12_8_Center_Joint;
            file.at_12_9_Quick_Coupler = req.body.at_12_9_Quick_Coupler;
            file.at_127__General_Strucure = req.body.at_127__General_Strucure;
            file.at_128__Cooler = req.body.at_128__Cooler;
            file.at_129__Elec_harness = req.body.at_129__Elec_harness;
            file.at_129_2_Elec_Machine = req.body.at_129_2_Elec_Machine;
            file.at_129_3_Elec_Grounding = req.body.at_129_3_Elec_Grounding;
            file.at_130__Battery = req.body.at_130__Battery;
            file.at_131__Lubrication = req.body.at_131__Lubrication;
            file.at_132__Fuel_System = req.body.at_132__Fuel_System;
            file.at_133__Gas_Fuel_System = req.body.at_133__Gas_Fuel_System;
            file.at_134__Frame_Chassis = req.body.at_134__Frame_Chassis;
            file.at_134_2_Frame_Structure = req.body.at_134_2_Frame_Structure;
            file.at_137__Suspension = req.body.at_137__Suspension;
            file.at_138__Transmission = req.body.at_138__Transmission;
            file.at_139__Service_Brake = req.body.at_139__Service_Brake;
            file.at_140__Parking_Brake = req.body.at_140__Parking_Brake;
            file.at_142__Parking_Wedge = req.body.at_142__Parking_Wedge;
            file.at_143__Steering_Wheel = req.body.at_143__Steering_Wheel;
            file.at_144__Steering_Crawler = req.body.at_144__Steering_Crawler;
            file.at_147__Traveler_Crawler = req.body.at_147__Traveler_Crawler;
            file.at_148__Pressure_Equipment = req.body.at_148__Pressure_Equipment;
            file.at_148_2_Hydraulic_Filter = req.body.at_148_2_Hydraulic_Filter;
            file.at_148_3_Outligger = req.body.at_148_3_Outligger;
            file.at_149__Operator_Station = req.body.at_149__Operator_Station;
            file.at_149_2_Remote_Control = req.body.at_149_2_Remote_Control;
            file.at_149_3_Min_Space = req.body.at_149_3_Min_Space;
            file.at_149_4_HVAC = req.body.at_149_4_HVAC;
            file.at_149_5_ROPS_OPG = req.body.at_149_5_ROPS_OPG;
            file.at_149_7_Fire_Retardant = req.body.at_149_7_Fire_Retardant;
            file.at_149_9_Operator_Access = req.body.at_149_9_Operator_Access;
            file.at_149_10_Remote_Controler = req.body.at_149_10_Remote_Controler;
            file.at_149_11_Control_indicator = req.body.at_149_11_Control_indicator;
            file.at_149__ = req.body.at_149__;
            file.at_150__Seat_belt = req.body.at_150__Seat_belt;
            file.at_151__Rear_mirror = req.body.at_151__Rear_mirror;
            file.at_151_2_Rear_Viewer = req.body.at_151_2_Rear_Viewer;
            file.at_152__Pedal_Lever = req.body.at_152__Pedal_Lever;
            file.at_153__Window = req.body.at_153__Window;
            file.at_154__Decals = req.body.at_154__Decals;
            file.at_155__Lighting = req.body.at_155__Lighting;
            file.at_156__Main_Beam = req.body.at_156__Main_Beam;
            file.at_157__Side_Lamp = req.body.at_157__Side_Lamp;
            file.at_158__Number_Lamp = req.body.at_158__Number_Lamp;
            file.at_159__Stop_Lamp = req.body.at_159__Stop_Lamp;
            file.at_160__Direction_indication = req.body.at_160__Direction_indication;
            file.at_160_2_Rear_Lap = req.body.at_160_2_Rear_Lap;
            file.at_160_3_Reversing_Lamp = req.body.at_160_3_Reversing_Lamp;
            file.at_160_4_Hazard_Warning_Lamp = req.body.at_160_4_Hazard_Warning_Lamp;
            file.at_160_5_Dipped_Beam = req.body.at_160_5_Dipped_Beam;
            file.at_160_6_Parking_Lamp = req.body.at_160_6_Parking_Lamp;
            file.at_160_7_Working_Lamp = req.body.at_160_7_Working_Lamp;
            file.at_160_8_Upper_Beam = req.body.at_160_8_Upper_Beam;
            file.at_161__Rear_Reflector = req.body.at_161__Rear_Reflector;
            file.at_162__Interlock = req.body.at_162__Interlock;
            file.at_165__Exhaust_Pipe = req.body.at_165__Exhaust_Pipe;
            file.at_166__Extinguisher = req.body.at_166__Extinguisher;
            file.at_167__Noise = req.body.at_167__Noise;
            file.at_167_2_ETC = req.body.at_167_2_ETC;
            file.at_168__outsized_Decal = req.body.at_168__outsized_Decal;
            file.at_169__Warning_Painting = req.body.at_169__Warning_Painting;
            file.at_170__Warning_Plate = req.body.at_170__Warning_Plate;


            return file.save();
        })
        .then((result) => {
            console.log("UPDATED FILE!");
            res.redirect("/Index_Supple");
        })
        .catch((err) => console.log(err));
};

exports.getFiles = (req, res, next) => {
    File.find()
        .then((files) => {
            res.render("admin/pages", {
                prods: files,
                pageTitle: "안전기준 기술문서",
                path: "/admin/pages",
            });
        })
        .catch((err) => console.log(err));
};

exports.postDeleteFile = (req, res, next) => {
    const prodId = req.body.fileId;
    File.findByIdAndRemove(prodId)
        .then(() => {
            console.log("DESTROYED PRODUCT");
            res.redirect("/index_File");
        })
        .catch((err) => console.log(err));
};