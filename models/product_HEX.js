const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HEXSchema = new Schema({
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

    ground_clearance: { type: Number },
    shoe_width: { type: Number },
    tumbler_distance: { type: Number },
    track_length: { type: Number },
    track_height: { type: Number },
    track_gap: { type: Number },

    // 엔진 관련
    engine_name: { type: String },
    engine_supplier: { type: String },
    engine_power: { type: Number },
    nominal_rev: { type: Number },
    engine_torque: { type: Number },
    torque_rev: { type: Number },
    engine_cylinder: { type: Number },

    // 작업장치 관련
    bucket_struck: { type: Number },
    bucket_heap: { type: Number },
    arm_length: { type: Number },
    boom_length: { type: Number },
    dozer_size: { type: String },
    ETC: { type: String },

    // 작업반경
    digging_reach: { type: Number },
    digging_reach_woqc: { type: Number },
    digging_depth: { type: Number },
    digging_depth_woqc: { type: Number },
    loading_height: { type: Number },
    loading_height_woqc: { type: Number },
    quick_coupler_1: { type: String },
    quick_coupler_weight_1: { type: Number },
    quick_coupler_2: { type: String },
    quick_coupler_weight_2: { type: Number },
    //전도안정성
    bucket_COS: { type: Number },
    COG_COS: { type: Number },
    tipping_line: { type: Number },

    // 선회성능 관련
    swing_pump_flow: { type: Number },
    motor_displacement_swing: { type: Number },
    swing_reduction: { type: Number },
    swing_motor_eff: { type: Number },
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

    // 주행성능 관련
    pump_displacement_travel: { type: Number },
    motor_displacement_travel: { type: Number },
    travel_pump_pressure: { type: Number },
    TM_flow_1: { type: Number },
    TM_flow_2: { type: Number },
    TM_mv: { type: Number },
    TM_mt: { type: Number },
    TM_r: { type: Number },
    surface_drag: { type: Number },
    sprocket_radius: { type: Number },
    travel_drag: { type: Number },
    travel_reduc: { type: Number },
    travel_sun_gear_S1: { type: Number },
    travel_ring_gear_R1: { type: Number },
    travel_sun_gear_S2: { type: Number },
    travel_ring_gear_R2: { type: Number },
    greadability_ref: { type: Number },
    brake_torque: { type: Number },

    // 외관도 및 도면 관련

    drawing_exterior: { type: String },
    drawing_exterior_after: { type: String },
    drawing_boom: { type: String },
    drawing_arm: { type: String },
    drawing_bucket: { type: String },
    drawing_bucket_capa: { type: String },
    drawing_Qcouplr: { type: String },
    drawing_Emission_Certi: { type: String },
    drawing_Emission_Certi2: { type: String },
    drawing_EngineCurve: { type: String },
});

module.exports = mongoose.model("HEX", HEXSchema); // An instance of a model is called a document. Models are responsible for creating and reading documents from the underlying MongoDB database.