const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WEXSchema = new Schema({
    // 제원 사양
    model_name: { type: String, },
    machine_grade: { type: String, },
    operating_weight: { type: Number, },
    gearbox: { type: String, },
    overall_length: { type: Number, },
    overall_width: { type: Number, },
    overall_height: { type: Number, },
    ground_clearance: { type: Number, },
    tire_firstAxle: { type: String, },
    tire_secondAxle: { type: String, },

    // 엔진 관련
    engine_name: { type: String, },
    engine_power: { type: Number, },
    engine_torque: { type: Number, },
    engine_cylinder: { type: String, },
    engine_supplier: { type: String, },
    displacement: { type: Number, },
    engine_type: { type: String, },
    cylinder_arrange: { type: String, },
    bore_stroke: { type: String, },
    cooling: { type: String, },
    compression_ratio: { type: String, },
    high_idle: { type: Number, },
    low_idle: { type: Number, },

    // 작업장치 관련
    bucket_struck: { type: Number, },
    bucket_heap: { type: Number, },
    arm_length: { type: Number, },
    boom_length: { type: Number, },
    dozer_size: { type: String, },
    ETC: { type: String, },
    digging_reach: { type: Number, },
    digging_reach_woqc: { type: Number, },
    digging_height: { type: Number, },
    digging_height_woqc: { type: Number, },
    digging_depth: { type: Number, },
    digging_depth_woqc: { type: Number, },
    loading_height: { type: Number, },
    loading_height_woqc: { type: Number, },
    quick_coupler: { type: String, },
    quick_coupler_weight: { type: Number, },

    // 축중 / 액슬 관련
    COG_center_unload: { type: Number, },
    COG_center_load: { type: Number, },
    firstAxle_center: { type: Number, },

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
    pump_displacement_travel: { type: Number, },
    motor_displacement_travel: { type: Number, },
    motor_eff_travel: { type: Number, },
    TM_reduction: { type: Number, },
    axle_reduction: { type: Number, },
    tire_rolling_radius: { type: Number, },
    // 등판능력
    traction_force: { type: Number, },
    friction_surface: { type: Number, },
    roadload: { type: Number, },

    // 외관도 및 도면 관련

    drawing_exterior: { type: String, },
    drawing_boom: { type: String, },
    drawing_arm: { type: String, },
    drawing_bucket: { type: String, },
    drawing_bucket_capa: { type: String, },
    drawing_Qcouplr: { type: String, },
    drawing_Emission_Certi: { type: String, },
    drawing_Emission_Certi2: { type: String, },
});

module.exports = mongoose.model('WEX', WEXSchema); // An instance of a model is called a document. Models are responsible for creating and reading documents from the underlying MongoDB database.