const mongoose = require("mongoose");

const Product = require("../models/product_WEX");

exports.getAddProduct = (req, res, next) => {
    res.render("admin/edit-WEX", {
        pageTitle: "Add Product",
        path: "/admin/add-WEX",
        editing: false,
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product({
        // 제원 관련
        model_name: req.body.model_name,
        machine_grade: req.body.machine_grade,
        operating_weight: req.body.operating_weight,
        gearbox: req.body.gearbox,
        overall_length: req.body.overall_length,
        overall_width: req.body.overall_width,
        overall_height: req.body.overall_height,
        ground_clearance: req.body.ground_clearance,
        tire_firstAxle: req.body.tire_firstAxle,
        tire_secondAxle: req.body.tire_secondAxle,


        // 엔진 관련
        engine_name: req.body.engine_name,
        engine_power: req.body.engine_power,
        engine_torque: req.body.engine_torque,
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
        quick_coupler: req.body.quick_coupler,
        quick_coupler_weight: req.body.quick_coupler_weight,


        // 선회성능 관련
        pump_displacement_swing: req.body.pump_displacement_swing,
        motor_displacement_swing: req.body.motor_displacement_swing,
        motor_eff_swing: req.body.motor_eff_swing,
        swing_reduction: req.body.swing_reduction,
        gear_pinion: req.body.gear_pinion,
        gear_swing_bearing: req.body.gear_swing_bearing,
        planetary_sun_gear_A1: req.body.planetary_sun_gear_A1,
        planetary_planet_gear_B1: req.body.planetary_planet_gear_B1,
        planetary_ring_gear_C1: req.body.planetary_ring_gear_C1,
        planetary_sun_gear_A2: req.body.planetary_sun_gear_A2,
        planetary_planet_gear_B2: req.body.planetary_planet_gear_B2,
        planetary_ring_gear_C2: req.body.planetary_ring_gear_C2,

        // 주행성능 관련
        pump_displacement_travel: req.body.pump_displacement_travel,
        motor_displacement_travel: req.body.motor_displacement_travel,
        motor_eff_travel: req.body.motor_eff_travel,
        TM_reduction: req.body.TM_reduction,
        axle_reduction: req.body.axle_reduction,
        tire_rolling_radius: req.body.tire_rolling_radius,
        traction_force: req.body.traction_force,
        friction_surface: req.body.friction_surface,
        roadload: req.body.roadload,



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
            product.axle_track_first = req.body.axle_track_first;
            product.axle_track_second = req.body.axle_track_second;


            // 엔진 관련
            product.engine_name = req.body.engine_name;
            product.engine_supplier = req.body.engine_supplier;
            product.engine_power = req.body.engine_power;
            product.nominal_rev = req.body.nominal_rev;
            product.engine_torque = req.body.engine_torque;
            product.torque_rev = req.body.torque_rev;
            product.engine_cylinder = req.body.engine_cylinder;

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
            product.quick_coupler = req.body.quick_coupler;
            product.quick_coupler_weight = req.body.quick_coupler_weight;


            // 선회 성능 관련

            product.pump_displacement_swing = req.body.pump_displacement_swing;
            product.motor_displacement_swing = req.body.motor_displacement_swing;
            product.motor_eff_swing = req.body.motor_eff_swing;
            product.swing_reduction = req.body.swing_reduction;
            product.gear_pinion = req.body.gear_pinion;
            product.gear_swing_bearing = req.body.gear_swing_bearing;
            product.planetary_sun_gear_A1 = req.body.planetary_sun_gear_A1;
            product.planetary_planet_gear_B1 = req.body.planetary_planet_gear_B1;
            product.planetary_ring_gear_C1 = req.body.planetary_ring_gear_C1;
            product.planetary_sun_gear_A2 = req.body.planetary_sun_gear_A2;
            product.planetary_planet_gear_B2 = req.body.planetary_planet_gear_B2;
            product.planetary_ring_gear_C2 = req.body.planetary_ring_gear_C2;


            // 주행 성능 관련

            product.pump_displacement_travel = req.body.pump_displacement_travel;
            product.motor_displacement_travel = req.body.motor_displacement_travel;
            product.motor_eff_travel = req.body.motor_eff_travel;
            product.TM_reduction = req.body.TM_reduction;
            product.axle_reduction = req.body.axle_reduction;
            product.tire_rolling_radius = req.body.tire_rolling_radius;
            product.traction_force = req.body.traction_force;
            product.friction_surface = req.body.friction_surface;
            product.roadload = req.body.roadload;


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
            res.redirect("/admin/WEXs");
        })
        .catch((err) => console.log(err));
};