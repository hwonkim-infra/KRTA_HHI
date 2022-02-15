const mongoose = require("mongoose");

const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
    res.render("admin/edit-product", {
        pageTitle: "Add Product",
        path: "/admin/add-product",
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
        shoe_width: req.body.shoe_width,
        tumbler_distance: req.body.tumbler_distance,
        track_length: req.body.track_length,
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
        swing_pump_flow: req.body.swing_pump_flow,
        motor_displacement_swing: req.body.motor_displacement_swing,
        swing_motor_eff: req.body.swing_motor_eff,
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
        // 주행성능 관련
        pump_displacement_travel: req.body.pump_displacement_travel,
        motor_displacement_travel: req.body.motor_displacement_travel,
        travel_pump_pressure: req.body.travel_pump_pressure,
        TM_flow_1: req.body.TM_flow_1,
        TM_flow_2: req.body.TM_flow_2,
        TM_mv: req.body.TM_mv,
        TM_mt: req.body.TM_mt,
        TM_r: req.body.TM_r,
        surface_drag: req.body.surface_drag,
        sprocket_radius: req.body.sprocket_radius,
        travel_drag: req.body.travel_drag,
        travel_sun_gear_S1: req.body.travel_sun_gear_S1,
        travel_ring_gear_R1: req.body.travel_ring_gear_R1,
        travel_sun_gear_S2: req.body.travel_sun_gear_S2,
        travel_ring_gear_R2: req.body.travel_ring_gear_R2,
        greadability_ref: req.body.greadability_ref,

    });
    product
        .save()
        .then((result) => {
            console.log(result);
            console.log("Created Product");
            res.redirect("/");
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
    const prodId = req.params.productId;
    Product.findById(prodId)
        .then((product) => {
            if (!product) {
                return res.redirect("/");
            }
            res.render("admin/edit-product", {
                pageTitle: "Edit Product",
                path: "/admin/edit-product",
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
            product.shoe_width = req.body.shoe_width;
            product.tumbler_distance = req.body.tumbler_distance;
            product.track_length = req.body.track_length;

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

            product.swing_pump_flow = req.body.swing_pump_flow;
            product.motor_displacement_swing = req.body.motor_displacement_swing;

            product.swing_motor_eff = req.body.swing_motor_eff;
            product.swing_pinion = req.body.swing_pinion;
            product.swing_bearing = req.body.swing_bearing;

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
            product.travel_pump_pressure = req.body.travel_pump_pressure;
            product.TM_flow_1 = req.body.TM_flow_1;
            product.TM_flow_2 = req.body.TM_flow_2;
            product.TM_mv = req.body.TM_mv;
            product.TM_mt = req.body.TM_mt;
            product.TM_r = req.body.TM_r;
            product.surface_drag = req.body.surface_drag;
            product.sprocket_radius = req.body.sprocket_radius;
            product.travel_drag = req.body.travel_drag;

            product.travel_sun_gear_S1 = req.body.travel_sun_gear_S1;
            product.travel_ring_gear_R1 = req.body.travel_ring_gear_R1;
            product.travel_sun_gear_S2 = req.body.travel_sun_gear_S2;
            product.travel_ring_gear_R2 = req.body.travel_ring_gear_R2;
            product.greadability_ref = req.body.greadability_ref;

            return product.save();
        })
        .then((result) => {
            console.log("UPDATED PRODUCT!");
            res.redirect("/");
        })
        .catch((err) => console.log(err));
};

exports.getProducts = (req, res, next) => {
    Product.find()
        .then((products) => {
            res.render("admin/products", {
                prods: products,
                pageTitle: "Admin Products",
                path: "/admin/products",
            });
        })
        .catch((err) => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findByIdAndRemove(prodId)
        .then(() => {
            console.log("DESTROYED PRODUCT");
            res.redirect("/admin/products");
        })
        .catch((err) => console.log(err));
};