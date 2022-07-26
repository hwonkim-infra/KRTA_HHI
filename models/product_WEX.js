const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WEXSchema = new Schema({
    _id: { type: String },
    ChangeModel: { type: Boolean },
    origin: { type: String },

    // 제원 사양
    model_name: { type: String },
    serial_no: { type: Number },
    machine_grade: { type: String },
    operating_weight: { type: Number },
    gearbox: { type: String },

    overall_length: { type: Number },
    overall_width: { type: Number },
    overall_height: { type: Number },

    ETC: { type: String },

    // 하부체와 액슬
    undercarriage: {
        ground_clearance: { type: Number },
        wheel_base: { type: Number },
        axle_track_front: { type: Number },
        axle_track_rear: { type: Number },
        no_tires: { type: Number },
        tire_frontAxle: { type: String },
        tire_rearAxle: { type: String },
        tire_load_limit: { type: Number },
        tire_load_limit_running: { type: Number },

        COG_center_unload: { type: Number },
        COG_center_load: { type: Number },
        frontAxle_center: { type: Number },

        axle_weight_front_limit: { type: Number },
        axle_weight_rear_limit: { type: Number },
        axle_limit_description: { type: String },
    },

    // 엔진 관련
    engine: {
        engine_name: { type: String },
        supplier: { type: String },
        power: { type: Number },
        nominal_rev: { type: Number },
        torque: { type: Number },
        torque_rev: { type: Number },
        cylinder: { type: Number },
    },

    // 작업장치 관련
    attachments: {
        bucket_struck: { type: Number },
        bucket_heap: { type: Number },
        arm_length: { type: Number },
        boom_length: { type: Number },
        quick_coupler_1: { type: String },
        quick_coupler_weight_1: { type: Number },
        quick_coupler_2: { type: String },
        quick_coupler_weight_2: { type: Number },
        height_woqc: { type: Number },
        length_woqc: { type: Number },
        
        // 작업반경
        digging_reach: { type: Number },
        digging_reach_woqc: { type: Number },
        digging_depth: { type: Number },
        digging_depth_woqc: { type: Number },
        loading_height: { type: Number },
        loading_height_woqc: { type: Number },
    },

    // 주행성능 관련
    travel: {
        pump_displacement_travel: { type: Number },
        motor_displacement_travel: { type: Number },
        motor_eff_travel: { type: Number },
        TM_reduction: { type: Number },
        axle_reduction: { type: Number },
        tire_rolling_radius: { type: Number },
        // 등판능력 계산
        traction_force: { type: Number },
        friction_surface: { type: Number },
        running_resist: { type: Number },
        engine_slope: { type: Number },

        // 최소회전반경
        kingpin_gap: { type: Number },
        kingpin_offset: { type: Number },
        wheel_angle: { type: Number },

        // 서비스 브레이크 제동력
        brake_pressure: { type: Number },
        brake_eff: { type: Number },
        axle_hub_reduction: { type: Number },
        brake_torque_axle: { type: Number },
        braking_description: { type: String },
    },

    // 선회성능 관련
    swivel: {
        pump_flow: { type: Number },
        motor_displacement: { type: Number },
        reduction: { type: Number },
        motor_eff: { type: Number },
        swing_gears: {
            swing_pinion: { type: Number },
            swing_bearing: { type: Number },
            gear_pinion: { type: Number },
            gear_swing_bearing: { type: Number },
            planetary_sun_gear_A1: { type: Number },
            planetary_planet_gear_B1: { type: Number },
            planetary_ring_gear_C1: { type: Number },
            planetary_sun_gear_A2: { type: Number },
            planetary_planet_gear_B2: { type: Number },
            planetary_ring_gear_C2: { type: Number },
        },
    },

    //전도안정성
    stability: {
        COG_lateral: { type: Number },
        COG_vertical: { type: Number },
        tipping_line: { type: Number },
    },

    // 외관과 도면
    drawings: {
        exterior: { type: String },
        boom: { type: String },
        arm: { type: String },
        bucket: { type: String },
        bucket_capa: { type: String },
        Qcouplr: { type: String },
        dozer: { type: String },
        Emission_Certi: { type: String },
        Emission_Certi2: { type: String },
        Engine_Curve: { type: String },
    },

    description: {
        swing_reduction: { type: String },
        travel_reduction: { type: String },
        climb: { type: String },
        bucket_creep: { type: String },
    },


    // 무게중심 관련
    COG: {
        upperStructure: {
            longitudinal: Number,
            lateral: Number,
            vertical: Number,
        },
        counterWeight: {
            weight: Number,
            longitudinal: Number,
            lateral: Number,
            vertical: Number,
        },
        underCarriage: {
            weight: Number,
            longitudinal: Number,
            lateral: Number,
            vertical: Number,
        },
        attachments: {
            weight: Number,
            longitudinal: Number,
            lateral: Number,
            vertical: Number,
        },
        attachments_load: {
            longitudinal: Number,
            lateral: Number,
            vertical: Number,
        },
        attachments_maxReach: {
            longitudinal: Number,
            lateral: Number,
            vertical: Number,
        },
    },
});

module.exports = mongoose.model("WEX", WEXSchema); // An instance of a model is called a document. Models are responsible for creating and reading documents from the underlying MongoDB database.