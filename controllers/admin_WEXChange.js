const mongoose = require("mongoose");

const Product = require("../models/product_WEX");

exports.getAddChangeModel = (req, res, next) => {
    const originProdId = req.params.originId;
    console.log("🚀 ~ file: admin_WEXChange.js ~ line 7 ~ originProdId", req.params)
        // console.log(product.id)

    const prodId = req.params.Id;

    Product.findById(originProdId)
        .then((product) => {
            if (!product) {
                return res.redirect('/');
            }
            res.render("admin/edit-WEXChange", {
                pageTitle: "Add ChangeModel",
                path: "/admin/add-WEXChange",
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
        _id: req.body.model_name + '_' + Date.now(),
        machine_grade: req.body.machine_grade,
        operating_weight: req.body.operating_weight,
        gearbox: req.body.gearbox,
        overall_length: req.body.overall_length,
        overall_width: req.body.overall_width,
        overall_height: req.body.overall_height,
        ground_clearance: req.body.ground_clearance,
        tire_frontAxle: req.body.tire_frontAxle,
        tire_rearAxle: req.body.tire_rearAxle,

        // 엔진 관련
        engine_name: req.body.engine_name,
        engine_power: req.body.engine_power,
        nominal_rev: req.body.nominal_rev,
        engine_torque: req.body.engine_torque,
        torque_rev: req.body.torque_rev,
        engine_cylinder: req.body.engine_cylinder,
        engine_supplier: req.body.engine_supplier,
        displacement: req.body.displacement,
        engine_type: req.body.engine_type,
        cylinder_arrange: req.body.cylinder_arrange,
        bore_stroke: req.body.bore_stroke,
        cooling: req.body.cooling,
        compression_ratio: req.body.compression_ratio,
        high_idle: req.body.high_idle,
        low_idle: req.body.low_idle,


        // 하부체와 축중 관련
        wheel_base: req.body.wheel_base, // 축거와 윤거
        axle_track_front: req.body.axle_track_front,
        axle_track_rear: req.body.axle_track_rear,
        no_tires: req.body.no_tires,

        tire_load_limit: req.body.tire_load_limit, // 타이어 허용하중
        tire_load_limit_running: req.body.tire_load_limit_running,

        COG_center_unload: req.body.COG_center_unload, // 무게중심과 선회중심
        COG_center_load: req.body.COG_center_load,
        frontAxle_center: req.body.frontAxle_center,

        axle_weight_front_limit: req.body.axle_weight_front_limit, // 허용하중
        axle_weight_rear_limit: req.body.axle_weight_rear_limit,

        // 작업장치 관련
        bucket_struck: req.body.bucket_struck,
        bucket_heap: req.body.bucket_heap,
        arm_length: req.body.arm_length,
        boom_length: req.body.boom_length,
        dozer_size: req.body.dozer_size,
        ETC: req.body.ETC,
        digging_reach: req.body.digging_reach,
        digging_reach_woqc: req.body.digging_reach_woqc,
        digging_height: req.body.digging_height,
        digging_height_woqc: req.body.digging_height_woqc,
        digging_depth: req.body.digging_depth,
        digging_depth_woqc: req.body.digging_depth_woqc,
        loading_height: req.body.loading_height,
        loading_height_woqc: req.body.loading_height_woqc,
        quick_coupler_1: req.body.quick_coupler_1,
        quick_coupler_weight_1: req.body.quick_coupler_weight_1,
        quick_coupler_2: req.body.quick_coupler_2,
        quick_coupler_weight_2: req.body.quick_coupler_weight_2,

        // 선회성능 관련
        pump_displacement_swing: req.body.pump_displacement_swing,
        motor_displacement_swing: req.body.motor_displacement_swing,
        motor_eff_swing: req.body.motor_eff_swing,
        swing_reduction: req.body.swing_reduction,
        gear_pinion: req.body.gear_pinion,
        gear_swing_bearing: req.body.gear_swing_bearing,


        // 주행성능 관련
        pump_displacement_travel: req.body.pump_displacement_travel,
        motor_displacement_travel: req.body.motor_displacement_travel,
        motor_eff_travel: req.body.motor_eff_travel,
        TM_reduction: req.body.TM_reduction,
        axle_reduction: req.body.axle_reduction,
        tire_rolling_radius: req.body.tire_rolling_radius,

        // 등판능력
        traction_force: req.body.traction_force,
        friction_surface: req.body.friction_surface,
        running_resist: req.body.running_resist,
        engine_slope: req.body.engine_slope,


        // 외관도 관련
        drawing_exterior: req.body.drawing_exterior,
        drawing_boom: req.body.drawing_boom,
        drawing_arm: req.body.drawing_arm,
        drawing_bucket: req.body.drawing_bucket,
        drawing_bucket_capa: req.body.drawing_bucket_capa,
        drawing_Qcouplr: req.body.drawing_Qcouplr,
        drawing_Emission_Certi: req.body.drawing_Emission_Certi,
        drawing_Emission_Certi2: req.body.drawing_Emission_Certi2,
        drawing_Engine_Curve: req.body.drawing_Engine_Curve,
    });
    product
        .save()
        .then((result) => {
            console.log(result);
            console.log("Created ChangeModel");
            res.redirect("/index_WEX");
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
            res.render("admin/edit-WEXChange", {
                pageTitle: "Edit ChangeModel",
                path: "/admin/edit-WEXChange",
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
            product.ground_clearance = req.body.ground_clearance;
            product.tire_firstAxle = req.body.tire_firstAxle;
            product.tire_secondAxle = req.body.tire_secondAxle;
            product.axle_weight_first_limit = req.body.axle_weight_first_limit;
            product.axle_weight_second_limit = req.body.axle_weight_second_limit;
            product.wheel_base = req.body.wheel_base;
            product.tire_frontAxle = req.body.tire_frontAxle;
            product.tire_rearAxle = req.body.tire_rearAxle;


            // 엔진 관련
            product.engine_name = req.body.engine_name;
            product.engine_power = req.body.engine_power;
            product.nominal_rev = req.body.nominal_rev;
            product.engine_torque = req.body.engine_torque;
            product.torque_rev = req.body.torque_rev;
            product.engine_cylinder = req.body.engine_cylinder;
            product.engine_supplier = req.body.engine_supplier;
            product.displacement = req.body.displacement;
            product.engine_type = req.body.engine_type;
            product.cylinder_arrange = req.body.cylinder_arrange;
            product.bore_stroke = req.body.bore_stroke;
            product.cooling = req.body.cooling;
            product.compression_ratio = req.body.compression_ratio;
            product.high_idle = req.body.high_idle;
            product.low_idle = req.body.low_idle;

            // 하부체와 축중 관련
            product.wheel_base = req.body.wheel_base;
            product.axle_track_front = req.body.axle_track_front;
            product.axle_track_rear = req.body.axle_track_rear;
            product.no_tires = req.body.no_tires;

            product.tire_load_limit = req.body.tire_load_limit;
            product.tire_load_limit_running = req.body.tire_load_limit_running;

            product.COG_center_unload = req.body.COG_center_unload;
            product.COG_center_load = req.body.COG_center_load;
            product.frontAxle_center = req.body.frontAxle_center;

            product.axle_weight_front_limit = req.body.axle_weight_front_limit;
            product.axle_weight_rear_limit = req.body.axle_weight_rear_limit;

            // 작업장치 관련

            product.bucket_struck = req.body.bucket_struck;
            product.bucket_heap = req.body.bucket_heap;
            product.arm_length = req.body.arm_length;
            product.boom_length = req.body.boom_length;
            product.dozer_size = req.body.dozer_size;
            product.ETC = req.body.ETC;
            product.digging_reach = req.body.digging_reach;
            product.digging_reach_woqc = req.body.digging_reach_woqc;
            product.digging_height = req.body.digging_height;
            product.digging_height_woqc = req.body.digging_height_woqc;
            product.digging_depth = req.body.digging_depth;
            product.digging_depth_woqc = req.body.digging_depth_woqc;
            product.loading_height = req.body.loading_height;
            product.loading_height_woqc = req.body.loading_height_woqc;
            product.quick_coupler_1 = req.body.quick_coupler_1;
            product.quick_coupler_weight_1 = req.body.quick_coupler_weight_1;
            product.quick_coupler_2 = req.body.quick_coupler_2;
            product.quick_coupler_weight_2 = req.body.quick_coupler_weight_2;

            // 선회 성능 관련

            product.pump_displacement_swing = req.body.pump_displacement_swing;
            product.motor_displacement_swing = req.body.motor_displacement_swing;
            product.motor_eff_swing = req.body.motor_eff_swing;
            product.swing_reduction = req.body.swing_reduction;
            product.gear_pinion = req.body.gear_pinion;
            product.gear_swing_bearing = req.body.gear_swing_bearing;


            // 주행 성능 관련

            product.pump_displacement_travel = req.body.pump_displacement_travel;
            product.motor_displacement_travel = req.body.motor_displacement_travel;
            product.motor_eff_travel = req.body.motor_eff_travel;
            product.TM_reduction = req.body.TM_reduction;
            product.axle_reduction = req.body.axle_reduction;
            product.tire_rolling_radius = req.body.tire_rolling_radius;
            // 등판능력
            product.traction_force = req.body.traction_force;
            product.friction_surface = req.body.friction_surface;
            product.running_resist = req.body.running_resist;
            product.engine_slope = req.body.engine_slope;
            // 최소회전반경
            product.kingpin_gap = req.body.kingpin_gap;
            product.kingpin_offset = req.body.kingpin_offset;
            product.wheel_angle = req.body.wheel_angle;
            // 브레이크 제동력
            product.brake_pressure = req.body.brake_pressure;
            product.brake_eff = req.body.brake_eff;
            product.axle_reduction = req.body.axle_reduction;
            product.brake_torque_axle = req.body.brake_torque_axle;

            // 외관도 관련
            product.drawing_exterior = req.body.drawing_exterior;
            product.drawing_boom = req.body.drawing_boom;
            product.drawing_arm = req.body.drawing_arm;
            product.drawing_bucket = req.body.drawing_bucket;
            product.drawing_bucket_capa = req.body.drawing_bucket_capa;
            product.drawing_Qcouplr = req.body.drawing_Qcouplr;
            product.drawing_Emission_Certi = req.body.drawing_Emission_Certi;
            product.drawing_Emission_Certi2 = req.body.drawing_Emission_Certi2;
            product.drawing_Engine_Curve = req.body.drawing_Engine_Curve;

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
            res.redirect("/admin/WEXs");
        })
        .catch((err) => console.log(err));
};