const mongoose = require("mongoose");

const Product = require("../models/product_HEX");

exports.getAddChangeModel = (req, res, next) => {
    const originProdId = req.params.originId;
    console.log("🚀 ~ file: admin_HEXChange.js ~ line 7 ~ originProdId", req.params)
        // console.log(product.id)

    const prodId = req.params.Id;

    Product.findById(originProdId)
        .then((product) => {
            if (!product) {
                return res.redirect('/');
            }
            res.render("admin/edit-HEXChange", {
                pageTitle: "Add ChangeModel",
                path: "/admin/add-HEXChange",
                editing: true,
                adding: true,
                product: product,
                origin: originProdId,
                ChangeModel: true,
            });

        }).catch((err) => console.log(err));

};

exports.postAddChangeModel = (req, res, next) => {
    console.log('params: ', req);
    const product = new Product({
        ChangeModel: true,
        origin: req.body.productId,

        // 제원 관련
        model_name: req.body.model_name,
        _id: req.body.model_name + "_" + Date.now(),
        serial_no: req.body.serial_no,
        regist_no: req.body.regist_no,
        machine_grade: req.body.machine_grade,
        operating_weight: req.body.operating_weight,
        gearbox: req.body.gearbox,
        overall_length: req.body.overall_length,
        overall_width: req.body.overall_width,
        overall_height: req.body.overall_height,
        rear_swing_radius: req.body.rear_swing_radius,
        ETC: req.body.ETC,
        ECN: req.body.ECN,

        // 하부체와 트랙
        undercarriage: {
            ground_clearance: req.body.ground_clearance,
            shoe_width: req.body.shoe_width,
            tumbler_distance: req.body.tumbler_distance,
            track_length: req.body.track_length,
            track_height: req.body.track_height,
            track_gap: req.body.track_gap,
            dozer_size: req.body.dozer_size,
        },

        // 엔진 관련
        engine: {
            engine_name: req.body.engine_name,
            supplier: req.body.engine_supplier,
            power: req.body.engine_power,
            nominal_rev: req.body.nominal_rev,
            torque: req.body.engine_torque,
            torque_rev: req.body.torque_rev,
            cylinder: req.body.engine_cylinder,
        },

        // 작업장치 관련
        attachments: {
            bucket_struck: req.body.bucket_struck,
            bucket_heap: req.body.bucket_heap,
            arm_length: req.body.arm_length,
            boom_length: req.body.boom_length,
            quick_coupler_1: req.body.quick_coupler_1,
            quick_coupler_weight_1: req.body.quick_coupler_weight_1,
            quick_coupler_2: req.body.quick_coupler_2,
            quick_coupler_weight_2: req.body.quick_coupler_weight_2,

            digging_reach: req.body.digging_reach,
            digging_reach_woqc: req.body.digging_reach_woqc,
            digging_depth: req.body.digging_depth,
            digging_depth_woqc: req.body.digging_depth_woqc,
            loading_height: req.body.loading_height,
            loading_height_woqc: req.body.loading_height_woqc,
        },


        // 무게중심
        COG: {
            upperStructure: {
                longitudinal: req.body.COG_upperStructure_longitudinal,
                lateral: req.body.COG_upperStructure_lateral,
                vertical: req.body.COG_upperStructure_vertical,
            },
            counterWeight: {
                weight: req.body.COG_counterWeight_weight,
                longitudinal: req.body.COG_counterWeight_longitudinal,
                lateral: req.body.COG_counterWeight_lateral,
                vertical: req.body.COG_counterWeight_vertical,
            },
            underCarriage: {
                weight: req.body.COG_underCarriage_weight,
                longitudinal: req.body.COG_underCarriage_longitudinal,
                lateral: req.body.COG_underCarriage_lateral,
                vertical: req.body.COG_underCarriage_vertical,
            },
            attachments: {
                weight: req.body.COG_attachments_weight,
                longitudinal: req.body.COG_attachments_longitudinal,
                lateral: req.body.COG_attachments_lateral,
                vertical: req.body.COG_attachments_vertical,
            },
            attachments_load: {
                longitudinal: req.body.COG_attachments_load_longitudinal,
                lateral: req.body.COG_attachments_load_lateral,
                vertical: req.body.COG_attachments_load_vertical,
            },
            attachments_maxReach: {
                longitudinal: req.body.COG_attachments_maxReach_longitudinal,
                lateral: req.body.COG_attachments_maxReach_lateral,
                vertical: req.body.COG_attachments_maxReach_vertical,
            },
        },

        // 전도안정성
        stability: {
            bucket_COS: req.body.bucket_COS,
            COG_COS: req.body.COG_COS,
            tipping_line: req.body.tipping_line,
        },


        // 선회성능 관련
        swivel: {
            pump_flow: req.body.pump_displacement_swing,
            motor_displacement: req.body.motor_displacement_swing,
            reduction: req.body.swing_reduction,
            motor_eff: req.body.swing_motor_eff,
            swing_gears: {
                swing_pinion: req.body.swing_pinion,
                swing_bearing: req.body.swing_bearing,
                gear_pinion: req.body.gear_pinion,
                gear_swing_bearing: req.body.gear_swing_bearing,
                planetary_sun_gear_A1: req.body.planetary_sun_gear_A1,
                planetary_planet_gear_B1: req.body.planetary_planet_gear_B1,
                planetary_ring_gear_C1: req.body.planetary_ring_gear_C1,
                planetary_sun_gear_A2: req.body.planetary_sun_gear_A2,
                planetary_planet_gear_B2: req.body.planetary_planet_gear_B2,
                planetary_ring_gear_C2: req.body.planetary_ring_gear_C2,
            },
        },

        // 주행성능 관련
        travel: {
            pump_displacement: req.body.pump_displacement_travel,
            motor_displacement: req.body.motor_displacement_travel,
            pump_pressure: req.body.travel_pump_pressure,
            TM_flow_1: req.body.TM_flow_1,
            TM_flow_2: req.body.TM_flow_2,
            TM_mv: req.body.TM_mv,
            TM_mt: req.body.TM_mt,
            TM_r: req.body.TM_r,
            surface_drag: req.body.surface_drag,
            sprocket_radius: req.body.sprocket_radius,
            drag: req.body.travel_drag,
            reduc: req.body.travel_reduc,
            greadability_ref: req.body.greadability_ref,
            brake_torque: req.body.brake_torque,
            travel_gears: {
                travel_sun_gear_S1: req.body.travel_sun_gear_S1,
                travel_ring_gear_R1: req.body.travel_ring_gear_R1,
                travel_sun_gear_S2: req.body.travel_sun_gear_S2,
                travel_ring_gear_R2: req.body.travel_ring_gear_R2,
            },
        },

        // 외관도 관련
        drawings: {
            exterior: req.body.drawing_exterior,
            boom: req.body.drawing_boom,
            arm: req.body.drawing_arm,
            bucket: req.body.drawing_bucket,
            bucket_capa: req.body.drawing_bucket_capa,
            Qcouplr: req.body.drawing_Qcouplr,
            Emission_Certi: req.body.drawing_Emission_Certi,
            Emission_Certi2: req.body.drawing_Emission_Certi2,
            EngineCurve: req.body.drawing_EngineCurve,
        },

        // 계산 설명 자료 관련
        description: {
            swing_reduction: req.body.swing_reduction_description,
            travel_reduction: req.body.travel_reduction_description,
            climb: req.body.climb,
            bucket_creep: req.body.bucket_creep,
        },
    });
    product
        .save()
        .then((result) => {
            console.log(result);
            console.log("Created ChangeModel");
            res.redirect("/");
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.getEditChangeModel = (req, res, next) => {
    const editMode = req.query.edit;


    if (!editMode) {
        return res.redirect("/");
    }
    const prodId = req.params.Id;
    Product.findById(prodId)
        .then((product) => {
            if (!product) {
                return res.redirect("/");
            }
            res.render("admin/edit-HEXChange", {
                pageTitle: "Edit ChangeModel",
                path: "/admin/edit-HEXChange",
                editing: editMode,
                product: product,
                ChangeModel: true,
            });
        })
        .catch((err) => console.log(err));
};

exports.postEditChangeModel = (req, res, next) => {
    const prodId = req.body.productId;

    Product.findById(prodId)
        .then((product) => {
            // 제원 관련
            product.model_name = req.body.model_name;
            product.serial_no = req.body.serial_no;
            product.machine_grade = req.body.machine_grade;
            product.operating_weight = req.body.operating_weight;
            product.gearbox = req.body.gearbox;
            product.overall_length = req.body.overall_length;
            product.overall_width = req.body.overall_width;
            product.overall_height = req.body.overall_height;
            product.rear_swing_radius = req.body.rear_swing_radius;

            product.ETC = req.body.ETC;
            product.ECN= req.body.ECN;

            // 하부체와 트랙
            product.undercarriage.ground_clearance = req.body.ground_clearance;
            product.undercarriage.shoe_width = req.body.shoe_width;
            product.undercarriage.tumbler_distance = req.body.tumbler_distance;
            product.undercarriage.track_length = req.body.track_length;
            product.undercarriage.track_height = req.body.track_height;
            product.undercarriage.track_gap = req.body.track_gap;
            product.undercarriage.dozer_size = req.body.dozer_size;

            // 엔진 관련
            product.engine.engine_name = req.body.engine_name;
            product.engine.supplier = req.body.engine_supplier;
            product.engine.power = req.body.engine_power;
            product.engine.nominal_rev = req.body.nominal_rev;
            product.engine.torque = req.body.engine_torque;
            product.engine.torque_rev = req.body.torque_rev;
            product.engine.cylinder = req.body.engine_cylinder;

            // 작업장치 관련
            product.attachments.bucket_struck = req.body.bucket_struck;
            product.attachments.bucket_heap = req.body.bucket_heap;
            product.attachments.arm_length = req.body.arm_length;
            product.attachments.boom_length = req.body.boom_length;
            product.attachments.quick_coupler_1 = req.body.quick_coupler_1;
            product.attachments.quick_coupler_weight_1 =
                req.body.quick_coupler_weight_1;
            product.attachments.quick_coupler_2 = req.body.quick_coupler_2;
            product.attachments.quick_coupler_weight_2 =
                req.body.quick_coupler_weight_2;

            product.attachments.digging_reach = req.body.digging_reach;
            product.attachments.digging_reach_woqc = req.body.digging_reach_woqc;
            product.attachments.digging_depth = req.body.digging_depth;
            product.attachments.digging_depth_woqc = req.body.digging_depth_woqc;
            product.attachments.loading_height = req.body.loading_height;
            product.attachments.loading_height_woqc = req.body.loading_height_woqc;

            // 전도안정성
            product.stability.bucket_COS = req.body.bucket_COS;
            product.stability.COG_COS = req.body.COG_COS;
            product.stability.tipping_line = req.body.tipping_line;

            // 무게중심 관련
            product.COG.upperStructure.longitudinal = req.body.COG_upperStructure_longitudinal;
            product.COG.upperStructure.lateral = req.body.COG_upperStructure_lateral;
            product.COG.upperStructure.vertical = req.body.COG_upperStructure_vertical;
            product.COG.counterWeight.weight = req.body.COG_counterWeight_weight;
            product.COG.counterWeight.longitudinal = req.body.COG_counterWeight_longitudinal;
            product.COG.counterWeight.lateral = req.body.COG_counterWeight_lateral;
            product.COG.counterWeight.vertical = req.body.COG_counterWeight_vertical;
            product.COG.underCarriage.weight = req.body.COG_underCarriage_weight;
            product.COG.underCarriage.longitudinal = req.body.COG_underCarriage_longitudinal;
            product.COG.underCarriage.lateral = req.body.COG_underCarriage_lateral;
            product.COG.underCarriage.vertical = req.body.COG_underCarriage_vertical;
            product.COG.attachments.weight = req.body.COG_attachments_weight;
            product.COG.attachments.longitudinal = req.body.COG_attachments_longitudinal;
            product.COG.attachments.lateral = req.body.COG_attachments_lateral;
            product.COG.attachments.vertical = req.body.COG_attachments_vertical;
            product.COG.attachments_load.longitudinal = req.body.COG_attachments_load_longitudinal;
            product.COG.attachments_load.lateral = req.body.COG_attachments_load_lateral;
            product.COG.attachments_load.vertical = req.body.COG_attachments_load_vertical;
            product.COG.attachments_maxReach.longitudinal = req.body.COG_attachments_maxReach_longitudinal;
            product.COG.attachments_maxReach.lateral = req.body.COG_attachments_maxReach_lateral;
            product.COG.attachments_maxReach.vertical = req.body.COG_attachments_maxReach_vertical;

            // 선회 성능 관련
            product.swivel.pump_flow = req.body.pump_displacement_swing;
            product.swivel.motor_displacement = req.body.motor_displacement_swing;
            product.swivel.reduction = req.body.swing_reduction;
            product.swivel.motor_eff = req.body.swing_motor_eff;

            product.swivel.swing_gears.swing_pinion = req.body.swing_pinion;
            product.swivel.swing_gears.swing_bearing = req.body.swing_bearing;
            product.swivel.swing_gears.gear_pinion = req.body.gear_pinion;
            product.swivel.swing_gears.gear_swing_bearing =
                req.body.gear_swing_bearing;
            product.swivel.swing_gears.planetary_sun_gear_A1 =
                req.body.planetary_sun_gear_A1;
            product.swivel.swing_gears.planetary_planet_gear_B1 =
                req.body.planetary_planet_gear_B1;
            product.swivel.swing_gears.planetary_ring_gear_C1 =
                req.body.planetary_ring_gear_C1;
            product.swivel.swing_gears.planetary_sun_gear_A2 =
                req.body.planetary_sun_gear_A2;
            product.swivel.swing_gears.planetary_planet_gear_B2 =
                req.body.planetary_planet_gear_B2;
            product.swivel.swing_gears.planetary_ring_gear_C2 =
                req.body.planetary_ring_gear_C2;

            // 주행 성능 관련
            product.travel.pump_displacement = req.body.pump_displacement_travel;
            product.travel.motor_displacement = req.body.motor_displacement_travel;
            product.travel.pump_pressure = req.body.travel_pump_pressure;
            product.travel.TM_flow_1 = req.body.TM_flow_1;
            product.travel.TM_flow_2 = req.body.TM_flow_2;
            product.travel.TM_mv = req.body.TM_mv;
            product.travel.TM_mt = req.body.TM_mt;
            product.travel.TM_r = req.body.TM_r;
            product.travel.surface_drag = req.body.surface_drag;
            product.travel.sprocket_radius = req.body.sprocket_radius;
            product.travel.drag = req.body.travel_drag;
            product.travel.reduc = req.body.travel_reduc;
            product.travel.greadability_ref = req.body.greadability_ref;
            product.travel.brake_torque = req.body.brake_torque;

            product.travel.travel_gears.travel_sun_gear_S1 =
                req.body.travel_sun_gear_S1;
            product.travel.travel_gears.travel_ring_gear_R1 =
                req.body.travel_ring_gear_R1;
            product.travel.travel_gears.travel_sun_gear_S2 =
                req.body.travel_sun_gear_S2;
            product.travel.travel_gears.travel_ring_gear_R2 =
                req.body.travel_ring_gear_R2;

            // 외관도 관련
            product.drawings.exterior = req.body.drawing_exterior;
            product.drawings.boom = req.body.drawing_boom;
            product.drawings.arm = req.body.drawing_arm;
            product.drawings.bucket = req.body.drawing_bucket;
            product.drawings.bucket_capa = req.body.drawing_bucket_capa;
            product.drawings.Qcouplr = req.body.drawing_Qcouplr;
            product.drawings.Emission_Certi = req.body.drawing_Emission_Certi;
            product.drawings.Emission_Certi2 = req.body.drawing_Emission_Certi2;
            product.drawings.EngineCurve = req.body.drawing_EngineCurve;

            return product.save();
        })
        .then((result) => {
            console.log("UPDATED PRODUCT!");
            res.redirect("/");
        })
        .catch((err) => console.log(err));
};


exports.postDeleteChangeModel = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findByIdAndRemove(prodId)
        .then(() => {
            console.log("DESTROYED PRODUCT");
            res.redirect("/admin/HEXs");
        })
        .catch((err) => console.log(err));
};