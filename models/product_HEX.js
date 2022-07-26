const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const HEXSchema = new Schema({
    _id: { type: String },
    ChangeModel: { type: Boolean },
    origin: { type: String },

    // 제원 사양
    model_name: { type: String },
    serial_no: { type: Number },
    regist_no: { type: Number },
    machine_grade: { type: String },
    operating_weight: { type: Number },
    gearbox: { type: String },
    overall_length: { type: Number },
    overall_width: { type: Number },
    overall_height: { type: Number },
    rear_swing_radius: { type: Number },
    ETC: { type: String },
    ECN: { type: String },

    // 하부체와 트랙
    undercarriage: {
        ground_clearance: { type: Number },
        shoe_width: { type: Number },
        tumbler_distance: { type: Number },
        track_length: { type: Number },
        track_height: { type: Number },
        track_gap: { type: Number },
        dozer_size: { type: String },
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

    //전도안정성
    stability: {
        bucket_COS: { type: Number },
        COG_COS: { type: Number },
        tipping_line: { type: Number },
    },

    // 선회성능 관련
    swivel: {
        pump_flow: { type: Number },
        motor_displacement: { type: Number },
        reduction: { type: Number },
        motor_eff: { type: Number },
        
    },

    // 주행성능 관련
    travel: {
        pump_displacement: { type: Number },
        motor_displacement: { type: Number },
        pump_pressure: { type: Number },
        TM_flow_1: { type: Number },
        TM_flow_2: { type: Number },
        TM_mv: { type: Number },
        TM_mt: { type: Number },
        TM_r: { type: Number },
        surface_drag: { type: Number },
        sprocket_radius: { type: Number },
        drag: { type: Number },
        reduc: { type: Number },
        greadability_ref: { type: Number },
        brake_torque: { type: Number },

        travel_gears: {
            travel_sun_gear_S1: { type: Number },
            travel_ring_gear_R1: { type: Number },
            travel_sun_gear_S2: { type: Number },
            travel_ring_gear_R2: { type: Number },
        },
    },

    // 외관도 및 도면 관련
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
        EngineCurve: { type: String },
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

module.exports = mongoose.model("HEX", HEXSchema); // An instance of a model is called a document. Models are responsible for creating and reading documents from the underlying MongoDB database.