const mongoose = require("mongoose");

const Product = require("../models/product_WEX");

exports.getAddProduct = (req, res, next) => {
    res.render("admin/edit-WEX", {
        pageTitle: "Add Product",
        path: "/admin/add-WEX",
        editing: false,
        ChangeModel: false,
    });
};

exports.postAddProduct = (req, res, next) => {
    console.log(req.body);
    const product = new Product({
        ChangeModel: false,

        // 제원 사양
        model_name: req.body.model_name,
        _id: req.body.model_name + "_" + Date.now(),

        serial_no: req.body.serial_no,
        machine_grade: req.body.machine_grade,
        operating_weight: req.body.operating_weight,

        gearbox: req.body.gearbox,
        overall_length: req.body.overall_length,
        overall_width: req.body.overall_width,
        overall_height: req.body.overall_height,
        ETC: req.body.ETC,


        // 하부체와 액슬
        undercarriage: {
            ground_clearance: req.body.ground_clearance,
            wheel_base: req.body.wheel_base,
            axle_track_front: req.body.axle_track_front,
            axle_track_rear: req.body.axle_track_rear,
            no_tires: req.body.no_tires,
            tire_frontAxle: req.body.tire_frontAxle,
            tire_rearAxle: req.body.tire_rearAxle,
            tire_load_limit: req.body.tire_load_limit,
            tire_load_limit_running: req.body.tire_load_limit_running,
            COG_center_unload: req.body.COG_center_unload,
            COG_center_load: req.body.COG_center_load,
            frontAxle_center: req.body.frontAxle_center,
            axle_weight_front_limit: req.body.axle_weight_front_limit,
            axle_weight_rear_limit: req.body.axle_weight_rear_limit,
            axle_limit_description: req.body.axle_limit_description,
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
            height_woqc: req.body.height_woqc,
            length_woqc: req.body.length_woqc,

            digging_reach: req.body.digging_reach,
            digging_reach_woqc: req.body.digging_reach_woqc,
            digging_depth: req.body.digging_depth,
            digging_depth_woqc: req.body.digging_depth_woqc,
            loading_height: req.body.loading_height,
            loading_height_woqc: req.body.loading_height_woqc,
        },




        // 주행성능 관련
        travel: {
            pump_displacement_travel: req.body.pump_displacement_travel,
            motor_displacement_travel: req.body.motor_displacement_travel,
            motor_eff_travel: req.body.motor_eff_travel,
            TM_reduction: req.body.TM_reduction,
            axle_reduction: req.body.axle_reduction,
            tire_rolling_radius: req.body.tire_rolling_radius,


            // 등판능력 계산
            traction_force: req.body.traction_force,
            friction_surface: req.body.friction_surface,
            running_resist: req.body.running_resist,
            engine_slope: req.body.engine_slope,

            // 최소회전반경
            kingpin_gap: req.body.kingpin_gap,
            kingpin_offset: req.body.kingpin_offset,
            wheel_angle: req.body.wheel_angle,

            // 서비스 브레이크 제동력
            brake_pressure: req.body.brake_pressure,
            brake_eff: req.body.brake_eff,
            axle_hub_reduction: req.body.axle_hub_reduction,
            brake_torque_axle: req.body.brake_torque_axle,

        },

        // 선회성능 관련
        swivel: {
            pump_flow: req.body.pump_displacement_swing,
            motor_displacement: req.body.motor_displacement_swing,
            reduction: req.body.swing_reduction,
            motor_eff: req.body.swing_motor_eff,
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

        // 외관과 도면
        drawings: {
            exterior: req.body.drawings_exterior,
            boom: req.body.drawings_boom,
            arm: req.body.drawings_arm,
            bucket: req.body.drawings_bucket,
            bucket_capa: req.body.drawings_bucket_capa,
            Qcouplr: req.body.drawings_Qcouplr,
            dozer: req.body.drawings_dozer,
            Emission_Certi: req.body.drawings_Emission_Certi,
            Emission_Certi2: req.body.drawings_Emission_Certi2,
            Engine_Curve: req.body.drawings_Engine_Curve,
        },

        description: {
            swing_reduction: req.body.swing_reduction,
            travel_reduction: req.body.travel_reduction,
            climb: req.body.climb,
            bucket_creep: req.body.bucket_creep,
        }
    });
    product
        .save()
        .then((result) => {
            console.log(result);
            console.log("Created Product");
            res.redirect("/index_WEX");
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.getEditProduct = (req, res, next) => {
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
            res.render("admin/edit-WEX", {
                pageTitle: "Edit Product",
                path: "/admin/edit-WEX",
                editing: editMode,
                product: product,
        ChangeModel: false,
            });
        })
        .catch((err) => console.log(err));
};

exports.postEditProduct = (req, res, next) => {
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
            product.ETC = req.body.ETC;

            // 하부체와 액슬
            product.undercarriage.ground_clearance = req.body.ground_clearance;
            product.undercarriage.wheel_base = req.body.wheel_base;
            product.undercarriage.axle_track_front = req.body.axle_track_front;
            product.undercarriage.axle_track_rear = req.body.axle_track_rear;
            product.undercarriage.no_tires = req.body.no_tires;

            product.undercarriage.tire_frontAxle = req.body.tire_frontAxle;
            product.undercarriage.tire_rearAxle = req.body.tire_rearAxle;
            product.undercarriage.tire_load_limit = req.body.tire_load_limit;
            product.undercarriage.tire_load_limit_running = req.body.tire_load_limit_running;

            product.undercarriage.COG_center_unload = req.body.COG_center_unload;
            product.undercarriage.COG_center_load = req.body.COG_center_load;

            product.undercarriage.frontAxle_center = req.body.frontAxle_center;
            product.undercarriage.axle_weight_front_limit = req.body.axle_weight_front_limit;
            product.undercarriage.axle_weight_rear_limit = req.body.axle_weight_rear_limit;
            product.undercarriage.axle_limit_description = req.body.axle_limit_description;

            // 작업장치 관련

            product.attachments.bucket_struck = req.body.bucket_struck;
            product.attachments.bucket_heap = req.body.bucket_heap;
            product.attachments.arm_length = req.body.arm_length;
            product.attachments.boom_length = req.body.boom_length;
            product.attachments.quick_coupler_1 = req.body.quick_coupler_1;
            product.attachments.quick_coupler_weight_1 = req.body.quick_coupler_weight_1;
            product.attachments.quick_coupler_2 = req.body.quick_coupler_2;
            product.attachments.quick_coupler_weight_2 = req.body.quick_coupler_weight_2;
            product.attachments.height_woqc= req.body.height_woqc;
            product.attachments.length_woqc= req.body.length_woqc;

            product.attachments.digging_reach = req.body.digging_reach;
            product.attachments.digging_reach_woqc = req.body.digging_reach_woqc;
            product.attachments.digging_depth = req.body.digging_depth;
            product.attachments.digging_depth_woqc = req.body.digging_depth_woqc;
            product.attachments.loading_height = req.body.loading_height;
            product.attachments.loading_height_woqc = req.body.loading_height_woqc;

            // 엔진 사양
            product.engine.engine_name = req.body.engine_name;
            product.engine.supplier = req.body.engine_supplier;
            product.engine.power = req.body.engine_power;
            product.engine.nominal_rev = req.body.nominal_rev;
            product.engine.torque = req.body.engine_torque;
            product.engine.torque_rev = req.body.torque_rev;
            product.engine.cylinder = req.body.engine_cylinder;

            // 주행 성능 관련

            product.travel.pump_displacement_travel = req.body.pump_displacement_travel;
            product.travel.motor_displacement_travel = req.body.motor_displacement_travel;
            product.travel.motor_eff_travel = req.body.motor_eff_travel;
            product.travel.TM_reduction = req.body.TM_reduction;
            product.travel.axle_reduction = req.body.axle_reduction;
            product.travel.tire_rolling_radius = req.body.tire_rolling_radius;

            // 등판능력
            product.travel.traction_force = req.body.traction_force;
            product.travel.friction_surface = req.body.friction_surface;
            product.travel.running_resist = req.body.running_resist;
            product.travel.engine_slope = req.body.engine_slope;

            // 최소회전반경
            product.travel.kingpin_gap = req.body.kingpin_gap;
            product.travel.kingpin_offset = req.body.kingpin_offset;
            product.travel.wheel_angle = req.body.wheel_angle;

            // 선회속도 계산
            product.swivel.pump_flow = req.body.pump_displacement_swing;
            product.swivel.motor_displacement = req.body.motor_displacement_swing;
            product.swivel.reduction = req.body.swing_reduction;
            product.swivel.motor_eff = req.body.swing_motor_eff;

            // 경사지 전도안정성
            product.stability.COG_lateral = req.body.COG_lateral;
            product.stability.COG_vertical = req.body.COG_vertical;
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

            // 브레이크 제동력
            product.travel.brake_pressure = req.body.brake_pressure;
            product.travel.brake_eff = req.body.brake_eff;
            product.travel.axle_hub_reduction = req.body.axle_hub_reduction;
            product.travel.brake_torque_axle = req.body.brake_torque_axle;

            // 외관도 관련

            product.drawings.exterior = req.body.drawings_exterior;
            product.drawings.boom = req.body.drawings_boom;
            product.drawings.arm = req.body.drawings_arm;
            product.drawings.bucket = req.body.drawings_bucket;
            product.drawings.bucket_capa = req.body.drawings_bucket_capa;
            product.drawings.Qcouplr = req.body.drawings_Qcouplr;
            product.drawings.dozer = req.body.drawings_Qcouplr;

            product.drawings.Emission_Certi = req.body.drawings_Emission_Certi;
            product.drawings.Emission_Certi2 = req.body.drawings_Emission_Certi2;
            product.drawings.Engine_Curve = req.body.drawings_Engine_Curve;

            // 관련 설명 자료
            product.description.swing_reduction = req.body.swing_reduction_description;
            product.description.travel_reduction = req.body.travel_reduction;
            product.description.climb = req.body.climb;
            product.description.bucket_creep = req.body.bucket_creep;

            return product.save();
        })
        .then((result) => {
            console.log(result)
            console.log("UPDATED PRODUCT!");
            res.redirect("/index_WEX");
        })
        .catch((err) => console.log(err));
};

exports.getProducts = (req, res, next) => {
    Product.find()
        .then((products) => {
            res.render("admin/WEXs", {
                prods: products,
                pageTitle: "Admin Products",
                path: "/admin/WEXs",
            });
        })
        .catch((err) => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findByIdAndRemove(prodId)
        .then(() => {
            console.log("DESTROYED PRODUCT");
            res.redirect("/index_WEX");
        })
        .catch((err) => console.log(err));
};